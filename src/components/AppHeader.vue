<template>
   <div id="app-header">
      <p>{{ text }}</p>
      <p>
         <nuxt-link to="/">Home</nuxt-link> |
         <nuxt-link to="/gql/simpleGql">Gql</nuxt-link> |
         <nuxt-link to="/gql/upload">Gql upload</nuxt-link>
      </p>
   </div>
</template>

<script setup>
const { text } = defineProps({ text: String });
</script>
