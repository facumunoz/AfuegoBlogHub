import React from "react";

// This module contains a form and handles user input for new post entries by allowing to set up values of state variables
const PostEntryForm = ({ content, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
    <div>
        <div className="form-group">
          <label id="inputLabel">Title:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="input"
            value={content.newTitle}
            onChange={onChange}
            text="text"
            name="newTitle"
            placeholder="Enter Post Title"
            required
          />
        </div>
        <div className="form-group">
          <label id="inputLabel">Subtitle:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="input"
            value={content.newSubtitle}
            onChange={onChange}
            text="text"
            name="newSubtitle"
            placeholder="Enter Post Subtitle"
            required
          />
        </div>
        <div className="form-group">
          <label id="inputLabel">Post Text:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="input"
            value={content.newContent}
            onChange={onChange}
            text="text"
            name="newContent"
            placeholder="Enter Post Text"
            required
          />
        </div>
        <div className="form-group">
          <button id="submitButton" type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </div>
  </form>
  );
};

export default PostEntryForm;