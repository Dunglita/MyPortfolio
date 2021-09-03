import React from "react";
import "../Css/AboutMe.css";
import me from "../Assets/Images/me.png";
export default function AboutMe() {
  return (
    <>
      <div className="about-me">
        <img id="me-img" src={me} />
        <div id="right-content">
          <h1> About me</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor si voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
          <div id="btn-group">
            <button id="btn-cv" type="button" className="btn btn-warning">
              Descargar CV
            </button>
            <button type="button" className="btn btn-outline-warning">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
