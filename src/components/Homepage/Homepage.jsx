import "./HomePage.scss";

import profilePicture from "../../assets/profile-picture.jpg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="homepage-content-container">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="Marcus Brooks smiling."
        />
        <h1>Marcus Brooks</h1>
        <p>
          I am a software developer with a passion for programming and learning
          new things. My favorite kind of projects to work on are projects where
          I can visually see my code in action. However, I'm open minded when it
          comes to new projects and I'm excited to work on whatever you may have
          for me.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
