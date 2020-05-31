<template>
  <nav aria-label="Primary" class="nav">
    <div class="nav__wrapper">
      <nuxt-link to="/" class="nav__link">
        <font-awesome-icon icon="layer-group"/>
        <div>Portfolio</div>
      </nuxt-link>
      <a :href="resume.url" target="_blank" rel="noopener noreferrer" class="nav__link">
        <font-awesome-icon icon="file-alt"/>
        <div>Resume</div>
      </a>
      <a href="https://github.com/nfrostdev" target="_blank" rel="noopener noreferrer" class="nav__link">
        <font-awesome-icon :icon="['fab', 'github']"/>
        <div>Github</div>
      </a>
      <a href="https://github.com/nfrostdev" target="_blank" rel="noopener noreferrer" class="nav__link">
        <font-awesome-icon :icon="['far', 'envelope']"/>
        <div>Contact</div>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        resume: null
      }
    },
    async fetch() {
      try {
        await this.$prismic.api.getSingle('resume')
          .then((response: { results: null }) => {
            this.resume = response.data.document;
          })
      } catch (e) {
        console.log(e)
      }
    },
    fetchOnServer: true,
    fetchDelay: 500
  })
</script>

<style lang="scss">
  .nav {
    @apply fixed bottom-0 w-full flex justify-center items-center py-8 font-normal text-sm;

    @media (min-width: 48em) {
      @apply relative text-base;
    }

    &__wrapper {
      @apply grid grid-cols-4 rounded;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05), 0 0 0.25rem rgba(0, 0, 0, 0.05);
    }

    &__link {
      @apply flex flex-col justify-center items-center leading-none transition duration-200 ease-in-out p-3;

      &:first-child {
        @apply rounded-tl rounded-bl;
      }

      &:last-child {
        @apply rounded-tr rounded-br;
      }

      svg {
        @apply mb-1;
      }

      &:hover, &:focus, &.nuxt-link-exact-active {
        @apply bg-nf-blue text-white;
      }

      &:focus {
        @apply shadow-outline;
      }
    }
  }
</style>
