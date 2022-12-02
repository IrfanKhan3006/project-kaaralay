import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import airplane from "./images/airplane.png";
import off from "./images/off.png";
import settings from "./images/settings-1.png";
import mytimeoff from "./images/my timeoff (2).png";
import searchbar from "./images/search_black_24dp 1.png";
import { Link } from "react-router-dom";
import star from "./images/star 1.png";
import Dropdown from "react-bootstrap/Dropdown";
import cloudtype from "./images/cloudtype.png";
import Maskjob4 from "./images/Mask group--1.png";
import off1 from "./images/clock-out.png";
import timeoffupload from "./images/timeoffupload.png";
import "./Mytimeoff.css";
function Mytimeoff3() {

  const [data0,setedata0] = useState("All Types");
  const [data01,setdata01] = useState("All Status");
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
  const data1 = [
    {
      name: "Muskan Bhatia",
      From: "22 Apr 2022",
      To: " 31 May 2022",
      Total: "28 Days",
      Type: "Sick Leave",
      Attachment: "1 file",
      Status: "Pending",
      uploadImg: timeoffupload,
      colorshow: "#E0791B",
    },

    {
      name: "Muskan Bhatia",
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
      name: "",
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    },
    {
      name: "",
      From: "",
      To: "",
      Total: "",
      Type: "",
      Attachment: "",
      Status: "",
      uploadImg: "",
      colorshow: "",
    }
  ];
  return (
    <div>
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
                      height: "25px",
                      width: "25px",
                      marginLeft: "-0.5%",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7.5px",
                      marginLeft: "5%",
                      color: "#E0791B",
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
                backgroundColor: "#003666",
                height: "46px",
                width: "80px",
              }}
            >
              <Link style={{ listStyle: "none", textDecoration: "none" }}>
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
                      fontSize: "6.8px",
                      marginTop: "2.5%",
                      color: "#E0791B",
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
                backgroundColor: "#ffffff",
                height: "46px",
                width: "80px",
              }}
            >
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to="/Mytimeoff5"
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
                      width: "25px",
                      marginLeft: "0px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      marginTop: "2%",
                      color: "#003666",
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
       
        <div className="timeoff-dropdowns" style={{marginTop:'5%'}}>
          <div className="timeoff-dropdowns-1">
            <div
              className="rec-drop"
              style={{ marginLeft: "0%", position: "relative", left: "0%" }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status timeoff-dropdwons-padding"
                  style={{
                    marginLeft: "-3%",
                    marginTop: "0.2%",
                    width: "15rem",
                  }}
                >
                  {data0}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "13rem" }}>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setedata0("Engagement");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Engagement
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {" "}
                    <div
                      style={{ display: "flex", backgroundColor: "#FFFFFF" }}
                      onClick={() => {
                        setedata0("Relative Funeral");
                      }}
                    >
                      <h6
                        style={{
                          marginLeft: "5%",
                          marginTop: "5%",
                          color: "#003666",
                        }}
                      >
                        Relative Funeral
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setedata0("Wedding");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Wedding
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "5%",
                height: "50px",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dropdown__status timeoff-dropdwons-padding"
                  style={{ marginLeft: "-3%", marginTop: "0.2%" }}
                >
                  {data01}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "9rem" }}>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Approved");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Approved
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Pending");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Pending
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <div
                      style={{ display: "flex" }}
                      onClick={() => {
                        setdata01("Cancelled");
                      }}
                    >
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Cancelled
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop timeoff-date"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "4%",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="timeoff-dateinput"
              />
            </div>
            <div
              className="rec-drop timeoff-date"
              style={{
                marginLeft: "0%",
                position: "relative",
                left: "0%",
                marginLeft: "4%",
                height: "43px",
              }}
            >
              <input
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
                className="timeoff-dateinput"
              />
            </div>
            <div
              className="new-jab"
              style={{ marginTop: "-0.5%", marginLeft: "-4%" }}
            >
              <Link
                style={{ textDecoration: "none", listStyle: "none" }}
                to="/Mytimeoff2"
              >
                <div div className="user-job">
                  
                  <div className="post" style={{marginLeft:'20%'}}>
                    <p>DOWNLOAD CSV</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="timeoff-data"
          style={{ width: "105%", marginLeft: "-2%", marginTop: "5%" }}
        >
          <div
            className="timeoff-heading"
            style={{
              marginTop: "0.5%",
              marginBottom: "1%",
              marginLeft: "-1.2%",
            }}
          >
            <div className="timeoff-head-1" style={{ marginLeft: "3%" }}>
              <p>Name</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>Form</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>To</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>Total</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>Type</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>Attachment</p>
            </div>
            <div className="timeoff-head-1" style={{ marginLeft: "3.5%" }}>
              <p>Status</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div className="timeoff-line"></div>

          <div
            className="timeoff-main"
            style={{ justifyContent: "space-around" }}
          >
            {data1.map((data) => {
              return (
                <div className="timeoff-data--1" style={{ marginTop: "1%" }}>
                  <div
                    className="timeoff-data-2-1"
                    style={{ justifyContent: "space-around" }}
                  >
                    <p style={{ marginLeft: "-0.6%" }}>{data.name}</p>
                    <p style={{ marginLeft: "-1%" }}>{data.From}</p>
                    <p style={{ marginLeft: "1%" }}>{data.To}</p>
                    <p style={{ marginLeft: "1%" }}>{data.Total}</p>
                    <p style={{ marginLeft: "1%" }}>{data.Type}</p>
                    <p>{data.Attachment}</p>
                    {data.Attachment ? (
                      <p style={{ color: data.colorshow }}>{data.Status}</p>
                    ) : (
                      <p style={{}}>{data.Status}</p>
                    )}
                  </div>
                  {data.Attachment ? (
                    <div className="timeoff-line-2"></div>
                  ) : (
                    <div
                      className="timeoff-as-2"
                      style={{ marginTop: "1%" }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mytimeoff3;
