<template>
  <div class="project__attribute">
    <div class="project__attribute__label">{{ label }}</div>
    <div class="project__attribute__value"><slot/></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      label: String
    }
  })
</script>
