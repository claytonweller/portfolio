import React from "react";
import Tab from "../Tab";
import SkillHeader from "./SkillHeader";
import LeftBrain from "./LeftBrain";
import RightBrain from "./RightBrain";
import "./Skills.css";

export default function Skills() {
  return (
    <div id="Skills" className="folder">
      <Tab textColor="#935031" color="#ffb796">
        HOW?
      </Tab>
      <div className="overflow-holder">
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
      </div>
    </div>
  );
}
