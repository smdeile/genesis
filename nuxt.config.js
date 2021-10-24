import i18n from './config/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'genesis',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/i18n',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBASaDdjAMEzxmOzOt96Rj1sIT-XBXDWRM',
          authDomain: 'genesis-hackathon.firebaseapp.com',
          projectId: 'genesis-hackathon',
          storageBucket: 'genesis-hackathon.appspot.com',
          messagingSenderId: '244008342724',
          appId: '1:244008342724:web:398eed66c0f15c13b2a591',
          measurementId: 'G-19FH5ECVCF'
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          storage: true,
          database: true,
          firestore: true
        }
      }
    ]
  ],
  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: 'en',
        name: 'EN',
      },
      {
        code: 'ru',
        name: 'RU',
      }
    ],
    defaultLocale: 'ru',
    vueI18n: i18n,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
