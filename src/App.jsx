// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// import "./App.css";
function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <div>
        <h1>New post</h1>
      </div>
      <div>
        Title: <input type="text" />
      </div>
      <div>
        Content: <input type="text" />
      </div>
      <div>
        Image: <input type="image" />
      </div>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  <PostsIndex posts={posts} />;

  return (
    <div id="posts-index">
      <div>
        <h1>All posts</h1>
      </div>
      {props.posts.map((post) => (
        <div>
          <h2>(post.title)</h2>
        </div>
      ))}
      </div>
      {/* <div className="posts">
        <h2>First Post</h2>
      </div>
      <div>
        <p>This is my first post!</p>
        <img
          src="https://plus.unsplash.com/premium_photo-1670044020170-5ba458728767?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyJTIwb25lfGVufDB8fDB8fHww"
          alt=""
        />
      </div> */}
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
