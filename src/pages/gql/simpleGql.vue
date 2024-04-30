<template>
   <h2>Test de Gql query/mutation</h2>
   <div>
      <p>queryBuscarKangourous</p>
      <pre>{{ resQuery }}</pre>
      <!--
         <p>mutationModificarKangourous</p>
         <pre>{{ resMutation }}</pre>
    -->
   </div>
</template>

<script setup>
import { mutation, query } from '../../composables/graphql.js';
import kangourousGql from '../../queries/kangourous.js';

const resMutation = ref('loading...');
const resQuery = ref('loading...');

onMounted(async () => {
   /*
   // example mutation
   resMutation.value = await mutation(kangourousGql.modificar, {
      busqueda: {},
      datos: { nombre: 'Alicia' },
      opciones: {},
      fields: 'nombre',
   });
   */

   // example query
   const { result, loading, error } = query(kangourousGql.buscar, {
      busqueda: {},
      filtro: {},
      opciones: {},
      fields: 'nombre _id',
   });
   resQuery.value = result;
});
</script>
