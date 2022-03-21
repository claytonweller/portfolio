import React from "react";

// This is the info about each of my portfolio projects

const makeLink = (url, text) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
)

const projectData = [
  {
    imgUrl: require("../../assets/contraction.png"),
    active: true,
    title: "Contraction Tracker",
    description: (
      <span>
        A web app for expecting families to easily measure contractions and know when to go to the hospital/birth center.{" "}
        {makeLink('http://contraction.claytonweller.com', 'Contraction Tracker')}{' '}
        shows how labor is progressing, and will alert you when you've hit "go-time".
      </span>
    ),
    techList: [
      "React",
      "D3",
      "Node.js",
      "Typescript",
      "AWS: Lamba, S3, Dynamo, Api-gateway",
      "Jest / Zod",
      "Serverless framework"
    ],
    apiList: ["AWS-SDK"],
    liveLink: "http://contraction.claytonweller.com",
    repoLink: "https://github.com/claytonweller/contraction-tracker",
  },
  {
    imgUrl: require("../../assets/DGSS.png"),
    active: false,
    title: "DataGameShowShow",
    description: (
      <span>
        A framework for creating a live interactive game show. In <b>DataGameShowShow</b>{' '}
        every audience member's smart phone operates as a remote control. Actions {''}
        {makeLink('https://github.com/claytonweller/DGSS-crowd', 'audience members')}{' '}
        and a {''}
        {makeLink('https://github.com/claytonweller/DGSS-control', 'gameshow MC')}{' '}
        are all managed by a {''}
        {makeLink('https://github.com/claytonweller/DGSS-maestro', 'websocket state controller')}.
      </span>
    ),
    techList: [
      "React",
      "Websockets",
      "Node.js",
      "Typescript",
      "PostgreSQL / pg",
      "AWS: Lamba, RDS, Api-gateway, Amplify",
      "Serverless framework"
    ],
    apiList: ["AWS-SDK"],
    repoLink: "https://github.com/claytonweller/DGSS-maestro",
  },
  {
    imgUrl: require("../../assets/WorkWithArtists.png"),
    active: false,
    title: "Work With Artists",
    description: (
      <span>
        A searchable artist database for people looking for collaborators to
        work on creative projects.{" "}
        {makeLink('https://github.com/claytonweller/WWA-front', 'Work With Artists')}{' '}
        was like OKcupid, but instead of a weird date, you found people to make
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
    repoLink: "https://github.com/claytonweller/WWA-front"
  },
];

export default projectData;
