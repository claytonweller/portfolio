import React from "react";
import SkillHeader from "./SkillHeader";
import LeftBrain from "./LeftBrain";
import RightBrain from "./RightBrain";
import "./Skills.css";

// Since this section has so 2 break points it's got a bunch of nested divs.
// Consequently there are elements inside of elements.

// When in mobile eveything is just in one long column

// When in wide my picture, the left, and right brain objects are in a row.

// In the middle where the Left and Right Brains stay in a column,
// but my picture is to the side.

export default function Skills() {
  return (
    <section id="Skills" className="folder">
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <SkillHeader />
        <div className="flex-display">
          <div className="picture-holder">
            <img
              src={require("../../assets/SkillsClayton.png")}
              alt="Clayton Weller looking like a goober as he points out his own skills"
              className="clayton"
            />
          </div>
          <div className="brain-holder">
            <LeftBrain />
            <RightBrain />
          </div>
        </div>
      </div>
    </section>
  );
}
