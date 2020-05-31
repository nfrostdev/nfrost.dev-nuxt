<template>
  <nav aria-label="Primary" class="nav">
    <div class="nav__wrapper nf-shadow">
      <nuxt-link to="/" class="nav__link">
        <font-awesome-icon icon="layer-group"/>
        <div>Portfolio</div>
      </nuxt-link>
      <a v-if="!$fetchState.pending" :href="resume.url" target="_blank" rel="noopener noreferrer" class="nav__link">
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
        // TypeScript doesn't understand what the hell is going on with the global Prismic object.
        // @ts-ignore
        await this.$prismic.api.getSingle('resume')
          .then((response: { data: { document: null } }) => {
            this.resume = response.data.document;
          })
      } catch (e) {
        console.log(e)
      }
    },
    fetchOnServer: true
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
    }

    &__link {
      @apply flex flex-col justify-center items-center leading-none transition duration-200 ease-in-out p-3;

      @media(prefers-color-scheme: dark) {
        @apply bg-gray-800;
      }

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
