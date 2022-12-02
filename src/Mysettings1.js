import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import airplane from "./images/airplane.png";
import off from "./images/off.png";
import settings from "./images/settings-1.png";
import './Mysettings1.css'
import mytimeoff from "./images/my timeoff (2).png";
import searchbar from "./images/search_black_24dp 1.png";
import { Link } from "react-router-dom";
import star from "./images/star 1.png";
import "./mysettings.css";
import Dropdown from "react-bootstrap/Dropdown";
import cloud from "./images/Frame 150.png";
import Maskjob4 from "./images/Mask group--1.png";
import off1 from "./images/clock-out.png";
import edit from "./images/ed-1.png";
import delete1 from "./images/delete-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Mytimeoff.css";
function Mysettings1() {
  const [data, setdata] = useState(true);
  const [opac, setopac] = useState("10");
  const [pad, setpad] = useState("0%");
  const [changepad, setchange] = useState(true);
  const changepadding = () => {
    {
      changepad ? setpad("-3%") : setpad("0%");
    }
    setchange(false);
  };
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
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  const details = [
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1,
    },
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1,
    },
    {
      Holiday: "New Year's Day",
      Date: "01 Jan 2022",
      edit: edit,
      delete: delete1,
    },
  ];
  return (
    <div style={{ boxShadow: "none" }}>
      <Header Timeoff="true" />
      <Container>
        <div
          onClick={showsearch}
          className="searchbar1"
          style={{ width: "110%", marginLeft: "-11.5%" }}
        >
          <div className="Sec" style={{ display: "flex", width: "100%" }}>
            <img
              src={searchbar}
              className="search"
              style={{ opacity: opac, position: "relative", marginTop: "0%" }}
            />

            <input
              type="search"
              placeholder="Search"
              style={{ width: "100%", height: "46px", paddingLeft: "38px" }}
              className="rec-sea"
              onClick={showicon}
            />
            <div
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="/Mytimeoff"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={off1}
                    className="bog-icon-2"
                    style={{
                      marginTop: "0px",
                      height: "24px",
                      width: "24px",
                      marginLeft: "-0.5%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7.8px",
                      marginLeft: "5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    My Time Off
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="/Mytimeoff3"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={off}
                    className="bog-icon-2"
                    style={{
                      marginTop: "0px",
                      height: "25px",
                      width: "25px",
                      marginLeft: "8px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      marginLeft: "5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      listStyle: "none",
                      listStyleType: "none",
                    }}
                  >
                    Team Time OFF
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="/Mytimeoff4"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "0px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={airplane}
                    className="bog-icon-2"
                    style={{
                      marginTop: "9%",
                      height: "20px",
                      width: "20px",
                      marginLeft: "0PX",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "6.5px",
                      marginTop: "2.5%",
                      color: "#003666",
                      fontWeight: "700",
                      textDecoration: "none",
                      padding: "1px",
                    }}
                  >
                    Employee Time Off
                  </p>
                </div>
              </Link>
            </div>
            <div
              className="bog"
              style={{
                backgroundColor: "#003666",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                to="/Mytimeoff5"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={settings}
                    className="bog-icon-2"
                    style={{
                      marginTop: "9%",
                      height: "25px",
                      width: "24px",
                      marginLeft: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      marginTop: "2%",
                      color: "#E0791B",
                      textDecoration: "none",
                    }}
                  >
                    Settings
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="timeoff-center">
          <div className="timeoff-center-1" style={{ marginLeft: "-40%" }}>
            <Link
              to="/Mytimeoff5"
              style={{
                listStyle: "none",
                textDecoration: "none",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                className="myrequest"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderRadius: "5px",
                  border: "none",
                  width: "250px",
                  boxShadow: "none",
                  height: "40px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "8.5%",
                    paddingTop: "3%",
                    color: "#003666",
                  }}
                >
                  Holidays
                </p>
              </div>
            </Link>

            <Link
              to="/Mytimeoff1"
              style={{
                listStyle: "none",
                textDecoration: "none",
                marginLeft: "5%",
              }}
            >
              <div
                className="myrequest"
                style={{
                  background: "#FAFAFA",
                  color: "#ffffff",
                  borderRadius: "5px",
                  border: "none",
                  width: "250px",
                  boxShadow: "none",
                  height: "40px",
                }}
              >
                <p
                  style={{
                    color: "#003666",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "8.5%",
                    paddingTop: "3%",
                    color: "#E0791B",
                  }}
                >
                  Types and Policies{" "}
                </p>
              </div>
            </Link>
            <div
              className="new-jab"
              style={{ marginTop: "1.6%", width: "15%" }}
            >
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/Mytimeoff9"
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
                    <p>NEW TYPE</p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="new-jab"
              style={{ marginTop: "1.6%", marginLeft: "3%" }}
            >
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/Mytimeoff13"
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
                    <p>NEW POLICY</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="rec-drop"
          style={{ marginTop: "0%", position: "relative", left: "2.5%" }}
        >
          <Dropdown
            className="rec-dow"
            style={{ border: "none", outline: "none", paddingBottom: "2rem" }}
            multiple
          >
            <Dropdown.Toggle
              style={{
                backgroundColor: " #FAFAFA",
                color: "black",
                border: "none",
                marginTop: "1rem",
              }}
              id="dropdown-basic"
              className="rec-tog"
              multiple
            >
              All Status
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                color: "black",
                marginLeft: "6.2rem",
                marginTop: "0rem",
              }}
            >
              <Dropdown.Item
                href="#/action-1"
                style={{ color: "black" }}
                className="changefocus"
              >
                <div style={{ display: "flex" }}>
                  
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Action</h6>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{ color: "black" }}
                className="changefocus"
              >
                <div style={{ display: "flex" }}>
                 
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Action</h6>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                style={{ color: "black" }}
                className="changefocus"
              >
                <div style={{ display: "flex" }}>
                  
                  <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Action</h6>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <img src={cloud} className="clou" />
        </div>
        <div className="mysetting1__data" style={{ marginTop: "1%" }}>
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{
                textAlign: "center",
                marginTop: "2%",
                boxShadow: "none",
              }}
            >
              <p>Engagement</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
                marginLeft: "3.5%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21" style={{ boxShadow: "none" }}>
                  Nafv dfsf sdvd dvsd{" "}
                </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p style={{ boxShadow: "none" }}>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p style={{ boxShadow: "none" }}>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p style={{ boxShadow: "none" }}>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysetting1__data" style={{ marginTop: "2%" }}>
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <p>Weeding</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
                marginLeft: "7.5%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21">Nafv dfsf sdvd dvsd </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysetting1__data" style={{ marginTop: "2%" }}>
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <p>UnPaid Time Off</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21">Nafv dfsf sdvd dvsd </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysetting1__data" style={{ marginTop: "2%" }}>
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <p>Sick Leave UnPaid</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
                marginLeft: "-2%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21">Nafv dfsf sdvd dvsd </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mysetting1__data" style={{ marginTop: "2%" }}>
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <p>Relative Funeral</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21">Nafv dfsf sdvd dvsd </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mysetting1__data"
          style={{ marginTop: "2%", marginBottom: "5%" }}
        >
          <div
            className="mysetting1__data_1"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="mysetting1_1"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <p>Maternity</p>
            </div>
            <div
              className="mysetting1_2"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1%",
                marginLeft: "6%",
              }}
            >
              <div style={{ marginTop: "9%" }}>
                {" "}
                <p className="mysetting1_21">Nafv dfsf sdvd dvsd </p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>vsdvdsvdsvdsv</p>
              </div>
              <div style={{ marginTop: "-8%" }}>
                {" "}
                <p>dsvdsvdsvdsv dsv</p>
              </div>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>All Employees</p>
            </div>
            <div className="mysetting1_2_1" style={{ marginTop: "3%" }}>
              <p style={{ boxShadow: "none" }}>Actions</p>
            </div>
            <div className="mysetting1_2_2" style={{ marginTop: "2%" }}>
              <div className="dropdown">
                <div
                  className="mysetting__button shadow-none"
                  style={{ border: "none", boxShadow: "none" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                  <div
                    className="mysetting__dropdown"
                    style={{ background: "#003666", marginTop: "1%" }}
                  ></div>
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link
                    to="/Mytimeoff9"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Edit Type
                  </Link>
                  <Link
                    to="/Mytimeoff10"
                    class="dropdown-item"
                    style={{ fontFamily: "Inter" }}
                  >
                    Delete Type
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mysettings1;
