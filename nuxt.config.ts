// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   srcDir: 'src',
   devtools: { enabled: true },
   modules: ['nuxt-quasar-ui', '@nuxtjs/apollo'],
   css: ['~/assets/main.css'],
   nitro: {
      routeRules: {
         '/proxy/**': { proxy: { to: 'http://localhost:3000/**' } },
      },
   },
   apollo: {
      clients: {
         default: {
            httpEndpoint: '/proxy/graphql',
         },
      },
   },
});
