<template>
  <div>
    <site-header/>
    <site-navigation/>
    <main id="main">
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
    transition: all 0.3s ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(1rem);
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

  .slide-left-enter-active, .slide-left-leave-active {
    transition: all 0.75s ease-out;
  }

  .slide-left-enter, .slide-left-leave-to {
    opacity: 0;
  }

  .slide-left-enter {
    transform: translateX(2rem);
  }

  .slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.75s ease-out;
  }

  .slide-up-enter, .slide-up-leave-to {
    opacity: 0;
  }

  .slide-up-enter {
    transform: translateY(2rem);
  }

  // Fonts
  /* latin-ext */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Titillium Web Light'), local('TitilliumWeb-Light'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPDcZTIAOhVxoMyOr9n_E7ffGjEGIVzY4SY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Titillium Web Light'), local('TitilliumWeb-Light'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPDcZTIAOhVxoMyOr9n_E7ffGjEGItzYw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPecZTIAOhVxoMyOr9n_E7fdM3mDbRS.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPecZTIAOhVxoMyOr9n_E7fdMPmDQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGIVzY4SY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'), url(https://fonts.gstatic.com/s/titilliumweb/v8/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzYw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
</style>
