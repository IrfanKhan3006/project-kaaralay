import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee9.css'
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
        <Header Employee="true"/>
        <Container>
              <div onClick={showsearch} className="Employee9-1">
                <div className="Employee9-2" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="Employee9-3"
                    style={{ opacity: opac }}
                  />
  
                  <input
                    type="search"
                    placeholder="Search"
                    style={{ width: "60%", paddingLeft: "3%" }}
                    className="Employee9-4"
                    onClick={showicon}
                  />
                  <div className="Employee9-5">
                    <Link to="/Employee1" style={{textDecoration:"none"}}>
                      <div>
                        <img src={jobs} className="Employee9-5-icon" />
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
                  <div className="Employee9-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Employee12" style={{textDecoration:"none"}}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee9-5-icon-1" />
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
                  <div className="Employee9-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Employee13" style={{textDecoration:"none"}}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee9-5-icon-2" />
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
            className="Employee9-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee9-7"
                style={{ border: "none", outline: "none" }}
              ><Link to="/Employee5" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#003666"}} className="Employee9-8">
                  General 
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee9-7">
              <Link to="/Employee6" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666 ", border: "none",}}className="Employee9-8">
                  Job
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee9-7">
              <Link to="/Employee7" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee9-8">
                 Payroll
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee9-7">
              <Link to="/Employee8" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee9-8">
                  Documents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee9-7">
              <Link to="#" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#E0791B",  border: "none",}} className="Employee9-8">
                 Dependents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee9-7">
              <Link to="/Employee11" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee9-8" >
                  Accounts settings
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div>
              <Link to="/Employee10">
                <button className="Employee9-17"> <img src={ell} />NEW DEPENDENT</button>
                </Link>
              </div>
              
              <div className="Employee9-10">
                    
                    <div
            className=" Employee9-13"
            style={{ display: "flex", paddingTop: "4%", }}
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
                <label for="exampleInputEmail1" className="Employee9-14">
                  FULL NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Full Name"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14">
                  GENDER
                </label>
                 
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Gender"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",}}
              />
                          <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

              </div>
              
            </div>
          </div>
          <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                  DATE OF BIRTH
                </label>
                <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Date of Birth"
                className="Employee9-15"
                style={{marginTop: "2%", paddingLeft:"5%", left: "-1.7rem" }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                 MARITAL STATUS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Marital Status"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.7rem"  }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14">
                 NATIONALITY
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nationality"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.5rem"  }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "10rem", left:"1rem"}}>
                 PERSONAL TAX ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Personal Tax Id"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2rem"  }}
              />            
              <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-4.2rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                 EMAIL ADDRESS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.4rem"  }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{left:"0.5rem"}}>
                 EMPLOYEE ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Employee Id"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.6rem"  }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "11rem" }}>
                 HEALTH INSURANCE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Health Insurance"
                className="Employee9-15"
                style={{ marginTop: "2%", left: "-3.5rem",  paddingLeft:"5%" }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.5rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem", left:"-1.2rem"}}>
                 PHONE NUMBER
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone number"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

              </div>
            </div>
            </div>
            </div>
            <div className="Employee9-10">
                    
                    <div
            className=" Employee9-13"
            style={{ display: "flex", paddingTop: "4%", }}
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
                <label for="exampleInputEmail1" className="Employee9-14">
                  FULL NAME
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Full Name"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14">
                  GENDER
                </label>
                 
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Gender"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",}}
              />
                          <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-2rem"}}/>

              </div>
              
            </div>
          </div>
          <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                  DATE OF BIRTH
                </label>
                <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Date Of Birth"
                className="Employee9-15"
                style={{marginTop: "2%", paddingLeft:"5%", left: "-1.7rem" }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                 MARITAL STATUS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Marital Status"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.7rem"  }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14">
                 NATIONALITY
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nationality"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.5rem"  }}
              />            <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "10rem", left:"1rem"}}>
                 PERSONAL TAX ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Personal Tax Id"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2rem"  }}
              />            
              <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-4.2rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem"}}>
                 EMAIL ADDRESS
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-1.4rem"  }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-3.8rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{left:"0.5rem"}}>
                 EMPLOYEE ID
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Employee Id"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "0.6rem"  }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-1.7rem"}}/>

              </div>
            </div>
            </div>
            <div
            className=" Employee9-13"
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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "11rem" }}>
                 HEALTH INSURANCE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Health Insurance"
                className="Employee9-15"
                style={{ marginTop: "2%", left: "-3.5rem",  paddingLeft:"5%" }}
              />           
               <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.5rem"}}/>

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
                <label for="exampleInputEmail1" className="Employee9-14" style={{width: "9rem", left:"-1.2rem"}}>
                 PHONE NUMBER
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
                className="Employee9-15"
                style={{ marginTop: "2%", paddingLeft:"5%",  left: "-2.9rem"  }}
              /> 
              <img src={ed}  classname="Employee9-16" style={{position: "relative", width: "15px", height: "15px", top: "1.3rem", left: "-5.2rem"}}/>

              </div>
            </div>
            </div>
            </div>             
            </Container>
            </div>
              
    )
}