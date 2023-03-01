// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "Yari's blog",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  }
})