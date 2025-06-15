import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div id="projectsContainer">
            <div id="projectsContentContainer">
                <h1>Projects</h1>
                <h2>The Amiibo Library</h2>
                <p><a href="https://amiibolibrary.com/" className="projectsLink">The Amiibo Library</a> was made to provide users with information on amiibos and help them manage their collection.</p>
                <h2>Rainbow Angles</h2>
                <p><a href="https://rainbowangles.com/#/" className="projectsLink">Rainbow Angles</a> is a website created to help players of the video game Rainbow Six Siege improve their knowledge of the game.</p>
            </div>
        </div>
    );
}

export default Projects;