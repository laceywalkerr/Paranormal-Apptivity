import React, { useState } from 'react';
import PostManager from '../../modules/PostManager';
import './PostForm.css'

const PostForm = props => {
  const [post, setPost] = useState({ title: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const constructNewPost = evt => {
    evt.preventDefault();
    if (post.title === "" || post.date === "" || post.description === "") {
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
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Post title"
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="Date"
            />
            <label htmlFor="date">Date</label>
          <input
              type="text"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="Description"
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewPost}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default PostForm