import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import PostList from "../components/posts/PostList";
import PostEditForm from "../components/posts/PostEditForm";
import PostDetail from "../components/posts/PostDetail";
import PostForm from '../components/posts/PostForm';



const ApplicationViews = (props) => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}/>

      <Route path="/login" component={Login} />

      <Route exact
        path="/posts"
        render={props => {
          if (isAuthenticated()) {
            return <PostList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

      <Route 
        path="/posts/new" 
        render={props => {
        return <PostForm {...props} />
        }} />

      <Route exact
        path="/posts/:postId(\d+)" 
        render={props => {
        return <PostDetail 
        postId={parseInt(props.match.params.postId)}
        {...props}/>
        }} />
      
      <Route path="/posts/:postId(\d+)/edit" render={props => {
          if (isAuthenticated()) {
            return <PostEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

    </React.Fragment>
  );
};

export default ApplicationViews;