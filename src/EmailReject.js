import React, { useState } from "react";
import arrowimg from "./images/download 5.png";
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/jobs.png";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import './Emailtem.css'
import b from "./images/B.png";
import i from "./images/I.png";
import u from "./images/U.png";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from "react-bootstrap/Button";
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import RichTextEditor from "./shared/RichTextEditor";

function EmailReject() {
  const [back, setback] = useState("none");
  const [dec, setdec] = useState(false);
  const clickbtn = () => {
    setdec(true);
    setback("blur(8px)");
  };
  const clickbtnn = () => {
    setdec(false);
    setback("none");
  };
  const getValue = (value) => {
    setValue(value);
  };
  const [value, setValue] = useState("");

  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");

  const showsearch = () => {
    setopac("0.1");
  };
  const showicon = (e) => {
    if (data) {
      setdata(false);
    } else {
      setdata(true);
      setopac("10");
    }
  };
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

  return (
    <div style={{ overflow: "hidden" }}>
      <Header Recruitment="true"/>

      <Row>
        <Col>
          <div onClick={showsearch} className="main-bloc">
            <div className="block" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="search-bar78"
                style={{ opacity: opac }}
              />

              <input
                type="search"
                placeholder="Search"
                style={{ width: "60%", paddingLeft: "40px" }}
                className="rec-search"
                onClick={showicon}
              />
              <div className="bag">
                <Link to="/Recrutiment">
                  <div>
                    <img src={jobs} className="bag-icon" />
                  </div>
                </Link>
              </div>
              <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                <Link to="/Candidate" style={{textDecoration:"none"}}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={candidate} className="bag-icon-1" />
                    <p
                      style={{
                        fontSize: "9px",
                        marginLeft: "8%",
                        color: "#003666",
                        textDecoration: "none",
                      }}
                    >
                      candidate
                    </p>
                  </div>
                </Link>
              </div>
              <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                <Link style={{textDecoration:"none"}}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={setting} className="bag-icon-2" />
                    <p
                      style={{
                        fontSize: "9px",
                        marginLeft: "18%",
                        color: "#003666",
                        textDecoration: "none",
                      }}
                    >
                      settings
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{ display: "flex", flexDirection: "row", width: "100%" }}
        className="rec-select20"
      >
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "10%", position: "relative", left: "1%" }}
        >
          <Link to="/Hire" style={{ textDecoration: "none", listStyle: "none" }}>
          <p>Hiring Workflow</p>
          </Link>
        </div>
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "10%", position: "relative", left: "0%" }}
        >
          <Link to="/Tag" style={{ textDecoration: "none", listStyle: "none" }} >
          <p>Tags & sources</p>
          </Link>
        </div>
        <div
          className="soc-rec-drop"
          style={{ marginLeft: "10%", position: "relative", left: "0%" }}
        >
          <p style={{ color: "#E0791B" }}>Email Templates</p>
        </div>

        <div
          className="new-jobo"
          style={{ marginLeft: "5%", position: "relative", left: "5%" }}
          onClick={clickbtn}
        ><Link to="/NewEmail" style={{textDecoration:"none"}}>
          <div div className="user-job">
            <div>
              {" "}
              <img
                src={Maskjob4}
                style={{ marginLeft: "35px", marginTop: "10px" }}
              />
            </div>
            <div className="post">
              <p>NEW EMAIL</p>
            </div>
          </div>
          </Link>

        </div>
      </div>
      <div className="Email-1">
        <p style={{ color: "#E0791B" , marginTop: "2%" }} className="email-p">
          Email Templates
        </p>
        <div style={{ display: "flex" }}>
          <div
            className="email-2"
            style={{
              marginLeft: "20%",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "2%",
                marginLeft: "3%",
              }}
            >
              <p className="email-p-1" style={{ color: "#003666" }}>
                <Link
                  to="/EmailTemplate"
                  style={{
                    textDecoration: "none",
                    color: "#003666",
                    fontWeight: "400",
                    fontSize: "20",
                    paddingLeft:"0.5rem"
                  }}
                >
                  Auto Conformation
                </Link>
              </p>
            </div>
          </div>
          <div
            className="email-2"
            style={{
              marginLeft: "1%",
              width: "80px",
              backgroundColor: "white",
            }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "5%",
                marginLeft: "3%",
              }}
            >
              <p className="email-p-1" style={{ color: "#003666" }}>
                <Link
                  to="/Emailoffer"
                  style={{
                    textDecoration: "none",
                    color: "#003666",
                    fontWeight: "400",
                    fontSize: "20",
                    paddingLeft:"0.9rem"
                  }}
                >
                Offer
                </Link>
              </p>
            </div>
          </div>
          <div
            className="email-2"
            style={{
              marginLeft: "1%",
              width: "100px",
              backgroundColor: "#003666",
            }}
          >
            <div
              className="email-3"
              style={{
                alignItems: "center",
                textAlign: "center",
                marginTop: "4%",
                marginLeft: "3%",
              }}
            >
              <p className="email-p-1" style={{ color: "#ffffff" }}>
              <Link
                  to="/EmailRejection"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "20",
                    paddingLeft:"0.6rem"
                  }}
                >
                Rejection
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left" }} className="emaildiv">
          <p className="email-p">EDIT EMAIL TEMPLATE</p>
          <hr></hr>
          <p className="email-p">STAGE *</p>
          <input type="text" placeholder="Rejected" className="email-input" />
          <p className="email-p" style={{ marginTop: "3%" }}>
            EMIAL TEMPLATE *
          </p>
          <input
            type="email"
            placeholder="Reject"
            className="email-input"
          />
          <p className="email-p" style={{ marginTop: "3%" }}>
            SUBJECT *
          </p>
          <input
            type="text"
            placeholder="Thankyou for application at company name"
            className="email-input"
          />{" "}
           <div className="txt-data" style={{paddingTop:"2rem", paddingBottom:"1.5rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
          <p className="email-p">PLACEHOLDERS *</p>
          <input
            type="text"
            placeholder="{{candidate_first_name}} {{candidate_last_name}} {{company_name}} {{job_title}}"
            className="email-input"
          />
        </div>
        <br />
        <br />
        <div>
          <button className="email-btn">
            <Link
              to="#"
              style={{ textDecoration: "none", color: "white" }}
            >
              Save And Continue
            </Link>
          </button>{" "}
          <button className="email-btn" style={{ marginLeft: "3%" }}>
            <Link
              to="#"
              style={{ textDecoration: "none", color: "white" }}
            >
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailReject;
