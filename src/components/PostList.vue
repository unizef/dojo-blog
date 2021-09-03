<template>
  <div class="post-list">
    <!-- cycling through posts array -->
    <div v-for="post in posts" :key="post.id">
      <!-- passing each single post as a prop to SinglePost -->
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
// import any hook you will use
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "../components/SinglePost";
export default {
  // register the prop passed from Home.vue
  props: ["posts"],
  components: { SinglePost },
  setup() {
    // will run when toggle post on the DOM
    onMounted(() => {
      console.log("component is mounted");
    });
    // will run when toggle post of the DOM
    onUnmounted(() => {
      console.log("component is unmounted");
    });
    // will run when deleting button with button
    onUpdated(() => {
      console.log("component is updated");
    });

    return {};
  },
};
</script>

<style></style>
