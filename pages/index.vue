<template>
   <div>
      <p>mutationModificarKangourous</p>
      <pre>{{ resMutation }}</pre>
      <p>queryBuscarKangourous</p>
      <pre>{{ resQuery }}</pre>
   </div>
</template>

<script setup>
import stringifyObject from 'stringify-object';

const resMutation = ref('loading...');
const resQuery = ref('loading...');
/*
const queryBuscarKangourous = (params) => {
   return gql`query (
      $busqueda: BuscarKangourouDto!,
      $filtro: BuscarKangourouDto!,
      $opciones: BuscarOpciones
   ) {
      buscarKangourous(
         busqueda: $busqueda,
         filtro: $filtro,
         opciones: $opciones
      ) { ${params} }
   }`;
};

const mutationModificarKangourous = (params) => {
   return gql`mutation (
      $busqueda: BuscarKangourouDto!,
      $datos: ModificarKangourouDto!,
      $opciones: ModificarOpciones
   ) {
      modificarKangourous(
         busqueda: $busqueda,
         datos: $datos,
         opciones: $opciones
      ) { ${params} }
   }`;
};
*/

const s = (v) => stringifyObject(v, { singleQuotes: false });
const queryBuscarKangourous = (variables) => {
   return gql`
         query {
            buscarKangourous(
               busqueda: ${s(variables.busqueda)},
               filtro: ${s(variables.filtro)},
               opciones: ${s(variables.opciones)}
            ) {
               ${variables.fields}
            }
         }
      `;
};
const mutationModificarKangourous = (params) => {
   return gql`mutation (
      $busqueda: BuscarKangourouDto!,
      $datos: ModificarKangourouDto!,
      $opciones: ModificarOpciones
   ) {
      modificarKangourous(
         busqueda: $busqueda,
         datos: $datos,
         opciones: $opciones
      ) { ${params} }
   }`;
};

const query = (queryf, variables) => {
   return useQuery(queryf(variables));
};
const mutation = async (mutationf, variables) => {
   const { mutate } = useMutation(mutationf(variables.fields), {
      variables,
   });
   return await mutate();
};

onMounted(async () => {
   // example mutation
   resMutation.value = await mutation(mutationModificarKangourous, {
      busqueda: {},
      datos: { nombre: 'Alicia' },
      opciones: {},
      fields: 'nombre',
   });

   // example query
   const { result, loading, error } = query(queryBuscarKangourous, {
      busqueda: {},
      filtro: {},
      opciones: {},
      fields: 'nombre',
   });
   resQuery.value = result;
});
</script>
