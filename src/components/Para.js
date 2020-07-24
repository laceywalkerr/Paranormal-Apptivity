import React from "react";
import PostCard from "./posts/PostCard.js";
import "./Para.css";

const Para = () => {
  return (
    <div>
      <h1>
        Welcome to the home page!!!
      </h1>
      <div>
        <PostCard />
      </div>
    </div>
  );
};

export default Para;