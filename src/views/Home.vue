<template>
  <div class="home">
    <h1>Home</h1>
    <!-- pass the posts array as a prop -->
    <div v-if="error">
      {{ error }}
    </div>
    <!-- if posts array from getPosts() has length -->
    <div v-if="posts.length" class="layout">
      <!-- pass posts and render posts in SinglePost and Details -->
      <PostList :posts="posts" />
      <!-- pass posts and render all tags in
     TagCloud -->
      <TagCloud :posts="posts" />
    </div>
    <!-- if posts has no length, render loading.... -->
    <div v-else>
      <!-- Loading.... -->
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    // Store the returned values from getPosts
    // inside a destructured object
    const { posts, error, load } = getPosts();

    // evoke the returned async function
    // after it runs, posts and error will have a value
    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
