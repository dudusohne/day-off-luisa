<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
import { supabase } from '@/services/supabase'
export default {
  name: 'LoginPage',
  data: function () {
    return {
      design: {
        figmaFile: "b2o1iBDJakdeeD75Sg52wH",
        figmaAccessKey: "figd_Pue4tzakacr6Xo2HD6MwDIPSmW9DJ1gIkaoK_UTw"
      },
      viewModel: {
        contact: {
          email: '',
          password: '',
        },
      },
      config: {
        responsive: [
          { page: "DesktopLayout", types: ["desktop", "tablet"] },
          { page: "MobileLayout", types: ["mobile"] },
        ]
      },
      loading: false
    }
  },
  methods: {
    buttonClick() {
      const { email, password } = this.viewModel.contact

      const handleLogin = async () => {
        try {
          this.loading = true
          console.log(email)
          const { error } = await supabase.auth.signIn({ email })
          if (error) throw error
          alert('Check your email for the login link!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          this.loading = false
          console.log('done')
          this.$router.push('/home')
        }
      }

      handleLogin()
    },

    forgotPassword() {
      console.log('forgot password')
    },
    emailOnChange() {
      console.log('email changing')
    }
  }
}
</script>