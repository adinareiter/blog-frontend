export function PostsShow(props) {
  console.log(props);
  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
}
