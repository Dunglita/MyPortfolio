import React, { useState, useEffect } from "react";
import "../Css/Skills.css";
import SkillCard from "./SkillCard";
import data from "../Assets/Json/Skills.json";
export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(getSkills, []);
  function getSkills() {
    setSkills(data);
  }
  function getSkillCards() {
    const skillCards = skills.map((skill) => {
      return (
        <>
          <SkillCard
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        </>
      );
    });
    return skillCards;
  }
  return (
    <div className="learning-wrapper" id="my-learning">
      <div className="learning-title">
        <h1>Skills</h1>
        <h5>WHAT I DO AND THE WAY I WORK</h5>
      </div>
      <div className="skills">{getSkillCards()}</div>
    </div>
  );
}
