import "../../styles.css";
import React, { useEffect, useState } from "react";
import { getAllComments } from "../../Services/CommentsService.js";
import { useParams } from "react-router-dom";
import Parse from "parse";
import FullPostCont from "./FullPostCont.js";
import CommentForm from "./CommentForm";

const FullPost = () => {

  // Use params to retrieve post id from url
  const { postId } = useParams();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // Setting up state variables
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
    // When there is a new added comment and flag is set to True run comment creation logic
    if (newComment && add) {
      //Creating new comments
      const CommentObj = Parse.Object.extend("Comments");
      const commentObj = new CommentObj();

      const Posts = Parse.Object.extend("BlogPosts");

      // Retrieving post in order to set Pointer to new created comment
      const query = new Parse.Query(Posts);
      query.get(postId).then((post) => {
        // Setting new comment attributes
        commentObj.set("blogPost", post.toPointer());
        commentObj.set("dateCommented", new Date());
        commentObj.set("Content", newComment);
        commentObj.set("username", Parse.User.current()?.getEmail());
        commentObj.save()
        .then((comment) => {
          // Success, reload window for new comment to show up
          window.location.reload(true);
        }, (error) => {
          // Save fails, alert user and log error
          alert('Failed to create new object');
          console.log(error.message);
        });
        setAdd(false);
      });
    }
  }, [newComment, add, postId]);

  // Retrieve current post from database to display info
  const Posts = Parse.Object.extend("BlogPosts");
  const query = new Parse.Query(Posts);
  query.get(postId).then((results) => {
    // set value of state variables with properties of post retrieved from database
    setTitle(results.get("title"));
    setSubtitle(results.get("subtitle"));
    setDate(results.get("datePosted").toLocaleDateString("en-US", options));
    setUser(results.get("username"));
    setText(results.get("entryText"));
  });

  // Filtering out comments to only display those that belong to this particular blog post
  let items = comments.filter(comment => comment.get("blogPost").id === postId);

  // Setting up the display of comments belonging to current post
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

  return (
    <div>
      {/*Calling stateless module for displaying full content of the current post that has been retrieved*/}
      <FullPostCont title={title} subTitle={subtitle} date={datePosted} author={username} text={entryText} />
      <br />
      {/*Loading the module for new comments form to allow user to input new comments*/}
      <CommentForm
        content={newComment}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <br />
      {/* This is a list of all currently available comments for this particular post*/}
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