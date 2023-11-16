export function PostsIndex(props) {
  console.log(props);
  return (
    <div>
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button> */}
      <div id="posts-index">
        <h3>All Posts</h3>
        {/* <div className="container text-center"> */}
        {/* <div className="row row-cols-1"> */}
        {/* got this code from https://getbootstrap.com/docs/4.0/components/card/#sizing */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
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
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
