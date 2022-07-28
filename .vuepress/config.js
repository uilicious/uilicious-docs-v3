// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {

	// Lets tweak base path to /v3/
	base: "/v3/",

	// Change the destribution build dir
	dest: ".dist/v3/",

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
		sidebarDepth:10
	}),

	// Lets tweak the search plugin
	plugins: [
		searchPlugin({
			maxSuggestions: 10
		}),
	],

	// And extend our markdown
	extendsMarkdown: (md) => {
		require("./plugin/md_hint_block")(md);
		require("./plugin/md_tabs_block")(md);
		require("./plugin/md_img_figcaption")(md);
	}
}