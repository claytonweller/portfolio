import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="folder-box brain-box">
      <h2>Left Brain</h2>
      <p>Here are my analytical and technical proficiencies -</p>
      <SkillSection
        heading="Favorites"
        list={[
          "Typescript / Javascript",
          "Node.js",
          "noSQL databases (dynamo, mongo)",
          "Relational databases (postgreSQL)",
          "Express",
          "AWS - Lambda, ApiGateway, S3",
          "Serverless framework",
          "React",
          "Jest / Mocha",
          "Git version control",
          "SPREADSHEETS!"
        ]}
      />
      <SkillSection
        heading="APIs I've worked with"
        list={[
          "Sendgrid",
          "Google Docs",
          "Twitter",
          "Twilio",
          "Hotel Specific: Expedia, Priceline, Sabre, Getaroom, Hotelbeds"
        ]}
      />
      <SkillSection
        heading="Dabbled"
        list={[
          "Ruby / Rails",
          "GraphQL",
          "Machine Learning",
          "Python",
          "Arduino",
          'D3',
          'Redux',
        ]}
      />
    </div>
  );
}
