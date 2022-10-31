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
            <button className="testing-button">
              <Link
                to="/deletesta"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button">
              {" "}
              <Link
                to="/Tag"
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

export default Edit;
