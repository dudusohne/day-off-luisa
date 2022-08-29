<template>
    <div class="stats-page">
        <span class="title" style="align-self: center">USUÁRIOS CADASTRADOS</span>
        <span v-show="users !== ''" style="align-self: center">NÃO TEM NENHUM CADASTRO NO BANCO.</span>
        <list-item v-for="user in users" :key="user.user_id" :name="user.first_name" :lastname="user.last_name"
            :cpf="user.cpf" :email="user.email" :password="user.password" :zip="user.zip" :street="user.street"
            :number="user.number" :district="user.district" :city="user.city" :state="user.state"
            :country="user.country" :id="user.user_id" @click="deleteUser(user.user_id)" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ListItem from '../components/ListItem.vue'
import { supabase } from '@/services/supabase'

const users = ref()

onMounted(() => {
    getList()
})

async function getList() {

    try {
        const { data: todos } = await supabase.from('user').select('*')
        users.value = todos
    } catch (e) {
        console.log(e)
    }
}

async function deleteUser(id: number) {
    try {
        await supabase
            .from('user')
            .delete()
            .eq('user_id', id)
    } catch (e) {
        console.log(e)
    } finally {
        getList()
    }
}
</script>
<style>
.stats-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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