<template>
   <h2>Personas</h2>
   <div>
      <lista-personas :personas="personas" showModificar />
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
