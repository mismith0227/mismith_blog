const { getConfigForKeys } = require("./src/lib/config.js");
const ctfConfig = getConfigForKeys([
  "CTF_BLOG_POST_TYPE_ID",
  "CTF_SPACE_ID",
  "CTF_CDA_ACCESS_TOKEN"
]);
const { createClient } = require("./src/plugins/contentful");
const cdaClient = createClient(ctfConfig);

module.exports = {
  srcDir: "src/",
  /*
   ** Headers of the page
   */
  head: {
    title: "nuxt_blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      {
        name: "google-site-verification",
        content: "p66tw3S0Pws_FfywKFt06jbDvzDE4v4IkgupQKLLeoM"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  modules: [
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-3346235264094165",
        pageLevelAds: true
      }
    ]
  ],

  plugins: [{ src: "~plugins/contentful" }],

  generate: {
    routes() {
      return cdaClient
        .getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
        })
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)];
        });
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
};
