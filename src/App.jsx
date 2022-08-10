import { connect } from "react-redux";

function App({ posts, loading }) {
  console.log(posts, loading)
  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="title">Posts</h1>
            {posts.map((post, index) => (
              <div className="card" key={index}>
                <h3>{post.title.slice(0, 20)} </h3>
                <p>{post.body}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

const mapState = (state) => ({
  posts: state.posts,
  loading: state.loading.models.posts,
});

const mapDispatch = (dispatch) => ({
  load: dispatch.posts.load(),
});

export default connect(mapState, mapDispatch)(App);