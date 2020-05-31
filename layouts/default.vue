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

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.75s ease-out;
  }
  .slide-right-enter, .slide-right-leave-to {
    opacity: 0;
  }
  .slide-right-enter {
    transform: translateX(-4rem);
  }
  .slide-right-leave-to {
    transform: translateY(-4rem);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.75s ease-out;
  }
  .slide-left-enter, .slide-left-leave-to {
    opacity: 0;
  }
  .slide-left-enter {
    transform: translateX(4rem);
  }
  .slide-left-leave-to {
    transform: translateY(4rem);
  }
</style>
