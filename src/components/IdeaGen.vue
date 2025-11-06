<script setup>
import { ref } from 'vue'


const THEMES = ref([
  { text: 'Things', value: 'things' },
  { text: 'People', value: 'people' },
  { text: 'Places', value: 'places' },
  { text: 'Abstract', value: 'abstract' },
])

const theme = ref('things');

const adjective = ref('some');
const subject = ref('thing');
const environment = ref('at');
const style = ref('style');

</script>

<template>
  <h3>Select a Theme:</h3>
  <select v-model="theme">
    <option v-for="themeOpt in THEMES" :value="themeOpt.value">
      {{ themeOpt.text }}
    </option>
  </select>

  <hr/>

  <h5>Try:</h5>
  <div class="generated">
    A
    <span> {{adjective}} </span>
    <span>{{subject}}</span>
    at
    <span>{{environment}}</span>
    in a
    <span>{{style}}</span>
    style
  </div>

</template>

<style>
span {
  margin: 0.5rem;
  background: #444;
  padding: 0.5rem;
}
</style>
