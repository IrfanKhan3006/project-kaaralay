import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Comment from "./Comment";
import Activity from "./Activity";
import Profiledetails from "./Profiledetails";
import Evaluate from "./Evaluate";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Commonnavbar.css";
import backgroundimg from "./images/Recruitment jobs page 3.png";
import PhoneInput from "react-phone-number-input";
import ProfileNav from "./ProfileNav";

import Evaluatedata from "./Evaluatedata";

function Commonnavbardata() {
  /* validation*/
  const initialValues = {
    name: "",
    emailaddress: "",
    number: "",
    lastname: "",
    skill: "",
    source: "",
    tag: "",
    cv: "",
    coverletter: "",
  };
  const [tagError, settagError] = useState("");
  const [logindata, setlogindata] = useState(initialValues);
  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [skillError, setskillError] = useState("");
  const [sourceError, setsourceError] = useState("");
  const [cvError, setcvError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const [d, setd] = useState("Applied");
  const [value, setValue] = useState();

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
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
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
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
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
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
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

    if (!regex.test(logindata.skill)) {
      setskillError("Please Enter Valid Email Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
  };

  const handleChange5 = (e) => {
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
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
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

    if (!userregex.test(logindata.skill)) {
      setskillError("Please Enter Valid Skill Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
  };

  const handleChange6 = (e) => {
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
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid Email Address");
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

    if (!userregex.test(logindata.skill)) {
      setskillError("Please Enter Valid Skill Address");
      setmoveto2(false);
    } else {
      setskillError("");
      setmoveto2(true);
    }
    if (!userregex.test(logindata.source)) {
      setsourceError("Please Enter Valid Source Address");
      setmoveto2(false);
    } else {
      setsourceError("");
      setmoveto2(true);
    }
    if (!userregex.test(logindata.tag)) {
      settagError("Please Enter Valid Tag Address");
      setmoveto2(false);
    } else {
      settagError("");
      setmoveto2(true);
    }
  };

  /*validations*/

  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);

  const showdata = (e) => {};
  return (
    <div style={{ overflow: "auto" }}>
      <div className="border-bas">
        <div className="bas-1">
          <div className="bas-title" style={{ display: "flex" }}>
            <p className="bas-title-1">Basic Information</p>
          </div>
          <div className="bas-data" style={{ display: "flex" }}>
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
                  First Name
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
                  Last Name
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
                name="lastname"
                onChange={handleChange1}
              />
              <p>{lastnameError}</p>
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
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
                  Email Address
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="bas-form-enter-1"
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
                  Phone Number
                </label>
              </div>
              <PhoneInput
                international
                defaultCountry="RU"
                style={{ marginTop: "1rem", width: "18.5rem" }}
                onChange={setValue}
                className="phone__signup"
              />
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
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
                  Skill
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Skills"
                className="bas-form-enter-1"
                style={{ marginTop: "4%" }}
                name="skill"
                onChange={handleChange5}
              />
              <p>{skillError}</p>
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
                  Source
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Source"
                name="source"
                onChange={handleChange6}
                className="bas-form-enter-1"
                style={{ marginTop: "4%" }}
              />
              <p>{sourceError}</p>
            </div>
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
                Tags
              </label>
            </div>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Tags"
              className="bas-form-enter-2"
              style={{
                width: "95%",
                paddingLeft: "2%",
                opacity: "0.5",
              }}
              name="tag"
              onChange={handleChange6}
            />
          </div>
          <div className="bas-cv">
            <p className="bas-cv-p-1">CV</p>
            <p className="bas-cv-p">Download CV</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
            style={{ opacity: "0.5" }}
          ></textarea>
          <div className="bos-cover-1">
            <p className="bos-letter">Cover letter</p>
          </div>
          <textarea
            id="freeform"
            name="freeform"
            className="bas-txt-upload"
            style={{ height: "6rem", opacity: "0.5" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Commonnavbardata;
