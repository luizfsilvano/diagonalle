import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./sections/hero";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import "./App.css";
import Clients from "./sections/clients";

function App() {
  return (
    <>
      <Hero />

      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
