import React from "react";
import {useState} from 'react';
import './News1.css';
import Header from "./Header";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import searchbar from "./images/search_black_24dp 1.png";
import timeoffupload from "./images/timeoffupload.png"
import { Link } from "react-router-dom";
import Maskjob4 from "./images/Mask group--1.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import set from "./images/202.png";
import Paper from "@mui/material/Paper";
import aw from "./images/23.png"
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


function News(){
    const [data, setda] = useState(true);
    const [o, seto] = useState("10");
    const date = new Date();
    const futureDate = date.getDate() + 3;
    date.setDate(futureDate);
    const [d, setd] = useState("Published")
     const defaultValue = date.toLocaleDateString("en-CA");
       const data1 = [
         {
           From: "22 Apr 2022",
           To: " 31 May 2022",
           Total: "28 Days",
           Type: "Sick Leave",
           Attachment: "1 file",
           Status: "Rejected",
           uploadImg: timeoffupload,
           colorshow: "#E0791B",
         },
         {
           From: "22 Apr 2022",
           To: " 31 May 2022",
           Total: "28 Days",
           Type: "Sick Leave",
           Attachment: "",
           Status: "Rejected",
           uploadImg: timeoffupload,
           colorshow: "#E0791B",
         },

         {
           From: "22 Apr 2022",
           To: " 31 May 2022",
           Total: "28 Days",
           Type: "Sick Leave",
           Attachment: "",
           Status: "Rejected",
           uploadImg: timeoffupload,
           colorshow: "#E0791B",
         },
         {
           From: "22 Apr 2022",
           To: " 31 May 2022",
           Total: "28 Days",
           Type: "Sick Leave",
           Attachment: "",
           Status: "Rejected",
           uploadImg: timeoffupload,
           colorshow: "#E0791B",
         },
       ];
    
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
          <div onClick={shows} className="New-1">
            <div className="New-2" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="New-3"
                style={{ opacity: o }}
              />

              <input
                type="search"
                placeholder="Search"
                style={{ width: "60%", paddingLeft: "3%" }}
                className="New-4"
                onClick={showi}
              />
              </div>
              </div>
              <div>
              <div className="New-5">
          <div className="New-6">
            <div
              className="rec-drop"
              style={{ marginLeft: "0%", position: "relative", left: "0%",}}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status News-dropdwons-padding"
                  style={{ marginLeft: "-3%", marginTop: "0.2%",}}
                >
                  {d}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "9rem" }}>
                  <Dropdown.Item href="#/action-1" onClick={()=>setd("Engagement")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Engagement
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setd("Relative")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Relative
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={()=>setd("Wedding")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Wedding
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
              <div
              className="rec-drop New-8"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "7rem",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="New-7"
              />
            </div>
            <div
              className="rec-drop New-8"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "7rem",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="New-7"
              />
            </div>
            <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/News4"
              >
            <div className="New-9" style={{ marginTop: "0%",marginLeft:'7rem' }}>           
                  <div className="New-10">
                    <p>Create Request</p>
                  </div>               
              </div>
              </Link>
            </div>
            </div>
            </div>
            </Container>
            <TableContainer
        component={Paper}
        style={{
          width: "70%",
          margin: "auto",
          marginTop:"2.5rem",
          overFlow: "auto",
          marginBottom: "5%",
          boxShadow: "1 1 1px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
              <div className="New-11">
                <p> Employee </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="New-11" style={{paddingLeft:"2.5rem"}}>
                <p> Timings </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="New-11" style={{paddingLeft:"3.5rem"}}>
                <p> Date </p>
              </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <img src={set} className="Set" style={{marginLeft:"-2.5rem"}} />
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
                    fontSize: "17px",
                    left: "-3em",
                    fontWeight: "500",
                    fontFamily: "Gorditas",
                    color:"#003666"
                  }}
                  className="user-table"
                >
                  <Link
                    to="#"
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
                    left: "-2.5em",
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
                    left: "-2.5em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    left: "-2em",
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
                    left: "-1em",
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
                        className="New__dropdown"
                        style={{ background: "#003666", marginLeft: "1%", marginTop:"10rem" }}
                      ></div>
                      <div
                        className="New__dropdown"
                        style={{ background: "#003666", marginLeft: "1%", marginTop:"10rem" }}
                      ></div>
                      <div
                        className="New__dropdown"
                        style={{ background: "#003666", marginLeft: "1%", marginTop:"10rem" }}
                      >
                      </div>
                    </div>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link to="/News3" class="dropdown-item">
                        Edit Type
                      </Link>
                      <Link to="/News2" class="dropdown-item">
                        Delete Type
                      </Link>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
      </TableContainer>
        </div>


    )
}
export default News