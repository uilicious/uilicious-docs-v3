// .vuepress/config.js

//
// !!! Note that the following config is for v1.9+
// 
// There is major breaking changes to how theme config is handled from 2.0-alpha 
//
module.exports = {
	themeConfig: {
		sidebar: require("./summary-to-sidebar").default
		
		//require("./summary-to-sidebar").default
	}
}