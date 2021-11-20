import React, { useState, useEffect } from "react";
import "../Css/Tools.css";
import ToolCard from "./ToolCard";
import data from "../Assets/Json/Tools.json";
export default function Tools() {
  const [tools, setTools] = useState([]);
  useEffect(getTools, []);
  function getTools() {
    setTools(data);
  }
  function getMyTools() {
    const toolCards = tools.map((tools) => {
      return (
        <>
          <ToolCard title={tools.title} path={tools.path} />
        </>
      );
    });
    return toolCards;
  }
  return (
    <div className="tools_wrapper" id="tools">
      <div className="tools_title">
        <h1>Tools</h1>
        <h5>THINGS I FEEL CONFIDENT WORKING WITH</h5>
      </div>
      <div className="tools">{getMyTools()}</div>
    </div>
  );
}
