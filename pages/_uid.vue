<template>
  <div class="project">
    <div class="project__primary">
      <transition name="slide-right" mode="out-in">
        <div v-if="animate" class="project__information">
          <div v-html="$prismic.asHtml(project.title)" class="project__title"></div>

          <project-attribute label="Client">
            {{ project.client.data.name }}
          </project-attribute>

          <project-attribute label="Contributors" class="contributors">
      <span v-for="(contributor, index) in project.contributors" :key="contributor.contributor.id">
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
            <a :href="project.location" target="_blank" rel="noopener noreferrer">{{ project.location }}</a>
          </project-attribute>

          <project-attribute label="Technologies">
            <div class="flex flex-wrap mt-1">
              <technology-link v-for="technology in project.technologies"
                               :key="technology.technology.id"
                               :technology="technology.technology.data"/>
            </div>
          </project-attribute>
        </div>
      </transition>

      <transition name="slide-left" mode="out-in">
        <div v-if="animate" class="project__image__container">
          <a :href="project.images[0].image.url" target="_blank" rel="noopener">
            <picture>
              <source media="(min-width:2561px)" :srcset="project.images[0].image['4k'].url">
              <source media="(min-width:1921px)" :srcset="project.images[0].image['2k'].url">
              <source media="(min-width:480px)" :srcset="project.images[0].image['1080p'].url">
              <source media="(max-width:480px)" :srcset="project.images[0].image['Mobile'].url">
              <img :src="project.images[0].image['Mobile'].url" :alt="project.title[0].text + ' Screenshot'"
                   class="project__image nf-shadow" loading="lazy" height="480" width="768">
            </picture>
          </a>
        </div>
      </transition>
    </div>

    <transition name="slide-up" mode="out-in">
      <div v-if="animate" class="project__details">
        <div>
          <h2 class="project__details__heading">Description</h2>
          <div v-html="$prismic.asHtml(project.description)"></div>
        </div>

        <div>
          <h2 class="project__details__heading">Contributions</h2>
          <div v-html="$prismic.asHtml(project.contributions)"></div>
        </div>

        <div>
          <h2 class="project__details__heading">Obstacles</h2>
          <div v-html="$prismic.asHtml(project.obstacles)"></div>
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
    head() {
      return {
        title: this.$prismic.asText(this.project.title) + ' - Portfolio - Nick Frost',
        meta: [
          {hid: 'description', name: 'description', content: this.project.short_description},
          {hid: 'og:title', name: 'og:title', content: this.$prismic.asText(this.project.title) + ' - Portfolio - Nick Frost'},
          {hid: 'og:site_name', property: 'og:site_name', content: 'www.nfrost.dev'},
          {hid: 'og:image', property: 'og:image', content: 'https://www.nfrost.dev/favicon.png'},
          {hid: 'og:description', name: 'og:description', content: this.project.short_description},
          {hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.$prismic.asText(this.project.title) + ' - Portfolio - Nick Frost'},
        ]
      }
    },
    data() {
      return {
        animate: false
      }
    },
    async asyncData({$prismic, error, params}) {
      try {
        const project = (await $prismic.api.getByUID('project', params.uid, {
          fetchLinks: ['client.name', 'contributor.name', 'contributor.url', 'language.name', 'technology.url', 'technology.title']
        })).data
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
      width: 18rem;

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
      @apply grid gap-8 mt-8;

      @media(min-width: 48rem) {
        @apply grid-cols-3;
      }

      p {
        @apply mt-2;
      }

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

      &__heading {
        @apply font-semibold text-xl leading-none;
      }
    }
  }
</style>
