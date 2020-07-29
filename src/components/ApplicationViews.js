import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import PostList from "../components/posts/PostList";
import PostDetail from "../components/posts/PostDetail";
import PostForm from '../components/posts/PostForm';

const ApplicationViews = (props) => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}/>

      <Route exact
        path="/posts"
        render={(props) => {
          return <PostList {...props} />;
        }}/>

      <Route 
        path="/posts/new" 
        render={(props) => {
        return <PostForm {...props} />
        }} />

      <Route 
        path="/posts/:postId(\d+)" 
        render={props => {
        return <PostDetail 
        postId={parseInt(props.match.params.postId)}
        {...props}/>
        }} />

      

    </React.Fragment>
  );
};

export default ApplicationViews;