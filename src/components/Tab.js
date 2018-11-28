import React from "react";
import "./Tab.css";

export default function Tab(props) {
  return (
    <div className="tab">
      <a className="tab-text" style={{ color: props.textColor }}>
        {props.children}
      </a>
      <div className="tab-back" style={{ backgroundColor: props.color }} />
    </div>
  );
}
