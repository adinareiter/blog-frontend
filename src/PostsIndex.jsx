export function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      <div id="posts-index">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {props.posts.map((post) => (
            <div key={post.id} className="col">
              <div className="card">
                <h2>{post.title}</h2>
                <img src={post.image} alt="post pics" />
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => props.onPostShow(post)}
                >
                  Open post
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
