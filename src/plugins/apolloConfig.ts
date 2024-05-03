import { from, ApolloLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { provideApolloClient } from '@vue/apollo-composable';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.$apollo.$loadingKey = 'loading';
   nuxtApp.$apollo.defaultClient.setLink(
      from([
         onError((err) => {
            nuxtApp.callHook('apollo:error', err); // must be called bc `@nuxtjs/apollo` will not do it anymore
         }),
         setContext(async (_, { headers }) => {
            return {
               headers: {
                  ...headers,
                  'Apollo-Require-Preflight': 'true',
               },
            };
         }),
         createUploadLink({
            uri: '/proxy/graphql',
            useGETForQueries: false,
         }),
      ]),
   );
   provideApolloClient(nuxtApp.$apollo.defaultClient);
});
