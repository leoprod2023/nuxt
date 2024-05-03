// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   srcDir: 'src',
   devtools: { enabled: true },
   modules: ['nuxt-quasar-ui', '@nuxtjs/apollo', '@nuxt/image'],
   css: ['~/assets/main.css'],
   plugins: ['~/plugins/hello.plugin.ts'],
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
