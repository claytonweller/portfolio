import React from "react";
import Tab from "../Tab";
import "./About.css";

export default function About() {
  return (
    <div id="About" className="folder">
      <Tab color={"#ffde7a"} textColor={"#887027"}>
        WHO?
      </Tab>
      <div className="holder">
        <div className="folder-box" style={{ backgroundColor: "#FFF9E6" }}>
          <h2>About Me</h2>
          <p>
            Hi! I’m Clayton Weller. I’m a smart coder, savvy business person,
            and a funny guy. I love using a variety of tools to solve problems.
            In undergrad I got a double major in Physics and Theater. I’ve been
            a CMO of an animation software company (
            <a
              href="https://www.geekwire.com/2012/spurning-acquisition-offer-freakn-genius-raises-525000-angel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freak’n Genius
            </a>{" "}
            - 2011-2013). I used tech startup methodology to create and run a
            comedy club/theater (
            <a
              href="https://thepocket.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pocket Theater
            </a>{" "}
            - ‘13-’17).
          </p>
          <p>
            When it comes to technology I’m most interested in using the power
            of programatic language to give users new verbs: using code to
            empower people to do new magical things. Code is the druidic runes
            of our time and I love being a mondern day techno wizard!
          </p>
          <p>
            When I’m not making cross-disciplinary businesses, I teach comedy
            writing workshops, go camping / backpacking, and play games (video,
            board, party... love them all!)
          </p>
        </div>
        <div className="picture-holder">
          <img
            src={require("../../assets/AboutClayton.png")}
            alt="Clayton Weller looking like a goof ball pointing at his own bio."
            className="clayton"
          />
        </div>
      </div>
    </div>
  );
}