<template>
  <div>
    <site-navigation/>
    <nuxt/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import SiteNavigation from "~/components/SiteNavigation.vue";

  export default Vue.extend({
    components: {
      SiteNavigation
    }
  })
</script>

<style lang="scss">
  html {
    font-family: 'Titillium Web', sans-serif;
    @apply font-light;
  }
</style>
