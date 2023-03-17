// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import mdHintBlock from "./plugin/md_hint_block";
import mdImgFigCaption from "./plugin/md_img_figcaption";
import mdTabsBlock from "./plugin/md_tabs_block";
import summaryToSidebar from "./summary-to-sidebar";

// Lets tweak base path to /v3/
let basePath = "/v3/"

export default {
  // Lets tweak base path to /v3/
  base: basePath,

  // Change the destribution build dir
  dest: "dist" + basePath,

  // Lets load the default theme, with customization
  // thankfully we already share the similarlish green theme
  theme: defaultTheme({
    // Logo support
    logo    : "/static/logo-black-text.png",
    logoDark: "/static/logo-white-text.png",

    // Navigation bar linking
    navbar: [
      {text: "Discord", link: "https://discord.gg/DZCmSRFwq8"},
      {text: "Blog", link: "https://uilicious.com/blog"},
      {text: "Uilicious.com", link: "https://uilicious.com/"}
    ],

    // Load the sidebar menu, from summary.md
    sidebar: summaryToSidebar.default,

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
    ['meta', {property: "og:type", content: "article"}],
    // Style sheet import is not needed, as its done in styles/index.scss
    ["link", {rel: "stylesheet", type: "text/css", href: basePath + 'static/chat/UiChatBot.css'}],
    // Lets include the chatbot plugin
    ["script", {src: basePath + 'static/chat/UiChatBot.js'}],
    ["script", {src: basePath + 'static/chat/UiChatBotSetup.js'}]
  ],

  // Lets tweak the search plugin
  plugins: [
    docsearchPlugin({
      appId    : '2EBULZM0A0',
      apiKey   : '660ab480b3cb895c4b651aaad89f0ca1',
      indexName: 'uilicious',
    })
  ],

  // And extend our markdown
  extendsMarkdown: (md) => {
    mdHintBlock(md);
    mdTabsBlock(md);
    mdImgFigCaption(md);
  }
};
