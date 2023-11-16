export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };
  //   axios.patch("http://localhost:3000/posts/" + props.post.id + ".json", params).then((response) => {
  //     setPosts(
  //       posts.map((post) => {
  //         if (post.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return post;
  //         }
  //       })
  //     );
  //     console.log(response);
  //     event.target.reset; //resets the form
  //   });
  // };
  console.log(props);
  return (
    <div>
      <div id="posts-show">
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" type="text" defaultValue={props.post.title} />
          </div>
          <div>
            Body: <input name="body" type="text" defaultValue={props.post.body} />
          </div>
          <div>
            Image URL <input name="image" type="text" defaultValue={props.post.image} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClick}>Delete Recipe</button>
      </div>
    </div>
  );
}
