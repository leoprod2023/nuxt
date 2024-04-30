<template>
   <h2>Test de Gql query/mutation</h2>
   <div>
      <p>queryBuscarPersonas</p>
      <ul>
         <li v-for="persona in personas" :key="persona._id">
            {{ persona.nombre }}
            <br />
            <div v-if="persona.imagen">
               <img
                  height="40px"
                  :src="'http://localhost:3000/public/personas/' + persona.imagen"
               />
               <br />
            </div>
            <NuxtLink :to="'/gql/' + persona._id">Modificar</NuxtLink>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { query } from '../../composables/graphql.js';
import personasGql from '../../queries/personas.js';

const personas = ref([]);

onMounted(async () => {
   const { result, loading, error } = query(personasGql.buscar, {
      busqueda: {},
      opciones: {},
      fields: 'nombre imagen _id',
   });
   personas.value = result.value.personaBuscar;
});
</script>
