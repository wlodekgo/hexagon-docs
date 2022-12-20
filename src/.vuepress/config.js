const title = "Hexagon documentation";
const description = "";
const author = "Golem Foundation";
const ogprefix = "og: http://ogp.me/ns#";

module.exports = {
  base: "/hexagon-docs/",	
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { prefix: ogprefix, property: "og:title", content: title }],
    ["meta", { prefix: ogprefix, property: "twitter:title", content: title }],
    ["meta", { prefix: ogprefix, property: "og:type", content: "article" }],
    [
      "meta",
      {
        prefix: ogprefix,
        property: "og:url",
        content: "https://docs.wildland.io",
      },
    ],
    [
      "meta",
      { prefix: ogprefix, property: "og:description", content: description },
    ],
    [
      "meta",
      { prefix: ogprefix, property: "og:article:author", content: author },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
    ],
    ["apple-touch-icon", { sizes: "512x512", href: "/favicon-512.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    [
      "script",
      {},
      `document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("logo")) {
          e.preventDefault();
          window.location = "https://wildland.io"
        }
      })`,
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    logo: "/logo.svg",
    nav: [
      {
        text: "Launch Hexagon MVP",
        link: "https://web.dev",
      },
    ],
    sidebar: [
      {
        title: "Introduction",
        path: "/",
      },
      {
        title: "Why are we doing this?",
        path: "/why-are-we-doing-this",
      },
      {
        title: "How it works",
        path: "/how-it-works",
      },
      {
        title: "Using the app",
        path: "/using-the-app",
      },
      {
        title: "Propose a project",
        path: "/propose-a-project",
      },
      {
        title: "Technical outline",
        path: "/technical-outline",
      },
      {
        title: "Hexagon Paper ",
        path: "https://web.dev",
      },
      {
        title: "Discord ",
        path: "https://web.dev",
      },
      {
        title: "Snapshot ",
        path: "https://web.dev",
      },
      {
        title: "Terms of Use ",
        path: "/terms-of-use",
      },
      {
        title: "© 2022 Golem Foundation Zug, Switzerland",
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
};
