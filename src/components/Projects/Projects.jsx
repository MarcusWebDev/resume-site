import "./Projects.scss";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-content-container">
        <h1>Projects</h1>
        <div className="project-container">
          <a href="https://amiibolibrary.com/">
            <h2>The Amiibo Library</h2>
          </a>
          <p>
            The Amiibo Library was made to provide users with information on
            amiibos and help them manage their collection.
          </p>
          <a
            className="github-link"
            href="https://github.com/MarcusWebDev/the-amiibo-library"
          >
            Github - Front-End
          </a>
          <a
            className="github-link"
            href="https://github.com/MarcusWebDev/the-amiibo-library-api"
          >
            Github - Back-End
          </a>
        </div>
        <div className="project-container">
          <a href="https://rainbowangles.com/#/">
            <h2>Rainbow Angles</h2>
          </a>
          <p>
            Rainbow Angles is a website created to help players of the video
            game Rainbow Six Siege improve their knowledge of the game.
          </p>
          <a
            className="github-link"
            href="https://github.com/MarcusWebDev/rainbow-angles"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
