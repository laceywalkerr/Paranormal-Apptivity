import React, { useState, useEffect } from 'react';
import PostManager from '../../modules/PostManager';
import './PostDetail.css'

const PostDetail = props => {
    const [post, setPost] = useState(
      { title: "", date: "", latitude: "", logitude: "", location: "", description: ""});
      const [isLoading, setIsLoading] = useState(true);
    const handleDelete = () => {
    setIsLoading(true);
        PostManager.delete(props.postId).then(() =>
            props.history.push("/posts")
        );
        };
    useEffect(() => {
        PostManager.get(props.postId)
        .then(post => {
            setPost({
            title: post.title,
            date: post.date,
            latitude: post.latitude, 
            logitude: post.logitude, 
            location: post.location, 
            description: post.description
            });
            setIsLoading(false);
        });
    }, [props.postId]);

  return (
    <div className="container-cards">
      <div className="card-content">
        <picture>
          <img src={require('./postimg.png')} alt="Entry Icon" />
        </picture>
        <h3>Title: <span style={{ color: 'darkslategrey' }}>{post.title}</span></h3>
        <p>Date: {post.date}</p>
        <p>Latitude: {post.latitude}</p>
        <p>Logitude: {post.logitude}</p>
        <p>Location Description: {post.location}</p>
        <p>Encounter Summary: {post.description}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Delete Entry
        </button>
      </div>
    </div>
  );
}
export default PostDetail;