import React, { useState, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min";

import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: document.body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#f72585",
          backgroundColor: "#001845",
          points: 11.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <Navbar />;
}

export default App;
