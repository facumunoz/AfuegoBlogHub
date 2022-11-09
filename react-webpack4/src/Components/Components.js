import React from "react";
import Main from "./Main/Main.js";
import PostEntry from "./PostEntry/PostEntry.js";
import Nav from "./Nav/Nav.js";
import FullPost from "./FullPost/FullPost.js";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister.js";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const Components = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/auth" exact component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          {/* <Route path="/" exact component={Main} /> */}
          <Route path="/postentry" component={PostEntry} />
          <Route path="/fullpost/:postId" component={FullPost} />
          <Redirect to="/auth" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;