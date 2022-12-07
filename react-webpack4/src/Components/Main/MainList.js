import PrevCont from "./PrevCont.js";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainList = ({ posts, amount }) => {
  // html explanation below:
  // header text, and ul with map call for posts(to use amounts)
  
  const navigate = useNavigate();

  function clickHandler(postId) {
    console.log("trying to go to full post");
    navigate(`/fullpost/${postId}`);
  }

  return (
    <div id="blogList">
      <hr />
      Blog Preview list:
      {/* posts currently contain title,author,post content */}
      {/* eventually, they will be formatted nicer and will contain more metadata */}
      {/* 
          posts are clickable and take the user to the specific post only the 
          post doesn't display information properly becasue we couldn't properly 
          pass the post object and read from it in the full post page 
      */}
      <ul id="PrevList">
        {posts.slice(0, amount).map((post) => (
          <div>
            <span>
              {/* Using getter for lesson Object to display name */}
              <li key={post.id}>
                {/* This links to the full post view page*/}
                {/* <Link to={{ pathname: "/fullpost", state: { post: { post } } }}>
                </Link> */}
                <PrevCont post={post} onButtonClick={clickHandler} />
              </li>
            </span>
          </div>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default MainList;