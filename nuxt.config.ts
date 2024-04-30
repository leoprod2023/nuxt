// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   srcDir: 'src',
   devtools: { enabled: true },
   modules: ['@nuxtjs/apollo'],
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
