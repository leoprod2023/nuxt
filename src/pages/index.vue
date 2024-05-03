<template>
   <!--h2>Home</h2-->
   <input v-model="input" />
   <p>{{ input }}</p>
   <p>{{ $hello('world') }}</p>
</template>

<script setup>
definePageMeta({ layout: 'home' });
const { $hello } = useNuxtApp();
const input = ref($hello('world!!'));
</script>
