export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault(); //don't want html to run form bc goes to backend
    console.log("handle submit");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <div>
        <h1>New post</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* method="POST" action="http://localhost:3000/posts.json"> */}
        <div>
          Title <input name="title" type="text" placeholder="Title" />
        </div>
        <div>
          Content <input name="body" type="text" placeholder="Content" />
        </div>
        <div>
          Image <input name="image" type="string" placeholder="Image Address" />
        </div>
        {/* <div>
        Image: <input type="URL" />
      </div> */}
        {/* <button>Submit</button> */}
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
