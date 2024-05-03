<template>
   <div id="app-header">
      <p>
         <span class="titulo">{{ text }}</span>
         <nuxt-link to="/">Home</nuxt-link>
         <nuxt-link to="/personas">Personas</nuxt-link>
         <nuxt-link to="/lorem">Lorem</nuxt-link>
         <nuxt-link to="/ipsum">Ipsum</nuxt-link>
      </p>
   </div>
</template>

<script setup>
const { text } = defineProps({ text: String });
</script>
