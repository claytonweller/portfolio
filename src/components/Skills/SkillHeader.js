import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
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
  );
}
