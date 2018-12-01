import React from "react";
import "./Top.css";

export default function TopNav() {
  return (
    <div id="TopNav" className="top-holder">
      {/* Initials not visible in mobile */}
      <a
        className="initials"
        href="none"
        onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}
      >
        <img src={require("../../assets/Initials.png")} alt="CW" />
      </a>

      {/* Only visible in mobile */}
      <img
        src={require("../../assets/Full-Name-wide.png")}
        alt="Clayton Weller"
        className="wide-name"
      />

      {/* Always visible! */}
      <button
        className="contact-button"
        onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }}
      >
        Contact
      </button>
    </div>
  );
}
