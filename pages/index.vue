<template>
  <section class="index">
    <card
      v-for="post in posts"
      v-bind:key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :headerImage="post.fields.headerImage"
      :publishedAt="post.fields.publishedAt"
    />
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import Card from "~/components/card.vue";

const client = createClient();

export default {
  components: {
    Card
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-fields.publishedAt"
      })
      .then(entries => {
        return {
          posts: entries.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
.index {
  display: flex;
  flex-wrap: wrap;
}
</style>

