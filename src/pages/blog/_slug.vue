<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
    <vue-markdown>{{post.fields.body}}</vue-markdown>
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import VueMarkdown from "vue-markdown";
const client = createClient();

export default {
  components: {
    VueMarkdown
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug": params.slug,
        order: "-sys.createdAt"
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>
