<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
import { supabase } from '@/services/supabase'
export default {
  name: 'ColabPage',
  data: function () {
    return {
      design: {
        figmaFile: "lpi551NmSJEFMyvIx51bGZ",
        figmaAccessKey: "figd_Pue4tzakacr6Xo2HD6MwDIPSmW9DJ1gIkaoK_UTw"
      },
      viewModel: {
        colab: {
          name: '',
          lastname: '',
          cpf: '',
          email: '',
          senha: '',
          password: '',
          zip: '',
          street: '',
          number: '',
          district: '',
          city: '',
          state: '',
          country: '',
          birth: '',
          kids: '',
          kidsname: '',
          civilstate: ''
        }
      },
      config: {
        responsive: [
          { page: "DesktopLayout", types: ["desktop", "tablet"] },
          { page: "MobileLayout", types: ["mobile"] },
        ]
      }
    }
  },
  methods: {
    async sendColab() {
      const user = this.viewModel.colab
      try {
        
        await supabase.auth.signUp(
          {
            email: user.email,
            password: user.password,
          }
        )

        await supabase
          .from('user')
          .insert([{
            first_name: user.name,
            last_name: user.lastname,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
            zip: user.zip,
            street: user.street,
            number: user.number,
            district: user.district,
            city: user.city,
            state: user.state,
            country: user.country,
          }])
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>