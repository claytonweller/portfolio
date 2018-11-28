import React, { Component } from "react";
import Top from "./components/Top";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
