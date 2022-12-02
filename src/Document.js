import React from "react";
import {useState} from 'react';
import './Document.css';
import Header from "./Header";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import searchbar from "./images/search_black_24dp 1.png";
import timeoffupload from "./images/timeoffupload.png"
import { Link } from "react-router-dom";
import M from "./images/01.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import set from "./images/202.png";
import Paper from "@mui/material/Paper";
import aw from "./images/download 5.png"
function createData(
  name,
  calories,
  fat,
  carbs,
  hr,
  protein,
  date,
  oat,
  fai
) {
  return { name, calories, fat, carbs, hr, protein, date, oat, fai};
}

const rows = [
  createData(
    "Muskan",
    "Meeting at 5 am",
   "02 MARCH 2022",
   "12 Apr 2022",
    "Beyond Hum...",
    "ON LEAVE",
    "Pending"
  ),
  createData(
    "Sumit",
    "Meeting at 5 am",
   " 02 MARCH 2022",
   "12 Apr 2022",
    "Beyond Hum...",
    "ACTIVE",
    "Activated"
  ),
  createData(
    "Mridul",
    "Meeting at 5 am",
   " 02 MARCH 2022",
   "12 Apr 2022",
    "Beyond Hum...",
    "ON LEAVE",
    "Pending"
  ),
  createData(
    "Priya",
    "Meeting at 5 am",
   " 02 MARCH 2022",
   "12 Apr 2022",
    "Beyond Hum...",
    "ACTIVE",
    "Activated"
  ),
  
];


function Documents(){
    const [data, setda] = useState(true);
    const [o, seto] = useState("10");    
    const shows = () => {
      seto("0.1");
    };
    const showi = (e) => {
      if (data) {
        setda(false);
      } else {
        setda(true);
        seto("10");
      }
    };
    

    return(
        <div style={{overflow:"hidden"}}>
            <Header />
            <Container>
          <div onClick={shows} className="Document-1">
            <div className="Document-2" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="Document-3"
                style={{ opacity: o }}
              />

              <input
                type="search"
                placeholder="Search"
                style={{ width: "40%", paddingLeft: "3%" }}
                className="Document-4"
                onClick={showi}
              />
              <div className="Document-12" style={{marginLeft:"3.5rem"}}>
                <img src={aw} style={{paddingTop:"0.5rem", paddingLeft:"0.4rem"}}/>
              </div>
              <div className="Document-9" style={{ marginTop: "0%",marginLeft:'-1%' }}>
            <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/Documents4"
              >
                  <div className="Document-10">
                    <p>New Folder</p>
                  </div>
                </Link>
              </div>
              </div>
              </div>
            
            </Container>
            <div className="Document-13">
                            <div>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%",
                              overflow:"hidden"
                            }}>
                              
                              <span className="Document-14">
                              Name
                              </span >
                              <span className="Document-14">
                              Created By
                              </span>
                              <span className="Document-14">
                              Created Date
                              </span>
                              <span className="Document-14">
                              Discription
                              </span>
                              <span className="Document-14">
                              Shared With
                              </span>
                              <span className="Document-14" style={{width:"9rem"}}>
                              Number of files
                              </span>
                              <span className="Document-14" style={{width:"6rem"}}>
                              Size
                              </span>
                              <span>
                              <img src={set} className="Set" style={{marginTop:"0.6rem", marginLeft:"0.5rem"}}/>
                              </span>                              
                            </div>
                            <hr />
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Document-15" style={{width:"15rem", fontFamily:"gorditas", color:"#003666"}}>
                              Muskan

                              </span>
                              <span className="Document-15" style={{marginLeft:"-3rem"}}>
                              You
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1.5rem", fontSize:"12px", width:"15rem"}}>
                              02 MARCH 2022
                              </span>
                              <span className="Document-15" style={{marginLeft:"-2rem"}}>
                              -
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              Everyone
                              </span>
                              <span className="Document-15" style={{marginLeft:"2rem"}}>
                              1
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              6.5 KB
                              </span>
                            </div>
                            <hr style={{marginTop:"-1rem"}}/>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Document-15" style={{width:"15rem",fontFamily:"gorditas", color:"#003666"}}>
                              Muskan
                              </span>
                              <span className="Document-15" style={{marginLeft:"-3rem"}}>
                              You
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1.5rem", fontSize:"12px", width:"15rem"}}>
                              02 MARCH 2022
                              </span>
                              <span className="Document-15" style={{marginLeft:"-2rem"}}>
                              -
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              Everyone
                              </span>
                              <span className="Document-15" style={{marginLeft:"2rem"}}>
                              1
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              6.5 KB
                              </span>   
                            </div>
                            <hr style={{marginTop:"-1rem"}}/>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Document-15" style={{width:"15rem",fontFamily:"gorditas", color:"#003666"}}>
                              Muskan
                              </span>
                              <span className="Document-15" style={{marginLeft:"-3rem"}}>
                              You
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1.5rem", fontSize:"12px", width:"15rem"}}>
                              02 MARCH 2022
                              </span>
                              <span className="Document-15" style={{marginLeft:"-2rem"}}>
                              -
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              Everyone
                              </span>
                              <span className="Document-15" style={{marginLeft:"2rem"}}>
                              1
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              6.5 KB
                              </span>                              
                            </div>
                            <hr style={{marginTop:"-1rem"}}/>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Document-15" style={{width:"15rem", fontFamily:"gorditas", color:"#003666"}}>
                              Muskan
                              </span>
                              <span className="Document-15" style={{marginLeft:"-3rem"}}>
                              You
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1.5rem", fontSize:"12px", width:"15rem"}}>
                              02 MARCH 2022
                              </span>
                              <span className="Document-15" style={{marginLeft:"-2rem"}}>
                              -
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              Everyone
                              </span>
                              <span className="Document-15" style={{marginLeft:"2rem"}}>
                              1
                              </span>
                              <span className="Document-15" style={{marginLeft:"-1rem"}}>
                              6.5 KB
                              </span>                              
                            </div>
                            </div>
                            </div>
        </div>
    )
}
export default Documents