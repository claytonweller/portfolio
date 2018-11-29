import React from "react";
import "./Top.css";

export default function Top() {
  return (
    <div id="Top">
      <div className="top-holder">
        {/* Only if wide */}
        <img
          src={require("../../assets/Initials.png")}
          alt="CW"
          className="initials"
        />
        {/* Only if phone */}
        <img
          src={require("../../assets/Full-Name-wide.png")}
          alt="Clayton Weller"
          className="wide-name"
        />
        <button
          className="contact-button"
          href="http://google.com"
          target="_blank"
        >
          Contact
        </button>
      </div>
      <div className="wide-holder">
        <div className="picture-holder">
          <img
            src={require("../../assets/claytonHeader.png")}
            alt="Clayton is smiling at you. He's wearing a glasse, a hat, and a button up shirt. He's got a beard."
            className="clayton"
          />
        </div>

        {/* This should only display if wide */}
        <div className="name-holder">
          <img
            src={require("../../assets/Full-Name.png")}
            alt="Clayton Weller"
            className="big-name"
          />
        </div>
      </div>
    </div>
  );
}
