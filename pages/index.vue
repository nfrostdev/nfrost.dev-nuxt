<template>
  <div>
    <h1 class="sr-only">Portfolio</h1>
    <div class="projects">
      <project-link v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProjectLink from "~/components/ProjectLink.vue";

  export default Vue.extend({
    transition: {
      name: 'fade',
      mode: 'out-in'
    },
    components: {
      ProjectLink
    },
    // @ts-ignore
    async asyncData({$prismic, error}) {
      try {
        const projects = (await $prismic.api.query(
          $prismic.predicates.at('document.type', 'project'),
          {
            fetch: ['project.title', 'project.client', 'project.technologies', 'project.images'],
            fetchLinks: ['client.name', 'technology.title', 'technology.url']
          }
        )).results
        return {
          projects
        }
      } catch (e) {
        error({statusCode: 404, message: 'Page not found'})
      }
    },
  })
</script>

<style lang="scss">
  .projects {
    @apply grid justify-center items-center p-8;
  }
</style>
