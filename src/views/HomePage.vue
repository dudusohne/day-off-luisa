<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
import { ContainerOff } from '@/src/components/ContainerOff.vue'
export default {
  name: 'HomePage',
  data: function () {
    return {
      design: {
        figmaFile: "t34WSshzksOO40kYteipaZ",
        figmaAccessKey: "figd_Pue4tzakacr6Xo2HD6MwDIPSmW9DJ1gIkaoK_UTw"
      },
      viewModel: {
      },
      config: {
        responsive: [
          { page: "DesktopLayout", types: ["desktop", "tablet"] },
          { page: "MobileLayout", types: ["mobile"] },
        ]
      }
    }
  },
}
</script>