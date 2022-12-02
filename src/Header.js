import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link,NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import logo from "./images/logo 6.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse.js";
import group from "./images/Group 148.png";
import vector from "./images/Vector-1.png";
import profile from "./images/Group 147.png";
import './Header.css'
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Header({ dashboard, checkList, Recruitment,Employee, Timeoff }) {
  const color = dashboard == "true" ? "#E0791B" : "#fffff";
  const color1 = checkList == "true" ? "#E0791B" : "#fffff";
  const color2 = Recruitment == "true" ? "#E0791B" : "#fffff";
  const color3 = Employee == "true" ? "#E0791B" : "#fffff";
  const color4 = Timeoff == "true" ? "#E0791B" : "#fffff";

  console.log(color);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#003466" }}
        variant="dark"
        className="rec-bar"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/Dashboard">
              <img
                src={logo}
                className="img-fluid rec-logo"
                style={{ height: "55px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto s-2 justify-content-center">
              <Link to="/Dashboard" className="s-1" style={{ color: color}}>
                DashBoard
              </Link>
              <Link
                to="/Recrutiment"
                className="s-1"
                activeClassName="active-link"
                style={{ color: color2 }}
              >
                Recruitment
              </Link>
              <Link
                to="/Employee1"
                className="s-1"
                activeClassName="active-link"
                style={{ color: color3 }}
              >
                Employees
              </Link>
              <Link
                to="/CheckList1"
                className="s-1"
                activeClassName="active-link"
              >
                Checklist
              </Link>
              <Link
                to="/Mytimeoff"
                className="s-1"
                activeClassName="active-link"
                style={{ color: color4 }}
              >
                Timeoff
              </Link>
              <a href="#pricing" className="s-1" activeClassName="active-link">
                Attendance
              </a>{" "}
              <a href="#pricing" className="s-1" activeClassName="active-link">
                Payroll
              </a>
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
                      <span className="s-1" style={{marginLeft:"2rem"}}>More</span>
                    </div>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{marginLeft:"4.5rem", backgroundColor:"#003666",}}>
                      <Link to="/News1" class="dropdown-item" style={{color:"#E0791B", fontFamily:"gorditas"}}>
                        News
                      </Link>
                      <Link to="/Document" class="dropdown-item" style={{color:"#E0791B", fontFamily:"gorditas"}}>
                        Documents
                      </Link>
                    </div>
                  </div>
            </Nav>
            <NavbarCollapse className="justify-content-start h-1">
              <a href="#deets">
                <div className="rec-icons">
                  <img src={group} className="chat" />
                </div>
              </a>
              <a href="#deets" style={{ marginLeft: "13%" }}>
                <div className="rec-icons">
                  <img src={vector} className="chat" />
                </div>
              </a>
              <a href="#deets" style={{ marginLeft: "13%" }}>
                <Link to="#">
                  <img src={profile} className="chat1" />
                </Link>
              </a>
            </NavbarCollapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

/*
  
 <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#003466" }}
        variant="dark"
       
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
             
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto s-2 justify-content-center">
              <a href="#features" className="s-1">
                Features
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </a>
              <a href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>{" "}
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
              <Link href="#pricing" className="s-1">
                Pricing
              </Link>
            </Nav>
          
              <Link href="#deets" className="h-1">
                More deets
              </Link>
              <Link eventKey={2} href="#memes">
                Dank memes
              </Link>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Dashboard />
 <header>
      <div className="container-1 container-nav">
        <div className='brand'>
          <h1>Kaaryalay</h1>
        </div>
        <div className="s-1">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="icons-nav">
            <nav>
              <ul>
                <li>
                  <a href="#">something</a>
                </li>
                <li>
                  <a href="#">something</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
 <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:'#003466',height:'100%'}} variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="md-auto s-2">
            <Link href="#features" className="s-1">
              Features
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>{" "}
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
            <Link href="#pricing" className="s-1">
              Pricing
            </Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end s-3">
            <Nav.Link href="#deets" className="h-1">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
              Dank memes
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     */
