import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Resume.css'

function Deletesta() {
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
          <p className="testing-p">Delete Folder</p>
          <hr />

          <div className="testing-btn" style={{paddingTop:"6%"}}>
            
          <Link
                to="#"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="testing-button">
             
                Confirm
             
            </button>
            </Link>
            <Link
                to="#"
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

export default Deletesta;
