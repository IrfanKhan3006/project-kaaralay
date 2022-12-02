import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import publishh from "./images/Drop down.png";
import jobs from "./images/jobs.png";
import candidate from "./images/candidate.png";
import { Link } from "react-router-dom";
import setting from "./images/settings 3.png";
import searchbar from "./images/search_black_24dp 1.png";
import Dropdown from "react-bootstrap/Dropdown";
import Recruitdetails from "./Recruitdetails";
import jobicon from "./images/Mask group.png";
import Header from "./Header";
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from "./RecrutimentPos";
import arrow from "./images/arrow.png";
import RichTextEditor from "./shared/RichTextEditor";
import arrow1 from "./images/arrow1.png";
import b from "./images/s.png";
import i from "./images/q.png";
import qq from "./images/aaaa.png";
import mask1 from "./images/Mask group-1.png";
import mask2 from "./images/Mask group-2.png";
import mask3 from "./images/Mask group-3.png";
import Button from "react-bootstrap/Button";
import mask4 from "./images/Group 2394-1.png";
import mask5 from "./images/Group 2395-2.png";
import mask6 from "./images/Mask group-link.png";
import group1 from "./images/Group.png";
import Maskjob4 from "./images/Mask group--1.png";
import { BsClockHistory } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import profileimg from "./images/Ellipse 58.png";
import Comment from "./Comment";
import Activity from "./Activity";
import Profiledetails from "./Profiledetails";
import Evaluatedata from "./Evaluatedata";
import './Recrutmentmain.css';
function RecrutmentMain() {

   const initialValues = {
     name: "123",

     tag: "abcd",
   };
  const [name, setname] = useState("Vishal Kapoor");
  const [number, setnumber] = useState("989956727");
  const [email, setemail] = useState("VishalKapoor507@gmail");
  const [logindata, setlogindata] = useState(initialValues);
  const [profile, setprofile] = useState(true);
  const [evaluate, setevaluate] = useState(false);
  const [comment, setcomment] = useState(false);
  const [activity, setactivity] = useState(false);
  
  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");


  const errorshows = () => {};
  const handleChange = () => {
    if (logindata.name == "123") {
      setnameError("");
    } else {
      const userregex =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Offer");
        setmoveto(false);
      } else {
        setnameError("");
        setmoveto(true);
      }
    }
    check()
  };

  useEffect(handleChange,[logindata]);
 
  const showdata = (e) => {};
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
  const [value, setValue] = useState("");
const[d, setd] = useState("Published")
  const [back, setback] = useState("none");
  const [dec, setdec] = useState(false);
  const clickbtn = () => {
    setdec(true);
    setback("blur(8px)");
  };
  const getValue = (value) => {
    setValue(value);
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
  const [data5, setdata5] = useState("Department");
  const [data6, setdata6] = useState("All Employement");
  const [data1, setdata1] = useState("Office");
  const [data7, setdata7] = useState("Quantity");
  const [data2, setdata2] = useState("Salary Range");
  const [data3, setdata3] = useState("Hiring Manager");
  const [data4, setdata4] = useState("Notice Period");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const [moveto4, setmoveto4] = useState(false);
  const [moveto5, setmoveto5] = useState(false);

  const check = () => {
    if (
      data5 == "Department" ||
      data6 == "All Employement" ||
      data1 == "office" ||
      data7 == "Quality" ||
      data2 == "Salary Range" ||
      data3 == "Hiring Manager" ||
      data4 == "Notive Period"
    ) {
      setmoveto5(false);
    } else {
      setmoveto5(true);
    }
  };
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
    <div style={{ overflow: "hidden" }}>
      <div style={{ filter: back }}>
        <Header Recruitment="true" />
        <Row>
          <Col>
            <div onClick={showsearch} className="ma">
              <div className="block" style={{ display: "flex" }}>
                <img src={searchbar} className="se" style={{ opacity: opac }} />

                <input
                  type="search"
                  placeholder="Search"
                  style={{ width: "60%", paddingLeft: "50px" }}
                  className="rec-se"
                  onClick={showicon}
                />
                <div className="bag">
                  <Link to="/Recrutiment">
                    <div>
                      <img src={jobs} className="bag-icon" />
                    </div>
                  </Link>
                </div>
                <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                  <Link
                    to="/Candidate"
                    style={{ textDecoration: "none", ListStyle: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={candidate} className="bag-icon-1" />
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
                <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                  <Link
                    to="/Hire"
                    style={{ textDecoration: "none", ListStyle: "none" }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <img src={setting} className="bag-icon-2" />
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
          </Col>
        </Row>
        <div
          className="digital"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="di-2">
            <p className="di-1">Digital Marketing Executive</p>
          </div>
          <div className="di-3" style={{ display: "flex" }}>
            <div
              className="rec-drop"
              style={{ marginRight: "10%", position: "relative", left: "0%" }}
            >
              <div
                className="rec-drop"
                style={{ marginLeft: "0%", position: "relative", left: "0%" }}
              >
                {/* <Dropdown className="re-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                    width: "100%",
                    paddingLeft: "20%"
                  }}
                  className="reci-tog"
                >
                  Publish
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
              </Dropdown> */}
                <Dropdown className="re-down">
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="reci-tog"
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "black",
                      border: "none",
                      width: "100%",
                      paddingLeft: "5%",
                    }}
                  >
                    {d}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ marginLeft: "8.5rem" }}>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => setd("Published")}
                    >
                      {" "}
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          Published
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => setd("Internal Used")}
                    >
                      {" "}
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          Internal Used
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => setd("Closed")}
                    >
                      {" "}
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          Closed
                        </h6>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="ne" onClick={clickbtn} style={{ width: "100%" }}>
              <div div className="us" style={{ width: "200px" }}>
                <div>
                  {" "}
                  <img
                    src={Maskjob4}
                    style={{ marginLeft: "15px", marginTop: "10px" }}
                  />
                </div>
                <div className="post">
                  <button
                    style={{ border: "0px", backgroundColor: "white" }}
                    className="post1"
                  >
                    NEW JOB POST
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",

                marginTop: "5%",
              }}
              className="icons-div"
            >
              <Link to="/Act">
                <img
                  src={qq}
                  style={{
                    height: "25px",
                    width: "25px",
                    marginLeft: "1%",
                    color: "#003666",
                  }}
                />
              </Link>
              <Link to="/Edi">
                <img
                  src={i}
                  style={{
                    height: "25px",
                    marginLeft: "1rem",
                    width: "25px",
                    color: "#003666",
                  }}
                />
              </Link>
              <Link to="/Del">
                <img
                  src={b}
                  style={{
                    height: "25px",
                    width: "25px",
                    marginLeft: "1rem",
                    color: "#003666",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="reci-col">
          <div
            className="reci-col-1"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="reci-col-2">
              <p className="reci-col-p">Applied</p>
              <div className="reci-col-3">
                <Link
                  to="/common"
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "#E0791B",
                  }}
                >
                  <p>Vishal</p>
                </Link>
              </div>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">Screening</p>
              <div className="reci-col-3">
                <p>Ram</p>
              </div>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">1st Interview</p>
              <div className="reci-col-3">
                <p style={{ top: "100%" }}>Yash</p>
              </div>
              <div className="reci-col-3">
                <p>Ajay</p>
              </div>
              <div className="reci-col-3">
                <p>Arun</p>
              </div>{" "}
              <div className="reci-col-3">
                <p>Mega</p>
              </div>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">2nd Interview</p>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">Offered</p>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">Hired</p>
            </div>
            <div className="reci-col-2">
              <p className="reci-col-p">Rejected</p>
            </div>
          </div>
        </div>
      </div>
      {dec ? (
        <div className="cre" id="new--job" style={{ zIndex: "100000" }}>
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
                    name="name"
                    onChange={(e) => {
                      setlogindata({ ...logindata, name: e.target.value });
                    }}
                  />
                </div>
                <p>{nameError}</p>
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
                {moveto && moveto5 ? (
                  <Link
                    to="/Publish"
                    style={{ marginTop: "4%", marginLeft: "-0.5%" }}
                  >
                    <button
                      className="button--1"
                      style={{
                        color: "white",
                        marginTop: "10%",
                        width: "100%",
                      }}
                    >
                      <span>Published</span>
                    </button>
                  </Link>
                ) : (
                  <Link
                    onClick={() => alert("Please Enter Valid Fields")}
                    style={{ marginTop: "4%", marginLeft: "-0.5%" }}
                  >
                    <button
                      className="button--1"
                      style={{
                        color: "white",
                        marginTop: "10%",
                        width: "100%",
                      }}
                    >
                      <span>Published</span>
                    </button>
                  </Link>
                )}
                {moveto && moveto5 ? (
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
                ) : (
                  <Link
                   onClick={() => {alert("Please Enter valid Details")}}
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
                )}
                <Link
                  to="/Recrutimentmain"
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
                {moveto5 && moveto ? (
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
                ) : (
                  <Link
                    onClick={() => {
                      alert("Please Enter valid details");
                    }}
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
                )}
                <Link
                  to="/Recrutimentmain"
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
    </div>
  );
}

export default RecrutmentMain;
