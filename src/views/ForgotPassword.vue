<template>
    <div class="forgot">
        <span>DIGITE SEU E-MAIL ABAIXO:</span>
        <input type="text" v-model="email" />
        <button @click="forgotPassword()">ENVIAR</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { supabase } from '@/services/supabase';

const router = useRouter()

const email = ref()

async function forgotPassword() {
    try {
        supabase.auth.api.resetPasswordForEmail(
            email.value
        ).then(response => {
            console.log(response.error)
            if (response.error) {
                alert('Seu e-mail esta incorreto ou não existe!')
            }
        })
    } catch (e) {
        alert('Email incorreto!')
        console.log(e)
    } finally {
        router.push('/')
    }
}
</script>

<style lang="scss" scoped>
.forgot {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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