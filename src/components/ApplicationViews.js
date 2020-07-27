import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import PostList from "../components/posts/PostList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/posts"
        render={(props) => {
          return <PostList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;