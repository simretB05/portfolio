
import React, {useState} from "react";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Home from "./components/Home/Home";
import Hero from "./components/Hero/hero";
import Skills from "./components/Skills/Skills";
import { ThemeProvider } from "./components/ThemeContext";
import Projects from "./components/projects/projects";




function App() { 


  return (
    <ThemeProvider>
      <Home />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ThemeProvider>

  );
}

export default App;