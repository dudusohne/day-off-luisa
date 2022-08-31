<template>
  <div class="home-page">
    <div style="display: flex; flex-direction: row">
      <div class="calendar-container">
        <day-calendar v-model="dateSelected" @click="handleDateSelected()" />
        <span style="color: red; margin-top: 12px">DAY-OFF SELECIONADO: {{ dateFormated }}</span>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center;">
        <div class="checkbox-container">
          <span>Comunicou seus pares sobre sua ausência: </span>
          <input type="checkbox" v-model="questionOne" />
        </div>
        <div class="checkbox-container">
          <span>Comunicou seus pares sobre sua ausência: </span>
          <input type="checkbox" v-model="questionTwo" />
        </div>
        <div class="checkbox-container">
          <span>Comunicou seus pares sobre sua ausência: </span>
          <input type="checkbox" v-model="questionThree" />
        </div>
        <div class="checkbox-container">
          <span>Comunicou seus pares sobre sua ausência: </span>
          <input type="checkbox" v-model="questionFour" />
        </div>
      </div>
    </div>
    <button @click="saveDayOff()">SALVAR</button>
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

  button {
    height: 5vh;
    margin-top: 4rem;
    background-color: rgb(69, 182, 69);
  }

  button:hover {
    opacity: 0.8;
  }

  .calendar-container {
    display: flex;
    flex-direction: column;
  }

  .checkbox-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 1rem;
  }
}
</style>