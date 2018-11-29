import React from "react";

export default function Project({ proj, bgColor }) {
  let techList = proj.techList.map(tech => (
    <li key={proj.title + tech}>{tech}</li>
  ));
  let apiList = proj.apiList.map(api => <li key={proj.title + api}>{api}</li>);

  return (
    <div style={{ backgroundColor: bgColor }} className="project">
      <div>
        <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
          <img src={proj.imgUrl} alt={proj.title} />
        </a>
        <div className="description">
          <span className="small-header">What It Does:</span> {proj.description}
        </div>
        <br />
        <div>
          <span className="small-header">Tech Used -</span> <ul>{techList}</ul>
        </div>

        <div>
          <span className="small-header">Apis -</span>
          <ul>{apiList}</ul>
        </div>
      </div>

      <div className="button-holder">
        <a
          className="git-button"
          href={proj.repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="link-button"
          href={proj.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          LIVE APP
        </a>
      </div>
    </div>
  );
}
