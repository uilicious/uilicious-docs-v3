// TAMI setup sequence
async function TAMI_vuepressSetup(withinTimeout = false) {
	
	// Skip if loaded flag
	if( withinTimeout == false ) {
		if( window.TAMI_SETUP_STARTED ) {
			return;
		}
		window.TAMI_SETUP_STARTED = true;
	}

	// Preparing the TAMI setup
	// ---

	// Dynamically set the route according to existing known host
	const host = window.location.host; 
	let apiRoute = null;

	// If its a local dev, or dev env instance
	if( host.indexOf(":8080") >= 0 || host.indexOf("uilicious-dev.com") >= 0 ) {
		apiRoute = "https://api-tami.uilicious-dev.com/v2/tami/chat/";
	} else if( host.indexOf("stg") >= 0 ||  host.indexOf("stag") >= 0 ) {
		// Skip staging for now
		return;
		apiRoute = "https://stg-api-tami.uilicious.com/v2/tami/chat/";
	} else {
		// Skip prod for now
		return;
		apiRoute = "https://api-tami.uilicious.com/v2/tami/chat/";
	}

	// Check if the UiChatBot instance is defined
	if( typeof UiChatBot === "undefined" ) {
		setTimeout(() => {
			// Try again
			TAMI_vuepressSetup(true);
		}, 10);

		// Log if its not within timeout
		if( !withinTimeout ) {
			console.log("UiChatBot is not defined, will wait till its loaded ...");
		}

		// Skip this round
		return;
	}

	// Somehow there is a possible race condition where the config is already done?
	// that occurs prior to here (despite no await calls) in firefox / safari
	if( window.TAMI_SETUP_STARTED_R2 ) {
		return;
	}
	window.TAMI_SETUP_STARTED_R2 = true;

	// Log the setup
	console.log("UiChatBot loaded, configuring and setting up TAMI ...")

	// Check if its supported
	if( !UiChatBot.isCompatibleWithBrowser() ) {
		console.log("UiChatBot is not supported, skipping ...");
		return;
	}

	// Lets get the various HTML elements first
	// ---

	// The HTML body
	const body = document.getElementsByTagName("body")[0];
	body.className += " uichatbot-vuepress";

	// Get the vuepres theme container
	const themeContainer = document.querySelector(".theme-container");
	// Lets generate the "right" aside
	const rightAside = document.createElement("aside");
	rightAside.className = "right-aside-chat"
	rightAside.innerHTML = `<a class="right-chat-toggle">TAMI chatbot</a><div class="right-chat-frame"></div><div class="chat-shadowbox"></div>`

	// Setup the right aside, we attach to the "body", to avoid interferring with vue reactivity
	body.appendChild(rightAside);

	// Get the chat frame
	const chatFrame = rightAside.querySelector(".right-chat-frame");

	// Get the chat toggle
	const chatToggle = rightAside.querySelector(".right-chat-toggle");

	// And the background shadowbox
	const shadowBox = rightAside.querySelector(".chat-shadowbox");

	// The special event listener for doc links
	// ---

	function chatMsgLinkClick(e) {

		// Check if it's a direct click
		// we only apply for direct clicks, to avoid interfering with intentional new tab / window actions
		if (
			e.which === 1 && e.button === 0 && 
			e.ctrlKey == false && e.shiftKey == false && e.altKey == false
		) {
			// Ok we shall try to find the relevent document
			// --

			// Get the link href
			const targetHref = e.target.href;

			// Safety skip
			if( targetHref == null || targetHref.indexOf("docs.uilicious.com/v3/") < 0 ) {
				// do nothing
				return;
			}

			// Get the segment from /v3/ onwards
			let targetUriPath = "/v3/"+targetHref.split("docs.uilicious.com/v3/")[1];
			// Remove ending slash (if any)
			if( targetUriPath.endsWith("/") ) {
				targetUriPath = targetUriPath.substr(0, targetUriPath.length - 1);
			}
			
			// Get the left sidebar navigator
			const leftSidebar = document.querySelector("aside.sidebar");
			// Get all the links
			const linksArr = leftSidebar.querySelectorAll("a[href]");

			// Lets find the link
			for(const link of linksArr) {
				// Get the link href
				let linkHref = link.href;

				// Safety skip
				if( linkHref == null || linkHref.indexOf("/v3/") < 0 ) {
					// skip
					continue;
				}
				
				// Get the link URI path
				let linkUri = "/v3/"+linkHref.split("/v3/")[1];

				// Remove ending slash (if any)
				if( linkUri.endsWith("/") ) {
					linkUri = linkUri.substr(0, linkUri.length - 1);
				}

				// Its a match
				if( linkUri == targetUriPath ) {
					// Lets block the current event defautl behaviour
					e.preventDefault();
					e.stopPropagation();

					// Exit the focus mode (if its set)
					removeFocusMode();

					// Lets trigger the click
					link.click();
					return;
				}
			}
		}

		// We probably found nothing, it the scenerio does not match
		// does nothing, and let native behaviour take over
	}

	// Handling of "Focus Mode" toggle
	// ---

	function enableFocusMode() {
		if(!body.classList.contains("uichatbot-vuepress-focus")) {
			body.classList.add("uichatbot-vuepress-focus");
		}
	}

	function removeFocusMode() {
		if(body.classList.contains("uichatbot-vuepress-focus")) {
			body.classList.remove("uichatbot-vuepress-focus");
		}
	}

	function toggleFocusMode() {
		if(body.classList.contains("uichatbot-vuepress-focus")) {
			removeFocusMode();
		} else {
			enableFocusMode();
		}
	}
	chatToggle.addEventListener("click", toggleFocusMode);
	shadowBox.addEventListener("click", removeFocusMode);
	document.getElementsByClassName("navbar")[0].addEventListener("click", removeFocusMode);

	// Loading up the bot
	// ---

	// Setup the instance
	try {
		UiChatBot({
			botName: "TAMI",
			headerMsg: false,
			subHeaderMsg: "Disclaimer: TAMI AI assistant is still in early beta, and maybe inaccurate.<br/>When in doubt check with the official documentation cited",
			openingMsg: "Hi, I'm TAMI, an AI assistant for uilicious.com\n\nHere to help you with any questions about\nUI testing via uilicious",
			
			// Attach to
			attachTo: chatFrame,

			// API route to use for the chat interface
			apiRoute: apiRoute,

			// Custom hooks, to rendered messages, for intercepting links
			onMessageRendered: (dom, msgObj) => {
				// Intercept the documentaiton links
				dom.querySelectorAll("a[href]").forEach((a) => {
					if(a.href && a.href.indexOf("docs.uilicious.com/v3/")) {
						// Add the event listener
						a.addEventListener("click", chatMsgLinkClick);
					}
				});
			},

			// HighlightJS styling overwrite
			highlightJsStyle: "stackoverflow-dark",

			//
			// Custom action hooks
			//
			// @TODO : Figure out how to standardise moving this to server side
			//         for security, and anti-abuse reasons
			//
			actionHooks: [
				{
					label: "GEN",
					enable: true,
					shortDesc: "Write / Generate uilicious test script",
					preferSAGE: true,
					instruction: [
						"Use this action, to write / generate uilicious test script for the user, using the given description or instructions",
						"There is no need to ask for what browser or version, as this script can be used for any browser",
						"",
						"When a user ask you to generate / write a test script, you can use this action to generate a uilicious test script",
						"This action should be used to generate uilicious test script",
					],
					exampleArgs: [
						["<description or instructions, used to describe the uilicious test script to be generated>"]
					],
					note: async (desc) => {
						return "📝 Generating uilicious test script ... "
					},
					reply: async (desc) => {
						// Lets fetch against the test gen API
						let apiUrl = "https://api-tami.uilicious-dev.com/v2/tami/advance/testCodeGen";

						// Fetch it
						let fetchRes = await fetch(apiUrl, {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								prompt: desc,

								// Disable suffix str
								excludeSummary: true,
								suffixStr: false
							})
						});

						// Get the response
						let fetchResJson = await fetchRes.json();

						// Check if we have a valid response
						if (fetchResJson && fetchResJson.result) {
							// We have a valid response
							return [
								"Sure, here is the requested uilicious test script:",
								"```",
								fetchResJson.result,
								"```",
								"",
								"Let me know if I can help with anything else"
							].join("\n");
						} else {
							// We have an invalid response
							console.error( fetchResJson );
							throw "Failed to generate uilicious test script";
						}
					}
				}
			]
		})

		// Log the setup completion
		console.log("TAMI Vuepress setup completed");
	} catch(e) {
		// If setup failed, log and remove the chatbot
		console.error(e);
		chatFrame.remove();
	}
}

if (document.readyState === 'complete') {
	TAMI_vuepressSetup();
} else {
	window.addEventListener('load', TAMI_vuepressSetup)
}
