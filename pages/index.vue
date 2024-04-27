<template>
   <div>
      <h1>Index</h1>
      <h2>config</h2>
      <p>privateKey : {{ $config.privateKey }}</p>
      <p>publicKey : {{ $config.public.publicKey }}</p>
      <h2>components</h2>
      <MyComponent> This is an auto-imported component </MyComponent>
      <h2>Links</h2>
      <NuxtLink to="/hellolio">Hello Lio</NuxtLink>
      <NuxtLink to="/hellowill">Hello Will</NuxtLink>
      <pre>{{ res }}</pre>
   </div>
</template>

<script setup lang="ts">
import '~/assets/css/index.css';

definePageMeta({
   title: 'My home page',
});
console.log(useRuntimeConfig().privateKey);
console.log(useRuntimeConfig().public.publicKey);

const query = gql`
   mutation (
      $busqueda: BuscarPersonaDto!
      $datos: ModificarPersonaDto!
      $opciones: Opciones
   ) {
      modificarPersonas(busqueda: $busqueda, datos: $datos, opciones: $opciones) {
         nombre
         imagen
      }
   }
`;

const variables = {
   busqueda: {},
   datos: { nombre: 'toto' },
   opciones: { limit: 1 },
};

const { mutate } = await useMutation(query, { variables });
const res = await mutate();
</script>
