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
        })

        this.$storage.setStorageSync("session", session);

        if (user) {
          this.$router.push('/home')
        }
      } catch (e) {
        console.log(e)
      }
    },

    forgotPassword() {
      //forgotPassword logic
      console.log('forgot password')
    }
  }
}
</script>