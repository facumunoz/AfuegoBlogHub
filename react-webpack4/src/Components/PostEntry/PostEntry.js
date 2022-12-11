import "../../styles.css";
import React, { useEffect, useState } from "react";
import Parse from "parse";
import PostEntryForm from "./PostEntryForm.js";
import { useNavigate } from "react-router-dom";

const PostEntry = () => {

  const navigate = useNavigate();

  // Setting up state variables
  const [newPost, setNewPost] = useState({
    newTitle: "",
    newSubtitle: "",
    newContent: ""
  });

  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newPost && add) {
      //Creating new Post
      const BlogPostObj = Parse.Object.extend("BlogPosts");
      const blogPostObj = new BlogPostObj();

      // Setting attributes of new post with state variables set through post entry form
      blogPostObj.set("datePosted", new Date());
      blogPostObj.set("dateLastEdit", new Date());
      blogPostObj.set("title", newPost.newTitle);
      blogPostObj.set("subtitle", newPost.newSubtitle);
      // Setting up author full name using current users first and last name
      const firstName = Parse.User.current()?.get("firstName");
      const lastName = Parse.User.current()?.get("lastName");
      const fullName = firstName + " " + lastName;
      blogPostObj.set("username", Parse.User.current()?.getEmail());
      blogPostObj.set("AuthorName", fullName);
      blogPostObj.set("entryText", newPost.newContent);
      // Save new created post
      blogPostObj.save()
      .then((newPost) => {
        // If success, navigate user to full post view of newly added post
        navigate(`/fullpost/${newPost.id}`);
      }, (error) => {
        // If save fails, alert user and log error
        alert('Failed to create new post');
        console.log(error.message);
      });
      setAdd(false);
    }
  }, [newPost, add, navigate]);

  // Standard onchange and on submit handlers as seen in class examples
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;

    setNewPost({
      ...newPost,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };
  return (
    <div>
      {/*Loading the Entry form module to handle user input and set value of state variables */}
      <PostEntryForm
        content={newPost}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default PostEntry;