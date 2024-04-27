// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   $production: {},
   $development: {
      devtools: { enabled: true },
   },
   modules: ['nuxt-quasar-ui', '@nuxt/content', '@nuxtjs/apollo'],
   nitro: {
      routeRules: {
         '/proxy/**': { proxy: { to: 'http://localhost:5000/**' } },
      },
   },
   apollo: {
      clients: {
         default: {
            httpEndpoint: '/proxy/graphql',
         },
      },
   },
   css: ['~/assets/css/main.css'],
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      head: {
         link: [
            {
               rel: 'stylesheet',
               href: 'https://www.w3schools.com/w3css/4/w3.css',
            },
         ],
      },
   },
   runtimeConfig: {
      // NUXT_PRIVATE_KEY = FOO <-- .env prioritario
      privateKey: 'private2',
      public: {
         // NUXT_PUBLIC_PUBLIC_KEY = BAR <-- .env prioritario
         publicKey: ['1', '2', '3'],
      },
   },
});
