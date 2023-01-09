import React from "react";
import profilePicture from "../../Assets/profilePicture.jpg";
import "./Homepage.css";

class Homepage extends React.Component {
    render() {
        return (
            <div id="homepageContainer">
                <div className="homepageContentContainer">
                    <img src={profilePicture} id="profilePicture" />
                    <h1>Marcus Brooks</h1>
                    <p>I am a software developer with a passion for programming and learning new things. I'm excited to work on whatever you may have for me.</p>
                </div>
            </div>
        );
    }
}

export default Homepage;