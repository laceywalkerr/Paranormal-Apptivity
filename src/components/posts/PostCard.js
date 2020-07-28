import React from "react";

const PostCard = props => {
    return (
        <div className="card-outside">
            <div className="card-inside">
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
                <button type="button" onClick={() => props.deletePost(props.post.id)}>Delete Entry</button>

            </div>
        </div>
    );
};

export default PostCard;