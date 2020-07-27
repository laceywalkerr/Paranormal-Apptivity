import React from "react";
import NavBar from "./navbar/NavBar";
import PostCard from "./posts/PostCard";
import "./Para.css";

const Para = () => {
  return (
    <>
      <NavBar />
      <h1>
        Welcome to the home page!!!
      </h1>
      <div>
        <PostCard />
      </div>
    </>
  );
};

export default Para;