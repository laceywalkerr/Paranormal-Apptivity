import React, { useEffect, useState } from 'react';
import PostCard from "./PostCard";
import PostManager from '../../modules/PostManager';

const PostList = () => {
const [posts, setPosts] = useState([]);
    const getPosts = () => {
        return PostManager.getAll().then(postsFromAPI => {
            setPosts(postsFromAPI);
        });
    };

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div className="container-cards">
        {posts.map(post => 
        <PostCard key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;