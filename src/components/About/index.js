import React from "react";
import "./About.css";

// This is my Bio. Pretty straigt forward.

export default function About() {
  return (
    <section id="About" className="folder">
      <div className="holder">
        <div className="folder-box" style={{ backgroundColor: "#FFF9E6" }}>
          <h2>About Me</h2>
          <p>
            Hi! I'm <span style={{ fontWeight: "bold" }}>Clayton Weller</span>.
            I'm a smart coder, savvy business person, and a funny guy. On top of working as a
            full-time web developer for <b>over 4 years</b>: I have a
            double major in Physics and Theater, I was a founder of an animation
            software company (
            <a
              href="https://www.geekwire.com/2012/spurning-acquisition-offer-freakn-genius-raises-525000-angel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freak'n Genius
            </a>{" "}
            - 2011-2013), and I used tech startup methodology to create and run a
            comedy club/theater (
            <a
              href="https://thepocket.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pocket Theater
            </a>{" "}
            - '13-'17).
          </p>
          <p>
            When it comes to technology, I love solving <b>immediate, real business problems. </b>
            I personally identify as a backend developer with a focus on api
            integrations, and scalability <i>(but I can definitely cobble
              together a client facing application if I have to)</i>. Mostly, I just derive great
            joy from efficiently connecting together different data sources in interesting ways.
          </p>
          <p>
            When I'm not making cross-disciplinary businesses, I teach comedy
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
    </section>
  );
}
