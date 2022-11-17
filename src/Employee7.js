import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee7.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import ell from "./images/Mask group--1.png"
import ed from "./images/000.png"


export default function Userdata() {
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
              <div onClick={showsearch} className="Employee7-1">
                <div className="Employee7-2" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="Employee7-3"
                    style={{ opacity: opac }}
                  />
  
                  <input
                    type="search"
                    placeholder="Search"
                    style={{ width: "60%", paddingLeft: "3%" }}
                    className="Employee7-4"
                    onClick={showicon}
                  />
                  <div className="Employee7-5">
                    <Link to="/Recrutiment">
                      <div>
                        <img src={jobs} className="Employee7-5-icon" />
                        <p
                          style={{
                            fontSize: "7px",
                            marginLeft: "4%",
                            textDecoration: "none",
                            color:"#E0791B",
                            fontFamily:"gorditas",
                            textAlign:"center",
                          }}
                        >
                          MANAGE <br /> EMPLOYEE
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="Employee7-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Candidate">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee7-5-icon-1" />
                        <p
                          style={{
                            fontSize: "7px",
                            marginLeft: "4%",
                            color: "#003666",
                            fontFamily:"gorditas",
                            textAlign:"center",
                            textDecoration: "none",
                          }}
                        >
                          DIRECTORY
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="Employee7-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Hire">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee7-5-icon-2" />
                        <p
                          style={{
                            fontSize: "7px",
                            color: "#003666",
                            marginLeft: "-17%",
                            width: "4rem",
                            fontFamily:"gorditas",
                            textAlign:"center",
                            textDecoration: "none",
                          }}
                        >
                          ORG CHART
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
            style={{ display: "flex", flexDirection: "row", width: "200%", left:"-10%" }}
            className="Employee7-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee7-7"
                style={{ border: "none", outline: "none" }}
              >
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#003666"}} className="Employee7-8">
                  General 
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee7-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666 ", border: "none",}}className="Employee7-8">
                  Job
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee7-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#E0791B", border: "none",}} className="Employee7-8">
                 Payroll
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee7-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee7-8">
                  Documents
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee7-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#003666",  border: "none",}} className="Employee7-8">
                 Dependents
                </button>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee7-7">
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee7-8" >
                  Accounts settings
                </button>
              </div>
              </div>
              </div>
              <div className="Employee7-10" style={{height: "25rem"}}>
                  <div>    
                        <div className="Employee7-12" style={{left: "10%"}}>
                            <p> 
                            RECURRING PAYMENTS
                            </p>
                            <button className="Employee7-13"> <img src={ell} />Recurring Payments</button>
                        </div>
                  </div>  
              </div>













              </Container>
             </div>
              
    )
}