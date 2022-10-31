import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'
function Deletes() {
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
        <div className="testing-content100">
          <p className="testing-p">Delete Source</p>
          <hr />

          <div className="testing-btn">
            <button className="testing-button">
              {" "}
              <Link
                to="/newstage"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button">
              {" "}
              <Link
                to="/edits"
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

export default Deletes
