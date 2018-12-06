import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="folder-box brain-box">
      <h2>Left Brain</h2>
      <p>Here are my analytical and technical proficiencies -</p>
      <SkillSection
        heading="Front End"
        list={[
          "Javascript ES6",
          "React / Redux",
          "CSS (flexbox, responsive)",
          "Semantic HTML5",
          "A11y accessibility"
        ]}
      />
      <SkillSection
        heading="Back End"
        list={[
          "Node.js",
          "noSQL databases (postgres)",
          "Relational databases (mongo)",
          "npm",
          "Express / REST APIs"
        ]}
      />
      <SkillSection
        heading="Odds & Ends"
        list={[
          "Physics / Calculus",
          "Continuous Integration",
          "Excel / Spreadsheets",
          "Git Version Control",
          "Command Line Interface",
          "Serious problems solver"
        ]}
      />
    </div>
  );
}
