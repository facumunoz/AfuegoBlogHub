import React from "react";

// This is the stateless container for a blog post in the full post view
const FullPostCont = ({ title, subTitle, date, author, text }) => {
  return (
    <div >
        <h1 id="mainTitle">Full Post</h1>
        <h2>Title of the post: {title}</h2>
        <h3>Subtitle: {subTitle}</h3>
        <p>Author: {author}</p>
        <p>Date Posted: {date}</p>
        <br />
        <p> Post Text: {text}</p>
        <br />
    </div>
  );
};

export default FullPostCont;