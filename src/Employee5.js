import React,{useState} from 'react';
import arrowimg from './images/download 5.png'
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
import './Employee5.css'
import candidate from "./images/candidate.png";
import dott from "./images/Group 2403.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import set from "./images/settings.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";
import ell from "./images/Ellipse 65.png"
import ed from "./images/000.png"


export default function Userdata() {
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
        <div style={{overflow:'hidden', width:"100%"}}>
        <Header />
        <Container>
              <div onClick={showsearch} className="Employee5-1">
                <div className="Employee5-2" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="Employee5-3"
                    style={{ opacity: opac }}
                  />
  
                  <input
                    type="search"
                    placeholder="Search"
                    style={{ width: "60%", paddingLeft: "3%" }}
                    className="Employee5-4"
                    onClick={showicon}
                  />
                  <div className="Employee5-5">
                    <Link to="/Recrutiment">
                      <div>
                        <img src={jobs} className="Employee5-5-icon" />
                      </div>
                    </Link>
                  </div>
                  <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Candidate">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee5-5-icon-1" />
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
                  <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Hire">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee5-5-icon-2" />
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
          <div
            style={{ display: "flex", flexDirection: "row", width: "200%", left:"-10%" }}
            className="Employee5-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee5-7"
                style={{ border: "none", outline: "none" }}
              >
                <button style={{backgroundColor: " #FAFAFA", color: "black",}} className="Employee5-8">
                  General 
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "black", border: "none",}}className="Employee5-8">
                  Job
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee5-7">
                <button style={{backgroundColor: " #FAFAFA", color: "black", border: "none",}} className="Employee5-8">
                 Payroll
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "black", border: "none",}} className="Employee5-8">
                  Documents
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee5-7">
                <button style={{backgroundColor: " #FAFAFA", color: "black",  border: "none",}} className="Employee5-8">
                 Dependents
                </button>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA",color: "black", border: "none", }} className="Employee5-8" >
                  Accounts settings
                </button>
              </div>
              </div>
              </div>
                <div className="Employee5-10">
                    <div> 
                        <div>
                            <img src={ell}  className="Employee5-11"/>
                        </div>
                        <div className="Employee5-12">
                            <p> 
                                PERSONAL INFO
                            </p>
                        </div>
                    </div>
                    <div
            className=" Employee5-13"
            style={{ display: "flex", marginTop: "7%" }}
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
                <label for="exampleInputEmail1" className="Employee5-14">
                  FULL NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
            <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee5-14">
                  GENDER
                </label>
                 
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",}}
              />
                          <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

              </div>
              
            </div>
          </div>
          <div
            className=" Employee5-13"
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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "9rem"}}>
                  DATE OF BIRTH
                </label>
                <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="Employee5-15"
                style={{marginTop: "2%", paddingLeft:"5%", left: "-1.7rem" }}
              />            <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "9rem"}}>
                 MARITAL STATUS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.7rem"  }}
              />            <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee5-13"
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
                <label for="exampleInputEmail1" className="Employee5-14">
                 NATIONALITY
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.5rem"  }}
              />            <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "10rem", left:"1rem"}}>
                 PERSONAL TAX ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.5rem"  }}
              />            
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-4.2rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee5-13"
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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "9rem"}}>
                 EMAIL ADDRESS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.4rem"  }}
              />           
               <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee5-14" style={{left:"0.5rem"}}>
                 EMPLOYEE ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.6rem"  }}
              />           
               <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee5-13"
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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "11rem" }}>
                 HEALTH INSURANCE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", left: "-3.5rem",  paddingLeft:"5%" }}
              />           
               <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.5rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "9rem", left:"-1.2rem"}}>
                 PHONE NUMBER
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

              </div>
            </div>
            </div>
            </div>
            </Container>
            </div>
           


    )
}