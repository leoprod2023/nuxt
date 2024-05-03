<template>
   <div id="app-footer">
      <p>{{ text }}</p>
      <p>
         <nuxt-link to="/">Home</nuxt-link> |
         <nuxt-link to="/personas">Personas</nuxt-link>
      </p>
   </div>
</template>

<script setup>
const { text } = defineProps({ text: String });
</script>
