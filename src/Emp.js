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
import './Employee1.css'
import candidate from "./images/candidate.png";
import dott from "./images/Group 2403.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import set from "./images/settings.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";

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
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    2,
    "Pending"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    2,
    "Pending"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    2,
    "Pending"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    2,
    "Pending"
  ),
];

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
    <div>
      <Header />
      <Container>
          
            <div onClick={showsearch} className="Ma">
              <div className="Boo" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="Sw"
                  style={{ opacity: opac }}
                />

                <input
                  type="search"
                  placeholder="Search"
                  style={{ width: "60%", paddingLeft: "3%" }}
                  className="RE"
                  onClick={showicon}
                />
                <div className="BGG">
                  <Link to="/Recrutiment">
                    <div>
                      <img src={jobs} className="BGG-icon" />
                    </div>
                  </Link>
                </div>
                <div className="BGG" style={{ backgroundColor: "#ffffff" }}>
                  <Link to="/Candidate">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={candidate} className="BGG-icon-1" />
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
                <div className="BGG" style={{ backgroundColor: "#ffffff" }}>
                  <Link to="/Hire">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={setting} className="BGG-icon-2" />
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
          style={{ display: "flex", flexDirection: "row", width: "160%", left:"-10%" }}
          className="RGG"
        >
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "0%" }}
          >
            <Dropdown
              className="reG"
              style={{ border: "none", outline: "none" }}
            >
              <Dropdown.Toggle
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                id="dropdown-basic"
                className="recG"
              >
                All Jobs
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ marginLeft: "-4%", position: "relative", left: "5%" }}
          >
            <Dropdown className="reG">
              <Dropdown.Toggle
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                id="dropdown-basic"
                className="recG"
              >
                All Stages
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "5%" }}
          >
            <Dropdown className="reG">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                className="recG"
              >
                All Tags
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ marginLeft: "1%", position: "relative", left: "5%" }}
          >
            <Dropdown className="reG">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                className="recG"
              >
                All Sources
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "5%" }}
          >
            <Dropdown className="reG">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                className="recG"
              >
                All Skills
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="newG" onClick={clickbtn}>
            <div div className="uG">
              <div>
                {" "}
                <img
                  src={Maskjob4}
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                />
              </div>
              <div className="postG" style={{width:'100%'}}>
                <p style={{width:'8rem'}}>
                  {" "}
                  <Link
                    to=""
                    
                    style={{ textDecoration: "none",color:'#003666',fontWeight:'700',fontSize:'20', width:"100%" }}
                  >
                    NEW PROFILE
                  </Link>
                </p>
              </div>
              <div className='newG' style={{ position: "relative",left:"50%", width:"200%"}}>
                <div>
                    <img src={Maskjob4}  style={{ marginLeft: "10px", marginTop: "10px" }}/>
                
                </div>
                <div className="postG"> 
                <p style={{width:'5rem'}}>
                  {" "}
                  <Link
                    to=""
                    
                    style={{ textDecoration: "none",color:'#003666',fontWeight:'700',fontSize:'20', width:"100%" }}
                  >
                    Download CSV
                  </Link>
                </p>
                </div>
                
            </div>
            </div>
           
          </div>
        </div>
      </Container>

      <TableContainer
        component={Paper}
        style={{
          width: "90%",
          margin: "auto",
          boxShadow: "1 1 1px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="childG" >Employee Name</p>{" "}
              </TableCell>
              <TableCell style={{marginleft:"20%"}}>
                <p className="childG" > Job Title</p>
              </TableCell>
              <TableCell>
                <p className="childG"> Line Manager</p>
              </TableCell>
              <TableCell>
                <p className="childG"> Joining Date</p>
              </TableCell>
              <TableCell>
                <p className="childG"> Office</p>
              </TableCell>
              <TableCell>
                <p className="childG"> Employee Status</p>
              </TableCell>
              <TableCell>
                <img src={set} className="Set" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="user-table"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    marginleft: "20%",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.carbs}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.hr}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  <Dropdown
              className="reG"
              style={{ border: "none", outline: "none", backgroundColor: "white", left:"10%" }}
            >
              <Dropdown.Toggle
                style={{
                  backgroundColor: " #FAFAFA",
                  color: "black",
                  border: "none",
                }}
                id="dropdown-basic"
                className="recG"
              >
               ON LEAVE
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ color: "black" }}>
                <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Action
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                > <Dropdown
                className="reG"
                style={{ border: "none", outline: "none", backgroundColor: "white", left:"10%" }}
              >
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="recG"
                >
                 <img src={dott} />
                </Dropdown.Toggle>
  
                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
