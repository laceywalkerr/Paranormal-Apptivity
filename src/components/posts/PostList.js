import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import PostManager from '../../modules/PostManager';

const PostList = (props) => {
const [posts, setPosts] = useState([]);
    const getPosts = () => {
        return PostManager.getAll().then(postsFromAPI => {
            setPosts(postsFromAPI);
        });
    };

    const deletePost = id => {
        PostManager.delete(id)
          .then(() => PostManager.getAll().then(setPosts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
        <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => 
            {props.history.push("/posts/new")}}>
            Create New Entry
        </button>
        </section>
        <div className="container-cards">
            {posts.map(post => 
            <PostCard 
                key={post.id} 
                post={post}
                deletePost={deletePost}
                {...props}/>)}
        </div>
        </>
    );
};

export default PostList;