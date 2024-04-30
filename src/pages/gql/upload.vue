<template>
   <h2>Test de Gql con upload de archivo</h2>
   <div>
      <q-form @submit="submitForm">
         <div>
            <q-input label="Seleccionar nombre" v-model="q_nombre" clearable />
            <q-file
               v-model="q_file"
               label="Seleccionar imagen"
               accept=".jpg, .png, .jpge"
               max-total-size="560000"
               hint="Tamaño máximo de imagen 540KB"
               clearable
            >
            </q-file>
         </div>

         <div v-if="imagePreview" style="width: 200px; height: 200px">
            <q-img
               style="width: 100%; height: 100%; object-fit: cover"
               :src="imagePreview"
            ></q-img>
         </div>

         <div>
            <q-btn type="submit">Sumbit</q-btn>
         </div>
      </q-form>
      <div>
         <pre>{{ data1 }}</pre>
         <pre>{{ data2 }}</pre>
         <pre>{{ data3 }}</pre>
      </div>
   </div>
</template>

<script setup>
import { mutation, query } from '../../composables/graphql.js';
import kangourousGql from '../../queries/kangourous.js';

const q_file = ref();
const q_nombre = ref();
const data1 = ref('loading...');
const data2 = ref('loading...');
const data3 = ref('loading...');
const imagePreview = ref(null);

async function submitForm() {
   const datos = {
      nombre: q_nombre.value,
   };
   if (imagePreview.value) {
      Object.assign(datos, { imagen: imagePreview.value });
   }
   console.log(datos);
   data3.value = await mutation(kangourousGql.modificar, {
      busqueda: {},
      datos,
      opciones: {},
      fields: 'nombre imagen',
   });
}

watch(q_file, async () => {
   if (q_file.value instanceof Blob) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', async () => {
         imagePreview.value = fileReader.result;
         data1.value = 'file loaded';
      });
      fileReader.readAsDataURL(q_file.value);
      data2.value = 'file selected';
   }
});
</script>
