// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   srcDir: 'src',
   devtools: { enabled: true },
   modules: ['nuxt-quasar-ui', '@nuxtjs/apollo', '@nuxt/image'],
   css: ['~/assets/main.css'],
   nitro: {
      routeRules: {
         '/proxy/**': { proxy: { to: 'http://localhost:3000/**' } },
         // '/proxy/**': {
         //    proxy: { to: 'https://siipi-gestion-production.up.railway.app/**' },
         // },
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
