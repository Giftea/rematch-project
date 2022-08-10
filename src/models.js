export const posts = {
    state: [],
    reducers: {
      loadedPosts: (state, payload) => payload,
    },
    effects: (dispatch) => ({
      async load() {
        const data = await loadPosts();
        dispatch.posts.loadedPosts(data);
      },
    }),
  };
  
  const loadPosts = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await posts.json();
    return data;
  };