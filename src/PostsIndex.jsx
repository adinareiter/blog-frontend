import { useState } from "react";

export function PostsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <div id="posts-index">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          Search filter:{" "}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchFilter}
              onChange={(event) => setSearchFilter(event.target.value)}
              list="titles"
            />
            <datalist id="titles">
              {props.posts.map((post) => (
                <option key={post.id} value={post.title} />
              ))}
            </datalist>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {props.posts
            .filter((post) => post.title.toLowerCase().includes(searchFilter))
            .map((post) => (
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
