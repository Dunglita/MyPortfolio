import React from "react";
import "../Css/NotFound.css";
import Lost from "../Assets/Images/lost.png";
import Somenthing from "../Assets/Images/something.png";
import Forma1 from "../Assets/Images/forma1.png";
import Forma2 from "../Assets/Images/forma2.png";
import Forma3 from "../Assets/Images/forma3.png";
import Forma4 from "../Assets/Images/forma4.png";
import Forma5 from "../Assets/Images/forma5.png";
import { Link } from "react-router-dom";
export default function NotFound(props) {
  return (
    <>
      <div>
        <div id="img-container">
          {/* TODO: SEE IF WE KEEP THE CODE OR JUST GET RID OF ANIMATIONS
          <div class="center">
            <div class="wrap">
              <div class="box-1 box">
                <i>
                  <img id="cloud" className="clouds" src={Forma1} />
                </i>
                <i>
                  <img id="cloud" className="clouds" src={Forma1} />
                </i>
              </div>
              <div class="box-2 box">
                <i>
                  <img id="cloud" className="clouds" src={Forma1} />
                </i>
                <i>
                  <img id="cloud" className="clouds" src={Forma1} />
                </i>
              </div>
            </div>
          </div>
          */}
          <div id="lost-container">
            <img id="lost" className="images" src={Lost} />
          </div>
          <Link to={props.vinculo} className="btn btn-warning" id="home-btn">
            <p>Take Me Home</p>
          </Link>
          <img id="something" className="images" src={Somenthing} />
          <img id="forma1" className="images" src={Forma1} />
          <img id="forma2" className="images" src={Forma2} />
          <img id="forma3" className="images" src={Forma3} />
          <img id="forma4" className="images" src={Forma4} />
          <img id="forma5" className="images" src={Forma5} />
        </div>
      </div>
    </>
  );
}
