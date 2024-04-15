// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@formkit/auto-animate",
    "nuxt-icon",
    "@nuxthq/studio",
    "nuxt-content-assets"
  ]
})