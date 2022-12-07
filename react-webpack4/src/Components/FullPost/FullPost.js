import "../../styles.css";
import React, { useEffect, useState } from "react";
import { getAllComments } from "../../Services/CommentsService.js";
import { useParams } from "react-router-dom";
import Parse from "parse";
import FullPostCont from "./FullPostCont.js";

const FullPost = () => {

  const { postId } = useParams();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [datePosted, setDate] = useState("");
  const [username, setUser] = useState("");
  const [entryText, setText] = useState("");

  const Posts = Parse.Object.extend("BlogPosts");
  const query = new Parse.Query(Posts);
  query.get(postId).then((results) => {
    // returns array of Blog Post objects
    setTitle(results.get("title"));
    setSubtitle(results.get("subtitle"));
    setDate(results.get("datePosted").toLocaleDateString("en-US", options));
    setUser(results.get("username"));
    setText(results.get("entryText"));
  });

  const [comments, setComments] = useState([]);
  // useEffect utility to yank posts
  useEffect(() => {
    getAllComments().then((comments) => {
      setComments(comments);
    });
  }, []);

  let items = comments.filter(comment => comment.get("blogPost").id === postId);

  items = items.map((comment) => (
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
      <FullPostCont title={title} subTitle={subtitle} date={datePosted} author={username} text={entryText} />
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