import { ref } from "vue";

// posts parameter will receive all posts
// from db.json via Home and TagCloud as a prop
const useTags = (posts) => {
  // final array with no tag duplicates
  const tags = ref([]);
  //
  const tagSet = new Set();

  // for each post in posts..
  posts.forEach((post) => {
    // cycle through each tags array
    post.tags.forEach((tag) => {
      // and add each tag into tagSet to remove duplicates
      tagSet.add(tag);
    });
  });

  // spread all the elements of tagSet into an array
  // and copy it to tags array
  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
