<template>
  <a :href="technology.url" target="_blank" rel="noopener noreferrer" class="technology-link">{{ technology.title }}</a>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      technology: Object
    }
  })
</script>

<style lang="scss">
  .technology-link {
    @apply inline-block bg-indigo-200 leading-none p-2 rounded-sm transition duration-200 ease-in-out text-sm m-1;

    @media(prefers-color-scheme: dark) {
      @apply bg-blue-900;
    }

    &:hover, &:focus {
      @apply bg-indigo-300;

      @media(prefers-color-scheme: dark) {
        @apply bg-blue-800;
      }
    }
  }
</style>
