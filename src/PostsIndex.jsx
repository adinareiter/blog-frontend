export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h3>All Posts</h3>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <img src={post.image} alt="post pics" />
            <p>Body: {post.body} </p>
            <button onClick={props.onPostShow}>Open Post</button>
          </div>
        ))}
      </div>
    </div>
  );
}
