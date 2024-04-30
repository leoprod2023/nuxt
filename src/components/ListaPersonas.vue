<template>
   <ul>
      <q-li v-for="persona in personas" :key="persona._id">
         <div class="image" v-if="persona.imagen">
            <img
               height="40px"
               :src="'http://localhost:3000/public/personas/' + persona.imagen"
            />
         </div>
         <div class="info">
            {{ persona.nombre }}
            <br />
            <span v-if="showModificar">
               <NuxtLink :to="'/gql/' + persona._id">Modificar</NuxtLink>
            </span>
         </div>
      </q-li>
   </ul>
</template>

<script setup>
const { personas, showModificar } = defineProps({
   personas: Array,
   showModificar: Boolean,
});
</script>

<style scoped>
q-ul,
ul {
   padding: 0;
}
q-li {
   display: block;
   padding: 10px;
}
q-li .image {
   display: inline-block;
   margin-right: 10px;
}
q-li .info {
   display: inline-block;
}
q-li:nth-child(even) {
   background: #eee;
}
q-li:nth-child(odd) {
   background: #ccc;
}
</style>

<!--
   <NuxtImg
   :src="
   'http://localhost:3000/public/persona/50x50/' + persona.imagen
   "
   />
</li>
-->
