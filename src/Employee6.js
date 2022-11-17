import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee6.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
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
              <div onClick={showsearch} className="Employee6-1">
                <div className="Employee6-2" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="Employee6-3"
                    style={{ opacity: opac }}
                  />
  
                  <input
                    type="search"
                    placeholder="Search"
                    style={{ width: "60%", paddingLeft: "3%" }}
                    className="Employee6-4"
                    onClick={showicon}
                  />
                  <div className="Employee6-5">
                    <Link to="/Recrutiment">
                      <div>
                        <img src={jobs} className="Employee6-5-icon" />
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
                  <div className="Employee6-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Candidate">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee6-5-icon-1" />
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
                  <div className="Employee6-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Hire">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee6-5-icon-2" />
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
            className="Employee6-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee6-7"
                style={{ border: "none", outline: "none" }}
              >
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#003666"}} className="Employee6-8">
                  General 
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee6-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#E0791B ", border: "none",}}className="Employee6-8">
                  Job
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee6-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee6-8">
                 Payroll
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee6-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee6-8">
                  Documents
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee6-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#003666",  border: "none",}} className="Employee6-8">
                 Dependents
                </button>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee6-7">
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee6-8" >
                  Accounts settings
                </button>
              </div>
              </div>
              </div>
              <div className="Employee6-10">
                  <div>    
                        <div className="Employee6-12">
                            <p> 
                               EMPLOYEEMENT INFORMATION
                            </p>
                        </div>
                  </div>  
                  <div
            className=" Employee6-13"
            style={{ display: "flex", marginTop: "0%" }}
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
                <label for="exampleInputEmail1" className="Employee6-14">
                  JOIN DATE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Joining Date"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
            <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee6-14" style={{width: "12.5rem"}}>
                  CONTRACT START DATE
                </label>
                 
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Contract Start Date"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-4rem"}}
              />
                          <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-6rem"}}/>

              </div>
              
            </div>
          </div>
          <div
            className=" Employee6-13"
            style={{ display: "flex", marginTop: "0%" }}
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
                <label for="exampleInputEmail1" className="Employee6-14" style={{width: "13rem"}}>
                  PROBATION START DATE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Probation Start Date"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%", left: "-6rem" }}
              />
            <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-7.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee6-14" style={{width: "12.5rem", left:"-0.7rem"}}>
                  CONTRACT END DATE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Contract End Date"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%", left: "-4.5rem"}}
              />
                          <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-6.4rem"}}/>

              </div>
              
            </div>
          </div>
          <div
            className=" Employee6-13"
            style={{ display: "flex", marginTop: "0%" }}
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
                <label for="exampleInputEmail1" className="Employee6-14" style={{width: "12.5rem"}}>
                  PROBATION END DATE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Probation End Date"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%", left: "-5.5rem"}}
              />
            <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-7.2rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee6-14"style={{width: "8rem"}}>
                  CURRECT CTC
                </label>
                 
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="CURRENT CTC"
                className="Employee6-15"
                style={{ marginTop: "2%", paddingLeft:"5%", left: "0.7rem"}}
              />
          <img src={ed}  classname="Employee6-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.5rem"}}/>

              </div>
              </div>
              </div>
              </div>
              <div className="Employee6-10">
                  <div>    
                        <div className="Employee6-12">
                            <p> 
                               WORK SCHEDULE
                            </p>
                        </div>
                  </div> 
                  <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",}}>
                  <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",}}>
              <span className="Employee6-17">
              CURRENT SCHEDULE
              </span>
             <span className="Employee6-17">
              STANDARD WORKING HOURS/DAY
            </span>
            <span className="Employee6-17">
              SCHEDULE TYPE
            </span>
            <span className="Employee6-17">
              TOTAL WORKING HOURS/WEEK
            </span>
            <span className="Employee6-17">
             DAILY WORKING HOURS
            </span>
            </div>
            <div
              class="form-group"
              style={{
               display: "flex",
                flexDirection: "column",
                width: "50%",}}>
                  <span className="Employee6-18">
                  Mon-Fri, Duration 40 hours/week
                  <img src={ed}  classname="Employee6-16" 
                  style={{position: "relative", width: "15px", height: "15px", top: "0rem", left: "1rem"}}
                  />
                  </span>
                  <span className="Employee6-18">
                 8H 00M
                  </span>
                  <span className="Employee6-18">
                  DURATION-BASED
                  </span>
                  <span className="Employee6-18">
                  40H 00M
                  </span>
                  <span className="Employee6-18">
                  MONDAY
                  </span>
                  <span className="Employee6-18">
                  TUESDAY
                  </span>
                  <span className="Employee6-18">
                  WEDNESDAY
                  </span>
                  <span className="Employee6-18">
                  THURSDAY
                  </span>
                  <span className="Employee6-18">
                  FRIDAY
                  </span>
                  <span className="Employee6-18">
                  SATURDAY
                  </span>
                  <span className="Employee6-18">
                  SUNDAY
                  </span>
               </div>
               
               <div
              class="form-group"
              style={{
                position: "relative",
               display: "flex",
                flexDirection: "column",
                width: "80%",
                top: "12rem",}}>                 
                  <span className="Employee6-18">
                  8H 00M
                  </span>
                  <span className="Employee6-18">
                  8H 00M
                  </span>
                  <span className="Employee6-18">
                  8H 00M
                  </span>
                  <span className="Employee6-18">
                  8H 00M
                  </span>
                  <span className="Employee6-18">
                  8H 00M
                  </span>
                  <span className="Employee6-18">
                  (NON-WORKING DAY)
                  </span>
                  <span className="Employee6-18">
                  (NON-WORKING DAY)
                  </span>
                </div>
                </div>
                </div>
                <div>
                <div className="Employee6-10">
                  <div>    
                        <div className="Employee6-12">
                            <span > 
                               JOB HISTORY
                            </span>
                        </div>
                        <div class="form-group"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "50%",}}>
                          <span className="Employee6-17">
                            2022
                          </span>
                          <span className="Employee6-19">
                           MAY 07
                          </span>
                          <span className="Employee6-19">
                          Employee Status was changed from "Probationary" to "Active".<br />
                          Employee Status was changed from "Onboarding" to "Probationary".<br />
                          Employee Status was changed from "Active" to "Onboarding".
                          </span>
                        </div>
                        <div class="form-group"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "50%",}}>
                          <span className="Employee6-19">
                           MAY 05
                          </span>
                          <span className="Employee6-19">
                          Employee Status was changed from "Probationary" to "Active".<br />
                          Employee Status was changed from "Onboarding" to "Probationary".<br />
                          Employee Status was changed from "Active" to "Onboarding".
                          </span>
                        </div>
                  </div> 
                </div>
              </div>
              </Container>
              </div>
              
    )
}