<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <!-- cycle through the tags array and turn each tag into a link -->
    <div v-for="tag in tags" :key="tag">
      <!-- each tag links to Tag.vue and this View only renders posts that
         include a tag which machtes the tag router parameter  -->
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";
export default {
  // reveiving all posts from db.json via Home.vue
  props: ["posts"],
  setup(props) {
    //
    const { tags } = useTags(props.posts);

    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}

.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}

.tag-cloud div {
  display: inline-block;
  padding: 10px;
}

.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}

/* any link which is clickd on  */
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
