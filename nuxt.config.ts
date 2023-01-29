// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores'],
  },
  css: [
    '~/assets/style/global.scss'
  ],
  modules: [
    'nuxt-windicss',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    meta: {
      title: 'Конкурс',
      author: 'M/D'
    },
    manifest: {
      name: 'IT-pro',
      short_name: 'IT-pro',
      description: 'Конкурс IT-Pro',
      lang: 'ru',
    },
    icon: {
      fileName: 'android-chrome-512x512.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
