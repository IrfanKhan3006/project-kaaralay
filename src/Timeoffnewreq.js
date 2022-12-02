import React,{useState} from 'react'
import './Timeoffnewreq.css'
import Dropdown from "react-bootstrap/Dropdown";
import timeoffupload from "./images/timeoffupload.png";
import {Link} from 'react-router-dom'
import ellipse49 from './images/Ellipse 49.png'
import ellipse50 from './images/Ellipse 50.png'
function Timeoffnewreq() {


    const [data1, setdata1] = useState("Select Job Title");
    const [time,settime] =useState("9:00");
    const storetime = (h) => {
      console.log("clciklsdjf")
      settime(h);
      console.log(time);
    }
     const [time1, settime1] = useState("9:00");
     const storetime1 = (h) => {
       console.log("clciklsdjf");
       settime1(h);
       console.log(time);
     };
      const storedata1 = (h) => {
        setdata1(h);
      };
      const date = new Date();
      const futureDate = date.getDate() + 3;
      date.setDate(futureDate);
      const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div className="timeoff_upload-back1" style={{ overFlow: "hidden" }}>
      <div className="timeoff__1">
        <div className="timeoff__request">
          <div className="timeoff__new">
            <p className="timeoff__p">New Request</p>
          </div>
          <div className="timeoff__line"></div>
          <div className="timeoff__content">
            <div
              className="timeoff__select"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "40%" }}>
                {" "}
                <p>Select Type</p>
              </div>
              <div style={{ width: "100%", marginLeft: "1.5%" }}>
                <div class="dropdown" style={{ width: "100%",}}>
                  <button
                    class="btn dropdown-toggle profile--new dropdowns__timeoff"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "102%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data1}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "31.5rem" }}
                  >
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storedata1("ANNUAL")}
                      style={{fontFamily:"inter"}}
                    >
                      ANNUAL
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storedata1("ENGAGEMENT")}
                      style={{fontFamily:"inter"}}
                    >
                      ENGAGEMENT
                    </button>
                    <div className="dropdown__line"></div>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storedata1("RELATIVE FUNERAL")}
                      style={{fontFamily:"inter"}}
                    >
                      RELATIVE FUNERAL
                    </button>
                    <button
                      class="dropdown-item timeoff--1"
                      type="button"
                      onClick={() => storedata1("SICK LEAVE (UNPAID)")}
                      style={{fontFamily:"inter"}}
                    >
                      SICK LEAVE (UNPAID)
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="timeoff__day"
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "3%",
                marginLeft: "3.5%",
              }}
            >
              <div className="timeoff__day" style={{ width: "35%" }}>
                <p className="timeoff__day_p" style={{ marginLeft: "-6%" }}>
                  Select Day
                </p>
              </div>
              <div
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    width: "22%",
                  }}
                >
                  <Link
                    style={{
                      display: "flex",
                      width: "100%",
                      textDecoration: "none",
                    }}
                    to="/Mytimeoff2"
                  >
                    {" "}
                    <img
                      src={ellipse49}
                      name="single"
                      style={{ marginTop: "5%" }}
                      className="timeoff__radio"
                    />
                    <p
                      style={{
                        marginLeft: "3%",
                        width: "100%",
                        fontSize: "16px",
                      }}
                      className="timeoff__day_p_1"
                    >
                      Single Day
                    </p>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    width: "25%",
                  }}
                >
                  <Link to="/Mytimeoff12">
                    {" "}
                    <img
                      src={ellipse50}
                      style={{ marginTop: "5%" }}
                      className="timeoff__radio"
                    />
                  </Link>
                  <Link
                    to="/Mytimeoff12"
                    style={{
                      marginLeft: "3%",
                      width: "100%",
                      fontSize: "16px",
                      color: "#E0791B",
                      textDecoration: "none",
                    }}
                    className="timeoff__day_p_1"
                  >
                    Multiple Days
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="timeoff__cal"
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "2.5%",
              }}
            >
              <div
                className="rec-drop timeoff "
                style={{
                  marginLeft: "0%",
                  position: "relative",
                  left: "0%",
                  marginLeft: "28%",
                  width: "25%",
                }}
              >
                <input
                  id="dateRequired"
                  type="date"
                  name="dateRequired"
                  defaultValue={defaultValue}
                  className="timeoff-dat"
                />
              </div>
              <div
                className="rec-drop"
                style={{
                  marginLeft: "0%",
                  position: "relative",
                  left: "0%",
                  marginLeft: "5%",
                }}
              >
                <Dropdown
                  className="rec-dow"
                  style={{ border: "none", outline: "none", width: "55%" }}
                  multiple
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "black",
                      border: "none",
                      height: "55px",
                      marginTop: "-0.5%",
                      textAlign: "center",
                      alignItems: "center",
                      color: "#455560",
                    }}
                    id="dropdown-basic"
                    className="rec-tog timeoff-dropdwons-padding"
                    multiple
                  >
                    {time}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      color: "black",
                      marginLeft: "4rem",
                      marginTop: "0rem",
                      height: "350px",
                      overflow: "auto",
                    }}
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ color: "black" }}
                      onClick={() => storetime("9:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          9:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ color: "black" }}
                      onClick={() => storetime("10:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          10:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("11:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          11:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("12:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          12:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("1:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          1:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("2:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          2:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("3:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          3:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("4:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          4:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime("5:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          5:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime("6:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          6:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime("7:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          7:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime("8:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          8:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div style={{ marginTop: "1.5%", marginLeft: "-5%" }}>
                <p className="timeoff__to">To</p>
              </div>

              <div
                className="rec-drop"
                style={{
                  marginLeft: "0%",
                  position: "relative",
                  left: "0%",
                  marginLeft: "5%",
                }}
              >
                <Dropdown
                  className="rec-dow"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "55%",
                    marginLeft: "-2%",
                  }}
                  multiple
                >
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: " #FAFAFA",
                      color: "black",
                      border: "none",
                      height: "55px",
                      marginTop: "-0.5%",
                      textAlign: "center",
                      alignItems: "center",
                      color: "#455560",
                    }}
                    id="dropdown-basic"
                    className="rec-tog timeoff-dropdwons-padding"
                    multiple
                  >
                    {time1}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      color: "black",
                      marginLeft: "4rem",
                      marginTop: "0rem",
                      height: "350px",
                      overflow: "auto",
                    }}
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      style={{ color: "black" }}
                      onClick={() => storetime1("9:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          9:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      style={{ color: "black" }}
                      onClick={() => storetime1("10:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          10:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("11:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          11:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("12:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          12:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("1:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          1:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("2:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          2:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("3:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          3:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("4:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          4:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => storetime1("5:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          5:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime1("6:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          6:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime1("7:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          7:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      style={{ color: "black" }}
                      onClick={() => settime1("8:00")}
                    >
                      <div style={{ display: "flex" }}>
                        <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                          8:00
                        </h6>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div
              className="timeoff__note"
              style={{
                marginLeft: "5%",
                marginTop: "3%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "26%" }}>
                <p className="timeoff__day_p" style={{ marginLeft: "-6%" }}>
                  Note
                </p>
              </div>
              <div style={{ width: "71%", marginTop: "-0.6%" }}>
                <input
                  type="text"
                  style={{ width: "100%", paddingLeft: "20px" }}
                  className="timeoff__input_1"
                />
              </div>
            </div>
            <div
              className="timeoff__note"
              style={{
                marginLeft: "3.8%",
                marginTop: "3%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "26%" }}>
                <p className="timeoff__day_p">Upload Attachment</p>
              </div>
              <div
                style={{
                  width: "70%",
                  marginTop: "-0.6%",
                  marginLeft: "0.8%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <label for="file-input" style={{
                  width: "100%",
                  marginTop: "-0.6%",
                  marginLeft: "0.8%",
                  display: "flex",
                  flexDirection: "row",
                }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      paddingLeft: "20px",
                      pointerEvents: "none",
                    }}
                    className="timeoff__input_1"
                  />

                  <img
                    src={timeoffupload}
                    style={{
                      width: "18px",
                      height: "18px",
                      position: "absolute",
                      marginTop: "0.8%",
                      marginLeft: "2%",
                    }}
                  />
                </label>
                <input type="file" id="file-input" style={{display:'none'}}/>
                <p className="timeoff__upload" style={{width:'-1%',marginTop:'0.6%'}}>Upload Attachment</p>
              </div>
            </div>
            <div
              className="timeoff__upload_1"
              style={{ marginLeft: "31%", marginTop: "1%" }}
            >
              <p className="timeoff__upload_p">
                Max file size : 5MB. File format : pdf, docx, png, jpeg, ...
              </p>
            </div>
            <div className="timeoff__address">
              <div
                className="timeoff__note"
                style={{
                  marginLeft: "5%",
                  marginTop: "3%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ width: "26%" }}>
                  <p className="timeoff__day_p" style={{ marginLeft: "-6%" }}>
                    Add Members
                  </p>
                </div>
                <div style={{ width: "71%", marginTop: "-0.6%" }}>
                  <input
                    type="text"
                    style={{ width: "100%", paddingLeft: "20px" }}
                    className="timeoff__input_1"
                  />
                </div>
              </div>
            </div>

            <div
              className="testing-btn"
              style={{ marginLeft: "27%", marginBottom: "5%" }}
            >
              <Link
                to="/Mytimeoff"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="testing-button">Confirm</button>
              </Link>
              <Link
                to="/MyTimeoff"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "7%",
                }}
              >
                <button className="testing-button"> Cancel </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeoffnewreq