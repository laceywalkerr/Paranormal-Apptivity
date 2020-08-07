import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { Form , FormControl } from 'react-bootstrap'
import PostManager from '../../modules/PostManager';

const PostList = (props) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    const getPosts = () => {
        return PostManager.getAll().then(postsFromAPI => {
            setPosts(postsFromAPI);
        });
    };
    const getPostByUser = () => {
        return PostManager.getUsersPosts().then(postsFromAPI => {
            setPosts(postsFromAPI);
        })
    };

    const deletePost = id => {
        PostManager.delete(id)
          .then(() => PostManager.getAll().then(setPosts));
    };

    useEffect(() => {
        if (props.userPosts) {
            getPostByUser()
        } else {
        getPosts();}
    }, []);

    useEffect(() => {
        setFilteredPosts(
            posts.filter(post =>
                post.description.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, posts]);


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
        <Form className="dashForm postListSearch">
                <FormControl className="dashcontrol" type="text" placeholder="Search posts" onChange={event => setSearch(event.target.value)} className="mr-sm-2" />
            </Form>
        <div className="container-cards">
            {filteredPosts.map(post => 
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