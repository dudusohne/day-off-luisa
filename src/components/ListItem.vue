<template>
    <div class="list-item">
        <span style="align-self: center; font-weight: bold;">{{ props.id }}</span>
        <div style="display: flex; flex-direction: column">
            <span style="font-weight: bold; font-size: 18px">{{ props.name }}</span>
            <span>{{ props.lastname }}</span>
        </div>
        <div
            style="display: flex; flex-direction: column; margin-left: 5px; border-left: 1px solid #333;padding-left: 5px;">
            <span>{{ props.cpf }}</span>
            <span>{{ props.email }}</span>
        </div>
        <div
            style="display: flex; flex-direction: column; margin-left: 5px; border-left: 1px solid #333;padding-left: 5px;">
            <span>{{ props.password }}</span>
            <span>{{ props.zip }}</span>
        </div>
        <div
            style="display: flex; flex-direction: column; margin-left: 5px; border-left: 1px solid #333;padding-left: 5px;">
            <span>{{ props.street }}</span>
            <span>{{ props.number }}</span>
        </div>
        <div
            style="display: flex; flex-direction: column; margin-left: 5px; border-left: 1px solid #333;padding-left: 5px;">
            <span>{{ props.district }}</span>
            <span>{{ props.city }}</span>
        </div>
        <div
            style="display: flex; flex-direction: column; margin-left: 5px; border-left: 1px solid #333;padding-left: 5px;">
            <span>{{ props.state }}</span>
            <span>{{ props.country }}</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <button>EXCLUIR</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: Number,
    name: String,
    lastname: String,
    cpf: String,
    email: String,
    senha: String,
    password: String,
    zip: String,
    street: String,
    number: String,
    district: String,
    city: String,
    state: String,
    country: String,
})
</script>

<style>
.list-item {
    display: flex;
    flex-direction: row;
    padding: 8px;

    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgb(224, 224, 224) 0%, rgba(136, 136, 136, 0.425) 35%, rgb(185, 185, 185) 100%);

    border-radius: 12px;

    margin-top: 1rem;
    justify-content: space-between;
}

button {
    height: 100%;
    width: 100%;
    background-color: rgb(209, 69, 44);

    border: 1px solid #333;
    border-radius: 8px;

    font-weight: bold;
}

button:hover {
    background-color: black;
    color: white;
    cursor: pointer;
}
</style>