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
import "./Selecting.css";
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";
import twitter from "./images/twitter 1.png";
import edit from "./images/edit 11.png";
import delete1 from "./images/delete 6.png";
import tags from './images/tag 1.png'

function Selecting() {
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

  const details = [
    {
      id: 1,
      name: "John Doe",
      role: "developer",
      candidates: "4 candidates",
    },
    {
      id: 2,
      name: "VicWayne",
      role: "developer",
      candidates: "4 candidates",
    },
    {
      id: 3,
      name: "Jane Doe",
      role: "developer",
      candidates: "4 candidates",
    },
    {
      id: 3,
      name: "Jane Doe",
      role: "developer",
      candidates: "4 candidates",
    },
  ];
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
  return (
    <div style={{overflow:"hidden"}}>
      <Header Recruitment="true"/>
      <Container>
        <Row>
          <Col>
            <div onClick={showsearch} className="AS">
              <div className="block" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="search-baraa"
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
                  <Link to="/candidate" style={{textDecoration:"none"}}>
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
                  <Link to="/Hire" style={{textDecoration:"none"}}>
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
          style={{ display: "flex", flexDirection: "row", width: "110%" }}
          className="rec-select"
        >
          <div 
            className="soc-rec-drop"
            style={{ marginLeft: "20%", position: "relative", width: "15%" }}
          ><Link to="/Hire" style={{ textDecoration: "none", listStyle: "none" }}>
            <p>Hiring Workflow</p>
            </Link>
          </div>
          <div
            className="soc-rec-drop"
            style={{ marginLeft: "8%", position: "relative", width: "15%" }}
          ><Link to="/Source" style={{ textDecoration: "none", listStyle: "none" }}>
            <p style={{ color: "#E0791B" }}>Tags & sources</p>
           </Link>
          </div>
          <div
            className="soc-rec-drop"
            style={{ marginLeft: "8%", position: "relative", width: "15%" }}
          ><Link to="/EmailTemplate" style={{ textDecoration: "none", listStyle: "none" }}>
            <p>Email Templates</p>
            </Link>
          </div>
          <Link to="/newcv" >
          <div
            className="new-joba"
            style={{ marginLeft: "25%", position: "relative", left: "10%" }}
            onClick={clickbtn}
          >
            <div div className="user-joba">
              <div>
                {" "}
                <img
                  src={Maskjob4}
                  style={{ marginLeft: "2rem", marginTop: "10px" }}
                />
              </div>
              <div className="post">
                <p>
                 
                    NEW TAGS
                
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div>
          <div
            className="tag"
            style={{ display: "flex", marginLeft: "80%", marginBottom: "2%" }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#003666",
                width: "25%",
              }}
              className="source"
            >
              <p
                style={{
                  marginLeft: "22%",
                  color: "white",
                  marginTop: "15%",
                }}
              >
                Tags
              </p>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                marginLeft: "3%",
              }}
              className="source"
            ><Link to="/Tag" style={{ textDecoration: "none", listStyle: "none" }}>
              <p
                style={{
                  marginLeft: "17%",
                  color: "#003666",
                  marginTop: "15%",
                }}
              >
                Sources
              </p>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="soc-2">
            <div
              className="soc-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="soc-4"
                style={{
                  display: "flex",
                  marginLeft: "3%",
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <div className="soc-5">
                  <img src={tags} />
                </div>
                <div className="soc-6">
                  <p>Mridul</p>
                  <p className="soc-candidates">0 candidates</p>
                </div>
              </div>
              <div className="soc-7">
                <div className="soc-8" style={{ display: "flex" }}>
                  <Link to="/Edittag">
                  <img src={edit} style={{ height: "20px", width: "20px" }} />
                  </Link>
                  <Link to="/deletetag">
                  <img
                    src={delete1}
                    style={{ height: "20px", width: "20px", marginLeft: "13%" }}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className="soc-line"></div>
            <div
              className="soc-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="soc-4"
                style={{
                  display: "flex",
                  marginLeft: "3%",
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <div className="soc-5">
                  <img src={tags} />
                </div>
                <div className="soc-6">
                  <p>Sumit</p>
                  <p className="soc-candidates">1 candidates</p>
                </div>
              </div>
              <div className="soc-7">
                <div className="soc-8" style={{ display: "flex" }}>
                <Link to="/Edittag">
                  <img src={edit} style={{ height: "20px", width: "20px" }} />
                  </Link>
                  <Link to="/deletetag">
                  <img
                    src={delete1}
                    style={{ height: "20px", width: "20px", marginLeft: "13%" }}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className="soc-line"></div>
            <div
              className="soc-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="soc-4"
                style={{
                  display: "flex",
                  marginLeft: "3%",
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <div className="soc-5">
                  <img src={tags} />
                </div>
                <div className="soc-6">
                  <p>Mridul</p>
                  <p className="soc-candidates">0 candidates</p>
                </div>
              </div>
              <div className="soc-7">
                <div className="soc-8" style={{ display: "flex" }}>
                <Link to="/Edittag">
                  <img src={edit} style={{ height: "20px", width: "20px" }} />
                  </Link>
                  <Link to="/deletetag">
                  <img
                    src={delete1}
                    style={{ height: "20px", width: "20px", marginLeft: "13%" }}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className="soc-line"></div>
            <div
              className="soc-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="soc-4"
                style={{
                  display: "flex",
                  marginLeft: "3%",
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <div className="soc-5">
                  <img src={tags} />
                </div>
                <div className="soc-6">
                  <p>Sumit</p>
                  <p className="soc-candidates">1 candidates</p>
                </div>
              </div>
              <div className="soc-7">
                <div className="soc-8" style={{ display: "flex" }}>
                <Link to="/Edittag">
                  <img src={edit} style={{ height: "20px", width: "20px" }} />
                  </Link>
                  <Link to="/deletetag">
                  <img
                    src={delete1}
                    style={{ height: "20px", width: "20px", marginLeft: "13%" }}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className="soc-line"></div>
            <div
              className="soc-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="soc-4"
                style={{
                  display: "flex",
                  marginLeft: "3%",
                  marginTop: "3%",
                  width: "100%",
                }}
              >
                <div className="soc-5">
                  <img src={tags} />
                </div>
                <div className="soc-6">
                  <p>Priya</p>
                  <p className="soc-candidates">0 candidates</p>
                </div>
              </div>
              <div className="soc-7">
                <div className="soc-8" style={{ display: "flex" }}>
                <Link to="/Edittag">
                  <img src={edit} style={{ height: "20px", width: "20px" }} />
                  </Link>
                  <Link to="/deletetag">
                  <img
                    src={delete1}
                    style={{ height: "20px", width: "20px", marginLeft: "13%" }}
                  />
                  </Link>
                </div>
              </div>
            </div>
            <div className="soc-line"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Selecting;
