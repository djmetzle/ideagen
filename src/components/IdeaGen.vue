<script setup>
import { ref } from 'vue'

import Subjects from '../data/subject.json'
import Adjectives from '../data/adjective.json'
import Environments from '../data/environment.json'
import Styles from '../data/style.json'

console.log(Subjects)

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
  <h3>Select a Theme:</h3>
  <select v-model="theme">
    <option v-for="themeOpt in THEMES" :value="themeOpt.value">
      {{ themeOpt.text }}
    </option>
  </select>

  <hr/>

  <h5>Try:</h5>
  <article class="generated">
    A
    <span> {{adjective}} </span>
    <span>{{subject}}</span>
    at
    <span>{{environment}}</span>
    in a
    <span>{{style}}</span>
    style
  </article>

  <article class="buttons">
    <button @click="regenAdjective">🔄</button>
    <button @click="regenSubject">🔄</button>
    <button @click="regenEnvironment">🔄</button>
    <button @click="regenStyle">🔄</button>
  </article>

  <article>
    <button @click="regenAll">🔄 Regenerate All</button>
  </article>
</template>

<style>
span {
  margin: 0.5rem;
  background: #444;
  padding: 0.5rem;
}

.buttons > button {
  margin: 0.5rem;
}
</style>
