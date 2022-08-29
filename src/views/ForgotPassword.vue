<template>
    <div class="forgot">
        <span>Digite seu email abaixo:</span>
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