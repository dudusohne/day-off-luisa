<template>
    <div class="day-calendar">
        <!-- <v-calendar /> -->
        <v-date-picker v-model="value" @click="emit('click')" />
    </div>
</template>

<script setup lang="ts">
import { useVModel } from '@/helpers/useVModel';
import 'v-calendar/dist/style.css';
import { ref, defineProps } from 'vue';

type Props = {
    modelValue: string
}
const props = defineProps<Props>()

const emit = defineEmits<{
    (_event: 'update:modelValue', _value: string): void
    (_event: 'click'): void
}>()

const value = useVModel<string>(props, emit, 'modelValue')
</script>

<style lang="scss">
.day-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 3rem;
}
</style>