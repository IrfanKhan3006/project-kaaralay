import React,{useState} from 'react';
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import jobs from "./images/employee.png";
import './Employee11.css'
import candidate from "./images/directory.png";
import { Link } from "react-router-dom";
import setting from "./images/organization.png";
import searchbar from "./images/search_black_24dp 1.png";
import Header from "./Header";
import ell from "./images/Ellipse 65.png"
import ed from "./images/000.png"
import TimezoneSelect from "react-timezone-select";
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';


export default function Userdata() {
  const [selectedTimezone, setSelectedTimezone] = useState({});
    const [data, setdata] = useState(true);
    const [opac, setopac] = useState("10");
    const [datao,setdatao] = useState("EVERYONE")
  const [month, setmonth] = useState("GMT +05:30 Colombo");
  const storemonth = (h) => {
    setmonth(h);
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
    return (
      <div style={{ overflow: "hidden", width: "100%" }}>
        <Header Employee="true" />
        <Container>
          <div onClick={showsearch} className="Employee11-1">
            <div className="Employee11-2" style={{ display: "flex" }}>
              <img
                src={searchbar}
                className="Employee11-3"
                style={{ opacity: opac }}
              />

              <input
                type="search"
                placeholder="Search"
                style={{ width: "60%", paddingLeft: "3%" }}
                className="Employee11-4"
                onClick={showicon}
              />
              <div className="Employee11-5">
                <Link to="/Employee1" style={{ textDecoration: "none" }}>
                  <div>
                    <img src={jobs} className="Employee11-5-icon" />
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
                className="Employee11-5"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/Employee12" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={candidate} className="Employee11-5-icon-1" />
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
                className="Employee11-5"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Link to="/Employee13" style={{ textDecoration: "none" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={setting} className="Employee11-5-icon-2" />
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
              width: "200%",
              left: "-10%",
            }}
            className="Employee11-6"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "0%" }}
            >
              <div
                className="Employee11-7"
                style={{ border: "none", outline: "none" }}
              >
                <Link to="/Employee5" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      border: "none",
                      color: "#003666",
                    }}
                    className="Employee11-8"
                  >
                    General
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "-7%", position: "relative", left: "10%" }}
            >
              <div className="Employee11-7">
                <Link to="/Employee6" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "#003666 ",
                      border: "none",
                    }}
                    className="Employee11-8"
                  >
                    Job
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "12%" }}
            >
              <div className="Employee11-7">
                <Link to="/Employee7" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "#003666",
                      border: "none",
                    }}
                    className="Employee11-8"
                  >
                    Payroll
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "15%" }}
            >
              <div className="Employee11-7">
                <Link to="/Employee8" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "#003666",
                      border: "none",
                    }}
                    className="Employee11-8"
                  >
                    Documents
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "17%" }}
            >
              <div className="Employee11-7">
                <Link to="/Employee9" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "#003666",
                      border: "none",
                    }}
                    className="Employee11-8"
                  >
                    Dependents
                  </button>
                </Link>
              </div>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "1%", position: "relative", left: "20%" }}
            >
              <div className="Employee11-7">
                <Link to="#" className="Employee5-50">
                  <button
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "#E0791B",
                      border: "none",
                    }}
                    className="Employee11-8"
                  >
                    Accounts settings
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="Employee11-11">
            <div>
              <div className="Employee11-9">
                <p>ACCOUNT SETTINGS</p>
                <button className="Employee11-10">EDIT</button>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="Employee11-12">TIMEZONE</p>

                <div
                  class="dropdown policy__dropdown"
                  style={{ marginTop: "-0.2%", marginLeft: "3%" }}
                >
                  <button
                    class="btn dropdown-toggle profile--new "
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      marginTop: "1%",
                      width: "27rem",
                      paddingLeft: "0.5rem",
                      fontFamily: "Inter",
                      opacity: "1",
                    }}
                  >
                    {month}
                  </button>
                  <div
                    class="dropdown-menu employee__scroll"
                    aria-labelledby="dropdownMenu2"
                    style={{marginTop:"31rem",
                      marginLeft: "25rem",
                      overFlow: "scroll",
                   
                      backgroundColor: "white",
                      height:'100px'
                    }}
                  >
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-12:00) International Date Line West")
                      }
                    >
                      (GMT-12:00) International Date Line West
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-11:00) Midway Island, Samoa")
                      }
                    >
                      (GMT-11:00) Midway Island, Samoa
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-10:00) Hawaii")}
                    >
                      (GMT-10:00) Hawaii
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-09:00) Alaska")}
                    >
                      (GMT-09:00) Alaska
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-08:00) Pacific Time (US and Canada)")
                      }
                    >
                      (GMT-08:00) Pacific Time (US and Canada)
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-07:00) Mountain Time (US and Canada)")
                      }
                    >
                      (GMT-07:00) Mountain Time (US and Canada)
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-07:00) Chihuahua, La Paz, Mazatlan")
                      }
                    >
                      (GMT-07:00) Chihuahua, La Paz, Mazatlan
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-07:00) Arizona")}
                    >
                      (GMT-07:00) Arizona
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-06:00) Central Time (US and Canada)")
                      }
                    >
                      (GMT-06:00) Central Time (US and Canada)
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-06:00) Saskatchewan")}
                    >
                      (GMT-06:00) Saskatchewan
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth(
                          "(GMT-06:00) Guadalajara, Mexico City, Monterrey"
                        )
                      }
                    >
                      (GMT-06:00) Guadalajara, Mexico City, Monterrey
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-01:00) Cape Verde Islands")
                      }
                    >
                      (GMT-01:00) Cape Verde Islands
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-01:00) Azores")}
                    >
                      (GMT-01:00) Azores
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-02:00) Mid-Atlantic")}
                    >
                      (GMT-02:00) Mid-Atlantic
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-03:00) Greenland")}
                    >
                      (GMT-03:00) Greenland
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-03:00) Buenos Aires, Georgetown")
                      }
                    >
                      (GMT-03:00) Buenos Aires, Georgetown
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-03:00) Brasilia")}
                    >
                      (GMT-03:00) Brasilia
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-03:30) Newfoundland and Labrador")
                      }
                    >
                      (GMT-03:30) Newfoundland and Labrador
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-04:00) Santiago")}
                    >
                      (GMT-04:00) Santiago
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-06:00) Central America")}
                    >
                      (GMT-06:00) Central America
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-04:00) Caracas, La Paz")}
                    >
                      (GMT-04:00) Caracas, La Paz
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("(GMT-06:00) Central America")}
                    >
                      (GMT-06:00) Central America
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-04:00) Atlantic Time (Canada)")
                      }
                    >
                      (GMT-04:00) Atlantic Time (Canada)
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-05:00) Bogota, Lima, Quito")
                      }
                    >
                      (GMT-05:00) Bogota, Lima, Quito
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storemonth("GMT-05:00) Indiana (East)")}
                    >
                      (GMT-05:00) Indiana (East)
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() =>
                        storemonth("(GMT-05:00) Eastern Time (US and Canada)")
                      }
                    >
                      (GMT-05:00) Eastern Time (US and Canada)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Employee11-11">
            <div>
              <div className="Employee11-9">
                <p>PRIVACY</p>
              </div>
              <p className="Employee11-12" style={{ paddingTop: "2rem" }}>
                WHO CAN SEE YOUR BIRTHDAY ON CALENDAR ?
              </p>
              <div className="Employee11-15">
                <Dropdown>
                  <DropdownToggle
                    variant="success"
                    id="dropdown-basic"
                    className="dropdown__status"
                    style={{
                      marginLeft: "-3%",
                      marginTop: "4.2%",
                      width: "8rem",
                      fontSize: "16px",
                    }}
                  >
                    {datao}
                  </DropdownToggle>
                  <Dropdown.Menu style={{ marginLeft: "7rem" }}>
                    <Dropdown.Item href="#/action-1">
                      {" "}
                      <div
                        style={{ display: "flex" }}
                        onClick={() => setdatao("Only Me")}
                      >
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          Only Me
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      {" "}
                      <div
                        style={{ display: "flex" }}
                        onClick={() => setdatao("Everyone")}
                      >
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          Everyone
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      <div
                        style={{ display: "flex" }}
                        onClick={() => setdatao("No one")}
                      >
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          No one
                        </h6>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}