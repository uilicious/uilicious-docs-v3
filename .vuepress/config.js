// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

// Lets tweak base path to /v3/
let basePath = "/v3/"

module.exports = {

	// Lets tweak base path to /v3/
	base: basePath,

	// Change the destribution build dir
	dest: "dist" + basePath,

	// Lets load the default theme, with customization
	// thankfully we already share the similarlish green theme
	theme: defaultTheme({
		// Logo support
		logo: "/static/logo-black-text.png",
		logoDark: "/static/logo-white-text.png",

		// Navigation bar linking
		navbar: [
			{ text:"Discord", link:"https://discord.gg/DZCmSRFwq8" },
			{ text:"Blog", link:"https://uilicious.com/blog" },
			{ text:"Uilicious.com", link:"https://uilicious.com/" }
		],

		// Load the sidebar menu, from summary.md
		sidebar: require("./summary-to-sidebar").default,
		
		// Support deep nesting of subpage "table-of-content"
		sidebarDepth: 0, // don't show headers

		// Don't show contributors
		contributors: false
	}),

	// title of the site
	title: "Learn UIlicious",

	// description of the site
	description: "Learn how to automate tests for your websites with UIlicious.",

	// extra tags to inject into the page HTML <head>
	head: [
		['link', {rel: 'icon', href: basePath + 'static/favicon/favicon-128.png'}],
		// we cannot use relative path for "og:image", we must specify the full path
		['meta', {property: "og:image", content: "https://docs.uilicious.com" + basePath + "static/logo-og-image.png"}],
		['meta', {property: "og:type", content: "article"}]
	],

	// Lets tweak the search plugin
	plugins: [
		searchPlugin({
			maxSuggestions: 10,
			isSearchable: (page) => {
				if(page.path.startsWith("/dist")){
					return false
				}
				if(page.path.startsWith("/netlify-dist")){
					return false
				}
				if(page.path.startsWith("/SUMMARY")){
					return false
				}
				if(page.path.startsWith("/404")){
					return false
				}
				// for some reason, some pages have missing title even though the h1 is set
				// it seems like vuepress is not able to index headers in pages where {% tabs %} is used
				if(page.title === ""){
					if(page.frontmatter.title){ // we can fix the bug by adding title to the front matter
						page.title = page.frontmatter.title
					} else {
						console.log("[WARNING] Page with missing title: ", page.path)
						return false
					}
				}
				return true;
			},
			// allow searching the `tags` frontmatter
			getExtraFields: (page) => page.frontmatter.tags ?? [],
		}),
	],

	// And extend our markdown
	extendsMarkdown: (md) => {
		require("./plugin/md_hint_block")(md);
		require("./plugin/md_tabs_block")(md);
		require("./plugin/md_img_figcaption")(md);
	}
}