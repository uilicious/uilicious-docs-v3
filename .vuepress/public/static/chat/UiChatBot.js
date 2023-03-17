/**
 * UI Chat Path, JS client, for setting up chat interaction
 **/
(function() { 
	// ---
	
	// Entire UI Chat Bot is wrapped in a closure, to avoid polluting the global namespace
	//
	// And implemented purely in vanilla JS, to avoid dependencies as much as possible.
	// so that this can be easily integrated into any existing frontend projects
	// ---
	
	// ============================
	// Lets check for the required dependencies
	// ============================
	let compatibilityFailureReason = null;
	if( fetch === undefined ) {
		compatibilityFailureReason = "[UiChatBot]: fetch() is not supported by this browser";
	}
	if ( document === undefined || document.querySelector === undefined ) {
		compatibilityFailureReason = "[UiChatBot]: document.querySelector() is not supported by this browser";
	}
	
	if( compatibilityFailureReason !== null ) {
		console.error( compatibilityFailureReason );
		
		// Compatibility check failed, lets register dummy objects which will return failure
		let UiChatBot = function() {
			throw compatibilityFailureReason;
		}
		UiChatBot.isCompatibleWithBrowser = function() {
			return false;
		}
	
		// Register it accordingly
		if(window) {
			window.UiChatBot = UiChatBot;
		}
		if( (window || global) && (window || global).module ) {
			module.exports = UiChatBotModule;
		}
	
		// End script execution
		return;
	}
	
	// ============================
	// Baseline config
	// ============================
	let defaultConfig = {
		// BotName to use
		botName: "UiChatBot",
	
		// The URL route prefix to the api server
		apiRoute: "https://api-tami.uilicious-dev.com/v2/tami/chat/",
	
		// Input character limit
		inputCharLimit: 1000,
	
		// Support followup message
		supportFallbackMsg: "Please contact our support team for further assistance",
	
		// Overwriting the opening message
		openingMsg: "Hi, I'm TAMI, an AI asstant for uilicious.com\n\nFeel free to ask me anything about UI testing",
	
		// Failure message for unable to find a valid answer
		noAnswerFallbackMsg: "I'm sorry, I'm unable to find the answers for all your questions, feel free to ask our support staff instead.\n\nThe following are links to resources that maybe relevent to your question",
	
		// Enable code highlighting
		enableCodeHighlighting: true,
	
		// Enable highlight.js preloading
		highlightJsPreload: true,
		highlightJsStyle: "default",
	
		// This should be the path to the directory, containing highlight.min.js, and the various style / language files
		highlightJsUrlDirPath: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/",
	
		// On text message insertion, perform the following callback
		// to facilitate additional modification / processing
		onTextMessageInsertion: () => {},
	}
	
	// Baseline HTML template
	// ---
	
	// The HTML chat frame template to use
	let htmlTemplate = [
		// Main container frame
		`<div class="uiChatBot-frame">
			<div class="uiChatBot-container">`,
		// Chat header and subheader
		`		<div class="uiChatBot-header">
				</div>
				<div class="uiChatBot-subheader">
				</div>`,
		// The main message container
		`		<div class="uiChatBot-msg-container">`,
		// ---
		// `			<!-- Example messages -->
		// 			<div class="uiChatBot-msg">
		// 				<p class="uiChatBot-text">Hey, how are you?</p>
		// 			</div>
		// 			<div class="uiChatBot-msg uiChatBot-user">
		// 				<p class="uiChatBot-text">I'm doing well, thanks! How about you?</p>
		// 			</div>`,
		// ---
		`		</div>`,
		// Chat respond notification bar
		`		<div class="uiChatBot-footerMsg">AI Assistant is powered by UiChatBot</div>`,
		// The chat input form
		`		<form class="uiChatBot-form">
					<textarea class="uiChatBot-input" placeholder="Type your message here"></textarea>
					<button type="submit" class="uiChatBot-submit">Send</button>
				</form>`,
		// Main container frame closure
		`	</div>
		</div>`
	].map((block)=>block.trim().split("\n")).flat().map((line)=>line.trim()).join("\n");
	
	// ============================
	// The main instance constructor
	// ============================
	function UiChatBot() {
		//---------------------
		// Internal vars
		//---------------------
	
		// The config object for this instance
		let config = null;
	
		// The main chat element
		let mainChatFrame = null;
	
		// The main chat message container
		let chatMsgContainer = null;
	
		// The main chat message history
		let chatHistory = [];
	
		// The form notice bar, and button
		let chatForm = null;
		let chatFormBtn = null;
		let chatFormInput = null;
		let footerNoticeBar = null;
	
		// Is there a pending message?
		let isProcessingMsg = false;
	
		//---------------------
		// Internal functions
		//---------------------
	
		// HTML controls
		//---------------------
	
		// Setup and initialize CSS styling, and various external dependencies
		// within a "hidden" preload div element (1px, 1px, bottom left corner)
		function htmlSetup() {
			// Prepare the main frame
			mainChatFrame = document.createElement("div")
			mainChatFrame.setAttribute("class", "uiChatBot-frame");
			mainChatFrame.innerHTML = htmlTemplate;
	
			// Setup the header
			let header = mainChatFrame.querySelector(".uiChatBot-header");
			if( config.headerMsg ) {
				header.innerHTML = config.headerMsg;
			} else {
				header.style.display = "none";
			}
	
			// Setup the subheader
			let subheader = mainChatFrame.querySelector(".uiChatBot-subheader");
			if( config.subHeaderMsg ) {
				subheader.innerHTML = config.subHeaderMsg;
			} else {
				subheader.style.display = "none";
			}
	
			// Get the chat notice bar, chat form, and chat form button
			footerNoticeBar = mainChatFrame.querySelector(".uiChatBot-footerMsg");
			chatForm = mainChatFrame.querySelector(".uiChatBot-form");
			chatFormBtn = mainChatFrame.querySelector(".uiChatBot-submit");
			chatFormInput = mainChatFrame.querySelector(".uiChatBot-input");
	
			// Get the msg container
			chatMsgContainer = mainChatFrame.querySelector(".uiChatBot-msg-container");
	
			// Check if we need to preload highlight.js
			if( config.highlightJsPreload && config.enableCodeHighlighting ) {
				// Check if hljs is already loaded
				if( !window.hljs ) {
					// Load the highlight.js library, into the header
					let hljsScript = document.createElement("script");
					hljsScript.setAttribute("src", config.highlightJsUrlDirPath + "highlight.min.js");
					document.head.appendChild(hljsScript);
	
					// And the chosen stylesheet
					let hljsStyle = document.createElement("link");
					hljsStyle.setAttribute("rel", "stylesheet");
					hljsStyle.setAttribute("href", config.highlightJsUrlDirPath + "styles/" + config.highlightJsStyle + ".min.css");
					document.head.appendChild(hljsStyle);
				}
			}
	
			// Configure the input character limit
			if( config.inputCharLimit > 0 ) {
				chatFormInput.setAttribute("maxlength", config.inputCharLimit);
			}
	
			// Handle opening message
			if( config.openingMsg ) {
				chatHistory = [
					{
						role: "bot",
						type: "INIT",
						text: config.openingMsg,
					}
				];
				syncMessageDisplay();
			}
	
			// Add the textarea new line handler
			chatFormInput.addEventListener("keydown", (event)=>{
				// Check if the Enter key was pressed
				if (event.key === 'Enter') {
					// If it was a shift+enter for new line
					if( event.shiftKey ) {
						// Prevent the default behavior
						event.preventDefault();
		
						// Add a newline character to the text
						const text = chatFormInput.value;
						const start = chatFormInput.selectionStart;
						const end = chatFormInput.selectionEnd;
						chatFormInput.value = text.substring(0, start) + '\n' + text.substring(end);
		
						// Prevent propagation (as we already 'handled' it)
						event.stopPropagation();
					} else {
						// Submit the form
						chatForm.dispatchEvent(new Event("submit"));
					}
				}
	
				// Apply character limit
				if( config.inputCharLimit > 0 ) {
					// Get the message text, and trim it
					let msgText = chatFormInput.value.trim();
					if( msgText.length == config.inputCharLimit ) {
						footerNoticeError("Warning, input character limit of " + config.inputCharLimit + " is reached");
					} else if( msgText.length * 1.0 / config.inputCharLimit > 0.9 ) {
						footerNoticeError(`Warning, you are near the input character limit of ${config.inputCharLimit} (used ${msgText.length})`);
					} else if( msgText.length > config.inputCharLimit ) {
						footerNoticeError("Error, Please limit your message to " + config.inputCharLimit + " characters (used " + msgText.length + ")");
					}
				}
	
				// Adjust the height of the textarea element
				recomputeInputFormSize();
			});
			chatFormInput.addEventListener("keyup", (event)=>{
				// Adjust the height of the textarea element
				recomputeInputFormSize();
			});
	
			// Add the submit event listener
			chatForm.addEventListener("submit", (event)=>{
				// Prevent the default submission behaviour
				event.preventDefault();
	
				// Prevent propagation (as we already 'handling' it)
				event.stopPropagation();
	
				// Ignore if there is a pending message
				if( isProcessingMsg ) {
					return;
				}
	
				// Get the message text, and trim it
				let msgText = chatFormInput.value.trim();
	
				// Show an error if empty
				if( msgText.length === 0 ) {
					footerNoticeError("Ignoring empty message submission (please type something)");
					return;
				}
	
				if( config.inputCharLimit > 0 ) {
					if( msgText.length > config.inputCharLimit ) {
						footerNoticeError("Error, Please limit your message to " + config.inputCharLimit + " characters (used " + msgText.length + ")");
						return;
					}
				}
	
				// Perform the user submission
				handleUserSubmission();
			});
	
			// Handle footer notice
			if( config.footerMsg ) {
				footerNoticeBar.innerHTML = config.footerMsg;
			}
		}
	
		function recomputeInputFormSize() {
			// Adjust the height of the textarea element
			chatFormInput.style.height = 'auto';
			chatFormInput.style.height = `${Math.max(chatFormInput.scrollHeight+4,60)}px`;
		}
	
		function footerNoticeError(msg) {
			footerNoticeBar.innerHTML = msg;
			footerNoticeBar.classList.add("uiChatBot-footerMsg-error");
			footerNoticeBar.classList.remove("uiChatBot-footerMsg-thinking");
		}
	
		function footerNoticeThinking(msg = "thinking (This can take up to a few minutes, depending on server load)") {
			footerNoticeBar.innerHTML = `${config.botName} is ${msg} `;
			footerNoticeBar.classList.remove("uiChatBot-footerMsg-error");
			footerNoticeBar.classList.add("uiChatBot-footerMsg-thinking");
		}
	
		function footerNoticeReset() {
			footerNoticeBar.innerHTML = `${config.footerMsg} `;
			footerNoticeBar.classList.remove("uiChatBot-footerMsg-error");
			footerNoticeBar.classList.remove("uiChatBot-footerMsg-thinking");
		}
	
		function lockupChatForm() {
			isProcessingMsg = true;
			chatFormBtn.disabled = true;
			chatFormInput.disabled = true;
			footerNoticeThinking();
		}
	
		function unlockChatForm(resetInput = false) {
			isProcessingMsg = false;
			chatFormBtn.disabled = false;
			chatFormInput.disabled = false;
			footerNoticeReset();
			if( resetInput ) {
				chatFormInput.value = "";
				recomputeInputFormSize();
			}
		}
	
		/** 
		 * Syncronize the message display, with the chat history.
		 * If the existing messages are valid, no changes occur
		 **/
		function syncMessageDisplay() {
			// Ensure all message objects have an id
			for( let i = 0; i < chatHistory.length; i++ ) {
				if( !chatHistory[i].id ) {
					chatHistory[i].id = i;
				}
				if( chatHistory[i].html == null ) {
					chatHistory[i].html = markdownToHTML( chatHistory[i].text );
				}
			}
	
			// Get list of exiting messages in the container
			// that are attached as child elements
			let existingMsgs = Array.from( chatMsgContainer.children );
	
			// If there is somehow more messages, remove them
			if( existingMsgs.length > chatHistory.length ) {
				for( let i = chatHistory.length; i < existingMsgs.length; i++ ) {
					chatMsgContainer.removeChild( existingMsgs[i] );
				}
				existingMsgs = existingMsgs.slice( 0, chatHistory.length );
			}
	
			// Ensure the dom className matches what is needed for the chatHistory
			function matchChatHistory(dom, idx) {
				if( chatHistory[idx].role === "user" ) {
					dom.className = "uiChatBot-msg uiChatBot-user";
				} else if( chatHistory[idx].role == "bot" ) {
					dom.className = "uiChatBot-msg";
				} else if( chatHistory[idx].role == "note" ) {
					dom.className = "uiChatBot-note";
				} else {
					dom.className = "uiChatBot-msg";
				}
	
				let msgText = dom.querySelector(".uiChatBot-text");
				if( msgText.appliedHTML !== chatHistory[idx].html ) {
					msgText.appliedHTML = chatHistory[idx].html;
					msgText.innerHTML = chatHistory[idx].html;
	
					// Check if need to apply syntax highlighting
					if( config.enableCodeHighlighting ) {
						// Get the code blocks if any
						let codeBlocks = dom.querySelectorAll("pre code");
	
						// Skip if nothing eligible
						if( codeBlocks != null && codeBlocks.length > 0 ) {
							// Check if the highlight.js library is loaded
							if( window.hljs == null ) {
								console.error("[UiChatBot] Cannot apply syntax highlighting, as the highlight.js library is not loaded");
							} else {
								// Apply syntax highlighting
								for( let i = 0; i < codeBlocks.length; i++ ) {
									hljs.highlightElement( codeBlocks[i] );
								}
							}
						}
					}
	
					// Forward it to the event hook
					if( config.onMessageRendered ) {
						config.onMessageRendered( dom, chatHistory[idx] );
					}
					chatMsgContainer.scrollTop = chatMsgContainer.scrollHeight;
				}
			}
	
			// For each existing message, check and update the text
			// and the css class
			for( let i = 0; i < existingMsgs.length; i++ ) {
				let msg = existingMsgs[i];
				matchChatHistory(msg, i);
			}
	
			// If there are more messages, add them
			if( existingMsgs.length < chatHistory.length ) {
				for( let i = existingMsgs.length; i < chatHistory.length; i++ ) {
					let msg = document.createElement("div");
					msg.innerHTML = `<div class="uiChatBot-text"></div>`;
					chatMsgContainer.appendChild( msg );
					matchChatHistory(msg, i);
				}
			}
		}
	
		// AI integration
		//---------------------
	
		/**
		 * Get the current state object for the chatbot
		 */
		async function getCurrentState(inPrompt) {
	
			// Remove uneeded html data
			let cleanChatHistory = [];
			for(const chatObj of chatHistory) {
				let cloneObj = Object.assign({}, chatObj);
				delete cloneObj.html;
				cleanChatHistory.push(cloneObj);
			}
	
			// Build the custom actions array
			let configActionHooks = config.actionHooks || [];
			let retActionHooks = [];
			let retEnabledHooks = [];
			for(const actionHook of configActionHooks) {
				// Check if the action hook is enabled
				const enable = (await getFunctionalValue(actionHook.enable, [inPrompt], true)) == true;
	
				// Skip if not enabled
				if( !enable ) {
					continue;
				}
	
				// Check if the label is 3 characters strictly
				if( actionHook.label.length !== 3 ) {
					console.error("[UiChatBot] Action hook label must be 3 characters long - ignoring", actionHook.label);
					continue;
				}
	
				// Check if there are any example args
				if( actionHook.exampleArgs == null ) {
					actionHook.exampleArgs = [];
				}
	
				// Throw on missing short desc
				if( actionHook.shortDesc == null ) {
					console.error("[UiChatBot] Action hook short description (shortDesc) are missing - ignoring", actionHook.shortDesc);
					continue;
				}
	
				// Throw on missing instruction
				if( actionHook.instruction == null ) {
					console.error("[UiChatBot] Action hook instruction are missing - ignoring", actionHook.label);
					continue;
				}
	
				// Double check if the label was not already added, if it was then skip
				if( retEnabledHooks.indexOf(actionHook.label) !== -1 ) {
					console.error("[UiChatBot] Action hook label already exists - ignoring duplicate", actionHook.label);
					continue;
				}
	
				// Build the ret action hook
				retEnabledHooks.push(actionHook.label)
				retActionHooks.push({
					label: actionHook.label,
					shortDesc: actionHook.shortDesc,
					instruction: actionHook.instruction,
					exampleArgs: actionHook.exampleArgs,
					preferSAGE: (actionHook.preferSAGE == true) || false
				});
			}
	
	
			// Return with cleaned out chat history
			let ret = {
				chatHistory: cleanChatHistory,
				actionHooks: retActionHooks,
				enabledHooks: retEnabledHooks
			}
	
			// Clean up any references
			return JSON.parse(JSON.stringify(ret));
		}
	
		/**
		 * Trigger when a submission should be handled
		 * Does not do validation, and checks prior
		 */
		async function handleUserSubmission() {
			// The original chat history length (to pop if error)
			let originalChatHistoryLength = chatHistory.length;
	
			// Try catch safety
			try {
				// First, lets lock up the UI
				lockupChatForm();
		
				// Get the message text, and trim it
				let msgText = chatFormInput.value.trim();
		
				// Get the current state
				let state = await getCurrentState(msgText);
		
				// Add the message to the chat history
				chatHistory.push({
					role: "user",
					type: "CHAT",
					text: msgText
				});
				syncMessageDisplay();
		
				// Make a decision
				let decision = await makeDecision( msgText, state );
		
				// Get the decision type and args
				let type = decision[0].toUpperCase();
				let args = decision.slice(1);
	
				// Handle native actions
				// ---
		
				// If the decision is REPL, just reply it
				if( type === "REPL" ) {
					// Add the message to the chat history
					chatHistory.push({
						role: "bot",
						type: "REPL",
						text: args[0]
					});
					syncMessageDisplay();
		
					// Unlock the chat form and return
					unlockChatForm(true);
					return;
				}
		
				// If its a SAGE response, forward it
				if( type === "SAGE" ) {
					// Flag to check if we failed any responses
					let failedCount = 0;
					let failedDocObjArr = [];
	
					for(let i = 0; i < args.length; i++) {
						// Add the note
						chatHistory.push({
							role: "note",
							type: "SAGE",
							text: `🔍 Searching up database: ${args[i]}`
						});
						syncMessageDisplay();
	
						// Get the response
						let res = await processAction( msgText, state, ["SAGE", args[i]] );
	
						// Return it
						if( res && res[args[i]] && res[args[i]].result ) {
							chatHistory.push({
								role: "bot",
								type: "SAGE",
								text: res[args[i]].result ,
								question: args[i]
							});
						} else {
							failedCount++;
							if ( res && res[args[i]] && res[args[i]].docObjArr ) {
								failedDocObjArr.push( res[args[i]].docObjArr );
							}
						}
						syncMessageDisplay();
					}
	
					// If we failed, show a message
					if( failedCount > 0 ) {
						// Handle the fallback
						let fallbackMsgArr = [config.noAnswerFallbackMsg, ""];
	
						// Add the failed links
						let docObjForLinks = [];
						if( failedCount == 1 ) {
							// Add it all 3 from the single docObjArr
							docObjForLinks = failedDocObjArr[0].slice(0,3);
						} else if( failedCount == 2 ) {
							// Add about 2 links from each question
							docObjForLinks = failedDocObjArr[0].slice(0,2).concat(
								failedDocObjArr[1].slice(0,2)
							);
						} else {
							// Add about 1 link from each question
							docObjForLinks = failedDocObjArr.map( (docObjArr) => docObjArr[0] );
						}
	
						// Add the links from each doc obj
						for(const docObj of docObjForLinks) {
							fallbackMsgArr.push(`- [${docObj.title}](${docObj.src})`);
						}
	
						// Add the failed messages
						chatHistory.push({
							role: "bot",
							type: "REPL",
							text: fallbackMsgArr.join("\n")
						});
					}
					syncMessageDisplay();
		
					// Unlock the chat form and return
					unlockChatForm(true);
					return;
				}
	
				// Check if its an configured action hook
				// ---
	
				// Get list of action hooks array
				let actionHooksArr = config.actionHooks || [];
	
				// Scan and match for each action hook
				for(const actionHook of actionHooksArr) {
					// Check if the action hook matches
					if( actionHook.label === type ) {
						// Get the note (if any)
						let note = await getFunctionalValue( actionHook.note, args, null );
						if( note ) {
							// Add the note
							chatHistory.push({
								role: "note",
								type: type,
								text: note
							});
							syncMessageDisplay();
						}
	
						// Handle the reply
						let reply = await getFunctionalValue( actionHook.reply, args, null );
	
						// Throw if reply is null
						if( reply === null ) {
							throw new Error(`Action hook "${type}" returned null reply`);
						}
	
						// Add the reply
						chatHistory.push({
							role: "bot",
							type: type,
							text: reply
						});
						syncMessageDisplay();
	
						// Unlock the chat form and return
						unlockChatForm(true);
						return;
					}
				}
	
				// Throw on unexpected decision type
				throw new Error(`Unexpected decision type: ${type}`);
	
			} catch(e) {
				// Remove the last message
				chatHistory.length = originalChatHistoryLength;
				syncMessageDisplay();
	
				// Log the error
				console.error(e);
				unlockChatForm(false);
				footerNoticeError("An error occurred while processing your request. Please try again later.");
			}
		}
	
		/**
		 * Perform the call to the AI decision endpoint
		 */
		async function makeDecision( prompt, inState ) {
			// Fetch the decision
			let res = await apiFetch( "decision", {
				prompt: prompt,
				state: inState
			} );
	
			// Return the decision
			return res.result;
		}
	
		/**
		 * Perform the call to the AI decision endpoint
		 */
		 async function processAction( prompt, inState, actionArr ) {
			// Fetch the decision
			let res = await apiFetch( "action", {
				prompt: prompt,
				action: actionArr,
				state: inState
			} );
	
			// Return the decision
			return res.result;
		}
	
		/**
		 * Fetch from the api route endpoint, as a JSON post request
		 * with automated built in retries, for errors
		 */
		async function apiFetch( uri, jsonObj, maxTries = 3 ) {
			// Setup the request
			let request = {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify( jsonObj )
			};
	
			// Get the request URL
			let reqUrl = config.apiRoute + uri;
	
			// Perform the request
			let lastErr = null;
			let jsonErr = null;
			for( let i = 0; i < maxTries; i++ ) {
				try {
					let response = await fetch( reqUrl, request );
					if( response.ok ) {
						let jsonRes = await response.json();
						if(jsonRes.ERROR) {
							jsonErr = jsonRes;
						} else {
							// End the loop and return
							return jsonRes;
						}
					} else {
						throw new Error( `Unexpected error response : ${response.status} ${response.statusText}` );
					}
				} catch( err ) {
					lastErr = err;
				}
	
				// Do a short sleep
				await asyncSleep( maxTries * 2000 );
			}
			
			// If we got here, we failed
			if( jsonErr ) {
				console.error("[UiChatBot]: API Error", jsonErr.ERROR_CODE, jsonErr.ERROR, jsonErr.ERROR_TRACE);
				throw new Error( `Unexpected error response : ${jsonErr.ERROR_CODE} ${jsonErr.ERROR}` );
			}
			throw lastErr;
		}
	
		// Small utils
		//---------------------
	
		/**
		 * Perform a short sleep in ms, asyncronously
		 * @param {int} ms 
		 */
		async function asyncSleep(ms) {
			await new Promise(resolve => setTimeout(resolve, ms));
		}
	
		/**
		 * Given the inVal which could be an async function, or a value, return the value
		 * @param {*} inVal 
		 * @param {Array} args 
		 * @param {*} inValFallbck value if inVal is undefined, or null
		 */
		async function getFunctionalValue( inVal, args, inValFallbck ) {
			if( inVal === undefined || inVal === null) {
				return inValFallbck;
			}
			if( typeof inVal === "function" ) {
				return await inVal.apply( null, args );
			}
			return await inVal;
		}
	
		// Setup function
		//---------------------
	
		/**
		 * Configure the UiChatBot instance, this should be called before any other methods
		 * This is called internally for the singleton instance / new instance operations
		 * @param {Object} config 
		 * 
		 * @returns 
		 */
		function setup( inConfig ) {
			// Check if setup has already been called
			if( this.config !== undefined ) {
				throw "[UiChatBot]: setup() has already been called";
			}
	
			// Merge the config
			config = Object.assign( {}, defaultConfig, inConfig );
	
			// Normalize some messages
			if( config.openingMsg === undefined || config.openingMsg === null ) {
				config.openingMsg = `Hi, I'm ${config.botName}, an AI assistant, how can I help you today?`;
			}
			if( config.headerMsg === undefined || config.headerMsg === null ) {
				config.headerMsg = `${config.botName} (AI assistant)`;
			}
			if( config.footerMsg === undefined || config.footerMsg === null ) {
				config.footerMsg = `${config.botName} AI assistant is powered by uilicious.com`;
			}
			if( config.subHeaderMsg === undefined || config.subHeaderMsg === null ) {
				config.subHeaderMsg = [
					`Disclaimer: ${config.botName} AI assistant is still in early beta, and may provide inaccurate responses. `,
					`When in doubt, always double check our official website and documentation.`,
					`<br/><br/>All messages are logged for review and monitoring purposes`
				].join("");
			}
			// if( config.botScope === undefined || config.botScope === null ) {
			// 	config.botScope = `${config.botName}, ${config.parentName}`;
			// }
	
			// Ensure api route ends with an ending "/"
			if( config.apiRoute.substr(-1) !== "/" ) {
				config.apiRoute += "/";
			}
	
			// And store it for later use
			this.config = config;
	
			// Setup the HTML
			htmlSetup();
	
			// Attach if attachTo is specified
			if( config.attachTo ) {
				attachTo( config.attachTo );
			}
	
			// Return self
			return this;
		}
	
		/**
		 * Throw an error if setup has not occured
		 */
		function checkSetup() {
			if( config == null ) {
				throw "[UiChatBot]: Initial config setup has not been performed";
			}
		}
	
		/**
		 * Attach the current chat window, to the specified DOM element
		 */
		function attachTo( domElement ) {
			// Check if setup has been called
			checkSetup();
	
			// If domElement is a string, then try to find the element
			if( typeof domElement === "string" ) {
				domElement = document.querySelector( domElement );
			}
	
			// Check if the element is valid
			if( domElement === undefined || domElement === null ) {
				throw "[UiChatBot]: Invalid DOM element specified";
			}
	
			// Remove all child elements
			while( domElement.firstChild ) {
				domElement.removeChild( domElement.firstChild );
			}
	
			// Append the chat frame to the DOM element
			domElement.appendChild( mainChatFrame );
		}
	
		/**
		 * Validation function, that is used to validate browser compatibilty
		 */
		function isCompatibleWithBrowser() {
			return true;
		}
	
		//---------------------
		// Exposed functions
		//---------------------
	
		this._setup = setup;
		this.attachTo = attachTo;
		this.isCompatibleWithBrowser = isCompatibleWithBrowser;
	
		//---------------------
		// Self return
		//---------------------
	
		// Return self
		return this;
	}
	
	// ============================
	// Utility functions
	// ============================
	
	/**
	 * Encode the following raw string, to HTML safe characters
	 */
	 function htmlEncode(rawStr) {
		return rawStr.replace(/[\<\>\\\/]/g, function(i) {
			return '&#'+i.charCodeAt(0)+';';
		});
	}
	
	/**
	 * Given the markdown string, convert it to HTML
	 * @param {String} markdown 
	 * @param {Object} opt 
	 */
	function markdownToHTML(markdown, opt) {
		// Trim the markdown
		markdown = markdown.trim();
	
		// If its empty, return empty
		if (markdown == "") {
			return "";
		}
	
		// Encode any control characters first
		markdown = htmlEncode(markdown);
	
		// Find the opening code block match
		const codeBlockOpeningIndex = markdown.indexOf("```");
	
		// Handle the case where there is no code block
		if (codeBlockOpeningIndex <= -1) {
			return markdownToMTML_noCodeBlock(markdown, opt);
		}
	
		// Ok a codeblock opening was found, 
		// lets get the opening and closing positions
		const codeBlockClosingIndex = markdown.indexOf("\n```", codeBlockOpeningIndex + 3);
		const codeBlockEndOfContentIndex = codeBlockClosingIndex > -1 ? codeBlockClosingIndex : markdown.length;
		const markdownAfterCodeblockIndex = codeBlockClosingIndex > -1 ? codeBlockClosingIndex + 4 : markdown.length;
	
		// Get the code block content, assume all remaining string, if no closing found
		const codeBlock = markdown.substring(codeBlockOpeningIndex + 3, codeBlockEndOfContentIndex);
	
		// Get the code language if present
		const codeBlockLanguage = codeBlock.match(/^(.*)\n/);
		// Get the codeblock after the language
		const codeBlockContent = htmlEncode(codeBlock.substring(codeBlockLanguage ? codeBlockLanguage[0].length : 0));
	
		// Prepare the final output
		let outputArr = [];
	
		// Convert the content before the code block (unless codeblock was at the start)
		if (codeBlockOpeningIndex > 0) {
			outputArr.push(markdownToMTML_noCodeBlock(markdown.substring(0, codeBlockOpeningIndex), opt));
		}
	
		// Add the code block
		outputArr.push(`<pre><code class="${codeBlockLanguage ? "language-"+codeBlockLanguage[1].toLowerCase() : ""}">${codeBlockContent}</code></pre>`);
	
		// Conver the content after the code block (unless codeblock was at the end)
		if (markdownAfterCodeblockIndex < markdown.length) {
			outputArr.push(markdownToHTML(markdown.substring(markdownAfterCodeblockIndex), opt));
		}
	
		// Return the full html
		return "<p>"+outputArr.join("\n")+"</p>"
	}
	
	/**
	 * Handle markdown to HTML conversion without codeblock
	 * @param {String} markdown 
	 * @param {Object} opt 
	 */
	function markdownToMTML_noCodeBlock(markdown, opt) {
		// console.log(markdown);
		// Headings
		markdown = markdown.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
		markdown = markdown.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
		markdown = markdown.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
		markdown = markdown.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
		markdown = markdown.replace(/^##### (.*?)$/gm, "<h5>$1</h5>");
		markdown = markdown.replace(/^###### (.*?)$/gm, "<h6>$1</h6>");
	
		// Bold
		markdown = markdown.replace(/\*\*(.*?)\*\*/gm, "<b>$1</b>");
		markdown = markdown.replace(/__(.*?)__/gm, "<b>$1</b>");
	
		// Italic
		markdown = markdown.replace(/\*(.*?)\*/gm, "<em>$1</em>");
		markdown = markdown.replace(/_(.*?)_/gm, "<em>$1</em>");
	
		// Links
		markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gm, "<a href=\"$2\" target=\"_blank\">$1</a>");
	
		// Links that are not in an existing anchor link
		markdown = markdown.replace(/(\s)(http[s]?:\/\/[^\s\/\-\_]+)/gm, "$1<a href=\"$2\" target=\"_blank\">$2</a>");
	
		// Images
		markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/gm, "<img src=\"$2\" alt=\"$1\">");
	
		// Inline code handling
		markdown = markdown.replace(/`([^`]+)`/gm, "<code class=\"code-line\">$1</code>");
	
		// // Point form handling  (buggy)
		// markdown = markdown.replace(/^(\s*)[\*\-] (.+(?:\n\1 {2,}.+)*$)/gm, function(match, p1, p2) {
		// 	const items = p2.split(/\n\s{2,}/).map(item => item.replace(/^\s+/, ""));
		// 	return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`
		// });
	
		// Paragraphs breaks
		markdown = markdown.replace(/(\n)/gm, "<br/>");
		markdown = markdown.replace(/(\<br\/\>|\n)(\<br\/\>|\n)+/gm, "</p></p>");
	
		// console.log(markdown);
		// Return the markdown
		return markdown;
	}
	
	// ============================
	// The singleton instance
	// ============================
	let singletonInstance = new UiChatBot();
	
	// ============================
	// Setup the module function (to expose)
	// ============================
	function UiChatBotModule( config ) {
		return singletonInstance._setup( config );
	}
	
	// List of functions
	let functionList = ["attachTo", "isCompatibleWithBrowser"];
	
	// Bind each function from the module to the singleton instance
	for( let i = 0; i < functionList.length; i++ ) {
		let functionName = functionList[i];
		UiChatBotModule[ functionName ] = singletonInstance[ functionName ].bind( singletonInstance );
	}
	
	// Expose the module globally
	if(window){
		window.UiChatBot = UiChatBotModule;
	}
	if( (window || global) && (window || global).module ) {
		module.exports = UiChatBotModule;
	}
	
// ---
})()
