import React, { useState } from "react";
import arrow from "./images/arrow.png";
import arrow1 from "./images/arrow1.png";
import b from "./images/B.png";
import i from "./images/I.png";
import u from "./images/U.png";
import Form from "react-bootstrap/Form";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import { Link } from "react-router-dom";
import RichTextEditor from './shared/RichTextEditor'
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import "./Rejectedcandidate.css";

function Offercandidate() {
  /* validations*/
  const initialValues = {
    offer: "",
    subject: "",
    to: "",
    textArea: "",
  };
  const [value, setValue] = useState("");
      const getValue = (value) => {
        setValue(value);
      };
  const [subjectShown, setsubjectShown] = useState(false);
  const [logindata, setlogindata] = useState(initialValues);
  const [moveto4, setmoveto4] = useState(false);
  const [toError, settoError] = useState("");
  const [textarea, setTextArea] = useState("");
  const [offerError, setofferError] = useState("");
  const [subjectError, setsubjectError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [checkboxerror, setcheckboxerror] = useState("");
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.to)) {
      settoError("Please Enter the Email");
      setmoveto1(false);
    } else {
      settoError("");
      setmoveto1(true);
    }
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.subject)) {
      setsubjectError("Please Enter the valid Offer");
      setmoveto1(false);
    } else {
      setsubjectError("");
      setmoveto1(true);
    }

    if (!regex.test(logindata.to)) {
      settoError("Please Enter the valid Field");
      setmoveto2(false);
    } else {
      settoError("");
      setmoveto2(true);
    }
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.subject)) {
      setsubjectError("Please Enter the valid Offer");
      setmoveto1(false);
    } else {
      setsubjectError("");
      setmoveto1(true);
    }

    if (!regex.test(logindata.to)) {
      settoError("Please Enter the valid Field");
      setmoveto2(false);
    } else {
      settoError("");
      setmoveto2(true);
    }
    if (!regex.test(logindata.textArea)) {
      setTextArea("Please Enter the valid Field");
      setmoveto3(false);
    } else {
      if (logindata.textArea.length >= 150) {
        setTextArea("");
        setmoveto3(true);
      } else {
        setTextArea("Please Enter the valid Field");
        setmoveto(false);
      }
    }
  };

  /*validations*/
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
      for (let user of myArray) {
        let li = document.createElement("li");
        li.innerText = user;

        ul.appendChild(li);
        document.getElementById("freeform").value += li.innerText;
      }
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
  const checking = () => {
    moveto4 ? setmoveto4(false) : setmoveto4(true);
  }
  return (
    <div className="upload-back">
      <div className="or-1">
        <div className="or-2">
          <div className="or-3">
            <p className="or-title">Reject Candidate</p>
            <div className="or-line"></div>
          </div>
          <div className="or-main">
            <div className="or-4">
              <div className="or-5" style={{ display: "flex" }}>
              <Form.Check aria-label="option 1" onClick={checking} className="cbs" style={{ marginLeft: "8%", marginTop: "1%" }} />
                <p style={{ marginLeft: "3%" }} className="text-start">
                  Send offer email to candidate
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <label
                  for="exampleInputEmail1"
                  className="jobtitle"
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
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Reject"
                  className="form-enter---1"
                  style={{ width: "90%", paddingLeft:"2%" }}
                  name="offer"
                  onChange={handleChange}
                />
              </div>
              <p>{offerError}</p>
              <div className="form-enter---3">
                <p
                  className="or-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  To:
                </p>
                <input
                  type="text"
                  className="seperate"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  name="to"
                  onChange={handleChange1}
                />
                <p>{toError}</p>
              </div>
              <div className="form-enter---3">
                <p
                  className="or-t"
                  style={{ position: "relative", marginLeft: "3%" }}
                >
                  subject:
                </p>
                <input
                  type="text"
                  className="sep"
                  id="exampleInput"
                  aria-describedby="emailHelp"
                  style={{ width: "100%" }}
                  name="subject"
                  onChange={handleChange2}
                />
              </div>
              <p>{subjectError}</p>
              <div className="txt-data" style={{width:"90%", marginLeft:"1.4rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
              <div className="rej-btns" style={{marginTop:"2rem"}}>
                {moveto && moveto1 && moveto2 && moveto3 && moveto4 ? (
                  <button
                    className="reject-btn"
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      to="/Recrutimentmain"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Reject
                    </Link>
                  </button>
                ) : (
                  <button
                    className="reject-btn"
                    style={{ borderRadius: "10px" }}
                  >
                    <Link
                      onClick={() => alert("You are missing some Fields")}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Reject
                    </Link>
                  </button>
                )}
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
