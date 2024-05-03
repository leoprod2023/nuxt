/**
 * getData
 * para recuperar los documentos sin el nombre de la consulta
 * ejemplo : { personaBuscar: [ persona1, persona2 ... ]} => [ persona1, persona2 ... ]
 */
const getData = (res) => {
   const keys = Object.keys(res);
   if (keys.length === 0) {
      console.log('error getData');
   }
   return res[keys[0]];
};

/**
 * queryAndAssign
 * ! solo retorna el valor al cambiar de ruta, tiene si o si que
 * ! asignarse a una ref porque no se puede confiar en el return
 */
export function queryAndAssign(query, variables, ref = null) {
   // lanzamos la consulta
   const { result, loading, error } = useQuery(
      gql`
         ${query}
      `,
      variables,
   );

   // para actualizar la ref al hacer F5
   watch(result, (value) => {
      if (ref) {
         ref.value = getData(value);
      }
      // TODO unwatch
   });

   // para actualizar la ref al cambiar la ruta
   if (ref && result.value) {
      ref.value = getData(result.value);
      return ref.value;
   }

   return null;
}

/**
 * mutateAndAssign
 */
export async function mutateAndAssign(mutation, variables, ref) {
   // lanzamos la consulta para recuperar la mutacion
   const { mutate, error } = useMutation(
      gql`
         ${mutation}
      `,
   );

   // lanzamos la mutacion con las variables
   const { data } = await mutate(variables);

   // recuperamos los documentos sin el nombre de la consulta
   const root = Object.keys(data).pop();

   // actualizamos la ref
   ref.value = data[root];

   // retornamos el resultado
   return data[root];
}

export default { queryAndAssign, mutateAndAssign };
