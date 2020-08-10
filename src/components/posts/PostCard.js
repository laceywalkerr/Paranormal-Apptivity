import React from "react";
import { Link } from "react-router-dom";
import "./Post.css"

const PostCard = props => {
    return (
            <div className="card-content">
                <picture className="postimg">
                    <img src={require("./postimg.png")} alt="Entry Icon"  />
                </picture>
                <h3>
                <span className="card-posttitle">
                    Title: &nbsp;
                    {props.post.title}</span>
                </h3>
                <p>
                    <b>Date:</b> {props.post.date}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Location Description:</b>  {props.post.location}
                </p>
                <p>
                    <b>Latitude:</b>  {props.post.latitude}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>Logitude:</b>  {props.post.logitude}
                </p>

                <p>
                    <b>Encounter Summary:</b>  {props.post.description}
                </p>
                <div className="button">
                <button type="button" onClick={() => props.deletePost(props.post.id)}>
                    Delete Entry
                    </button>
                    &nbsp;
                <Link to={`/posts/${props.post.id}`}>
                    <button>More Info</button>
                </Link>
                &nbsp;
                <button type="button" onClick={() => props.history.push(`/posts/${props.post.id}/edit`)}>
                    Edit
                    </button>
                </div>
            </div>

    );
};

export default PostCard;