import "../../styles.css";
import React, { useEffect, useState } from "react";
import Parse from "parse";
import PostEntryForm from "./PostEntryForm.js";
import { useNavigate } from "react-router-dom";

const PostEntry = () => {

  const navigate = useNavigate();

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
      blogPostObj.set("datePosted", new Date());
      blogPostObj.set("dateLastEdit", new Date());
      blogPostObj.set("title", newPost.newTitle);
      blogPostObj.set("subtitle", newPost.newSubtitle);
      const firstName = Parse.User.current()?.get("firstName");
      const lastName = Parse.User.current()?.get("lastName");
      const fullName = firstName + " " + lastName;
      blogPostObj.set("username", Parse.User.current()?.getEmail());
      blogPostObj.set("AuthorName", fullName);
      blogPostObj.set("entryText", newPost.newContent);
      blogPostObj.save()
      .then((newPost) => {
        console.log(newPost);
        console.log(newPost.id);
        // Success
        navigate(`/fullpost/${newPost.id}`);
      }, (error) => {
        // Save fails
        alert('Failed to create new post');
        console.log(error.message);
      });
      setAdd(false);
    }
  }, [newPost, add, navigate]);


  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(name);
    console.log(newValue);

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
      <PostEntryForm
        content={newPost}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default PostEntry;