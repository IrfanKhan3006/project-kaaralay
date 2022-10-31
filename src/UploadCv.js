import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Resume.css'
function UploadCv() {
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
          <p className="testing-p">Edit Tag</p>
          <hr />
          <input type="text" placeholder="Mridul" className="testing-input1" />

          <div className="testing-btn">
            <button className="testing-button">
              <Link
                to="/deletetag"
                style={{ textDecoration: "none", color: "white" }}
              >
                Confirm
              </Link>
            </button>
            <button className="testing-button">
              {" "}
              <Link
                to="/Source"
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

export default UploadCv