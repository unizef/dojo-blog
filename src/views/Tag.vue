<template>
  <div class="tag">
    <h2>Tags</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <!-- passing the filtered posts as a prop called posts -->
      <PostList :posts="postsWithTags" />
      <!-- render all the tags/links with the active tag/link in orange -->
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
export default {
  components: { Spinner, PostList, TagCloud },

  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();
    // return an array with only the tags the same as the route parameter
    const postsWithTags = computed(() => {
      return posts.value.filter((p) =>
        // if the tags of the current iteration over posts
        // includes the same tag as the tag parameter "/tag/..." return a new array containing these posts
        p.tags.includes(route.params.tag)
      );
    });
    return { posts, error, postsWithTags };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
