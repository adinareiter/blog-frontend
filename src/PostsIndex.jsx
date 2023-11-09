export function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      <div id="posts-index">
        <h3>All Posts</h3>
        <div className="cards">
          {props.posts.map((post) => (
            <div key={post.id} className="card">
              <h2>{post.title}</h2>
              <img src={post.image} alt="post pics" />
              <button onClick={() => props.onPostShow(post)}>Open post</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
