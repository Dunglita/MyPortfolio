import React from "react";
import "../Css/ToolCard.css";
export default function ToolCard(props) {
  return (
    <div className="tool_Container">
      <div className="tool">
        <div>
          <h6 className="tool_title">{props.title}</h6>
          <img src={props.path} className="tool_image" alt={props.title}></img>
        </div>
      </div>
    </div>
  );
}
