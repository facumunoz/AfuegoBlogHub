import React from "react";
import Main from "./Main/Main.js";
import PostEntry from "./PostEntry/PostEntry.js";
import Nav from "./Nav/Nav.js";
import FullPost from "./FullPost/FullPost.js";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin.js";


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import ProtectedRoute from "../Common/ProtectedRoute.js";

// the following component architecture includes all the possible routes and 
// the implementation of the protected route method
const Components = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/auth" exact element={<AuthModule />} />
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/" exact element={<Main />} />
          <Route path="/postentry" element={<ProtectedRoute path="/" element={PostEntry} />}/>
          <Route path="/fullpost/:postId" element={<ProtectedRoute path="/" element={FullPost} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Components;