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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import set from "./images/202.png";
import Paper from "@mui/material/Paper";

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
    "01 Apr 2022 - 30 Apr 2022",
    "₹ 35,483.87",
   "₹ 35,483.87",
   "12 Apr 2022",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00"
  ),
  createData(
    "01 Apr 2022 - 30 Apr 2022",
    "₹ 35,483.87",
   "₹ 35,483.87",
   "12 Apr 2022",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00"
  ),
  createData(
    "01 Apr 2022 - 30 Apr 2022",
    "₹ 35,483.87",
   "₹ 35,483.87",
   "12 Apr 2022",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00"
  ),
  createData(
    "01 Apr 2022 - 30 Apr 2022",
    "₹ 35,483.87",
   "₹ 35,483.87",
   "12 Apr 2022",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00",
    "₹ 0.00"
  ),
  
];

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
                    <Link to="/Employee1" style={{textDecoration:"none"}}>
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
                    <Link to="/Employee12" style={{textDecoration:"none"}}>
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
                    <Link to="/Employee13" style={{textDecoration:"none"}}>
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
              ><Link to="/Employee5" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", border: "none", color:"#003666"}} className="Employee7-8">
                  General 
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "-7%", position: "relative", left: "10%" }}>
              <div className="Employee7-7">
              <Link to="/Employee6" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666 ", border: "none",}}className="Employee7-8">
                  Job
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "12%" }}>
              <div className="Employee7-7">
              <Link to="#" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#E0791B", border: "none",}} className="Employee7-8">
                 Payroll
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "15%" }}>
              <div className="Employee7-7">
              <Link to="/Employee8" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA", color: "#003666", border: "none",}} className="Employee7-8">
                  Documents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop" style={{ marginLeft: "1%", position: "relative", left: "17%" }}>
              <div className="Employee7-7">
              <Link to="/Employee9" className='Employee5-50'>
                <button style={{backgroundColor: " #FAFAFA", color: "#003666",  border: "none",}} className="Employee7-8">
                 Dependents
                </button>
                </Link>
              </div>
            </div>
            <div className="rec-drop"style={{ marginLeft: "1%", position: "relative", left: "20%" }}>
              <div className="Employee7-7">
              <Link to="/Employee11" className='Employee5-50'>
                <button style={{ backgroundColor: " #FAFAFA",color: "#003666", border: "none", }} className="Employee7-8" >
                  Accounts settings
                </button>
                </Link>
              </div>
              </div>
              </div>
              <div className="Employee7-10" style={{height: "25rem"}}>
                  <div>    
                        <div className="Employee7-12"style={{marginLeft:"32rem"}}>
                            <p> 
                            RECURRING PAYMENTS
                            </p>
                            <button className="Employee7-13"> <img src={ell} />Recurring Payments</button>
                        </div>
                  </div>  
              </div>
              <div className="Employee7-10" style={{height: "20rem"}}>
              <div>    
                            <div className="Employee7-12" style={{marginLeft:"33rem"}}>
                            <p> 
                            SALARY INFORMATION
                            </p>
                            <button className="Employee7-13" style={{width: "20%", left: "36rem"}}> <img src={ell} />Salary Updates</button>
                            </div>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                              <span className="Employee7-14">
                              Effective Start
                              </span >
                              <span className="Employee7-14">         
                              Effective End
                              </span>
                              <span className="Employee7-14">
                              Fixed Salary
                              </span>
                              <span className="Employee7-14">
                              Reason
                              </span>
                            </div>
                            <div style={{
                              display:"flex",
                              flexDirection:"row",
                              width:"100%"
                            }}>
                               <span className="Employee7-15" style={{marginLeft:"8.5rem"}}>
                               03 APR 2022
                              </span>
                              <span className="Employee7-15" style={{marginLeft:"2.3rem"}}>
                              NO END DATE
                              </span>
                              <span className="Employee7-15" style={{marginLeft:"3rem"}}>
                              ₹ 50,000.00
                              </span>
                            </div>
                            </div> 
                            </div>
                            <div className="Employee7-10">
                            <div className="Employee7-12" style={{marginLeft:"36rem"}}>
                            <p> 
                            PAYROLL DETAILS
                            </p>
                            </div>
                            <TableContainer
        component={Paper}
        style={{
          width: "100%",
          margin: "auto",
          marginTop:"2rem",
          overFlow: "auto",
          marginBottom: "5%",
          border:"0px",
          borderRadius: "10px",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
              <div className="Employee7-16">
                <p> Period </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> Total Comp. </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> Actual </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> Recurring </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> One-off </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> Offset </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> OT </p>
              </div>
              </TableCell>
              <TableCell>
              <div className="Employee7-16" style={{paddingLeft:"0rem"}}>
                <p> Unpaid </p>
              </div>              
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
                    fontSize: "12px",
                    left: "1.2rem",
                    fontWeight: "500",
                    fontFamily: "inter",
                    color:"#003666"
                  }}
                  
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
                    fontSize: "12px",
                    left: "1em",
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
                    fontSize: "12px",
                    marginleft: "20%",
                    left: "1em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    left: "1em",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "12px",
                    marginleft: "20%",
                    left: "1em",
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
                    fontSize: "12px",
                    marginleft: "20%",
                    left: "1em",
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
                    fontSize: "12px",
                    marginleft: "20%",
                    left: "1em",
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
                    fontSize: "12px",
                    marginleft: "20%",
                    left: "1em",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                >
                  {row.hr}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
      </TableContainer>           
      </div>              
              </Container>
             </div>
              
    )
}