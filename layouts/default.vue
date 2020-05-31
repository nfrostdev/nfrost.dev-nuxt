<template>
  <div>
    <site-header/>
    <site-navigation/>
    <nuxt/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import SiteHeader from "~/components/SiteHeader.vue";
  import SiteNavigation from "~/components/SiteNavigation.vue";

  export default Vue.extend({
    components: {
      SiteHeader,
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
