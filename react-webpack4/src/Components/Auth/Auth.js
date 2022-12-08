import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";
import './../../styles.css';

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // in order to auth, the two options are register a new account/login
  return (
    <div>
      <Link to="/register">
        <button id="authButtons">Register</button>
      </Link>
      <br />
      <br />
      <Link to="/login">
        <button id="authButtons">Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
