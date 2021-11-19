import React from "react";
import "../Css/SkillCard.css";
export default function SkillCard(props) {
  return (
    <div>
      <div class="skill">
        <div>
          <div class="skill_icon">
            <i class={props.icon}></i>
          </div>
          <h2 class="skill_title">{props.title}</h2>
          <p class="skill_apply">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
