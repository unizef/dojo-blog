import { ref } from "vue";

// passing the gap route param from Details.vue in order to make fetch the url
const getPost = (id) => {
  // only one post will be fetched. So, null
  // instead of an empty array [] inside ref()
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((res) => {
        setTimeout(res, 1000);
      });

      // in order to get a single post its /:gap
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("No data available!");
      }
      post.value = await data.json();
    } catch (e) {
      error.value = e.message;
      console.log(error.value); // No data available!
    }
  };
  // return any variable including the async load function
  return { post, error, load };
};
// export the composable
export default getPost;
