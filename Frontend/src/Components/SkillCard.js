import React from "react";
import "../Css/SkillCard.css";
export default function SkillCard(props) {
  return (
    <div>
      <div className="skill">
        <div>
          <div className="skill_icon">
            <i className={props.icon}></i>
          </div>
          <h2 className="skill_title">{props.title}</h2>
          <p className="skill_apply">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
