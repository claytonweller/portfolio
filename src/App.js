import React, { Component } from "react";
import TopNav from "./components/Top/TopNav";
import Top from "./components/Top";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import Tab from "./components/Tab";

class App extends Component {
  render() {
    return (
      <main className="App" role="main" aria-live="assertive">
        {/* In order for all the layering (z-index) to work
          All of these elements have to be in the same div.
          Originally I nested the Tabs inside their respective Folders,
          but having the cool sliding folders was worth the trade off
        */}

        {/* TOP - This is the first thing pepole see it's my name, my stupid mug,
       and a button for zipping to the contact seciton*/}
        <TopNav />
        <Top />
        <div className="spacer" />

        {/* ABOUT - Is for my bio */}
        <Tab id="About" vOffset={90} color={"#ffde7a"} textColor={"#887027"}>
          WHO?
        </Tab>
        <About />

        {/* PROJECTS - this is for my portfolio projects */}
        <Tab vOffset={95} id="Projects" color={"#e2f877"} textColor={"#55650A"}>
          WHAT?
        </Tab>
        <Projects />

        {/* SKILLS - This is a list of all of my applicable skills */}
        <Tab vOffset={100} id="Skills" textColor="#935031" color="#ffb796">
          HOW?
        </Tab>
        <Skills />

        {/* CONTACT - Surprisingly good movie starring Jodie Foster */}
        <Contact />
      </main>
    );
  }
}

export default App;
