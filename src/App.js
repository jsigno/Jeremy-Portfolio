import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Mrg from "./components/Mrg";
import Contact from "./components/Contact";

function App() {
  return <div>
    <NavBar/>
    <Home />
    <About />
    <Mrg />
    <Contact />
  </div>;
}

export default App;
