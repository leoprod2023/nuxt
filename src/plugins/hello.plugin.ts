export default defineNuxtPlugin((nuxtApp) => {
   // From Vue doc: Note that we highly recommend using composables
   // instead of providing helpers to avoid polluting the global namespace
   // and keep your main bundle entry small.
   return {
      provide: {
         hello: (msg: string) => `Hello ${msg}!`,
      },
   };
});
