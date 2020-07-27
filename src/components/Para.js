import React from "react";
import NavBar from "./navbar/NavBar";
import PostList from "./posts/PostList";
import "./Para.css";

const Para = () => {
  return (
    <>
      <NavBar />
      <h1>
        Welcome to the home page!!!
      </h1>
      <div>
        <PostList />
      </div>
    </>
  );
};

export default Para;