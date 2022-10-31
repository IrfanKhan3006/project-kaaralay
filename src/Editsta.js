import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'

function Editsta() {
  const [style, setStyle] = useState("flex");

  const clickbtn = () => {
    setStyle("flex");
  };
  const clickbtnn = () => {
    setStyle("none");
  };
  return (
    <div className="upload-back">
      <div className="testing-App" style={{ display: style }}>
        <div className="testing-content11">
          <p className="testing-p">Edit Stage</p>
          <hr />
          <input
            type="text"
            placeholder="Screening"
            className="testing-input1"
          />

          <div className="testing-btn1">
            <button className="testing-button00">
              <Link
                to="/deletes"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button00">
              {" "}
              <Link
                to="/Hire"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cancel
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editsta;
