<template>
  <article :class="$style['article']">
    <p :class="$style['article__date']">{{ date }}</p>
    <h2 :class="$style['article__title']">{{ title }}</h2>
    <p :class="$style['article__description']">{{ description }}</p>
    <div :class="$style['article__btn']">
      <NuxtLink to="#" :class="$style['article__btn--link']">
        Read article
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  date: string;
  title: string;
  description: string;
  slug: string;
}>();
</script>

<style lang="scss" module>
.article {
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &__date {
    color: var(--color-gray-0);
    font-size: 1.4rem;
    margin: 0;
  }

  &__title {
    font-size: 1.6rem;
    margin: 0;
  }

  &__description {
    font-size: 1.4rem;
    color: var(--color-gray-1);
    margin: 0;
  }

  &__btn {
    display: flex;
    justify-content: flex-start;

    &--link {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 2rem;
      background-color: var(--color-gray-0);
      color: var(--color-gray-1);
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;
      transition: background-color 0.5s ease;

      &:hover {
        background-color: var(--color-gray-1);
        color: var(--color-gray-0);
      }
    }
  }

  &:hover {
    background-color: #474545;
    color: var(--text-color-light);
    transition: background-color 0.5s ease;
  }

}
</style>