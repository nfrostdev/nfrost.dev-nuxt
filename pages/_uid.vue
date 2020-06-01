<template>
  <div class="project">
    <prismic-rich-text :field="project.title" class="project__title"/>
    <project-attribute label="Client">
      {{ project.client.data.name }}
    </project-attribute>
    <project-attribute label="Contributors">
      {{ contributors }}
    </project-attribute>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProjectAttribute from "~/components/ProjectAttribute.vue";

  export default Vue.extend({
    transition: {
      name: 'fade',
      mode: 'out-in'
    },
    components: {
      ProjectAttribute
    },
    computed: {
      contributors() {
        Object.keys(this.project.contributors).forEach(contributor => {
          console.log(this.project.contributors[contributor]);
        })
        console.log(this.project.client);
        return 'asdf'
      }
    },
    // @ts-ignore
    async asyncData({$prismic, error, params}) {
      try {
        const project = (await $prismic.api.getByUID('project', params.uid, {
          fetchLinks: ['client.name', 'contributors.name', 'contributors.url']
        })).data
        console.log(project);
        return {
          project
        }
      } catch (e) {
        error({statusCode: 404, message: 'Page not found'})
      }
    },
  })
</script>

<style lang="scss">
  .project {
    @apply max-w-6xl mx-auto p-8;

    &__title {
      @apply text-4xl font-semibold;
    }

    &__attribute {
      @apply leading-none mt-4;

      &__label {
        @apply font-semibold mb-1;
      }
    }
  }
</style>
