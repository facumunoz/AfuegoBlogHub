import { Link } from "react-router-dom";

// the code below is the nav bar on top of the screen
const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;