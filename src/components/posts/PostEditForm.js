import React, { useState, useEffect } from "react"
import PostManager from "../../modules/PostManager"


const PostEditForm = props => {
  const [post, setPost] = useState({ title: "", date: "", latitude: "", logitude: "", location: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const updateExistingPost = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedPost = {
      id: props.match.params.postId,
      title: post.title,
      date: post.date,
      latitude: post.latitude,
      logitude: post.logitude,
      location: post.location,
      description: post.description
    };

    PostManager.update(editedPost)
      .then(() => props.history.push("/posts"))
  }

  useEffect(() => {
    PostManager.get(props.match.params.postId)
      .then(post => {
        setPost(post);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={post.title}
            />
            <label htmlFor="title">Post title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={post.date}
            />
            <label htmlFor="date">Date</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="latitude"
              value={post.latitude}
            />
            <label htmlFor="latitude">latitude</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="logitude"
              value={post.logitude}
            />
            <label htmlFor="logitude">logitude</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={post.location}
            />
            <label htmlFor="location">location</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={post.description}
            />
            <label htmlFor="description">description</label>

          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingPost}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default PostEditForm

