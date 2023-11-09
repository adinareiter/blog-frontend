import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault(); //don't want html to run form bc goes to backend
    console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset(); //clears out form
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
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
