import React from "react";

// There are a bunch of short unordered lists in this section
// So instead of having to write all the <li>'s out it mapps over them
// Save probably 5 minutes. Super efficient!

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
