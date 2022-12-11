import React from "react";

// Module for user comments input
const CommentForm = ({ content, onChange, onSubmit }) => {

    // Setting the appropriate onChange and onSubmit as  well as the data down state variable to save input to 
  return (
    <form onSubmit={onSubmit} autoComplete="off">
    <div>
        <div className="form-group">
          <label>Comment:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="comment-text-input"
            value={content}
            onChange={onChange}
            text="text"
            placeholder="Enter comment"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </div>
  </form>
  );
};

export default CommentForm;