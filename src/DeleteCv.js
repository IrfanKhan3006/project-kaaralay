import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'
function DeleteCv() {
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
          <p className="testing-p">Delete Tag</p>
          <hr />

          <div className="testing-btn">
            <button className="testing-button">
              <Link
                to="/newcv"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button">
              {" "}
              <Link
                to="/Edittag"
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

export default DeleteCv;