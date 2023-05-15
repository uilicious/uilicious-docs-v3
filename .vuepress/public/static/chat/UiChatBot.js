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
		welcomeMessage: "Hi, I'm an AI asstant, who is here to help you\n\nFeel free to ask me anything",
	
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
		// Toggle button
		`<button class="uiChatBot-toggle-btn">✨ Ask %botName%</button>`,
		// Start: window
		`<div class="uiChatBot-window">`,
		// Window header
		`<header class="uiChatBot-header">
					<div class="uiChatBot-header__title">✨ Ask %botName%</div>
					<div class="uiChatBot-header__buttons">
						<button class="uiChatBot-header__button uiChatBot-header__button--dock-btn" title="Minimise" aria-label="Minimise"></button>
						<button class="uiChatBot-header__button uiChatBot-header__button--undock-btn" title="Maximise" aria-label="Maximise"></button>
						<button class="uiChatBot-header__button uiChatBot-header__button--close-btn" title="Close" aria-label="Close"></button>
					</div>
				</header>`,
		// Contents, which includes
		// - messages : the chat history
		// - suggestions : suggested questions to get started with
		`<div class="uiChatBot-body">
			<div class="uiChatBot-messages"></div>
			<div class="uiChatBot-suggestions">
				<div class="uiChatBot-suggestions__heading"><b>Examples</b></div>
			</div>
		</div>`,
		// Status indicator
		`<div class="uiChatBot-status"></div>`,
		// Experimental notice
		`<div class="uiChatBot-banner uiChatBot-banner--experimental-notice">
			<div class="uiChatBot-banner__icon">🔬</div>
			<div class="uiChatBot-banner__text">
				<p>%botName% is experimental and may produce incorrect answers.</p>
				<p><small>Always verify the output before executing</small></p>
			</div>
		</div>`,
		// User input box
		`		<form class="uiChatBot-form">
					<textarea class="uiChatBot-input" placeholder="Ask %botName% a question..." autofocus></textarea>
					<button type="submit" class="uiChatBot-submit">Send</button>
				</form>`,
		// Error display
		`<div class="uiChatBot-errors" style="display:none;"></div>`,
		// "Powered by" branding
				`<div class="uiChatBot-branding">Powered by	<a href="https://uilicious.com" target="_blank">uilicious.com</a></div>`,
		// END: window
		`</div>`,
		// BACKDROP
		`<div class="uiChatBot-backdrop"></div>`
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
		let chatSuggestionList = null;
	
		// The main chat message history
		let chatHistory = [];
	
		// The form notice bar, and button
		let chatForm = null;
		let chatFormBtn = null;
		let chatFormInput = null;
		let errorDisplay = null;
	
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

			config = config || {}
			console.log("Config: ", config)
			
			// Prepare the main frame
			mainChatFrame = document.createElement("div")
			mainChatFrame.classList.add("uiChatBot-frame")
			mainChatFrame.classList.add("uiChatBot-frame--opened")

			// Style the main frame
			config.style = config.style || { docked: { anchor: "right" } }
			if(config.style.docked){
				
				mainChatFrame.classList.add("uiChatBot-frame--docked")
				
				config.style.docked.anchor = config.style.docked.anchor || "right"
				mainChatFrame.classList.add("uiChatBot-frame--docked-" + config.style.docked.anchor )

			} else {

				mainChatFrame.classList.add("uiChatBot-frame--undocked")

			}

			// Replace template strings
			config.botName = config.botName || "AI"
			mainChatFrame.innerHTML = htmlTemplate.replace(/(%botName%)/gi, config.botName);

			// Bind toggle button to open window when clicked
			let toggleBtn = mainChatFrame.querySelector(".uiChatBot-toggle-btn")
			toggleBtn.addEventListener("click", open)

			// Bind the backdrop to minimise when clicked
			let backdrop = mainChatFrame.querySelector(".uiChatBot-backdrop")
			backdrop.addEventListener("click", dock)
	
			// Header title
			let header = mainChatFrame.querySelector(".uiChatBot-header");
			let title = header.querySelector(".uiChatBot-header__title")
			if( config.title ) {
				title.innerHTML = config.title
			} 

			// Header buttons
			// - close btn
			let closeBtn = header.querySelector(".uiChatBot-header__button--close-btn");
			if(closeBtn){
				closeBtn.addEventListener("click", close)
			}

			// - dock btn
			let dockBtn = header.querySelector(".uiChatBot-header__button--dock-btn");
			if(dockBtn){
				dockBtn.addEventListener("click", dock)
			}
	
			// - undock button
			let undockBtn = header.querySelector(".uiChatBot-header__button--undock-btn");
			if(undockBtn){
				undockBtn.addEventListener("click", undock)
			}
	
			// Get the chat notice bar, chat form, and chat form button
			errorDisplay = mainChatFrame.querySelector(".uiChatBot-errors");
			chatForm = mainChatFrame.querySelector(".uiChatBot-form");
			chatFormBtn = mainChatFrame.querySelector(".uiChatBot-submit");
			chatFormInput = mainChatFrame.querySelector(".uiChatBot-input");
	
			// Get the msg container
			chatMsgContainer = mainChatFrame.querySelector(".uiChatBot-messages");
			
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
			if( config.welcomeMessage ) {
				chatHistory = [
					{
						role: "bot",
						type: "INIT",
						text: config.welcomeMessage,
					}
				];
				syncMessageDisplay();
			}

			// Populate examples
			chatSuggestionList = mainChatFrame.querySelector(".uiChatBot-suggestions");
			if(config.examples && Array.isArray(config.examples)){
				config.examples.forEach((question)=>{
					let el = document.createElement("button")
					el.classList.add("uiChatBot-suggestion-item");
					el.innerHTML = `<div class="uiChatBot-suggestion-item__icon"></div>
					<div class="uiChatBot-suggestion-item__text">${question}</div>`
					el.addEventListener("click", ()=>{
						processQuestion(question)
					})
					chatSuggestionList.appendChild(el);
					
				})
			}

			// When any links within a chat message is clicked,
			// dock the chat message window
			chatMsgContainer.addEventListener("click", (event)=>{
				// a link is clicked
				if(event.target.tagName === "A"){
					dock()
				}
			})

			// debug
			// showStatus("thinking")
			// showError("this is an error")
	
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
						chatForm.dispatchEvent(new Event("submit", {cancelable: true}));
					}
				}
	
				// Apply character limit
				if( config.inputCharLimit > 0 ) {
					// Get the message text, and trim it
					let msgText = chatFormInput.value.trim();
					if( msgText.length == config.inputCharLimit ) {
						showError("Warning, input character limit of " + config.inputCharLimit + " is reached");
					} else if( msgText.length * 1.0 / config.inputCharLimit > 0.9 ) {
						showError(`Warning, you are near the input character limit of ${config.inputCharLimit} (used ${msgText.length})`);
					} else if( msgText.length > config.inputCharLimit ) {
						showError("Error, Please limit your message to " + config.inputCharLimit + " characters (used " + msgText.length + ")");
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
				let userInput = chatFormInput.value.trim();
	
				// Ignore if the user input is empty
				if( userInput.length === 0 ) {
					return;
				}
	
				if( config.inputCharLimit > 0 ) {
					if( userInput.length > config.inputCharLimit ) {
						showError("Please limit your message to " + config.inputCharLimit + " characters (used " + userInput.length + ")");
						return;
					}
				}

				// clear errors
				clearError();
	
				// Perform the user submission
				processQuestion(userInput);
	
				// cancel the event so that the page does not reload
				return false;

			});
	
		}
	
		function recomputeInputFormSize() {
			// Adjust the height of the textarea element
			chatFormInput.style.height = 'auto';
			chatFormInput.style.height = `${Math.max(chatFormInput.scrollHeight+4,60)}px`;
		}

		function showStatus(status){
			let statusEl = mainChatFrame.querySelector(".uiChatBot-status");
			if(status === "thinking"){
				statusEl.innerHTML = `🧠 ${config.botName} is thinking...`
				statusEl.classList.add(".uiChatBot-status--thinking");
			}
		}

		function clearStatus(){
			let statusEl = mainChatFrame.querySelector(".uiChatBot-status");
			statusEl.innerHTML = ""
			statusEl.classList.forEach((cls)=>{
				if(cls.startsWith("uiChatBot-status--")){
					statusEl.classList.remove(cls)
				}
			})
		}
	
		function showError(msg) {
			errorDisplay.innerHTML = msg;
			errorDisplay.style.display = "block";
		}

		function clearError(){
			errorDisplay.innerHTML = ""
			errorDisplay.style.display = "none";
		}
	
		function lockupChatForm() {
			isProcessingMsg = true;
			chatFormBtn.disabled = true;
			chatFormInput.disabled = true;
			showStatus("thinking")
		}
	
		function unlockChatForm(resetInput = false) {
			isProcessingMsg = false;
			chatFormBtn.disabled = false;
			chatFormInput.disabled = false;
			clearStatus();
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
			let existingMsgs = Array.from( chatMsgContainer.querySelectorAll(".uiChatBot-msg") );
	
			// If there is somehow more messages, remove them
			if( existingMsgs.length > chatHistory.length ) {
				for( let i = chatHistory.length; i < existingMsgs.length; i++ ) {
					chatMsgContainer.removeChild( existingMsgs[i] );
				}
				existingMsgs = existingMsgs.slice( 0, chatHistory.length );
			}

			// Flag to indicate if insertion occured
			let insertionOccured = false;
	
			// Ensure the dom className matches what is needed for the chatHistory
			function matchChatHistory(dom, idx) {

				let message = chatHistory[idx]

				// update message types
				dom.setAttribute("data-message-role", message.role)
				dom.setAttribute("data-message-type", message.type)

				if( message.role === "user" ) {
					dom.className = "uiChatBot-msg uiChatBot-msg--user";
				} else if( message.role == "bot" ) {
					dom.className = "uiChatBot-msg uiChatBot-msg--bot";
				} else if( message.role == "note" ) {
					dom.className = "uiChatBot-msg uiChatBot-msg--note";
				} else {
					dom.className = "uiChatBot-msg";
				}
	
				let msgText = dom.querySelector(".uiChatBot-msg__text");
				if( msgText.appliedHTML !== message.html ) {
					msgText.appliedHTML = message.html;
					msgText.innerHTML = message.html;
	
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
						config.onMessageRendered( dom, message );
					}

					// Insertion flag
					insertionOccured = true;
				}
			}
	
			// For each existing message, check and update the text
			// and the css class
			for( let i = 0; i < existingMsgs.length; i++ ) {
				let msg = existingMsgs[i];
				matchChatHistory(msg, i);
			}
	
			// Insert new messages
			if( existingMsgs.length < chatHistory.length ) {
				for( let i = existingMsgs.length; i < chatHistory.length; i++ ) {
					let msg = document.createElement("div");
					msg.innerHTML = `<div class="uiChatBot-msg__author"></div><div class="uiChatBot-msg__text"></div>`;
					msg.setAttribute("data-message-role", chatHistory[i].role)
					msg.setAttribute("data-message-type", chatHistory[i].type)
					chatMsgContainer.appendChild( msg );
					matchChatHistory(msg, i);
				}
			}

			// If AI is thinking, hide welcome message
			// if(isProcessingMsg){
			// 	let el = mainChatFrame.querySelector(".uiChatBot-msg[data-message-type='INIT']")
			// 	if(el){
			// 		el.style.display = "none";
			// 	}
			// }

			// If AI is thinking, add empty state
			if(isProcessingMsg){
				let msg = document.createElement("div");
				msg.classList.add("uiChatBot-msg")
				msg.classList.add("uiChatBot-msg--processing")
				msg.innerHTML = `<div class="uiChatBot-msg__author"></div><div class="uiChatBot-msg__text"><span class="uiChatBot-msg__text-stub">&nbsp;</span></div>`;
				chatMsgContainer.appendChild( msg );
			} else {
				let el = chatMsgContainer.querySelector(".uiChatBot-msg--processing")
				if(el){
					chatMsgContainer.removeChild(el)
				}
			}

			// If insertion occured, scroll to the bottom
			if( insertionOccured ) {
				let lastMesage = chatMsgContainer.querySelector(".uiChatBot-msg:last-of-type")
				if(lastMesage){
					lastMesage.scrollIntoView();
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
		async function processQuestion(question) {

			// Hide suggestions
			chatSuggestionList.style.display = "none";

			// The original chat history length (to pop if error)
			let originalChatHistoryLength = chatHistory.length;
	
			// Try catch safety
			try {

				// First, lets lock up the UI
				lockupChatForm();
		
				// Get the message text, and trim it
				question = question.trim();

				// if the chathistory includes welcome message (type="INIT"), remove it
				if(chatHistory.length){
					if(chatHistory[0].type === "INIT"){
						chatHistory.splice(0,1);
					}
				}
		
				// Get the current state
				let state = await getCurrentState(question);
		
				// Add the message to the chat history
				chatHistory.push({
					role: "user",
					type: "CHAT",
					text: question
				});

				syncMessageDisplay();
		
				// Make a decision
				let decision = await makeDecision( question, state );
		
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
							text: `Searching for "${args[i]}"`
						});
						syncMessageDisplay();
	
						// Get the response
						let res = await processAction( question, state, ["SAGE", args[i]] );
	
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

					// Unlock the chat form and return
					unlockChatForm(true);

					// update messages
					syncMessageDisplay();
		
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
				showError("An error occurred while processing your request. Please try again later.");
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
			if( config.welcomeMessage === undefined || config.welcomeMessage === null ) {
				config.welcomeMessage = `Hi, I'm ${config.botName}, an AI assistant, how can I help you today?`;
			}

			if( config.title === undefined || config.title === null ) {
				config.title = `Ask ${config.botName}`;
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
		// Display
		//---------------------
		function open(){
			let frame = document.querySelector(".uiChatBot-frame")
			frame.classList.add("uiChatBot-frame--opened")
			frame.classList.remove("uiChatBot-frame--closed")
		}

		function close(){
			let frame = document.querySelector(".uiChatBot-frame")
			frame.classList.add("uiChatBot-frame--closed")
			frame.classList.remove("uiChatBot-frame--opened")
		}

		function dock(){
			let frame = document.querySelector(".uiChatBot-frame")
			frame.classList.add("uiChatBot-frame--docked")
			frame.classList.remove("uiChatBot-frame--undocked")
		}

		function undock(){
			let frame = document.querySelector(".uiChatBot-frame")
			frame.classList.add("uiChatBot-frame--undocked")
			frame.classList.remove("uiChatBot-frame--docked")
		}

		//---------------------
		// Exposed functions
		//---------------------
	
		this._setup = setup;
		this.attachTo = attachTo;
		this.open = open;
		this.close = close;
		this.dock = dock;
		this.undock = undock;
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
		return rawStr.replace(/[\<\>\\]/g, function(i) {
			return '&#'+i.charCodeAt(0)+';';
		});
	}
	
	/**
	 * Given the markdown string, convert it to HTML
	 * @param {String} markdown 
	 * @param {Object} opt 
	 */
	function markdownToHTML(markdown, opt, isRecursive = false) {
		// Trim the markdown
		if( isRecursive ) {
			// does nothing
		} else {
			// Trim the markdown
			markdown = markdown.trim();
			// Encode any control characters first
			markdown = htmlEncode(markdown);
		}
	
		// If its empty, return empty
		if (markdown == "") {
			return "";
		}
	
		// Find the opening code block match
		const codeBlockOpeningIndex = markdown.indexOf("```");
	
		// Handle the case where there is no code block
		if (codeBlockOpeningIndex <= -1) {
			return markdownToMTML_noCodeBlock(markdown, opt, true);
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
			outputArr.push(markdownToMTML_noCodeBlock(markdown.substring(0, codeBlockOpeningIndex), opt, true));
		}
	
		// Add the code block
		outputArr.push(`<pre><code class="${codeBlockLanguage ? "language-"+codeBlockLanguage[1].toLowerCase() : ""}">${codeBlockContent}</code></pre>`);
	
		// Conver the content after the code block (unless codeblock was at the end)
		if (markdownAfterCodeblockIndex < markdown.length) {
			outputArr.push(markdownToHTML(markdown.substring(markdownAfterCodeblockIndex), opt, true));
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
	
		// Links in markdown format
		markdown = markdown.replace(/\[(.*?)\]\((\s*)(.*?)(\s*)\)/gm, "<a href=\"$3\" target=\"_blank\">$1</a>");
	
		// Links that are not in an existing anchor link
		markdown = markdown.replace(/(\s+)(http[s]*?:\/\/[A-Za-z0-9\/\-\_\.\#\=\+]+)/gm, "$1<a href=\"$2\" target=\"_blank\">$2</a>");
	
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
	let functionList = [
		"open",
		"close",
		"dock",
		"undock",
		"attachTo", 
		"isCompatibleWithBrowser"
	];
	
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

// todo:
// - [x] (done) embed to the left or right of the docsite
// - [x] when click on backdrop, dock the chat window
// - [x] when a link is clicked, hide the docked window
// - [ ] hide --processing stub when generating test script
// - [ ] controls to open / close the window
//   - [x] (done) tab style toggle button
//   - [ ] chat toggle button 
//   - [ ] clippy style toggle button
// - [ ] dark mode
// - [ ] style background
// - [ ] refactor namespace

