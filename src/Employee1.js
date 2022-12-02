import React,{useState} from 'react';
import arrowimg from './images/download 5.png'
import { Container, Row, Col } from "react-bootstrap";
import jobs from "./images/employee.png";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Employee1.css'
import candidate from "./images/directory.png";
import dott from "./images/Group 2403.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import set from "./images/202.png";
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
    "ON LEAVE",
    "Pending"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    "ACTIVE",
    "Activated"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    "ON LEAVE",
    "Pending"
  ),
  createData(
    "Sumit Sugathan",
    "HRBP Manager",
   " @ Muskan Bhatia",
   "12 Apr 2022",
    "Beyond Hum...",
    "ACTIVE",
    "Activated"
  ),
  
];






export default function Userdata() {




   const [data0, setdata0] = useState("All Jobs Titles");
   const [data01, setdata01] = useState("All Departments");
   const [data02, setdata02] = useState("All Offices");
   const [data03, setdata03] = useState("All Status");

   const [data5, setdata5] = useState("All Work Schedules");

   const [data6, setdata6] = useState("Employee Name");
   const [data1, setdata1] = useState("Job Title");
   const [data7, setdata7] = useState("Line manager");
   const [data2, setdata2] = useState("Joinig Date");
   const [data3, setdata3] = useState("Office");
   const [data4, setdata4] = useState("Employee Status");
      const [c, setc] = useState("On Leave");


  
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
    <div style={{ overflow: "hidden", width: "100%" }}>
      <Header Employee="true" />
      <Container>
        <div onClick={showsearch} className="Ma">
          <div className="Boo" style={{ display: "flex" }}>
            <img src={searchbar} className="Sw" style={{ opacity: opac }} />

            <input
              type="search"
              placeholder="Search"
              style={{ width: "60%", paddingLeft: "3%" }}
              className="RE"
              onClick={showicon}
            />
            <div className="BGG">
              <Link to="#" style={{ textDecoration: "none" }}>
                <div>
                  <img src={jobs} className="Employee5-5-icon" />
                  <p
                    style={{
                      fontSize: "7px",
                      marginLeft: "4%",
                      textDecoration: "none",
                      color: "#E0791B",
                      fontFamily: "gorditas",
                      textAlign: "center",
                    }}
                  >
                    MANAGE <br /> EMPLOYEE
                  </p>
                </div>
              </Link>
            </div>
            <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
              <Link to="/Employee12" style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={candidate} className="Employee5-5-icon-1" />
                  <p
                    style={{
                      fontSize: "7px",
                      marginLeft: "4%",
                      color: "#003666",
                      fontFamily: "gorditas",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    DIRECTORY
                  </p>
                </div>
              </Link>
            </div>
            <div className="Employee5-5" style={{ backgroundColor: "#ffffff" }}>
              <Link to="/Employee13" style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={setting} className="Employee5-5-icon-2" />
                  <p
                    style={{
                      fontSize: "7px",
                      color: "#003666",
                      marginLeft: "-17%",
                      width: "4rem",
                      fontFamily: "gorditas",
                      textAlign: "center",
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
          style={{
            display: "flex",
            flexDirection: "row",
            width: "110%",
            left: "-10%",
          }}
          className="RGG"
        >
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative", left: "0%" }}
          >
            <Dropdown style={{ marginTop: "2%" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "4.2%",
                  fontSize: "16px",
                  width: "9rem",
                }}
              >
                {data0}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "8rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Admin")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Admin</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Account")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Account
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("HR Manager")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      HR Manager
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
            <Dropdown style={{ marginTop: "2%" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "3.8%",
                  fontSize: "16px",
                  width: "12rem",
                }}
              >
                {data01}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "10.5rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata01("Account Team")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Account Team
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div style={{ display: "flex" }}>
                    <h6
                      style={{ marginLeft: "5%", marginTop: "5%" }}
                      onClick={() => setdata01("Designer")}
                    >
                      Designer
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata01("Developer")}
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
            style={{
              marginLeft: "2%",
              position: "relative",

              marginTop: "0.1%",
            }}
          >
            <Dropdown style={{ marginTop: "2%" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "2.2%",
                  fontSize: "16px",
                  width: "15rem",
                }}
              >
                {data02}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "13.5rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata02("Beyond Human Resource")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Beyond Human Resource
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{
              marginLeft: "1%",
              position: "relative",

              marginTop: "0.1%",
            }}
          >
            <Dropdown style={{ marginTop: "2%" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "4.2%",
                  fontSize: "16px",
                  width: "8rem",
                }}
              >
                {data03}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "6.5rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div style={{ display: "flex" }}>
                    <Link to="/Employee3" style={{ textDecoration: "none", color: "black" }}>
                      <h6
                        style={{ marginLeft: "5%", marginTop: "5%" }}
                        onClick={() => setdata03("Onboarding")}
                      >
                        Onboarding
                      </h6>
                    </Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata03("Leave")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Leave</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata03("Active")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Active
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="rec-drop"
            style={{ marginLeft: "2%", position: "relative" }}
          >
            <Dropdown style={{ marginTop: "2%" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "2.2%",
                  fontSize: "16px",
                  width: "19rem",
                }}
              >
                {data5}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "17.5rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("Mon-Fri, Duration 40 hours/week")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Mon-Fri, Duration 40 hours/week
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("Mon-Fri, Duration 45 hours/week")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Mon-Fri, Duration 45 hours/week
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata5("New Schedule")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      New Schedule
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="newG"
            onClick={clickbtn}
            style={{ marginLeft: "-3%", width: "10rem" }}
          >
            <Link
              to="/Employee2"
              style={{
                textDecoration: "none",
                color: "#003666",
                fontWeight: "700",
                fontSize: "20",
              }}
            >
              <div className="uG">
                <div>
                  {" "}
                  <img
                    src={Maskjob4}
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  />
                </div>
                <div className="postG" style={{ width: "100%" }}>
                  <p style={{ width: "8rem" }}> NEW PROFILE</p>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="newG"
            style={{ position: "relative", marginLeft: "1rem", width: "10rem" }}
          >
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#003666",
                fontWeight: "700",
                fontSize: "20",
              }}
            >
              <div style={{ position: "relative", marginLeft: "1rem" }}>
                <p className="postG">DOWNLOAD CSV</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <TableContainer
        component={Paper}
        style={{
          width: "92%",
          margin: "auto",
          overFlow: "hidden",
          marginBottom: "5%",
          boxShadow: "1 1 1px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{width:'100%'}}>
          <TableHead >
            <TableRow >
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Employee Name
                  </Dropdown.Toggle>
                </Dropdown>
              </TableCell>
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Job Title
                  </Dropdown.Toggle>
                </Dropdown>
              </TableCell>
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Line Manager
                  </Dropdown.Toggle>
                </Dropdown>
              </TableCell>
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Joining Date
                  </Dropdown.Toggle>                  
                </Dropdown>
              </TableCell>
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Office
                  </Dropdown.Toggle>
                </Dropdown>
              </TableCell>
              <TableCell>
                <Dropdown style={{ marginTop: "2%", marginLeft: "1%" }}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginTop: "4.2%",
                      fontSize: "14px",
                    }}
                  >
                    Employee Status
                  </Dropdown.Toggle>                 
                </Dropdown>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <img src={set} className="Set" style={{marginLeft:"-2rem"}} />
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
                    position: "relative",
                    textAlign: "center",
                    fontSize: "14+px",
                    left: "-1em",
                    overFlow: "hidden",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="user-table"
                >
                  <Link
                    to="/Employee5"
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      color: "#1A3353",
                    }}
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "16px",
                    left: "-1em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "16px",
                    marginleft: "20%",
                    left: "-1em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    left: "-1em",
                    fontFamily: "Inter",
                  }}
                >
                  {row.carbs}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "16px",
                    left: "-1em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.hr}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "16px",
                    left: "2em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="dropdown__status timeoff-dropdwons-padding"
                      style={{
                        marginLeft: "-17%",
                        marginTop: "0.2%",
                        fontSize: "16px",
                      }}
                    >
                      {c}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ marginLeft: "9rem" }}>
                      <Dropdown.Item href="#/action-1" onClick={() => setc("On Leave")}>
                        {" "}
                        <div style={{ display: "flex" }}>                          
                          <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                            On Leave
                          </h6>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2" onClick={() => setc("Active")}>
                        {" "}
                        <div style={{ display: "flex" }}>                       
                          <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                            Active
                          </h6>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={() => setc("Present")}>
                        {" "}
                        <div style={{ display: "flex" }}>
                          <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                            Present
                          </h6>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    left: "-1em",
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
                    position: "relative",
                    left: "-0.6em",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {" "}
                  <div className="dropdown">
                    <div
                      className="mysetting__button shadow-none"
                      style={{
                        border: "none",
                        boxShadow: "none",
                        display: "flex",
                        flexDirection: "row",
                      }}
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div
                        className="mysetting__dropdown"
                        style={{ background: "#003666", marginLeft: "1%" }}
                      ></div>
                      <div
                        className="mysetting__dropdown"
                        style={{ background: "#003666", marginLeft: "1%" }}
                      ></div>
                      <div
                        className="mysetting__dropdown"
                        style={{ background: "#003666", marginLeft: "1%" }}
                      ></div>
                    </div>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{marginLeft:"10rem"}}
                    >
                      <a class="dropdown-item" href="#">
                        Edit Type
                      </a>
                      <a class="dropdown-item" href="#">
                        Delete Type
                      </a>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
