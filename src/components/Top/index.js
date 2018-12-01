import React from "react";
import "./Top.css";

export default function Top() {
  // This is everything below the Basic nave portion.
  // Just a picture of me if Mobile.
  // My picture and my full name to the right if wide.

  return (
    <section id="Top">
      <div className="wide-holder">
        <div className="picture-holder">
          <img
            src={require("../../assets/claytonHeader.png")}
            alt="Clayton is smiling at you. He's wearing a glasses, a hat, and a button up shirt. He's got a beard. He's kind of goofy looking."
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
    </section>
  );
}
