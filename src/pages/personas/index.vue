<template>
   <!--h2>Personas <span :v-if="loadingGlobal.value">(LOADING)</span></h2-->
   <div>
      <lista-personas :personas="personas" showModificar />
   </div>
</template>

<script setup>
import personasGql from '../../queries/personas.js';
const loadingGlobal = ref(false);

const personas = ref([]);
onMounted(() => {
   // Buscar todas las personas, el resultado va en la ref "persona" para el widget
   queryAndAssign(
      personasGql.buscar('nombre imagen _id'),
      { busqueda: {}, opciones: {} },
      personas,
   );
});
</script>
