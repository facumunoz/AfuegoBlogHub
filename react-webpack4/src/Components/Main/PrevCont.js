import React from "react";

// This serves as the container for each individual post in the post list
const PrevCont = ({ post, onButtonClick }) => {
  return (
    <div className="child">
      {/* entire contents in blog post previews */}
      <button className="postContainer" onClick={onButtonClick(post.id)}>
        <div>
          Title: {post.get("title")}
          <br />
          Author: {post.get("AuthorName")}
          <br />
          {post.get("entryText")}
        </div>
      </button>
    </div>
  );
};

export default PrevCont;