<template>
  <div>
    <h1>Details</h1>
    <div v-if="error">{{ error }}</div>
    <div class="post" v-if="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
export default {
  // passing the 'gap' route param from index.js as a prop
  props: ["gap"],
  components: { Spinner },
  setup(props) {
    // run composable function getPost(), pass route param
    // as an argument and destructure what is returned.
    const { post, error, load } = getPost(props.gap);

    // evoke the async data fetch function
    load();
    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>
