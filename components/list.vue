<template>
  <article class="list">
    <nuxt-link v-bind:to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <p class="list_date">{{ (new Date(publishedAt)).toLocaleDateString() }}</p>
      <h1 class="list_title">{{ title }}</h1>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ["title", "slug", "headerImage", "publishedAt"]
};
</script>

<style scoped>
.list {
  margin: 10px 10px;
}
.wrapper {
  text-decoration: none;
}
.list_title {
  font-size: 1.2rem;
}
.list_text {
  color: rgb(57, 72, 85);
  margin: 10px 0;
}
.list_date {
  font-size: 0.7rem;
  color: rgb(57, 72, 85);
}
</style>
