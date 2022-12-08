import React, { useEffect, useState } from "react";
import "../../styles.css";
import { getAllPosts } from "../../Services/PostsService.js";
import ProfileList from "./ProfileList.js"
import Parse from "parse";

const Profile = () => {
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

    // contents of the html below:
    // Title, some explanatory text, interactive amount of posts ui
    return (
        <div>
        <h1 id="mainTitle">{Parse.User.current()?.get("firstName")} {Parse.User.current()?.get("lastName")} </h1>
        <p>Email: {Parse.User.current()?.getEmail()}</p>
        <p>Posts: </p>
        <ProfileList posts={posts} amount={amount} />
        </div>
    );
};

export default Profile;