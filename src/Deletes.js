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

          <div className="testing-btn" style={{paddingTop:"7%"}}>
          <Link
                to="/tag"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
              {" "}
             
                Confirm
              
            </button>
            </Link>
            <Link
                to="/tag"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
              {" "}
             
                Cancel
              {" "}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deletes
