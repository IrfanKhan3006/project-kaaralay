import React,{useState} from 'react';
import arrowimg from './images/download 5.png'
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/jobs.png";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import candidate2 from './images/candidate2.png'
import setting1 from "./images/scacsac.png";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Candidate.css'
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";

import setting from "./images/settings 3.png";
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
  date
) {
  return { name, calories, fat, carbs, hr, protein, date };
}

const rows = [
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
  createData(
    "Sumit Sugathan",
    "Sumit@ed-aura.com",
    9811831052,
    8,
    "HR",
    "25 Mar 2022",
    "25 Mar 2022"
  ),
];

export default function Userdata() {


    const [data0, setdata0] = useState("All Jobs");
    const [data01, setdata01] = useState("All Stages");
    const [data02, setdata02] = useState("All Tags");
    const [data03, setdata03] = useState("All Source");

    const [data5, setdata5] = useState("All Skills");
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
      <Header Recruitment="true" />
      <Container>
        <Row>
          <Col>
            <div onClick={showsearch} className="main-blo">
              <div className="block" style={{ display: "flex" }}>
                <img
                  src={searchbar}
                  className="search-bar5"
                  style={{ opacity: opac }}
                />

                <input
                  type="search"
                  placeholder="Search"
                  style={{ width: "60%", paddingLeft: "40px" }}
                  className="rec-search"
                  onClick={showicon}
                />
                <div className="bog">
                  <Link to="/Recrutiment">
                    <div className="hidding__icon_1"></div>
                  </Link>
                </div>
                <div className="bog" style={{ backgroundColor: "#ffffff" }}>
                  <Link
                    to="/Candidate"
                    style={{ textDecoration: "none", ListStyle: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={candidate2} className="bog-icon-1" />
                    </div>
                  </Link>
                </div>
                <div className="bog" style={{ backgroundColor: "#ffffff" }}>
                  <Link
                    to="/Hire"
                    style={{ textDecoration: "none", ListStyle: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={setting} className="bog-icon-2" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
          className="rec-select525"
        >
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "0%" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{ width: "10rem", fontSize: "17px" }}
              >
                {data0}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "6rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Finance Profile")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Finance Profile
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("HR")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>HR</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Developer")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Developer
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ position: "relative", left: "1%" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{ width: "10rem", fontSize: "17px" }}
              >
                {data01}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "7rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata01("Applied")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Applied
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata01("Hired")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Hired</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div style={{ display: "flex" }}>
                    <h6
                      style={{ marginLeft: "5%", marginTop: "5%" }}
                      onClick={() => setdata01("Rejected")}
                    >
                      Rejected
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ position: "relative", left: "2%" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{ width: "10rem", fontSize: "17px" }}
              >
                {data02}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "6rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata02("DM")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>DM</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata02("HR")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>HR</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata02("K")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>K</h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ position: "relative", left: "4%" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{ width: "10rem", fontSize: "17px" }}
              >
                {data03}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "8rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata03("Agency")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Agency
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata03("Career Site")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Career site
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata03("Facebook")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Facebook
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ position: "relative", left: "6%" }}
          >
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{ width: "10rem", fontSize: "17px" }}
              >
                {data5}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "6rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("Java")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Java</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("UI/UX")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>UI/UX</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("React Js")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      React Js
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Link to="/upload">
            <div
              className="new-job01"
              onClick={clickbtn}
              style={{ marginLeft: "26%", marginTop:"0.5rem" }}
            >
              <div div className="u">
                <div>
                  {" "}
                  <img
                    src={Maskjob4}
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  />
                </div>
                <div className="post">
                  <p> New Candidate</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "3%",
            position: "relative",
            marginTop: "2%",
          }}
          className="download"
        >
          <img src={arrowimg} style={{ height: "20px", width: "20px" }} />
          <p style={{ marginLeft: "1%" }}>Download CV</p>
        </div>
      </Container>
      <TableContainer
        component={Paper}
        style={{
          width: "80%",
          margin: "auto",
          boxShadow: "1 1 1px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="child---1">Full Name</p>{" "}
              </TableCell>
              <TableCell>
                <p className="child---1"> Email ID</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Phone No</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> CV</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Job</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Created Date</p>
              </TableCell>
              <TableCell>
                <p className="child---1"> Expected Joining Date</p>
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
                  <img
                    src={arrowimg}
                    style={{ height: "20px", width: "20px" }}
                  />
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
                  {row.protein}
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
