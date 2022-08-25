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
    buttonClick() {
      const { email, password } = this.viewModel.contact
      //handleLogic logic

      this.$router.push('/home')
    },

    forgotPassword() {
      //forgotPassword logic
      console.log('forgot password')
    }
  }
}
</script>