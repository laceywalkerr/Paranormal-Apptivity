import React from "react";

const PostCard = () => {
    return (
        <div className="card-outside">
            <div className="card-inside">
                <picture>
                    <img src={require("./postimg.png")} alt="Entry Icon" />
                </picture>
                <h3>
                    Encounters will go here!
                </h3>
            </div>
        </div>
    );
};

export default PostCard;