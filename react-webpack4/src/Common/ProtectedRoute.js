import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUser } from "../Components/Auth/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <p>Unauthorized!</p> <button onClick={goBackHandler}>Login or Register Here</button>
      </div>
    );
  }
};

export default ProtectedRoute;