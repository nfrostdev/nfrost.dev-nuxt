<template>
  <header class="header">
    <logo class="logo"/>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Logo from './Logo.vue'

  export default Vue.extend({
    components: {
      Logo
    }
  })
</script>

<style lang="scss">
  .header {
    @apply flex justify-center items-center w-full pt-8;

    @media(min-width: 48em) {
      @apply pb-0 pt-16;
    }
  }

  .logo {
    @apply w-12;
    fill: #003DA5;

    @media (prefers-color-scheme: dark) {
      fill: #f7fafc;
    }

    @media(min-width: 48em) {
      @apply w-20;
    }
  }
</style>
