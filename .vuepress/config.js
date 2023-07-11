// .vuepress/config.js

//
// !!! Note that the following config is for v2.0-alpha ++
//
// It is not compatible with vuepress 1++
//

import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { tocPlugin } from '@vuepress/plugin-toc'

// markdown-it plugins
import mdHintBlock from "./plugin/md_hint_block";
import mdTabsBlock from "./plugin/md_tabs_block";
import mdImplicitFigures from 'markdown-it-implicit-figures'; // figcaption support for images
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
  title: "UIlicious Docs",

  // description of the site
  description: "Learn how to automate tests for your websites with UIlicious.",

  // extra tags to inject into the page HTML <head>
  head: [
    ['link', {rel: 'icon', href: basePath + 'static/favicon/favicon-128.png'}],
    // we cannot use relative path for "og:image", we must specify the full path
    ['meta', {property: "og:image", content: "https://docs.uilicious.com" + basePath + "static/logo-og-image.png"}],
    ['meta', {property: "og:type", content: "article"}],
    // Style sheet import is not needed, as its done in styles/index.scss 
    //----------------------------------------
    // google tag manager
    googleTagManager('GTM-MQ4Q3P4'),
    //----------------------------------------
    // chat bot
    // ["link", {rel: "stylesheet", type: "text/css", href: basePath + 'static/chat/UiChatBot.css'}],
    // - using /styles/_UiChatBot.scss instead
    ["script", {src: basePath + 'static/chat/UiChatBot.js'}],
    ["script", {src: basePath + 'static/chat/UiChatBotSetup.js'}],
    //----------------------------------------
    // table of contents scroll fix (it breaks when chatbot is installed on page)
    ["script", {src: basePath + 'static/toc-scroll-fix.js'}]
  ],

  // Lets tweak the search plugin
  plugins: [
    docsearchPlugin({
      appId    : '2EBULZM0A0',
      apiKey   : '660ab480b3cb895c4b651aaad89f0ca1',
      indexName: 'uilicious',
    }),
    // table of contents
    tocPlugin()
  ],

  // And extend our markdown
  extendsMarkdown: (md) => {
    mdHintBlock(md);
    mdTabsBlock(md);
    md.use(mdImplicitFigures, {
      figcaption: true, // render alternative text in figcaption
      lazyLoading: true
    })
  }
};

function googleTagManager(container_id){
  return ["script", {}, `<!-- Google Tag Manager -->
  if(!window.gtm_injected){
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${container_id}'); 
    window.gtm_injected = true
  }
  <!-- End Google Tag Manager -->`]
}