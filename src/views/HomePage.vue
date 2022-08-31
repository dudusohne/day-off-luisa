<template>
  <div class="home-page">
    <div>

      <day-calendar v-model="dateSelected" @click="handleDateSelected()" />
      <span style="color: red; margin-top: 12px">DAY-OFF SELECIONADO: {{ dateFormated }}</span>
      <button @click="saveDayOff()">SALVAR</button>
    </div>
    <div>
      <input type="checkbox" v-model="questionOne" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DayCalendar from '../components/DayCalendar.vue'
import { ref } from 'vue'

const dateSelected = ref<any>()
const dateFormated = ref()

const questionOne = ref()
const questionTwo = ref()
const questionThree = ref()
const questionFour = ref()

function handleDateSelected() {
  const date: any = new Date(dateSelected.value)
  const newdate: string = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  dateFormated.value = newdate
}

function saveDayOff() {
  console.log('save day-off')
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
}
</style>