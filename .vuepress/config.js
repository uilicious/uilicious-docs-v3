// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
	theme: defaultTheme({
		sidebar: require("./summary-to-sidebar").default
	})
}