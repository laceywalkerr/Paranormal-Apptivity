import React, { useEffect } from 'react';
import PostCard from "./PostCard";
import PostManager from '../../modules/PostManager';

const PostList = () => {

    const PostList = () => {
        const [posts,setPosts] = useState([]);
    }
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
        {posts.map(post => <PostCard />)}
        </div>
    );
};

export default PostList;