<template>
   <div>
      <p>Page {{ id }}</p>
      <p><nuxt-link to="/">index</nuxt-link></p>
   </div>
</template>

<script setup>
// Cambiamos el layout
definePageMeta({ layout: 'page' });

// recuperamos los parametros de la ruta
const { id } = useRoute().params;
</script>
