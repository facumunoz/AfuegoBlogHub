import "../../styles.css";
import React, { useEffect, useState } from "react";
import { getAllComments } from "../../Services/CommentsService.js";
import { useParams } from "react-router-dom";
import Parse from "parse";
import FullPostCont from "./FullPostCont.js";
import CommentForm from "./CommentForm";

const FullPost = () => {

  const { postId } = useParams();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const [newComment, setNewComment] = useState("");

  const [add, setAdd] = useState(false);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [datePosted, setDate] = useState("");
  const [username, setUser] = useState("");
  const [entryText, setText] = useState("");

  const [comments, setComments] = useState([]);
  // useEffect utility to yank posts
  useEffect(() => {
    getAllComments().then((comments) => {
      setComments(comments);
    });
  }, []);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newComment && add) {
      //Creating new comments
      const CommentObj = Parse.Object.extend("Comments");
      const commentObj = new CommentObj();

      const Posts = Parse.Object.extend("BlogPosts");
      const query = new Parse.Query(Posts);
      query.get(postId).then((post) => {
        commentObj.set("blogPost", post.toPointer());
        commentObj.set("dateCommented", new Date());
        commentObj.set("Content", newComment);
        commentObj.set("username", Parse.User.current()?.getEmail());
        commentObj.save()
        .then((comment) => {
          // Success
          window.location.reload(true);
        }, (error) => {
          // Save fails
          alert('Failed to create new object');
          console.log(error.message);
        });
        setAdd(false);
      });
    }
  }, [newComment, add, postId]);

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

  // Filtering out comments to only display those that belong to this particular blog post
  let items = comments.filter(comment => comment.get("blogPost").id === postId);

  items = items.map((comment) => (
    <div>
      <span>
        <li key={comment.objectId}>
          {comment.get("username")}: {comment.get("Content")}
          <br />
        </li>
      </span>
    </div>
  ));

  const onChangeHandler = (e) => {
    e.preventDefault();

    setNewComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };
  // contents of the html below:
  // We intend to display the full content of a particular post in full page view, but we struggled to pass the post object properly and read its data
  return (
    <div>
      <FullPostCont title={title} subTitle={subtitle} date={datePosted} author={username} text={entryText} />
      <br />
      <CommentForm
        content={newComment}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <br />
      {/* This is a list of all currently avaulable comments*/}
      <h3>Comments:</h3>
      <div>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default FullPost;