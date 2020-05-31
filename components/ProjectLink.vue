<template>
  <div class="project-link">
    <nuxt-link :to="project.uid" class="project-link__image__container">
      <img :src="project.data.images[0].image.url" class="project-link__image nf-shadow"
           :alt="project.data.title[0].text + ' Preview'"/>
    </nuxt-link>

    <div class="project-link__info">
      <nuxt-link :to="project.uid">
        <div class="project-link__title">{{ project.data.title[0].text }}</div>
        <div class="project-link__client">{{ project.data.client.data.name}}</div>
      </nuxt-link>

      <div class="technologies">
        <technology-link v-for="technology in project.data.technologies"
                         :key="technology.technology.id"
                         :technology="technology.technology.data"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TechnologyLink from "~/components/TechnologyLink.vue";

  export default Vue.extend({
    components: {
      TechnologyLink
    },
    props: {
      project: Object
    },
    mounted() {
      console.log(this.project);
    }
  })
</script>

<style lang="scss">
  .project-link {
    @apply flex flex-col justify-center items-center text-center leading-none;

    @media(min-width: 48em) {
      @apply flex-row-reverse items-start text-right;
    }

    &__image {
      @apply transition-all duration-500 ease-in-out rounded;

      &__container {
        @apply mb-4;

        @media(min-width: 48em) {
          @apply flex-grow max-w-3xl mb-0 ml-8;
        }
      }

      &:hover, &:focus {
        box-shadow: 0 0 1rem rgba(#003da5, 0.15), 0 0 0.25rem rgba(#003da5, 0.15);
      }
    }

    &__info {
      @apply flex-grow;

      @media(min-width: 48em) {
        @apply mt-4;
      }

      &:hover, &:focus {
        .project-link__title {
          @apply text-nf-blue;
        }
      }
    }

    &__title {
      @apply font-semibold text-lg transition duration-200 ease-in-out;

      @media(min-width: 48em) {
        @apply text-4xl;
      }
    }

    &__client {
      @apply text-gray-700 text-sm my-1;

      @media(min-width: 48em) {
        @apply text-2xl my-2;
      }
    }
  }

  .technologies {
    @apply flex justify-center items-center flex-wrap p-1;

    @media(min-width: 48em) {
      @apply justify-end;
    }
  }
</style>
