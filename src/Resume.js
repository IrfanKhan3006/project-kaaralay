import React,{useState} from 'react'
import group1 from "./images/Group.png";
import {Link} from 'react-router-dom';
import './Resume.css'

function Resume() {
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
        <div className="testing-content">
          <p className="testing-p">Upload Cv</p>
          <p className="testing-2">
            CV/RESUME<span className="required-sym"></span>
          </p>
          <hr className="hin" />
          <div className="testing-input">
            <div
              className="upload-2"
              style={{ display: "flex", marginTop: "20%" }}
            >
              <label
                for="file-input"
                style={{
                  width: "25%",
                  display: "flex",
                  marginLeft: "18%",
                  marginTop:'8%'

                }}
              >
                <img
                  src={group1}
                  className="descrip-icon-1"
                  style={{ height: "20px", width: "20px" }}
                />
                <p
                  className="upload-txt"
                  style={{ marginLeft: "15%", marginTop: "4%" }}
                >
                  Upload
                </p>
              </label>
              <input type="file" id="file-input" style={{display:'none'}}/>
            </div>
            <p className="aaa">
              File format: doc, docx, pdf. Max file size: 10MB.
            </p>
          </div>
          <div className="testing-btn" style={{marginTop:"2rem"}}>
          <Link
                to="/candidate"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
              {" "}
             
                Confirm
              
            </button>
            </Link>
            <Link
                to="/upload"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button className="testing-button">
              {" "}
              
                Cancel
              
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
