import React, { useEffect, useState } from "react";
import "../../styles.css";
import { getAllPosts } from "../../Services/PostsService.js";
import MainList from "./MainList.js";

const Main = () => {
  // posts contains post information
  const [posts, setPosts] = useState([]);
  // amount contains amount of posts to display
  const [amount, setAmount] = useState(5);

  // useEffect utility to yank posts
  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  // change post amount functions
  // eventually it will be a dropdown with options and arrows and such
  const incrementCount = () => {
    // Update state with incremented value
    setAmount(amount + 1);
  };
  const decrementCount = () => {
    // Update state with decremented value
    // if its 0, dont change
    if (amount === 0) {
      setAmount(amount);
    } else {
      setAmount(amount - 1);
    }
  };

  // contents of the html below:
  // Title, some explanatory text, interactive amount of posts ui
  return (
    <div>
      <h1 id="mainTitle">Afuego Blog Hub</h1>
      <br/>
      <h5 id="mainInfo">How many blog previews do you want to see?</h5>
      <div id="amount"className="postcount">
        <button onClick={decrementCount}>-</button>
        {amount}
        <button onClick={incrementCount}>+</button>
      </div>
      <MainList posts={posts} amount={amount} />
    </div>
  );
};

export default Main;