import { ref } from "vue";

const getPosts = () => {
  // Reusable logic starts here:
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((res) => {
        setTimeout(res, 1000);
      });
      let data = await fetch("http://localhost:3000/posts/");
      if (!data.ok) {
        throw Error("No data available!");
      }
      posts.value = await data.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value); // No data available!
    }
  };
  // return any variable including the async load function
  return { posts, error, load };
};
// export the composable
export default getPosts;
