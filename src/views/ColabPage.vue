<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<script>
export default {
  name: 'ColabPage',
  data: function () {
    return {
      design: {
        figmaFile: "lpi551NmSJEFMyvIx51bGZs",
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
  }
}
</script>