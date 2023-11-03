export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h3>All the Posts!</h3>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="post pics" />
          <p>Body: {post.body} </p>
        </div>
      ))}
    </div>
  );
}
