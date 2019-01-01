import React from "react";

// This is the info about each of my portfolio projects

const projectData = [
  {
    imgUrl: require("../../assets/WorkWithArtists.png"),
    title: "Work With Artists",
    description: (
      <span>
        A searchable artist database for people looking for collaborators to
        work on creative projects.{" "}
        <a
          href="http://www.workwithartists.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work With Artists
        </a>{" "}
        is like OKcupid, but instead of a weird date, you find people to make
        cool art projects with!
      </span>
    ),
    techList: [
      "React / Redux",
      "Node.js / Express",
      "JWT / Passport / Bcrypt",
      "PostgreSQL / pg (npm)",
      "Mocha/Chai",
      "Heroku / Travis CI"
    ],
    apiList: ["Sendgrid", "Cloudinary"],
    liveLink: "http://www.workwithartists.com",
    repoLink: "https://github.com/claytonweller/WWA-front",
    credentials: {
      email: "vip@claytonweller.com",
      password: "wonderfulday"
    }
  },
  {
    imgUrl: require("../../assets/SpeedBack.png"),
    title: "SpeedBack",
    description: (
      <span>
        In the tech world data is king, but live events are struggling to
        collect feedback from attendees.{" "}
        <a
          href="http://spdbck.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SpeedBack
        </a>{" "}
        helps comedy shows, concerts, workshops, and conferences get immediate
        feedback.
      </span>
    ),
    techList: [
      "Node.js / Express",
      "jQuery",
      "JWT / Passport / Bcrypt",
      "Heroku / Travis CI",
      "Mongo DB/Mongoose",
      "Mocha/Chai"
    ],
    apiList: ["twilio"],
    liveLink: "http://spdbck.herokuapp.com/",
    repoLink: "https://github.com/claytonweller/speedback",
    credentials: {
      email: "vip@claytonweller.com",
      password: "wonderfulday"
    }
  },
  {
    imgUrl: require("../../assets/rndmtwtr.png"),
    title: "RNDMTWTR",
    description: (
      <span>
        The world doesn't make sense anymore. So why should YOU have to? With{" "}
        <a
          href="https://claytonweller.github.io/RNDMTWTR/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RNDMTWTR
        </a>{" "}
        you have a limitless supply of incomprehensible (and hilarious) tweets!
      </span>
    ),
    techList: ["jQuery", "Node.js / Express", "HTML / CSS", "Heroku"],
    apiList: [
      "Wikipedia",
      "Giphy",
      "NewsAPI",
      "Twitter Intents",
      "Twitter Search"
    ],
    liveLink: "https://claytonweller.github.io/RNDMTWTR/",
    repoLink: "https://github.com/claytonweller/RNDMTWTR"
  }
];

export default projectData;
