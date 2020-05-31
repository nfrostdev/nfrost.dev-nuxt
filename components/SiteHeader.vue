<template>
  <header class="header">
    <logo class="logo"/>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Logo from '../components/Logo'

  export default Vue.extend({
    components: {
      Logo
    }
  })
</script>

<style lang="scss">
  .header {
    @apply flex justify-center items-center w-full py-6;

    @media(min-width: 48em) {
      @apply pb-0 pt-16;
    }
  }

  .logo {
    @apply h-8;

    @media(min-width: 48em) {
      @apply h-12;
    }
  }
</style>
