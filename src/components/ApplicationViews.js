import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import PostList from "../components/posts/PostList";
import PostForm from './post/PostForm'

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}/>

      <Route exact
        path="/posts"
        render={(props) => {
          return <PostList {...props} />;
        }}/>

      <Route post
      path="/posts/:postId(\d+)" 
      render={(props) => {
      return <PostDetail postId={parseInt(props.match.params.postId)}/>
      }} />

      <Route 
      path="/posts/new" 
      render={(props) => {
      return <PostForm {...props} />
      }} />

    </React.Fragment>
  );
};

export default ApplicationViews;