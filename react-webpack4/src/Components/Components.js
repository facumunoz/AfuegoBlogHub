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
          <Route path="/postentry" element={<PostEntry/>} />
          <Route path="/fullpost/:postId" element={<FullPost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Components;