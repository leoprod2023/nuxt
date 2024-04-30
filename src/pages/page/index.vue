<template>
   <div>
      <p>Page</p>
      <p><nuxt-link to="/">index</nuxt-link></p>
      <input v-model="input" />
      <p>{{ input }}</p>
   </div>
</template>

<script setup>
// Cambiamos el layout
definePageMeta({ layout: 'page' });

// refs
const input = ref('escriba algo');
</script>
