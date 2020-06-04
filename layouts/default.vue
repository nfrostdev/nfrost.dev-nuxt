<template>
  <div>
    <site-header/>
    <site-navigation/>
    <main>
      <nuxt/>
    </main>
    <footer class="footer">
      &copy;2012-{{ new Date().getFullYear() }} Nick Frost
    </footer>
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
    @apply font-light bg-gray-200;

    @media(prefers-color-scheme: dark) {
      @apply bg-gray-900 text-gray-100;
    }

    @media (min-width: 1921px) {
      @apply text-xl;
    }
    @media (min-width: 2561px) {
      @apply text-3xl;
    }
  }

  .footer {
    @apply flex flex-col justify-center items-center text-xs p-8 pb-24;
  }

  .nf-shadow {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.25s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.75s ease-out;
  }

  .slide-right-enter, .slide-right-leave-to {
    opacity: 0;
  }

  .slide-right-enter {
    transform: translateX(-2rem);
  }

  .slide-right-leave-to {
    transform: translateY(-2rem);
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.75s ease-out;
  }

  .slide-left-enter, .slide-left-leave-to {
    opacity: 0;
  }

  .slide-left-enter {
    transform: translateX(2rem);
  }

  .slide-left-leave-to {
    transform: translateY(2rem);
  }
</style>
