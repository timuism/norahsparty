// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    // configPath: 'tailwind.config.ts'
  },
  googleFonts: {
    families: {
      Caveat: [400, 600],
      'DM Sans': {
        wght: [400, 500, 700],
        ital: [400, 500]
      }
    }
  },
  devtools: { enabled: true }
})
