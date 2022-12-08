import React from "react";

const PostEntryForm = ({ content, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
    <div>
        <div className="form-group">
          <label>Title:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="post-title-input"
            value={content.newTitle}
            onChange={onChange}
            text="text"
            name="newTitle"
            placeholder="Enter Post Title"
            required
          />
        </div>
        <div className="form-group">
          <label>Subtitle:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="post-subtitle-input"
            value={content.newSubtitle}
            onChange={onChange}
            text="text"
            name="newSubtitle"
            placeholder="Enter Post Subtitle"
            required
          />
        </div>
        <div className="form-group">
          <label>Post Text:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="post-text-input"
            value={content.newContent}
            onChange={onChange}
            text="text"
            name="newContent"
            placeholder="Enter Post Text"
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

export default PostEntryForm;