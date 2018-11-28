import React from "react";

export default function SkillSection(props) {
  let list = props.list.map(skill => (
    <li key={props.heading + skill}>{skill}</li>
  ));

  return (
    <div>
      <h3>{props.heading} -</h3>
      <ul>{list}</ul>
    </div>
  );
}
