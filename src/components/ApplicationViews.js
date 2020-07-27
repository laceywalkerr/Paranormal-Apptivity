import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import PostCard from "../components/posts/PostCard";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/posts"
        render={props => {
          return <PostCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;