const Prismic = require('prismic-javascript')
const endpoint = 'https://nfrostdev.cdn.prismic.io/api/v2'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio - Nick Frost',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', href: '/favicon.svg'},
      {rel: 'preconnect', href: 'https://nfrostdev.prismic.io'},
      {rel: 'preconnect', href: 'https://nfrostdev.cdn.prismic.io'},
      {rel: 'preconnect', href: 'https://static.cdn.prismic.io'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv',
    '@nuxtjs/prismic',
    '@nuxtjs/sitemap',
    ['@nuxtjs/component-cache', {maxAge: 1000 * 60 * 60}],
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLayerGroup', 'faFileAlt']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['faEnvelope']
        },
      ]
    }]
  ],
  prismic: {
    endpoint: endpoint,
    components: false,
    deferLoad: true,
    preview: false,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes() {
      return Prismic.getApi(endpoint)
        .then(api => api.query(Prismic.Predicates.at('document.type', 'project')))
        .then(response => response.results.map(result => '/' + result.uid));
    }
  },
  sitemap: {
    hostname: 'https://www.nfrost.dev',
    routes() {
      return Prismic.getApi(endpoint)
        .then(api => api.query(Prismic.Predicates.at('document.type', 'project')))
        .then(response => response.results.map(result => {
          return {
            url: '/' + result.uid,
            lastmod: result.last_publication_date
          }
        }));
    }
  }
}
