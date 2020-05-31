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

  .nf-shadow {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05), 0 0 0.25rem rgba(0, 0, 0, 0.05);
  }
</style>
