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
		logo: "/static/logo.png",

		// Support deep nesting of subpage "table-of-content"
		sidebarDepth:10,

		// Load the sidebar menu, from summary.md
		sidebar: require("./summary-to-sidebar").default
	}),

	plugins: [
		searchPlugin({
			maxSuggestions: 10
		}),
	]
}