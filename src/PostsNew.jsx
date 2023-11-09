export function PostsNew() {
  return (
    <div id="posts-new">
      <div>
        <h1>New post</h1>
      </div>
      <form action="">
        <div>
          Title <input type="text" />
        </div>
        <div>
          Content <input type="text" />
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
