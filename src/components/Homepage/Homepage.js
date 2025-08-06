import React from "react";
import profilePicture from "../../assets/profile-picture.jpg";
import "./Homepage.css";

class Homepage extends React.Component {
    render() {
        return (
            <div id="homepageContainer">
                <div className="homepageContentContainer">
                    <img src={profilePicture} id="profilePicture" alt='Marcus Brooks smiling.' />
                    <h1>Marcus Brooks</h1>
                    <p>I am a software developer with a passion for programming and learning new things. My favorite kind of projects to work on are projects where I can visually see my code in action. However, I'm open minded when it comes to new projects and I'm excited to work on whatever you may have for me.</p>
                </div>
            </div>
        );
    }
}

export default Homepage;