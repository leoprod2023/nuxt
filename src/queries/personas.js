import { s } from '../composables/graphql.js';

export const buscar = (variables) => {
   return gql`
      query {
         personaBuscar(
            busqueda: ${s(variables.busqueda)},
            opciones: ${s(variables.opciones)}
         ) {
            ${variables.fields}
         }
      }
   `;
};

export const modificar = (params) => {
   return gql`
   mutation (
      $busqueda: BuscarPersonaDto!,
      $datos: ModificarPersonaDto!,
      $opciones: OpcionesDto
   ) {
      personaModificar(
         busqueda: $busqueda,
         datos: $datos,
         opciones: $opciones
      ) { ${params} }
   }`;
};

export default { buscar, modificar };
