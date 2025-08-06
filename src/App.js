import backgroundVideo from "./assets/water-background.mp4";
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import NavBarMobile from "./components/NavBarMobile/NavBarMobile.js";
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth > 1450);

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [setIsDesktop]);

  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="background-filter" />
      {isDesktop && <NavBar location={location} />}
      <Outlet />
      {!isDesktop && <NavBarMobile location={location}/>}
    </div>
  );
}

export default App;
