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
      const { email, password } = this.viewModel.contact

      try {
        const { user, session } = await supabase.auth.signIn({
          email,
          password,
        }).then(response => {
          if (response.error.status == 400) {
            alert('E-mail ou senha incorretos!')
          }
        })

        this.$storage.setStorageSync("session", session);

        if (user) {
          this.$router.push('/home')
        }
      } catch (e) {
        console.log(e)
      }
    },

    async forgotPassword() {
      this.$router.push('/forgot')
      const { email } = this.viewModel.contact
      //forgotPassword logic
      console.log('forgot password')
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