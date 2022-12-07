import React from "react";

const CommentForm = ({ content, onChange, onSubmit }) => {

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