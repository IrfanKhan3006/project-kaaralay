import React, { useState,useEffect } from "react";
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import b from "./images/B.png";
import i from "./images/I.png";
import Form from "react-bootstrap/Form";
import RichTextEditor from './shared/RichTextEditor'
import u from "./images/U.png";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from "react-bootstrap/Button";
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import { Link } from "react-router-dom";
import "./Offercandidate.css";
import { MoreVert } from "@mui/icons-material";

function Offercandidate() {
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);

  const initialValues = {
    name: "sklfjlskdfjlsdk",
    emailaddress: "xyz@gmail.com",
    lastname: "asdfasdf",
    phonenumber: "123456789",
  };

  const [logindata, setlogindata] = useState(initialValues);
const [value,getValue] =useState("");
  const [nameError, setnameError] = useState("");
  const [phoneError,setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(true);
  const [moveto4, setmoveto4] = useState(false);

  const errorshows = () => {};
  const handleChange = () => {
    if (logindata.name == "sklfjlsk dfjlsdk") {
      setnameError("");
    } else {
      const userregex =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Offer");
      } else {
        setnameError("");
        setmoveto2(true);
      }
    }
  };
  const setborder = () => {
    let k = document.getElementsByClassName("phoneInputInput");
    console.log(k);
    k.Style.border = "none";
  };

  useEffect(handleChange, [logindata]);

  const handleChange1 = (e) => {
    if (
      logindata.name == "sklfjlsk dfjlsdk" ||
      logindata.emailaddress == "xyz@gmail.com"
    ) {
    } else {
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const userregex =
        /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      // const regexlastname =
      //   /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      // const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!userregex.test(logindata.name.trim())) {
        setnameError("Please Enter valid Offer");
        setmoveto2(false);
      } else {
        setnameError("");
        setmoveto2(true);
      }
      if (!regexlastname.test(logindata.lastname)) {
        setlastnameError("please enter valid Source");
        setmoveto1(false);
      } else {
        setlastnameError("");
        setmoveto1(true);
      }
      if (!regex.test(logindata.emailaddress)) {
        setemailError("Please Enter Valid Email Address");
        setmoveto(false);
      } else {
        setemailError("");
        setmoveto(true);
      }
      console.log(logindata.emailaddress);
    }
  };
  useEffect(handleChange1, [logindata]);
  const handleChange2 = (e) => {
    if (
      logindata.name == "sklfjls kdfjlsdk" ||
      logindata.emailaddress == "xyz@gmail.com" ||
      logindata.lastname == "asdfasdf"
    ) {
    } else {
      const userregex =
        /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Offer");
        setmoveto(false);
      } else {
        if (logindata.name.length < 6) {
          setnameError("Please Enter valid Offer");
          setmoveto(false);
        } else {
          setnameError("");
          setmoveto(true);
        }
      }
      if (!regexlastname.test(logindata.lastname)) {
        setlastnameError("please enter valid Source");
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
    }
  };
  useEffect(handleChange2, [logindata]);
  const handleChange3 = (e) => {
    if (
      logindata.name == "sklfjlskdfjlsdk" ||
      logindata.emailaddress == "xyz@gmail.com" ||
      logindata.phonenumber == "123456789" ||
      logindata.lastname == "asdfasdf" ) {
    } else {
      console.log(logindata);
      const userregex =
        /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const phoneregex =
        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

      if (!phoneregex.test(logindata.phonenumber)) {
        setphoneError("Please Enter valid PhoneNumber");
        setmoveto3(false);
      } else {
        setphoneError("");
        setmoveto3(true);
      }
      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Name");
        setmoveto2(false);
      } else {
        setnameError("");
        setmoveto2(true);
      }
      if (!regex.test(logindata.emailaddress)) {
        setemailError("Please Enter Valid Email Address");
        setmoveto(false);
      } else {
        setemailError("");
        setmoveto(true);
      }
      if (!regexlastname.test(logindata.lastname)) {
        setlastnameError("please enter valid lastname");
        setmoveto1(false);
      } else {
        setlastnameError("");
        setmoveto1(true);
      }
    }
  };
  useEffect(handleChange3, [logindata]);
  const checking = () => {
    moveto4 ? setmoveto4(false) : setmoveto4(true);
    console.log(moveto4);
  };
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
    }
  };
  const changeStyles = (e) => {
    if (e.target.id == "bold") {
      var k = document.getElementById("freeform");
      if (k.style.fontWeight == "bold") {
        k.style.fontWeight = "none";
        console.log(k.style.fontWeight);
      } else {
        console.log("ues");
        k.style.fontWeight = e.target.id;
      }
    }
    if (e.target.id == "italic") {
      var k = document.getElementById("freeform");
      if (k.style.fontStyle == "italic") k.style.fontStyle = "none";
      else {
        console.log("ues");
        k.style.fontStyle = e.target.id;
      }
    }
    if (e.target.id == "underline") {
      var k = document.getElementById("freeform");
      if (k.style.textDecoration == "underline")
        k.style.textDecoration = "none";
      else {
        console.log("ues");
        k.style.textDecoration = e.target.id;
      }
    }
  };
  
  return (
    <div className="upl-back">
      <div className="o">
        <div className="o2">
          <div className="o3">
            <p className="o-title1">Offer Candidate</p>
            <div className="o-line1"></div>
          </div>
          <div className="o-main">
            <div className="o-4">
              <div className="o-5" style={{ display: "flex" }}>
              <Form.Check aria-label="option 1" onClick={checking} className="cbs" style={{ marginLeft: "8%", marginTop: "1%" }} />
                <p style={{ marginLeft: "3%" }} className="text-start o-5-P1">
                  Send offer email to candidate
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <label
                  form="exampleInputEmail1"
                  className="jotitle"
                  style={{
                    marginTop: "15%",
                    marginLeft: "5.5%",
                    color: "#003666",
                  }}
                >
                  Email Template
                </label>
                <span
                  className="required-sym"
                  style={{ marginTop: "15%" }}
                ></span>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Offer"
                    className="fo-enter-1"
                    style={{ width: "90%", paddingLeft: "3%" }}
                    name="name"
                    onChange={(e) => {
                      setlogindata({ ...logindata, name: e.target.value });
                    }}
                  />
                </div>
                <p>{nameError}</p>
              </div>

              <div className="form-enter-3">
                <p
                  className="o-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  To:
                </p>
                <div style={{ paddingLeft: "2%" }}>
                  <input
                    type="text"
                    className="sep"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                    style={{ width: "100%" }}
                    name="emailaddress"
                    onChange={(e) => {
                      setlogindata({
                        ...logindata,
                        emailaddress: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <p>{emailError}</p>
              <div className="form-enter-3">
                <p
                  className="o-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  Subject:
                </p>

                <input
                  type="text"
                  className="sep"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  style={{ width: "100%" }}
                  name="lastname"
                  onChange={(e) => {
                    setlogindata({ ...logindata, lastname: e.target.value });
                  }}
                />
              </div>
              <p>{lastnameError}</p>
                 
              <div className="txt-data" style={{width:"90%", marginLeft:"1.4rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
              
              <div className="rej-btns">
                <button className="reject-btn" style={{ borderRadius: "10px" }}>
                  {moveto && moveto1 && moveto2 && moveto3 && moveto4 ? (
                    <Link
                      to="/add"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Offer
                    </Link>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={() => alert("You are missing some Fields")}
                    >
                      Offer
                    </Link>
                  )}
                </button>
                <button
                  className="reject-btn"
                  style={{ borderRadius: "10px", marginLeft: "5%" }}
                >
                  <Link
                    to="/Recrutimentmain"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cancel
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offercandidate;
