import React from "react";
import SkillSection from "./SkillSection";
import Tab from "../Tab";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="Skills" className="folder">
      <Tab textColor="#935031" color="#ffb796">
        HOW?
      </Tab>
      <div className="folder-box header">
        <img
          src={require("../../assets/Bars.png")}
          alt="Some aesthetic bars"
          className="bars"
        />
        <h1>SKILLS!</h1>
        <img
          src={require("../../assets/Bars.png")}
          alt="Some more aesthetic bars"
          className="bars reverse"
        />
      </div>
      <div className="picture-holder">
        <img
          src={require("../../assets/SkillsClayton.png")}
          alt="Clayton Weller looking like a goober as he points out his own skills"
          className="clayton"
        />
      </div>
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
            "A11y accessibillity"
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
      <div className="folder-box brain-box">
        <h2>Right Brain</h2>
        <p>And these are things I do which are more creative/social -</p>
        <SkillSection
          heading="Audio / Visual"
          list={[
            "Adobe Photoshop",
            "Adobe Premier",
            "Videography",
            "Audio Editing"
          ]}
        />
        <SkillSection
          heading="Marketing"
          list={[
            "Market Research",
            "Copy writing",
            "Project Management",
            "Product Developement"
          ]}
        />
        <SkillSection
          heading="Other Stuff"
          list={[
            "Agile / Lean methodologies",
            "Teaching (Ages 2 -72)",
            "Script Writing",
            "Make people feel good",
            "Can navigate beurocracy while maintaining positive attitude!"
          ]}
        />
      </div>
    </div>
  );
}
