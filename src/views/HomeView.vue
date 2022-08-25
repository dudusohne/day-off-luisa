<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
export default {
  name: 'HomeView',
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
      }
    }
  },
  methods: {
    async buttonClick() {
      const email = this.viewModel.contact.email
      const password = this.viewModel.contact.password
      console.log(email, password)
      console.log('button working')
    },
    emailOnChange() {
      console.log('email changing')
    }
  }
}
</script>