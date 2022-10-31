import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'
function NewTag() {
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
          <p className="testing-p">New Tag</p>
          <hr />
          <input type="text" className="testing-input1" />

          <div className="testing-btn">
            <button className="testing-button">
              {" "}
              <Link
                to="/EmailTemplate"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button o className="testing-button">
              {" "}
              <Link
                to="/deletetag"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTag;
