<script setup>
import { ref } from 'vue'

import Subjects from '../data/subject.json'
import Adjectives from '../data/adjective.json'
import Environments from '../data/environment.json'
import Styles from '../data/style.json'

const THEMES = ref([
  { text: 'Things', value: 'things' },
  { text: 'People', value: 'people' },
  { text: 'Places', value: 'places' },
  { text: 'Abstract', value: 'abstract' },
])

const theme = ref('things');

const adjective = ref('interesting');
const subject = ref('subject');
const environment = ref('in a location');
const style = ref('photo');

function randomFrom(list) {
  return list[Math.floor(Math.random()*list.length)];
}

function regenAdjective(_event) {
  const themeAdjectives = Adjectives[theme.value];
  adjective.value = randomFrom(themeAdjectives); 
}

function regenSubject(_event) {
  const themeSubjects = Subjects[theme.value] 
  subject.value = randomFrom(themeSubjects)
}

function regenEnvironment(_event) {
  const themeEnvironment = Environments[theme.value] 
  environment.value = randomFrom(themeEnvironment);
}

function regenStyle(_event) {
  const themeStyles = Styles[theme.value]
  style.value = randomFrom(themeStyles);
}

function regenAll(event) {
  regenAdjective(event);
  regenSubject(event);
  regenEnvironment(event);
  regenStyle(event);
}

</script>

<template>
  <h3>Theme:</h3>
  <select v-model="theme">
    <option v-for="themeOpt in THEMES" :value="themeOpt.value">
      {{ themeOpt.text }}
    </option>
  </select>

  <article class="generated">
    <button @click="regenAdjective">{{adjective}}</button>
    <button @click="regenSubject">{{subject}}</button>
    <button @click="regenEnvironment">{{environment}}</button>
    in a
    <button @click="regenStyle">{{style}}</button>
    style
  </article>

  <article>
    <button @click="regenAll">🔄 Regenerate All</button>
  </article>
</template>

<style>
span {
  margin: 0.5rem;
  background: #228;
  padding: 0.5rem;
}

button {
  margin: 0.5rem;
  background: #228;
}
</style>
