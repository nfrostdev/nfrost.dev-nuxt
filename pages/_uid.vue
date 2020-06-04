<template>
  <div class="project">
    <div class="project__primary">
      <transition name="slide-right" mode="out-in">
        <div v-if="animate" class="project__information">
          <prismic-rich-text :field="project.title" class="project__title"/>

          <project-attribute label="Client">
            {{ project.client.data.name }}
          </project-attribute>

          <project-attribute label="Contributors">
      <span v-for="(contributor, index) in project.contributors" :key="contributor.contributor.id" class="contributors">
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

          <project-attribute label="Location" class="location">
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
      </transition>

      <transition name="slide-left" mode="out-in">
        <div v-if="animate" class="project__image__container">
          <a :href="project.images[0].image.url" target="_blank">
            <img :src="project.images[0].image.url" class="project__image nf-shadow"
                 :alt="project.title[0].text + ' Screenshot'"/>
          </a>
        </div>
      </transition>
    </div>

    <transition name="slide-left" mode="out-in">
      <div v-if="animate" class="project__details">
        <div>
          <h2 class="project__details__heading">Description</h2>
          <prismic-rich-text :field="project.description"/>
        </div>

        <div>
          <h2 class="project__details__heading">Contributions</h2>
          <prismic-rich-text :field="project.contributions"/>
        </div>

        <div>
          <h2 class="project__details__heading">Obstacles</h2>
          <prismic-rich-text :field="project.obstacles"/>
        </div>
      </div>
    </transition>
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
    data() {
      return {
        animate: false
      }
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
    mounted() {
      this.animate = true
    }
  })
</script>

<style lang="scss">
  .project {
    @apply max-w-6xl mx-auto p-8;

    &__title {
      @apply text-3xl font-semibold;
    }

    &__attribute {
      @apply leading-none mt-4;

      &.contributors, &.location {
        a {
          @apply text-nf-blue underline font-normal;

          @media(prefers-color-scheme: dark) {
            @apply text-blue-300;
          }

          &:hover, &:focus {
            @apply text-blue-800;

            @media(prefers-color-scheme: dark) {
              @apply text-blue-200;
            }
          }
        }
      }

      &__label {
        @apply font-semibold mb-1;
      }
    }

    &__primary {
      @apply flex flex-col-reverse justify-start items-start;

      @media(min-width: 48em) {
        @apply flex-row;
      }
    }

    &__information {
      @apply flex-shrink-0 mt-6;

      @media(min-width: 48em) {
        @apply flex-row mt-0 mr-8;
      }
    }

    &__image {
      @apply rounded;

      &__container {
        @apply flex-grow;
      }
    }

    &__details {
      @apply grid gap-6 mt-8;

      @media(min-width: 48rem) {
        @apply grid-cols-3;
      }

      p {
        @apply mt-2;
      }

      &__heading {
        @apply font-semibold text-xl leading-none;
      }
    }
  }
</style>
