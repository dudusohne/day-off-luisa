<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
export default {
  name: 'HomePage',
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
      }
    }
  },
  methods: {
    buttonClick() {
      const { email, password } = this.viewModel.contact
      console.log(email, password)
      console.log('button working')
      return 'LoginPage.vue'
    },
    emailOnChange() {
      console.log('email changing')
    }
  }
}
</script>