import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import PostList from "../components/posts/PostList";
import PostEditForm from "../components/posts/PostEditForm";
import PostDetail from "../components/posts/PostDetail";
import PostForm from '../components/posts/PostForm';
import ChatList from "./chatroom/ChatList"
import ChatForm from "./chatroom/ChatForm"
import ChatEditForm from "./chatroom/ChatEditForm"
import FriendCard from "../components/friends/FriendCard"



const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  const userPosts = true

  return (
      <>
 
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }} />

      <Route exact path="/login" render={props => {
          return <Login setUser={setUser} {...props} />
        }} />

      {/* ***************POSTS**************** */}
      <Route exact
        path="/posts"
        render={props => {
          if (hasUser) {
            return <PostList {...props} />
          } else {
            return <Redirect to="/login" {...props} />
          }
        }} />

      <Route exact
        path="/myjournal"
        render={props => {
          if (hasUser) {
            return <PostList userPosts={userPosts} {...props} />
          } else {
            return <Redirect to="/login" {...props} />
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
              {...props} />
          }} />

        <Route path="/posts/:postId(\d+)/edit" render={props => {
          if (hasUser) {
            return <PostEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* ***************END POSTS**************** */}

        {/* ***************CHATROOM**************** */}

        <Route exact
        path="/chatroom"
        render={props => {
          if (hasUser) {
            return <ChatList {...props} />
          } else {
            return <Redirect to="/login" {...props} />
          }
        }} />

        <Route
        path="/chatroom/new"
        render={props => {
          return <ChatForm {...props} />
        }} />

        <Route path="/chatroom/:chatId(\d+)/edit" render={props => {
          if (hasUser) {
            return <ChatEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        
        {/* ***************END CHATROOM**************** */}


        {/* ***************FRIENDS**************** */}

        <Route exact
        path="/friends"
        render={props => {
          if (hasUser) {
            return <FriendCard {...props} />
          } else {
            return <Redirect to="/login" {...props} />
          }
        }} />
      </>
  );
};

export default ApplicationViews;