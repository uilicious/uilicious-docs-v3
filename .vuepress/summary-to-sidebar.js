//----------------------------------------------------------------------------
//
//  # Gitbook "SUMMARY.md" to vuepress "sidebar" config converter
//
//  Have an existing gitbook site? Tired of gitbook corporate directions?
//  Port over your gitbook projects to vuepress, all you need is this tool
//  to help map over all of your existing "SUMMARY.md" to vuepress structure.
//
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//
//  Your converter settings !
//
//----------------------------------------------------------------------------

const DEFAULT_CONFIG = {

	// Tab size to use for indentation
	// this is used to detirmine the "nesting" hirachy
	TAB_SIZE: 2
}

//----------------------------------------------------------------------------
//
//  Converter implementation
//
//----------------------------------------------------------------------------

// Native deps include
const fs = require("fs");

/** Utility function to Extract link from markdown text if present **/ 
function extractMdLinkPair( line ) {

	// Lets do a regex match with the capgure groups
	let match = line.match(/\*\s\[(.*)\][\s]*\((.*)\)/)

	// no match return null
	if( match == null ) {
		return null;
	}

	// Get title and link
	let title = match[1].trim();
	let link  = match[2].trim();

	// If HTTP link, no modification is done
	if( //
		link.toLowerCase().startsWith("http://") ||
		link.toLowerCase().startsWith("https://") ||
		link.toLowerCase().startsWith("//") 
	) {
		return [ title, link ];
	}

	// Normalize the link from gitbook to vuepress format
	if(link.toLowerCase().endsWith("readme.md")) {
		link = link.slice(0, link.length - ("readme.md").length);
	}
	if(link.toLowerCase().endsWith(".md")) {
		link = link.slice(0, link.length - (".md").length);
	}
	
	// Normalize link with starting "/"
	if( !link.startsWith("/") ) {
		link = "/"+link;
	}

	// Return link pair
	return [ title, link ];
}

/** 
 * Recursively scan through the config arr, and normalize the results 
 * (mostly mapping links withoout "children" in the link format)
 **/
function finalCleanupSidebarConfig( configArr ) {
	for(let i=0; i<configArr.length; ++i) {
		let obj = configArr[i];

		// Recursively normalize the child objects if present
		if( obj.children && obj.children.length > 0 ) {
			finalCleanupSidebarConfig(obj.children);
			continue;
		}

		// Remove the children array
		delete obj.children;

		// Normalize to title path pairing
		if( obj.path && obj.title ) {
			configArr[i] = [ obj.path, obj.title ];
		}
	}

	return configArr;
}

// Class constructor is used only if you want to initialize this with custom behaviour
class SummaryToSidebarConfig {

	/**
	 * Initialize, with custom config overwrites
	 **/ 
	constructor( inConfig ) {
		this.config = inConfig || {};
	}
	
	/**
	 * Read the "SUMMARY.md" file provided at the file path, and return the respective sidebar, config array
	 * 
	 * Note that the file is read _syncronously_ intentionally, as this function is suppose to resolve for 
	 * a module.export returun in vuepress "config.js", which is probably not designed to handle async calls.
	 * 
	 * @param  filepath of the summary.md file
	 * 
	 * @return  converted sidebar array
	 **/
	convertSummaryFile( filepath = "./SUMMARY.md" ) {

		// Empty response, if file does not exists
		if( !fs.existsSync(filepath) ) {
			return null;
		}

		// Lets read the file content
		return this.convertSummaryMarkdownStr( fs.readFileSync(filepath, "utf-8") );
	}

	/**
	 * Given the markdown summary.md string, extract out the sidebar config array
	 */
	convertSummaryMarkdownStr( md_raw ) {

		// The return array
		let retArr = [];

		// Lets cleanup and convert the raw markdown to an arr
		let md_arr = this._cleanupAndConvertMarkdownStrToArray( md_raw );

		// Config context, this is used as we "dive in and out" 
		// of the table structure
		//
		// 0  : Is the root of "table of contents"
		// 1  : Is the ## headers, or root if no headers were set
		// 2  : Is typically the first * level content
		// 3+ : Are nested content
		let contextStack = [retArr, retArr];

		// Lets get some config
		let TAB_SIZE = this.getConfig("TAB_SIZE");

		// Lets iterate every item line by line
		for(let n=0; n<md_arr.length; ++n) {

			// Get the current line
			let line = md_arr[n];
			let lineTrim = line.trim();

			// Lets process according to type
			if( lineTrim.startsWith("#") ) {
				// Handle header bars
				// --------------------------------

				// Lets get the header str, without the "#"
				let headerStr = lineTrim;
				while(headerStr.startsWith("#")) {
					headerStr = headerStr.slice(1).trim();
				}

				// Given the header str, register it
				let headerObj = { title:headerStr, children: [] };
				retArr.push( headerObj )

				// Reset the context stack
				contextStack[1] = headerObj.children;
				contextStack.length = 2;
			} else if( lineTrim.startsWith("*") ) {
				// Handle as a navigation item
				// --------------------------------

				// Get the offset level
				let offsetLevel = Math.floor( line.indexOf("*") / TAB_SIZE );
				
				// Get title and link pair
				let linkPair = extractMdLinkPair( lineTrim );

				// Lets build the "link obj"
				let linkObj = null;
				if( linkPair == null ) {
					// No link pair, the whole line is the title
					linkObj = {
						title: lineTrim.slice(1).trim(), 
						children: []
					}
				} else {
					// Register with title + link pairing
					linkObj = {
						title: linkPair[0], 
						path: linkPair[1],
						children: []
					}
				}

				// Compute the "parent index", and "floor" it accordingly
				let parentIdx = 1 + offsetLevel;
				if( parentIdx >= contextStack.length ) {
					parentIdx = contextStack.length - 1;
				}

				// Register into the current parent context
				contextStack[ parentIdx ].push( linkObj );

				// Compute the "child index" which is nested
				// and register the object into context
				let childIdx = parentIdx + 1;
				contextStack[ childIdx ] = linkObj.children;
				contextStack.length = childIdx + 1;
			}
		}

		// Final cleanup
		return finalCleanupSidebarConfig(retArr);

		// The fully computed arr
		return retArr;
	}

	_cleanupAndConvertMarkdownStrToArray( md_raw ) {

		// The variable for the cleaned up markdown str
		let md_clean = md_raw;
		
		// Remove prefront content
		// ---
		// This matches against the "---" at the start of a line
		let trippleDashRegex = /^[\\-]{3,}/mg;
		if( trippleDashRegex.test(md_clean) && trippleDashRegex.lastIndex == 3 ) {
			// If we are inside this block, means the file started with ---
			// lets find where it ends, by calling the regex test again
			// if an unexpected result occurs, we throw an error
			if( trippleDashRegex.test(md_clean) && trippleDashRegex.lastIndex <= 3 ) {
				throw "Unable to match closing prefront matter '---'"
			}

			// Ok we got the lastIndex, lets slice off the content
			md_clean = md_clean.slice( trippleDashRegex.lastIndex );
		}

		// Remove HTML comment blocks
		md_clean = md_clean.replaceAll(/<!--(.*?)-->/g, "");

		// Lets convert tabs to spaces
		let TAB_SIZE = this.getConfig("TAB_SIZE");
		md_clean.replaceAll( new RegExp(`[\\t]`, "mg"), function(tab) {
			let ret = "";
			for(let i=0; i<TAB_SIZE; i++) {
				ret += " ";
			}
			return ret;
		} )

		// Convert to array, and remove empty strings
		let md_arr = md_clean.split("\n").filter((line) => {
			return line.trim().length >= 1
		});

		// Lets remove the first "# Table of contents" / "# summary" found in gitbook
		let firstLine = md_arr[0].trim().toLowerCase();
		if( md_arr.length > 0 && (
			firstLine.startsWith("# table of content") ||
			firstLine.startsWith("# summary")
		 ) ) {
			md_arr = md_arr.slice(1);
		}

		// Lets return the array
		return md_arr;
	}

	/**
	 * Get and return the config value, either by default, or set for this class
	 */
	getConfig(name) {
		return (this.config[name] || DEFAULT_CONFIG[name]);
	}
}

// Map the SUMMAR.md by default, and return it
SummaryToSidebarConfig.default = (new SummaryToSidebarConfig()).convertSummaryFile("./SUMMARY.md");

//----------------------------------------------------------------------------
//
//  Converter execution and return
//
//----------------------------------------------------------------------------
module.exports = SummaryToSidebarConfig
