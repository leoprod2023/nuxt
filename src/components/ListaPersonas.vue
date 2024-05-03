<template>
   <ul>
      <li v-for="persona in personas" :key="persona._id">
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
      </li>
   </ul>
</template>

<script setup>
const { personas, showModificar } = defineProps({
   personas: Array,
   showModificar: Boolean,
});
if (personas.personaBuscar) {
   personas = personas.personaBuscar;
}
onMounted(async () => {
   if (personas.personaBuscar) {
      personas = personas.personaBuscar;
   }
});
</script>

<style scoped>
ul {
   padding: 0;
}
li {
   display: block;
   padding: 10px;
}
li .image {
   display: inline-block;
   margin-right: 10px;
}
li .info {
   display: inline-block;
}
li:nth-child(even) {
   background: #eee;
}
li:nth-child(odd) {
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
