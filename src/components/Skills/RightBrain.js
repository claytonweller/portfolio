import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="folder-box brain-box">
      <h2>Right Brain</h2>
      <p>And these are things I do which are more creative/social -</p>
      <SkillSection
        heading="Audio / Visual"
        list={[
          "Adobe Photoshop",
          "Adobe Premiere",
          "Videography",
          "Audio Editing"
        ]}
      />
      <SkillSection
        heading="Marketing"
        list={[
          "Market Research",
          "Copywriting",
          "Project Management",
          "Product Development"
        ]}
      />
      <SkillSection
        heading="Other Stuff"
        list={[
          "Agile / Lean methodologies",
          "Teaching (Ages 2 -72)",
          "Script Writing",
          "Motivational interviewing",
          "Can navigate bureaucracy while maintaining a positive attitude!"
        ]}
      />
    </div>
  );
}
