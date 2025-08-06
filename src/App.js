import backgroundVideo from "./assets/water-background.mp4";
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import NavBarMobile from "./components/NavBarMobile/NavBarMobile.js";
import { useEffect, useState } from "react";


function App() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);
  const updateSize = () => setIsDesktop(window.innerWidth > 1450);

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop id="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div id="backgroundFilter" />
      {isDesktop && <NavBar location={location} />}
      <Outlet />
      {!isDesktop && <NavBarMobile location={location}/>}
    </div>
  );
}

export default App;
