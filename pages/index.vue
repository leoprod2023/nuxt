<template>
   <div>
      <p>mutationModificarKangourous</p>
      <pre>{{ resMutation }}</pre>
      <p>queryBuscarKangourous</p>
      <pre>{{ resQuery }}</pre>
   </div>
</template>

<script setup>
const resMutation = ref('loading...');
const resQuery = ref('loading...');

import { mutation, query } from '../composables/graphql.js';
import kangourousGql from '../queries/kangourous.js';

onMounted(async () => {
   // example mutation
   resMutation.value = await mutation(kangourousGql.modificar, {
      busqueda: {},
      datos: { nombre: 'Alicia' },
      opciones: {},
      fields: 'nombre',
   });

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
