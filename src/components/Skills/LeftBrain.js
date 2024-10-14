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
          "AWS - Lambda, ApiGateway, S3, SQS, SNS",
          "OpenApi",
          "Python",
          "noSQL databases (dynamoDB, mongo)",
          "Relational databases (postgreSQL)",
          "Express",
          "CI/CD",
          "Infrastructure as code",
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
          "Hotel Specific: Expedia, Priceline, Sabre, Getaroom, Hotelbeds",
          "Greenhouse",
          "Typesense",
          "Clickhouse",
          "Slack",
          "Discord"
        ]}
      />
      <SkillSection
        heading="Dabbled"
        list={[
          "Ruby / Rails",
          "GraphQL",
          "Machine Learning",
          "Arduino",
          'D3',
          'Redux',
          "Cloudflare"
        ]}
      />
    </div>
  );
}
