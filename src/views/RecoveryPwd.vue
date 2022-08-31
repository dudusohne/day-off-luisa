<template>
    <div class="recovery-pwd">
        <span>DIGITE SUA NOVA SENHA ABAIXO:</span>
        <input type="text" v-model="password" />
        <button @click="recoverPassword()">ENVIAR</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '@/services/supabase';

const router = useRouter()
const route = useRoute()

const password = ref<string>()
const accessToken = ref<any>(route.query.token)

async function recoverPassword() {
    console.log(route.query.token)
    try {
        await supabase.auth.api.updateUser(accessToken.value, {
            password: password.value,
        })
    } catch (e) {
        alert('Senha incorreta!')
        console.log(e)
    } finally {
        alert('SENHA ALTERADA')
        router.push('/')
    }
}
</script>

<style lang="scss" scoped>
.recovery-pwd {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5rem;

    input {
        width: 100%;
        height: 5vh;

        font-size: 1.5rem;
    }

    button {
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(105, 187, 67);
        font-size: 20px;
        margin-top: 1rem;
        color: #333;
    }

    button:hover {
        opacity: 0.7;
    }

    span {
        font-size: 1rem;
        font-family: 'Inter';
        font-weight: bold;
        color: #333;
    }
}
</style>