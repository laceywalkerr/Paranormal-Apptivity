import React, { useState, useEffect } from 'react';
import PostManager from '../../modules/PostManager';
import './PostDetail.css'

const PostDetail = props => {
  const [post, setPost] = useState({ name: "", breed: "" });

  useEffect(() => {
    PostManager.get(props.postId)
      .then(post => {
        setpost({
          name: post.name,
          breed: post.breed
        });
      });
  }, [props.postId]);

  return (
    <div className="card-outside">
      <div className="card-inside">
        <picture>
          <img src={require('./postimg.png')} alt="Entry Icon" />
        </picture>
        <h3>Title: <span style={{ color: 'darkslategrey' }}>{post.title}</span></h3>
        <p>Date: {post.date}</p>
        <p>Latitude: {post.latitude}</p>
        <p>Logitude: {post.logitude}</p>
        <p>Location Description: {post.location}</p>
        <p>Encounter Summary: {post.description}</p>
      </div>
    </div>
  );
}
export default PostDetail;