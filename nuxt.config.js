const Prismic = require('prismic-javascript')
const endpoint = 'https://nfrostdev.cdn.prismic.io/api/v2'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', href: '/favicon.svg'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap'}
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
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/prismic',
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
    // TODO: Figure out dotenv for this.
    endpoint: endpoint,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
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
  }
}
