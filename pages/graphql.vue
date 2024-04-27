<template>
   <div>
      <div>
         <q-file
            v-model="file"
            label="Seleccionar imagen"
            accept=".jpg, .png, .jpge"
            max-total-size="560000"
            counter
            outlined
            dense
            hint="Tamaño máximo de imagen 540KB"
            clearable
         >
         </q-file>
         <div v-if="imagePreview" style="width: 200px; height: 200px; margin: auto">
            <q-img
               style="width: 100%; height: 100%; object-fit: cover"
               :src="imagePreview"
            ></q-img>
         </div>
      </div>

      <pre>{{ data1 }}</pre>
      <pre>{{ data2 }}</pre>
      <pre>{{ data3 }}</pre>
   </div>
</template>

<script setup>
const file = ref();
const data1 = ref();
const data2 = ref();
const data3 = ref();
const imagePreview = ref();
const querymod = gql`
   mutation (
      $busqueda: BuscarPersonaDto!
      $datos: ModificarPersonaDto!
      $opciones: Opciones
   ) {
      modificarPersonas(busqueda: $busqueda, datos: $datos, opciones: $opciones) {
         nombre
         imagen
      }
   }
`;

watch(file, async () => {
   if (file.value instanceof Blob) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', async () => {
         imagePreview.value = fileReader.result;
         const { mutate } = await useMutation(querymod, {
            variables: {
               busqueda: {},
               datos: { nombre: 'leo', imagen: file.value },
               opciones: { limit: 1 },
            },
         });
         data3.value = await mutate();
      });
      fileReader.readAsDataURL(file.value);
   }
});
</script>
