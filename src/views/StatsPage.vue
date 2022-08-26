<template>
    <div class="stats-page">
        <span class="title" style="align-self: center">USUÁRIOS CADASTRADOS</span>
        <list-item />
        <list-item />
        <list-item />
        <list-item />
        <list-item />
    </div>
</template>

<script setup lang="ts">
import ListItem from '../components/ListItem.vue'
</script>

<style>
.stats-page {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.title {
    font-weight: bold;
    font-size: 22px;
}
span { 
    font-size: 16px;
}
</style>