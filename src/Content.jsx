import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import axios from "axios";

export function Content() {
  //giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  //a function to toggle modal show on
  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  //a function to toggle modal show to false, closes modal
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  //a function to make web request to index post data
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  //react hook
  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
      <PostsNew />
      <PostsIndex posts={posts} onPostShow={handleShowPost} />
      {/* <button onClick={handleIndexPosts}>Load Posts</button> */}
    </div>
  );
}
