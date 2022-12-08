import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles.css";
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { getAllPosts } from "../../Services/PostsService.js";
import ProfileList from "./ProfileList.js"
import Parse from "parse";
import AuthSocials from "./../Auth/AuthSocials.js";

const Profile = () => {
    // posts contains post information
    const [posts, setPosts] = useState([]);
    // amount contains amount of posts to display
    const [amount, setAmount] = useState(5);
    const [update, setUpdate] = useState(false);
    const [newSocials, setNewSocials] = useState({
        instagram: "",
        youtube: "",
        linkedin: ""
    });
    const [vals, setVals] = useState("");
    // useEffect utility to yank posts
    useEffect(() => {
        getAllPosts().then((posts) => {
        setPosts(posts);
        });
    }, []);

    useEffect(()=>{
        setVals(Parse.User.current()?.get("instagram"));
    }, []);

    useEffect(()=>{
        if(newSocials && update) {
            // update social values
            const User = Parse.Object.extend(Parse.User);
            const query = new Parse.Query(User);
            query.get(Parse.User.current()?._getId()).then((result)=> {
                if(newSocials.instagram !== ""){
                    result.set("instagram", newSocials.instagram);
                }
                if(newSocials.linkedin !== ""){
                    result.set("linkedin", newSocials.linkedin);
                }
                if(newSocials.youtube !== ""){
                    result.set("youtube", newSocials.youtube);
                }
                try {
                    result.save(null);
                    return "User updated successfully!";
                } catch (e) {
                    console.log(e.message);
                    return e.message;
                }
            })
            
        }
    })
    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);
    
        setNewSocials({
          ...newSocials,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("submitted: ", e.target);
        setUpdate(true);
      };
      console.log(vals);
    // contents of the html below:
    // Title, some explanatory text, interactive amount of posts ui
    return (
        <div>
        <h1 id="profileTitle">{Parse.User.current()?.get("firstName")} {Parse.User.current()?.get("lastName")} </h1>
        <p id="profileDetails">{Parse.User.current()?.getEmail()}</p>
        <h4 id="profileInfo">Socials linked:</h4>
        <Container>
            <div className="social-media-icons d-flex justify-content-evenly">
                <a onClick={()=>{window.location.replace(Parse.User.current()?.get("instagram"))}}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a onClick={()=>{window.location.replace(Parse.User.current()?.get("linkedin"))}}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a onClick={()=>{window.location.replace(Parse.User.current()?.get("youtube"))}}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </Container>
        <div>
            <h4 id="profileInfo">Edit socials:</h4>
            <p id="profileSection">Please begin all urls with 'https://'. Enter a space if you wish to clear current linked account.</p>
            <AuthSocials
                socials={newSocials}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
        <ProfileList posts={posts} amount={amount} />
        </div>
    );
};

export default Profile;