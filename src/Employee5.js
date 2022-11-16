import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee5.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import ell from "./images/Ellipse 65.png"
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
                  <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Candidate">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee5-5-icon-1" />
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
                  <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Hire">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee5-5-icon-2" />
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
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#E0791B"}} className="Employee5-8">
                  General 
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}}className="Employee5-8">
                  Job
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee5-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee5-8">
                 Payroll
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee5-8">
                  Documents
                </button>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee5-7">
                <button style={{backgroundColor: " #FAFAFA", color: "#003666",  border: "none",}} className="Employee5-8">
                 Dependents
                </button>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee5-7">
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee5-8" >
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
                placeholder="FULL NAME"
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
                placeholder="GENDER"
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
                placeholder="DATE OF BIRTH"
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
                placeholder="MARITAL STATUS"
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
                placeholder="NATIONALITY"
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
                placeholder="PERSONAL TAX ID"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2rem"  }}
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
                placeholder="EMAIL ADDRESS"
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
                placeholder="EMPLOYEE ID"
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
                placeholder="HEALTH INSURANCE"
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
                placeholder="PHONE NUMBER"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

              </div>
            </div>
            </div>
            </div>
            <div className="Employee5-10">
              <div>
                <span className="Employee5-17" style={{left: "3rem"}}>ADDRESS</span>
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
                 PRIMARY ADDRESS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="PRIMARY ADDRESS"
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
                 POSTAL CODE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="POSTAL CODE"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

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
                 COUNTRY
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="COUNTRY"
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
                 STATE/PROVINCE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="STATE/PROVINCE"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

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
                 CITY
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="CITY"
                className="Employee5-15"
                style={{ marginTop: "2%", left: "-3.5rem",  paddingLeft:"3%" }}
              />           
               <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "2.2rem", left: "-5.5rem"}}/>

              </div>

            </div>
            </div>
            </div>
            <div className="Employee5-10">
              <div>
                <span className="Employee5-17">EMERGENCY CONTACT</span>
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
                 FULL NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="FULL NAME"
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
                 RELATIONSHIP
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="RELATIONSHIP"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

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
                 PHONE NUMBER
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="PHONE NUMBER"
                className="Employee5-15"
                style={{ marginTop: "2%", left: "-3.5rem",  paddingLeft:"3%" }}
              />           
               <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "2.2rem", left: "-5.5rem"}}/>

            </div>
            </div>
            </div>
            </div>
            <div className="Employee5-10">
              <div>
                <span className="Employee5-17">BANK INFORMATION</span>
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
                 BANK NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="BANK NAME"
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
                 ACCOUNT NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="ACCOUNT NAME"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

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
                 BRANCH
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="BRANCH"
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
                <label for="exampleInputEmail1" className="Employee5-14" style={{width: "10rem", left:"-1.2rem"}}>
                 ACCOUNT NUMBER
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="ACCOUNT NUMBER"
                className="Employee5-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-3.9rem"  }}
              /> 
              <img src={ed}  classname="Employee5-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-6.1rem"}}/>

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
                SWIFT / BIC
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="SWIFT / BIC"
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
                 IBAN
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="IBAN"
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