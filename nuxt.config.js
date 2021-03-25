module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fore-ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },

  css: [
    '~assets/styles/app.scss'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          }
        }
      }
    }
  },

  loading: { color: '#3B8070' },

  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

