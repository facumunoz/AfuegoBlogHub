import React from "react";
import { checkUser } from "../Components/Auth/AuthService";
import AuthModule from "../Components/Auth/Auth.js";
import './../styles.css';

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  // If the user is logged in, return the desired component
  if (checkUser()) {
    return <Component />;
  } else {
    // If the user is not logged in, present an unauthorized message and load the auth module
    return (
      <div>
        <p>Unauthorized, please log in or register</p>
        <AuthModule/>
      </div>
    );
  }
};

export default ProtectedRoute;