import { s } from '../composables/graphql.js';

export const buscar = (variables) => {
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

export const modificar = (params) => {
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

export default kangourousGql = { buscar, modificar };
