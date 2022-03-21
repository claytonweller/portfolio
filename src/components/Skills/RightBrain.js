import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="folder-box brain-box">
      <h2>Right Brain</h2>
      <p>And these are things I do which are more creative/social -</p>
      <SkillSection
        heading="Business"
        list={[
          "Project Planning",
          "Market Research",
          "Copywriting",
          "Fundraising",
          "Messaging",
        ]}
      />
      <SkillSection
        heading="Management"
        list={[
          "Training and delegation",
          "Agile / Lean methodologies",
          "Realistic Scheulding",
          "Motivational interviewing",
          "Product Development",
        ]}
      />
      <SkillSection
        heading="Audio / Visual"
        list={[
          "Adobe Photoshop",
          "Adobe Premiere",
          "Videography",
          "Audio Editing",
          "Powerpoint (NOT BORING)",
        ]}
      />
      <SkillSection
        heading="Other Stuff"
        list={[
          "Teaching (Ages 2 -72)",
          "Script Writing",
          "Can navigate bureaucracy while maintaining a positive attitude!"
        ]}
      />
    </div>
  );
}
