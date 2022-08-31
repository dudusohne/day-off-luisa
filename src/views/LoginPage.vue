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
    }
  },
  methods: {
    async buttonClick() {
      console.log('login')

      const { email, password } = this.viewModel.contact

      try {
        supabase.auth.signIn({
          email,
          password,
        }).then(response => {
          console.log(response)
          
          if (response.error) {
            alert('E-mail ou senha incorretos!')
          }

          this.$storage.setStorageSync("session", response.session);

          if (response.user) {
            this.$router.push('/home')
          }
        })




      } catch (e) {
        console.log(e)
      }
    },

    async forgotPassword() {
      this.$router.push('/forgot')
      const { email } = this.viewModel.contact
      //forgotPassword logic
      try {
        const { error } = await supabase.auth.api.resetPasswordForEmail(
          email
        )
        console.log('error::', error)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>