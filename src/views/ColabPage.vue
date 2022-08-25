<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
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
          cpf: '',
          email: '',
          senha: '',
          password: '',
          name: '',
          lastname: '',
          birth: '',
          cep: '',
          address: '',
          neiborhood: '',
          city: '',
          uf: '',
          num: '',
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
    sendColab() {
      this.viewModel.colab
      console.log('asdasd', this.viewModel.colab)
    }
  }
}
</script>