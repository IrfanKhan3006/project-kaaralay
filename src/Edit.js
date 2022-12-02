import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'

function Edit() {
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
          <p className="testing-p">Edit Source</p>
          <hr />
          <input
            type="text"
            placeholder="faceboook"
            className="testing-input1"
          />

          <div className="testing-btn">
          <Link
                to="/tag"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
             
                Confirm
             
            </button>
            </Link>
            <Link
                to="/tag"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
             
                Cancel
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
