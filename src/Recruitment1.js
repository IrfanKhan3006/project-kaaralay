import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import jobs from './images/jobs.png'
import candidate from './images/candidate.png'
import { Link } from 'react-router-dom';
import setting from './images/202.png'
import  searchbar  from './images/search_black_24dp 1.png';
import Dropdown from 'react-bootstrap/Dropdown'
import Recruitdetails from './Recruitdetails'
import TimezoneSelect from "react-timezone-select";
import jobicon from './images/Mask group.png'
import Header from './Header'
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from './RecrutimentPos'
import arrow from './images/arrow.png'
import arrow1 from './images/arrow1.png'
import b from './images/B.png'
import i from './images/I.png'
import a from './images/a (2).png'

import u from './images/U.png'
import mask1 from './images/Mask group-1.png'
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from 'react-bootstrap/Button';
import mask4 from './images/Group 2394-1.png'
import mask5 from './images/Group 2395-2.png'
import mask6 from "./images/Mask group-link.png";
import group1 from './images/Group.png'
import Maskjob4 from './images/Mask group--1.png'
import './Recruitment1.css';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import All from './shared/All'
import RichTextEditor from './shared/RichTextEditor'
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
function Recruitment1() {
  const [selectedTimezone, setSelectedTimezone] = useState({});

   const [dropdwondata,setdropdowndata] = useState({})
   const [sdate, setDate] = useState();
   const [textlist,settext] = useState([]);
   const [show,setshow] = useState(true);
   const [pixel,setpixel] = useState("1.5rem");
   const changepixel = () => {
          show ? setpixel("1rem") : setshow(false);
   }
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
               document.getElementById("freeform").value +=  li.innerText;
          }
         
          
        }
   }
   const options = [
     { label: "Grapes 🍇", value: "grapes" },
     { label: "Mango 🥭", value: "mango" },
     { label: "Strawberry 🍓", value: "strawberry", disabled: true },
   ];
   const changeStyles = (e) => {
     if (e.target.id == "bold") {
       var k = document.getElementById("freeform");
       if (k.style.fontWeight == "bold")
       {
       
       k.style.fontWeight = "none";
       console.log(k.style.fontWeight); 
       }
       else {
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
         name: "Digital Marketing ",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 2,
         name: "Digital Marketing  ",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Digital Marketing",
         role: "Developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Digital Marketing",
         role: "Developer",
         candidates: "4 candidates",
       },
     ];
      const [value, setValue] = useState("");
      const getValue = (value) => {
        setValue(value);
      };
     const [back,setback] = useState("none");
     const [dec,setdec] = useState(false);
      const clickbtn = () => {
        setdec(true);
        setback("blur(8px)");
      };
        const clickbtnn = () => {
        setdec(false);
          setback("none");
        };
     const [data, setdata] = useState(true);
     const [opac,setopac] = useState('10');
      
    const showsearch = () => {
        setopac('0.1')
    }
     const showicon = (e) => {
       
          
          if(data)
          { 
            setdata(false);
            
        }
          else
          { 
            setdata(true);
            setopac('10');
          }
     }
 const [data0, setdata0] = useState("All Employement");
 const [data01, setdata01] = useState("All Employement");
 const [data02, setdata02] = useState("All Office");
 const [data03, setdata03] = useState("All Status");

 const [data5, setdata5] = useState("All Employement");

 const [data6, setdata6] = useState("All Employement");
 const [data1, setdata1] = useState("Office");
 const [data7, setdata7] = useState("Quantity");
 const [data2, setdata2] = useState("Salary Range");
 const [data3, setdata3] = useState("Hiring Manager");
 const [data4, setdata4] = useState("Notice Period");
 const storedata5 = (h) => {
   setdata5(h);
 };
 const storedata1 = (h) => {
   setdata1(h);
 };

 const storedata2 = (h) => {
   setdata2(h);
 };

 const storedata3 = (h) => {
   setdata3(h);
 };

 const storedata4 = (h) => {
   setdata4(h);
 };
     
 
 const storedata6 = (h) => {
   setdata6(h);
 };
 
 const storedata7 = (h) => {
   setdata7(h);
 };
 const dateToTime = (date) =>
   date.toLocaleString("en-US", {
     hour: "numeric",
     minute: "numeric",
   });

 const dateString = "2019-05-05T10:30:00Z";
 const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
 const localDate = new Date(dateString);
 const utcDate = new Date(localDate.getTime() + userOffset);
  const [selected, setSelected] = useState("All Status");
  return (
    <div>
      <div style={{ filter: back }}>
        <Header Recruitment="true" />
        <div
          onClick={showsearch}
          className="searchbar1"
          style={{ width: "100%", marginLeft: "-1.5%" }}
        >
          <div className="Sec" style={{ display: "flex", width: "100%" }}>
            <img
              src={searchbar}
              className="search"
              style={{ opacity: opac, position: "relative" }}
            />

            <input
              type="search"
              placeholder="Search"
              style={{ width: "60%", paddingLeft: "40px" }}
              className="rec-sea"
              onClick={showicon}
              autoComplete="current-password"
            />
            <div className="bog">
              <Link>
              <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={jobs} className="bog-icon-2" />
                </div>
                
                
              </Link>
            </div>
            <div className="bog" style={{ backgroundColor: "#ffffff" }}>
              <Link
                to="/Candidate"
                style={{ textDecoration: "none", ListStyle: "none" }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img src={candidate} className="bog-icon-2" />
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
        <Container>
          <Row>
            <Col></Col>
          </Row>
          <div
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            className="rec-sel"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "0%", position: "relative", left: "0%" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "7%",
                    width: "12rem",
                    paddingLeft: "1rem",
                    fontSize: "16px",
                  }}
                >
                  {data0}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "10.5rem" }}>
                  <Dropdown.Item onClick={() => setdata0("Contractor")}>
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Contractor
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setdata0("Freelancer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Freelancer
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setdata0("Developer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
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
              style={{ marginLeft: "3%", position: "relative" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "7%",
                    width: "12rem",
                    paddingLeft: "1rem",
                    fontSize: "16px",
                  }}
                >
                  {data01}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "10.2rem" }}>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setdata01("HR")}
                  >
                    {" "}
                    <div>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>HR</h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setdata01("Developer")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Developer
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setdata01("Admin")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Admin
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "5%", position: "relative" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "6%",
                    width: "15rem",

                    fontSize: "16px",
                  }}
                >
                  {data02}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "13.8rem" }}>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setdata02("Beyond Human Resoruce")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "0%", marginTop: "0%" }}>
                        Beyond Human Resoruce
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "3%", position: "relative", left: "0%" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status"
                  style={{
                    marginLeft: "0%",
                    marginTop: "8%",
                    width: "12rem",
                    paddingLeft: "1rem",
                    fontSize: "16px",
                  }}
                >
                  {data03}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "11rem" }}>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => setdata03("Draft")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Draft
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setdata03("Publish")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Publish
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => setdata03("Close")}
                  >
                    {" "}
                    <div style={{ display: "flex" }}>
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Close
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="new-jab"
              onClick={clickbtn}
              style={{ marginLeft: "-4%" }}
            >
              <div div className="user-job">
                <div>
                  {" "}
                  <img
                    src={Maskjob4}
                    style={{ marginLeft: "15px", marginTop: "10px" }}
                  />
                </div>
                <div className="post">
                <button style={{border:"0px", backgroundColor:"white",}} className="post1">NEW JOB POST</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "13%" }}>
            <div>
              {details.map((user) => (
                <Link
                  to="/Recrutimentmain"
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    Color: "#003666",
                  }}
                >
                  <div className="detail-rec">
                    {user.name}
                    <p className="detail-1">{user.role}</p>
                    <p className="detail-2">{user.candidates}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {dec ? (
        <div className="cre" id="new--job">
          <div className="create-mai">
            <div className="create-1">
              <div className=" text-center cre-title">
                <h3>Create New Job</h3>
                <div className="cre-line"></div>
              </div>
              <div className="create-content">
                <div className="create-circle">
                  <div className="create-arrow">
                    <img src={arrow} className="arrow-logo" />
                  </div>
                </div>
                <div>
                  <p className="create-txt">JOB INFO</p>
                </div>
                <div className="create-txt-logo">
                  <img src={arrow1} />
                </div>
                <div>
                  <h3 className="cre-hiring">HIRING TEAM & WORKFLOW</h3>
                </div>
              </div>
            </div>
            <div className="form-create">
              <form>
                <div
                  class="form-group"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex" }}>
                    <label for="exampleInputEmail1" className="jobtitle">
                      Job Title
                    </label>
                    <span className="required-sym"></span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Job Title"
                    className="for-enter-1"
                    style={{
                      outline: "none",
                      borderColor: "white",
                      paddingLeft: "1%",
                    }}
                  />
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Employement Type
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              position: "relative",
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              top: "1%",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data5}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata5("Contractor")}
                            >
                              Contractor
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              onClick={() => setdata5(" Freelancer")}
                              style={{ color: "black" }}
                            >
                              Freelancer
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata5("Intern")}
                            >
                              Intern
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Department
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data6}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Admin")}
                            >
                              Admin
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Account Team")}
                            >
                              Account Team
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata6("Designer")}
                            >
                              Designer
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Office
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data1}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12.5rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata1("Beyond Human Resoruce")}
                            >
                              Beyond Human Resoruce
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Quantity
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "80%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data7}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata7("1")}
                            >
                              1
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata7("2")}
                            >
                              2
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata7("3")}
                            >
                              3
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          position: "relative",

                          width: "100%",
                          fontSize: "14px",
                          opacity: "1",
                        }}
                      >
                        <label for="exampleInputEmail1" className="jobtitle">
                          Expected Closing Date
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ display: "flex", width: "250px" }}
                      >
                        <input
                          type="date"
                          onChange={(e) => setDate(e.target.value)}
                          style={{
                            width: "80%",
                            fontSize: "14px",
                            opacity: "0.5",
                          }}
                          className="rec-tog-date"
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Salary Range
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1" style={{ width: "100%" }}>
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data2}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata2("10k to 20k")}
                            >
                              10k to 20k
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata2("20k to 40k")}
                            >
                              20k to 40k
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata2("40k to 1lac")}
                            >
                              40k to 1lac
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="form-group"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", width: "70%" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Hiring Manager
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div
                        className="dropdown---1"
                        style={{ width: "100%", marginTop: "1%" }}
                      >
                        <Dropdown
                          className="rec-down-2"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "87.5%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data3}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "31rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Action")}
                            >
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Another action")}
                            >
                              Another action
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata3("Something else")}
                            >
                              Something else
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex" }}>
                        <label for="exampleInputEmail1" className="jobtitle">
                          Notice Period
                        </label>
                        <span className="required-sym"></span>
                      </div>
                      <div className="dropdown---1">
                        <Dropdown
                          className="rec-down-1"
                          style={{ border: "none", outline: "none" }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: " #FAFAFA",
                              color: "black",
                              border: "none",
                              width: "82%",
                              fontSize: "14px",
                              opacity: "0.5",
                            }}
                            id="dropdown-basic"
                            className="rec-tog"
                          >
                            {data4}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ color: "black", marginLeft: "12rem" }}
                          >
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-1"
                              style={{ color: "black" }}
                              onClick={() => setdata4("15 days")}
                            >
                              15 days
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-2"
                              style={{ color: "black" }}
                              onClick={() => setdata4("30 days")}
                            >
                              30 days
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="recruit__dropdown"
                              href="#/action-3"
                              style={{ color: "black" }}
                              onClick={() => setdata4("90 days")}
                            >
                              90 days
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", width: "auto" }}>
                    <label for="exampleInputEmail1" className="jabtitle">
                      Description
                    </label>
                    
                    <span className="required-sym"></span>
                  </div>
                  <div className="txt-data" style={{width:"95%", marginLeft:"1rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
                </div>
              </form>

              <div
                className="but-section"
                style={{ display: "flex", marginBottom: "5%", marginLeft:"1rem" }}
              >
                <Link
                  to="/Publish"
                  style={{ marginTop: "4%", marginLeft: "-0.5%" }}
                >
                  <button
                    className="button--1"
                    style={{ color: "white", marginTop: "10%", width: "100%" }}
                  >
                    <span>Published</span>
                  </button>
                </Link>
                <Link
                  to="/Publish"
                  style={{ marginTop: "3.2%", marginLeft: "3%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{
                      color: "white",
                      marginTop: "13%",
                      width: "max-content",
                    }}
                  >
                    <span>Internal Use</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutiment"
                  style={{ marginTop: "4%", marginLeft: "3%" }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{ color: "white", marginTop: "13%", width: "100%" }}
                  >
                    <span>Closed</span>
                  </button>
                </Link>
                <Link
                  to="/Publish"
                  style={{ marginTop: "2.5%", marginLeft: "3%" }}
                >
                  <button
                    className="button--1"
                    style={{
                      color: "white",
                      marginTop: "13%",
                      width: "max-content",
                    }}
                  >
                    <span>Save and Continue</span>
                  </button>
                </Link>
                <Link
                  to="/Recrutiment"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginTop: "4%",
                  }}
                >
                  <button
                    onClick={clickbtnn}
                    className="button--1"
                    style={{
                      color: "white",
                      marginTop: "13%",
                      width: "100%",
                      marginLeft: "18%",
                    }}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <MultiSelect
        options={options}
        value={options}
        
        labelledBy="Select"
      /> */}
      {/* <MultiSelect
        onChange={handleOnchange}
        options={options}
      /> */}
      {/* <RichTextEditor initialValue="" getValue={getValue} /> */}
    </div>
  );
}

export default Recruitment1