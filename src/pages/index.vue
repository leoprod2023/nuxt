<template>
   <h2>Home</h2>
   <div>
      <input v-model="input" />
      <p>{{ input }}</p>
   </div>
</template>

<script setup>
// refs
const input = ref('Hello world');
</script>
