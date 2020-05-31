<template>
  <nuxt-link :to="project.uid">
    <div>{{ project.data.title[0].text }}</div>
    <div>{{ project.data.client.data.name}}</div>
  </nuxt-link>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      project: Object
    },
    mounted() {
      console.log(this.project);
    }
  })
</script>
