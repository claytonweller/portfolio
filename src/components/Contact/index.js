import React from "react";
import "./Contact.css";

// Here are some more facts about the movie 'Contact'
// starring Jodie Foster & Matthew McConaughey -

// Author and Producer Carl Sagan died during production of the film.

// Mirroring their characters in the movie, in reality,
// Jodie Foster is an atheist or agnostic,
// and Matthew McConaughey is a Christian.

// In 2011, Jodie Foster was part of a group of private donors
// that saved S.E.T.I.'s telescope array in California.

export default function Contact() {
  return (
    <footer role="contentinfo" id="Contact">
      <img
        src={require("../../assets/Secret-Clayton.png")}
        alt="Clayton Weller upside down poking out of the bottom of the app"
        className="clayton"
      />
      <div className="info">
        <a
          className="bottom-button"
          href="https://github.com/claytonweller/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <a
          href="mailto:clayton.weller@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          clayton.weller @ gmail.com
        </a>
        <div>303.803.4589</div>
      </div>
    </footer>
  );
}
