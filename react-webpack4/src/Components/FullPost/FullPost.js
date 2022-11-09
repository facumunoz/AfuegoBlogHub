import "../../styles.css";
import React, { useEffect, useState } from "react";
import { getAllComments } from "../../Services/CommentsService.js";
import { useParams } from "react-router-dom";

const FullPost = () => {
  //const location = useLocation();
  //const post = location.state?.post;

  const [comments, setComments] = useState([]);
  // useEffect utility to yank posts
  useEffect(() => {
    getAllComments().then((comments) => {
      setComments(comments);
    });
  }, []);

  let items = comments.map((comment) => (
    <div>
      <span>
        <li key={comment.objectId}>
          {comment.get("Content")}
          <br />
        </li>
      </span>
    </div>
  ));
  // contents of the html below:
  // We intend to display the full content of a particular post in full page view, but we struggled to pass the post object properly and read its data
  return (
    <div>
      <h1 id="mainTitle">Full Post</h1>
      <h3>Title of the post:</h3>
      <br />
      {/* This is a list of all currently avaulable comments*/}
      <h3>Comments:</h3>
      <div>
        <br />
        <ul>
          {/* In the future, we intend to use the pointer in the comments to filter out only the comments that actually belong to this blog post */}
          {items}
        </ul>
      </div>
    </div>
  );
};

export default FullPost;