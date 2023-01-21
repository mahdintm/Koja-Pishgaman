export default {
  ssr: true,
  pageTransition: {
    name: 'default',
    mode: 'out-in',
  },
  fontawesome: {
    icons: {
      solid: true,
      // brands: true,
    },
  },
  env: {
    Host_MYSQL: '172.30.20.10',
    Username_MYSQL: 'Pishgaman',
    Password_MYSQL: 'ZZKjQSxuCV9rH3xv',
    Database_MYSQL_Main: 'Pishgaman',
    Port_MYSQL: 3306,
  },
  head: {
    title: 'داشبورد پیشگامان',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'img/logo.png' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/fontawesome'],
  serverMiddleware: [
    { path: '/api', handler: '~/server/app.js' },
    { path: '/uploadCenter', handler: '~/server/upload.js' },
  ],
  modules: ['bootstrap-vue/nuxt'],
  axios: {
    baseURL: '/',
  },
  build: {},
}
