import React from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

export default App;
