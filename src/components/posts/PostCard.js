import React from "react";
import { Link } from "react-router-dom";

const PostCard = props => {
    return (
        <div className="container-cards">
            <div className="card-content">
                <picture>
                    <img src={require("./postimg.png")} alt="Entry Icon" />
                </picture>
                <h3>
                    Title: <span className="card-posttitle">
                    {props.post.title}</span>
                </h3>
                <p>
                    Date: {props.post.date}
                </p>
                <p>
                    Latitude: {props.post.latitude}
                </p>
                <p>
                    Logitude: {props.post.logitude}
                </p>
                <p>
                    Location Description: {props.post.location}
                </p>
                <p>
                    Encounter Summary: {props.post.description}
                </p>
                <button type="button" onClick={() => props.history.push(`/posts/${props.post.id}/edit`)}>
                    Edit
                    </button>
                <button type="button" onClick={() => props.deletePost(props.post.id)}>
                    Delete Entry
                    </button>
                <Link to={`/posts/${props.post.id}`}>
                    <button>More Info</button>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;