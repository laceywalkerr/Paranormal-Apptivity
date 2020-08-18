import React, { useState } from 'react';
import PostManager from '../../modules/PostManager';
import "./Post.css"

const PostForm = props => {
  const [post, setPost] = useState({ userId: parseInt(sessionStorage.activeUserId), title: "", date: "", latitude: "", logitude: "", location: "", description: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const constructNewPost = evt => {
    evt.preventDefault();
    if (post.title === "" || post.date === "" || post.description === "" ||  post.latitude === "" || post.logitude === "" || post.location === "" ) {
      window.alert("Please input an entry title, date and description");
    } else {
      setIsLoading(true);
      PostManager.post(post)
        .then(() => props.history.push("/posts"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <center>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Post title"
            />
            {/* <label htmlFor="title">Title</label> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="Date"
            />
            {/* <label htmlFor="date">Date</label> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="latitude"
              placeholder="Latitude"
            />
            {/* <label htmlFor="latitude">Latitude</label> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="logitude"
              placeholder="Logitude"
            />
            {/* <label htmlFor="logitude">Logitude</label> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="location"
              placeholder="Location"
            />
            {/* <label htmlFor="location">Location</label> */}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <textarea
                type="text"
                required
                onChange={handleFieldChange}
                id="description"
                placeholder="Description"
                
              />
              {/* <label htmlFor="description">Description</label> */}

          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewPost}
            >Submit</button>
          </div>
          </center>
        </fieldset>
      </form>
    </>
  );
};

export default PostForm;