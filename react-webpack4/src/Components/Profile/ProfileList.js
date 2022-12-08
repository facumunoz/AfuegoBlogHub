import ProfilePrevCont from "./ProfilePrevCont.js";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Parse from 'parse';

const ProfileList = ({ posts, amount }) => {
  // html explanation below:
  // header text, and ul with map call for posts(to use amounts)
  console.log(posts);
  const [found, postFound] = useState(false);
  const navigate = useNavigate();

  function clickHandler(postId) {
    console.log("trying to go to full post");
    navigate(`/fullpost/${postId}`);
  }

  return (
    <div id="blogList">
      <hr />
      <h4 id="profileInfo">Blog Preview list:</h4>
      {/* posts currently contain title,author,post content */}
      {/* eventually, they will be formatted nicer and will contain more metadata */}
      {/* 
          posts are clickable and take the user to the specific post only the 
          post doesn't display information properly becasue we couldn't properly 
          pass the post object and read from it in the full post page 
      */}
      <ul id="PrevList">
        {posts.map((post) => {
            if(post.attributes.username === Parse.User.current()?.get('username')){
                if(!found) {postFound(true);}
                return <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
                  <li id="contList" key={post.id}>
                    {/* This links to the full post view page*/}
                    {/* <Link to={{ pathname: "/fullpost", state: { post: { post } } }}>
                    </Link> */}
                    <ProfilePrevCont post={post} onButtonClick={clickHandler} />
                  </li>
                </span>
              </div> 
            }
        })}
        {console.log(found)}
        {!found && <p id="prevList">No posts were found</p>}
      </ul>
      <hr />
    </div>
  );
};

export default ProfileList;