import React from "react";
import Project from "./Project";
import Tab from "../Tab";
import projectData from "./projectData";
import "./Projects.css";

export default function Projects() {
  let boxColor = "#F7FFD1";

  let projects = projectData.map(proj => {
    return <Project bgColor={boxColor} key={proj.title} proj={proj} />;
  });

  return (
    <div className="folder" id="Projects">
      <Tab color={"#e2f877"} textColor={"#55650A"}>
        WHAT?
      </Tab>
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
    </div>
  );
}
