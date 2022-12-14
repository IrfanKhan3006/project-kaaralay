import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee8.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import ell from "./images/Group.png"
import ed from "./images/del.png"
import eda from "./images/download 5.png"


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
              <div onClick={showsearch} className="Employee8-1">
                <div className="Employee8-2" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="Employee8-3"
                    style={{ opacity: opac }}
                  />
  
                  <input
                    type="search"
                    placeholder="Search"
                    style={{ width: "60%", paddingLeft: "3%" }}
                    className="Employee8-4"
                    onClick={showicon}
                  />
                  <div className="Employee8-5">
                    <Link to="/Employee1" style={{textDecoration:"none"}}>
                      <div>
                        <img src={jobs} className="Employee8-5-icon" />
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
                  <div className="Employee8-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Employee12" style={{textDecoration:"none"}}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="Employee8-5-icon-1" />
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
                  <div className="Employee8-5" style={{ backgroundColor: "#ffffff" }}>
                    <Link to="/Employee13" style={{textDecoration:"none"}}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="Employee8-5-icon-2" />
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
            className="Employee8-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee8-7"
                style={{ border: "none", outline: "none" }}
              ><Link to="/Employee5" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#003666"}} className="Employee8-8">
                  General 
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee8-7">
              <Link to="/Employee6" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666 ", border: "none",}}className="Employee8-8">
                  Job
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee8-7">
              <Link to="/Employee7" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee8-8">
                 Payroll
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee8-7">
              <Link to="#" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#E0791B", border: "none",}} className="Employee8-8">
                  Documents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee8-7">
              <Link to="/Employee9" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#003666",  border: "none",}} className="Employee8-8">
                 Dependents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee8-7">
              <Link to="/Employee11" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee8-8" >
                  Accounts settings
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div className="Employee8-10" style={{height: "25rem"}}>
                  <div>    
                        <div className="Employee8-12">
                            <p> 
                            CONTRACTS
                            </p>
                            <button className="Employee8-13"> <img src={ell} style={{paddingRight:"0.2rem", width:"18px"}} />Upload</button>
                        </div>
                        <span className="Employee8-14">
                          FILE NAME
                        </span>
                  </div>  
                        <p className="Employee8-15">
                        Isaac Rejoice Contract-pages-deleted-converted.docx
                        <img src={eda} className="Employee8-16"/><img src={ed} />
                        </p>
                        <hr />
                        <p className="Employee8-15">
                        WhatsApp Image 2022-03-30 at 11.58.07 AM.jpeg
                        <img src={eda} className="Employee8-17" /><img src={ed} />
                        </p>                
               </div>
               <div className="Employee8-10" style={{height: "22rem"}}>
               <div>    
                        <div className="Employee8-12">
                            <p> 
                            PERSONAL DOCUMENTS
                            </p>
                            <button className="Employee8-13"> <img src={ell} style={{paddingRight:"0.2rem", width:"18px"}}/>Upload</button>
                        </div>
                        <span className="Employee8-14">
                          FILE NAME
                        </span>
                  </div>  
                        <p className="Employee8-15">
                        Isaac Rejoice Contract-pages-deleted-converted.docx
                        <img src={eda} className="Employee8-16"/><img src={ed} />
                        </p>
                        <hr />
                        <p className="Employee8-15">
                        WhatsApp Image 2022-03-30 at 11.58.07 AM.jpeg
                        <img src={eda} className="Employee8-17" /><img src={ed} />
                        </p>                
              
               </div>
               <div className="Employee8-10" style={{height: "22rem"}}>
                  <div className="Employee8-12">
                            <p> 
                            PAYSLIPS  
                            </p>
                  </div>
                  <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                              <span className="Employee8-18">
                              File Name
                              </span >
                              <span className="Employee8-18">
                              Month
                              </span>
                              <span className="Employee8-18">
                              Uploaded By
                              </span>
                              <span className="Employee8-18">
                              Uploaded date
                              </span>
                            </div>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Employee8-19" style={{marginLeft:"5rem"}}>
                               RESUME vishal.docx
                              </span>
                              <span className="Employee8-19" style={{marginLeft:"0.7rem"}}>
                              
                              </span>
                              <span className="Employee8-19" style={{marginLeft:"-0.5rem"}}>
                              MUSKAN BHATIA
                              </span>
                              <span className="Employee8-19" style={{marginLeft:"0rem"}}>
                              03 Apr 2022   
                                                       
                              </span>
                              

                            </div>
               </div>













              </Container>
             </div>
              
    )
}