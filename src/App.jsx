import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from "./sections/hero";
import About from "./sections/about";
import Process from "./sections/process";
import Portfolio from './sections/portfolio';
import './App.css'

function App() {
  return (
    <>

      <Hero />
      <About />
      <Process />
      <Portfolio />
    </>
  );
}

export default App
