import React from "react";
import "./About.css";

// This is my Bio. Pretty straight forward.

const startedAsWebDev = new Date('2019-01-01')
const difMs = Date.now() - startedAsWebDev
const yearsCoding = Math.floor(difMs / (1000 * 60 * 60 * 24 *365.35 ))

export default function About() {
  console.warn(yearsCoding)
  return (
    <section id="About" className="folder">
      <div className="holder">
        <div className="folder-box" style={{ backgroundColor: "#FFF9E6" }}>
          <h2>About Me</h2>
          <p>
            Hi! I'm <span style={{ fontWeight: "bold" }}>Clayton Weller</span>.
            I'm a smart coder, savvy business person, and a funny guy. On top of working as a
            full-time web developer for <b>over {yearsCoding} years</b>: I have a
            double major in Physics and Theater, was a founder of an animation
            software company (
            <a
              href="https://www.geekwire.com/2012/spurning-acquisition-offer-freakn-genius-raises-525000-angel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freak'n Genius
            </a>{" "}
            - '11-'13), and used tech startup methodology to create and run a
            comedy club/theater (
            <a
              href="https://www.kickstarter.com/projects/1365853422/the-pocket-theater-seattle-needs-a-place-to-perfor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pocket Theater
            </a>{" "}
            - '13-'17).
          </p>
          <p>
          When it comes to technology, <b>I love solving immediate, real business problems.</b> 
          I personally identify as a full stack web developer with a lean toward the backend. 
          My focus has historically been on scalable microservices, integrations, APIs, and 
          data pipelines. Mostly, I just derive great joy from efficiently connecting together 
          different data sources in interesting ways. I have worked at both B2C and B2B companies 
          at scale, creating and maintaining infrastructure serving millions of users. 
          At previous employers I’ve been in charge of creating robust analytics pipelines, 
          managing sensitive financial data, and optimizing core search operations.
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
