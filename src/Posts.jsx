import "./Posts.css";
import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="box">
      <h3>Posts:{post.length}</h3>
      {post.map((singleValue) => (
        <Post post={singleValue}></Post>
      ))}
    </div>
  );
}

// 1.Create a state to store the data.
// 2.Create use Effect with no dependencies.
// 3.Use fect to load data.
