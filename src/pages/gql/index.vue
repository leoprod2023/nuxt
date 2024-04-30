<template>
   <h2>Test de Gql query/mutation</h2>
   <div>
      <p>queryBuscarKangourous</p>
      <ul>
         <li v-for="kangourou in kangourous" :key="kangourou._id">
            {{ kangourou.nombre }}
            <br />
            <img
               :src="'http://localhost:3000/public/kangourou/50x50/' + kangourou.imagen"
            />
            <br />
            <NuxtLink :to="'/gql/' + kangourou._id">Modificar</NuxtLink>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { query } from '../../composables/graphql.js';
import kangourousGql from '../../queries/kangourous.js';

const kangourous = ref([]);

onMounted(async () => {
   const { result, loading, error } = query(kangourousGql.buscar, {
      busqueda: {},
      filtro: {},
      opciones: {},
      fields: 'nombre imagen _id',
   });
   kangourous.value = result.value.buscarKangourous;
});
</script>
