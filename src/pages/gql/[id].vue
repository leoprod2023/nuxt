<template>
   <h2>Modificar una persona</h2>
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
      <div v-if="q_submitted">
         <lista-personas :personas="personas" />
      </div>
   </div>
</template>

<script setup>
import { mutation, query } from '../../composables/graphql.js';
import personasGql from '../../queries/personas.js';

const { id } = useRoute().params;

const q_file = ref();
const q_nombre = ref();
const q_submitted = ref(false);
const personas = ref([]);

const imagePreview = ref(null);
let imagen = null;

async function submitForm() {
   const datos = {};
   if (q_nombre.value) {
      Object.assign(datos, { nombre: q_nombre.value });
   }
   if (q_file.value) {
      Object.assign(datos, { imagen: q_file.value });
   }
   const res = await mutation(personasGql.modificar, {
      busqueda: { _id: id },
      datos,
      opciones: {},
      fields: '_id nombre imagen',
   });
   personas.value = res.data.personaModificar;
   q_submitted.value = true;
}

watch(q_file, async () => {
   if (q_file.value instanceof Blob) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', async () => {
         imagePreview.value = fileReader.result;
         imagen = q_file.value;
      });
      fileReader.readAsDataURL(q_file.value);
   }
});
</script>
