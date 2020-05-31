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
    @apply bg-indigo-100 leading-none p-2 rounded-sm m-1 transition duration-200 ease-in-out text-sm;

    &:hover, &:focus {
      @apply bg-indigo-200;
    }
  }
</style>
