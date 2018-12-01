import React from "react";
import Project from "./Project";
import projectData from "./projectData";
import "./Projects.css";

// This is a list of my portfolio projects

export default function Projects() {
  let boxColor = "#F7FFD1";

  // The project data is just an array of objects with all the pertinent info.
  let projects = projectData.map(proj => {
    return <Project bgColor={boxColor} key={proj.title} proj={proj} />;
  });

  return (
    <section className="folder" id="Projects">
      <div>
        <div
          className="folder-box project-heading"
          style={{ backgroundColor: boxColor }}
        >
          <h2>Portfolio</h2>
          <p>Check out some of the coding projects I’ve created.</p>
        </div>
        <div className="project-holder">{projects}</div>
      </div>
    </section>
  );
}
