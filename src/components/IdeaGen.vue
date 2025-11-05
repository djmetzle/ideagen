<script setup>
import { ref } from 'vue'


const THEMES = ref([
  { text: 'Things', value: 'things' },
  { text: 'People', value: 'people' },
  { text: 'Places', value: 'places' },
  { text: 'Abstract', value: 'abstract' },
])

const theme = ref('things');

</script>

<template>
  <h3>Select a Theme:</h3>
  <select v-model="theme">
    <option v-for="themeOpt in THEMES" :value="themeOpt.value">
      {{ themeOpt.text }}
    </option>
  </select>

  <hr/>

</template>
