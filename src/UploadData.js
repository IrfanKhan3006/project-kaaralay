import React, { useState } from "react";
import group1 from "./images/Group.png";
import profileimg from "./images/Ellipse 52.png";
import organge from "./images/Group-bas.png";
import {Link} from 'react-router-dom'
import './Upload.css'
import PhoneInput from "react-phone-number-input";
import or from "./images/logo 3.png";



function UploadData() {
  const [value, setValue] = useState();

  const initialValues = {
    name: "",
    emailaddress: "",
    number: "",
    lastname: "",
    source:"",
    tag:""
  };

  const [logindata, setlogindata] = useState(initialValues);
  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [sourceError,setsourceError] = useState("")
  const [tagError, settagError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      setnameError("");
      setmoveto(true);
    }
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      setnameError("");
      setmoveto(true);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      setnameError("");
      setmoveto(true);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!phoneregex.test(logindata.number)) {
      setphoneError("Please Enter valid PhoneNumber");
      setmoveto3(false);
    } else {
      setphoneError("");
      setmoveto3(true);
    }
    if(!userregex.test(logindata.tag))
    {
      settagError("please Enter valid Job");
      
    }
    else
    {
      settagError("")
    }
     if (!userregex.test(logindata.source)) {
       setsourceError("please Enter valid Job");
     } else {
       setsourceError("");
     }
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(false);
    } else {
      setnameError("");
      setmoveto(true);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
    if (!regex.test(logindata.emailaddress)) {
      setemailError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setemailError("");
      setmoveto2(true);
    }
  };
  const showdata = () => {
 
  };
  return (
    <div className="upload-back">
      <div className="or-1">
        <div className="upload-data">
          <div className="or-3" style={{ display: "flex" }}>
            <p className="or-title" style={{ marginLeft: "35%" }}>
              New Candidate
            </p>
            <Link
              to="/Resume"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              <div className="upload-upl" style={{ display: "flex" }}>
                <img
                  src={organge}
                  className="descrip-icon-145"
                  style={{ height: "18px", width: "15px", marginLeft: "8%" }}
                />
                <p
                  className="upload-txt-upl"
                  style={{ marginLeft: "1px", color: "white", marginTop: "3%" }}
                >
                  Bulk Upload
                </p>
              </div>
            </Link>
          </div>
          <div className="upload-line"></div>

          <div className="upload-file">
            <label
              id="freeform"
              name="freeform"
              className="txt-upload-1"
              for="file--input"
              style={{ marginLeft: "-0%" }}
            >
              <div className="upload-255" style={{ display: "flex" }}>
                <img
                  src={group1}
                  className="descrip-icon-14"
                  style={{ height: "18px", width: "15px" }}
                />
                <p
                  className="upload-txt"
                  style={{ marginLeft: "0px", marginTop: "4%" }}
                >
                  Upload
                </p>
              </div>

              <div className="upload-tag">
                <p>File format: doc, docx, pdf. Max file size: 10MB.</p>
              </div>
            </label>
            <input type="file" id="file--input" />
          </div>
          <div className="prof-img" style={{ display: "flex" }}>
            <img
              src={profileimg}
              className="img-fluid justify-content-start f-1"
            />
            <p>File format: png, jpg, jpeg. Max file size: 2MB.</p>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginLeft: "3%", marginTop: "3%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  FIRST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                className="bas-form-enter-1"
                style={{ paddingLeft: "20px" }}
                name="name"
                onChange={handleChange}
              />
              <p>{nameError}</p>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  LAST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                className="bas-form-enter-1"
                style={{ paddingLeft: "20px" }}
                name="lastname"
                onChange={handleChange1}
              />
              <p>{lastnameError}</p>
            </div>
          </div>
          <div
            className="bas-data"
            style={{
              display: "flex",
              marginTop: "1%",
              marginLeft: "3%",
            }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  EMAIL ADDRESS
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email@com"
                className="bas-form-enter-1"
                style={{ paddingLeft: "20px" }}
                name="emailaddress"
                onChange={handleChange2}
              />
              <p>{emailError}</p>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  PHONE NUMBER
                </label>
              </div>
              <PhoneInput
                    international
                    defaultCountry="RU"
                    style={{marginTop:'1rem', width:"18rem"}}
                    onChange={setValue}
                    className="phone__signup"
                  />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginLeft: "3%", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  JOBS
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Jobs"
                className="bas-form-enter-1"
                style={{ marginTop: "4%", paddingLeft: "20px" }}
                name="tag"
                onChange={handleChange3}
              />
              <p>{tagError}</p>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  SOURCE
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="source"
                className="bas-form-enter-1"
                style={{ paddingLeft: "20px" }}
                name="source"
                onChange={handleChange3}
              />
              <p>{sourceError}</p>
            </div>
          </div>

          <div className="bos-cover">
            <p className="bos-letter" style={{paddingBottom:"1rem"}}>COVER LETTER</p>
            
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload-data"
          >
          </textarea>
          <div className="rej-btns">
            {moveto && moveto1 && moveto2 ? (
              <Link
                to="/Candidate"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button
                  className="reject-btn"
                  style={{ borderRadius: "10px" }}
                  onClick={showdata}
                >
                  Confirm
                </button>
              </Link>
            ) : (
              <Link
                to="/Candidate"
                style={{ textDecoration: "none", color: "white",pointerEvents:'none' }}
              >
                <button
                  className="reject-btn"
                  style={{ borderRadius: "10px" }}
                  onClick={showdata}
                >
                  Confirm
                </button>
              </Link>
            )}
            <Link
              to="/Candidate"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button
                className="reject-btn"
                style={{ borderRadius: "10px", marginLeft: "3%" }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadData;

/*

<div>
      <div className="uplaod-data">
        <div className="App-data">
          <p className="heading-data">New Candidate</p>
          <hr className="hr-data" />
          <div className="upload---data">
            Upload
            <p className="down-data">
              File format doc,docx,pdf.Max file size: 10MB.
            </p>
          </div>
          <div className="imgdiv-data">
            <img src="" className='img-data'/>
            <p className="downn-data">File format: pdf,Max file size: 10MB</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
*/
