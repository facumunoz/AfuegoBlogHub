import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Auth/AuthService.js";

// the code below is the nav bar on top of the screen
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul id="navul">
        <li id="navli">
          {/* link to homepage */}
          <Link to="/">
            <p>Main</p>
          </Link>
        </li>
        <li id="navli">
          {/* link to blog creation entry page*/}
          <Link to="/postentry">
            <p>Create</p>
          </Link>
        </li>
        <li id="navli">
          {/* link to login register*/}
          <Link to="/auth">
            <p>Login/Register</p>
          </Link>
        </li>
        <li id="navli">
          {/* link to login register*/}
          <Link to="/profile">
            <p>My Profile</p>
          </Link>
        </li>
        <li id="navli-right">
          {/* link to login register*/}
          <button id="logout-button" onClick={()=> {
            // Calling the logout function from authservice
            const loggedOut = logoutUser();
            // If logout is successful then redirect user to home in case he is in a blocked page as well
            if (loggedOut) {
              navigate('/');
            }
          }}>
            <p>Log Out</p>
          </button>
        </li>
        {/* <img src="../../profileIcon.png" id="profilepic" alt=""></img> */}
      </ul>
      
    </nav>
  );
};

export default Nav;