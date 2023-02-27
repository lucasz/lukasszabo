// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      app: {
        layoutTransition: { name: 'page', mode: 'out-in'},
        head: {
          htmlAttrs: { lang: 'en' },
          title: 'Lukas Szabo - Personal Portfolio',
        }
      }
})
