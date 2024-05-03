export const buscar = (fields) => {
   return `
      query (
         $busqueda: BuscarPersonaDto!,
         $opciones: OpcionesDto
      ) {
         personaBuscar(
            busqueda: $busqueda,
            opciones: $opciones
         ) { ${fields} }
      }
   `;
};

export const modificar = (fields) => {
   return `
      mutation (
         $busqueda: BuscarPersonaDto!,
         $datos: ModificarPersonaDto!,
         $opciones: OpcionesDto
      ) {
         personaModificar(
            busqueda: $busqueda,
            datos: $datos,
            opciones: $opciones
         ) { ${fields} }
      }
   `;
};

export default { buscar, modificar };
