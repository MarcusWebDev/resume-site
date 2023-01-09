import backgroundVideo from "./Assets/water-background.mp4";
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.js";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <video autoPlay muted loop id="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div id="backgroundFilter" />
      <NavBar location={location} />
      <Outlet />
    </div>
  );
}

export default App;
