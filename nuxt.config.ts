// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    dir: {
      pages: `pages/website1`
      //pages: `pages/${process.env.WEBSITE_ID}`
    },
  }
})
