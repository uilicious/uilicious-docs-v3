// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
	theme: defaultTheme({
		// Logo support
		logo: "/static/logo-black-text.png",
		logoDark: "/static/logo-white-text.png",

		// Navigation bar linking
		navbar: [
			{ text:"Discord", link:"https://discord.gg/DZCmSRFwq8" },
			{ text:"Blog", link:"https://uilicious.com/blog" },
			{ text:"Login", link:"https://user.uilicious.com/login/" }
		],

		// Load the sidebar menu, from summary.md
		sidebar: require("./summary-to-sidebar").default,
		// Support deep nesting of subpage "table-of-content"
		sidebarDepth:10
	}),

	plugins: [
		searchPlugin({
			maxSuggestions: 10
		}),
	],

	extendsMarkdown: (md) => {
		require("./plugin/md_hint_block")(md);
	}
}