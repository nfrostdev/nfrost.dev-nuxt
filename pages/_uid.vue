<template>
  <div class="project">
    <prismic-rich-text :field="project.title" class="project__title"/>

    <project-attribute label="Client">
      {{ project.client.data.name }}
    </project-attribute>

    <project-attribute label="Contributors">
      <span v-for="(contributor, index) in project.contributors" :key="contributor.contributor.id">
        <!-- TODO: Style these links. -->
        <a v-if="contributor.contributor.data.url" :href="contributor.contributor.data.url" target="_blank"
           rel="noopener">{{ contributor.contributor.data.name }}</a>
        <span v-else>{{ contributor.contributor.data.name }}</span><span
        v-if="index + 1 !== Object.keys(project.contributors).length">, </span>
      </span>
    </project-attribute>

    <project-attribute label="Languages">
          <span v-for="(language, index) in project.languages" :key="language.language.id">
            <span>{{ language.language.data.name }}</span><span
            v-if="index + 1 !== Object.keys(project.languages).length">, </span>
          </span>
    </project-attribute>

    <project-attribute label="Location">
      <a :href="project.location">{{ project.location }}</a>
    </project-attribute>

    <project-attribute label="Technologies">
      <div class="space-x-2 mt-2">
        <technology-link v-for="technology in project.technologies"
                         :key="technology.technology.id"
                         :technology="technology.technology.data"/>
      </div>
    </project-attribute>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProjectAttribute from "~/components/ProjectAttribute.vue";
  import TechnologyLink from "~/components/TechnologyLink.vue";

  export default Vue.extend({
    transition: {
      name: 'fade',
      mode: 'out-in'
    },
    components: {
      ProjectAttribute,
      TechnologyLink
    },
    // @ts-ignore
    async asyncData({$prismic, error, params}) {
      try {
        const project = (await $prismic.api.getByUID('project', params.uid, {
          fetchLinks: ['client.name', 'contributor.name', 'contributor.url', 'language.name', 'technology.url', 'technology.title']
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
