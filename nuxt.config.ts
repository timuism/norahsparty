// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: true,
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  devtools: { enabled: true }
})
