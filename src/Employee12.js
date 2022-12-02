import React,{useState} from 'react';
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee12.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import ell from "./images/Ellipse 60.png"
import ed from "./images/000.png"
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {FaLinkedinIn} from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { FiPhone } from "react-icons/fi";

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
      <div style={{ overflow: "hidden", width: "100%" }}>
        <Header Employee="true"/>
        <Container>
          <div onClick={showsearch} className="Employee12-1">
            <div className="Employee12-2" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="Employee12-3"
                style={{ opacity: opac }}
              />

              <input
                type="search"
                placeholder="Search"
                style={{ width: "60%", paddingLeft: "3%" }}
                className="Employee12-4"
                onClick={showicon}
              />
              <div className="Employee12-5">
                <Link to="/Employee1" style={{textDecoration:"none"}}>
                  <div>
                    <img src={jobs} className="Employee12-5-icon" />
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
              <div
                className="Employee12-5"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/Employee12" style={{textDecoration:"none"}}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={candidate} className="Employee12-5-icon-1" />
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
              <div
                className="Employee12-5"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/Employee13" style={{textDecoration:"none"}}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={setting} className="Employee12-5-icon-2" />
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
            style={{ display: "flex", flexDirection: "row", width: "200%" }}
            className="Employee12-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "15%", position: "relative", left: "0%" }}
            >
              <Dropdown>
                <DropdownToggle
                  variant="sucess"
                  id="dropdown_basic"
                  className="Employee12-7"
                  style={{
                    marginleft: "-3%",
                    margintop: "7%",
                    backgroundColor: "#FAFAFA",
                  }}
                >
                  <span style={{ color: "#003666", fontFamily: "Inter" }}>
                    All Department
                  </span>
                </DropdownToggle>
                <DropdownMenu style={{ marginLeft: "1.7rem" }}>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", marginTop: "3%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", margintop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", margintop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div
              className="Employee12-1000"
              style={{
                marginLeft: "1%",
                position: "relative",
                marginTop: "0.3rem",
              }}
            >
              <Dropdown>
                <DropdownToggle
                  variant="sucess"
                  id="dropdown_basic"
                  className="Employee12-7"
                >
                  <span style={{ color: "#003666", fontFamily: "Inter" }}>
                    All Office
                  </span>
                </DropdownToggle>
                <DropdownMenu style={{ marginleft: "9rem" }}>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", margintop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", margintop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                  <DropdownItem href="#/action-1">
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        name="vehicle2"
                        value="car"
                        style={{ marginTop: "-4%" }}
                      />
                      <h6 style={{ marginLeft: "10%", margintop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div
            class="form-group"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
          </div>
          <div
            class="form-group"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
          </div>
          <div
            class="form-group"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
            <div className="Employee12-8">
              <div>
                <img src={ell} className="Employee12-9" />
              </div>
              <div className="Employee12-10">
                <span>
                  Sumit <br />
                </span>
              </div>
              <div className="Employee12-11">
                <span style={{ fontfamily: "inter" }}>Digital Marketing</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="Employee12-12"
                >
                  <FiPhone className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <TfiEmail className="icons_12" />
                </div>
                <div
                  style={{ width: "30px", height: "30px", marginLeft: "1%" }}
                  className="Employee12-12"
                >
                  {" "}
                  <FaLinkedinIn className="icons_12" />
                </div>
              </div>
              <div className="employee__line"></div>
              <div className="employee__p">
                <p>Line Manager Priya Sahni</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}