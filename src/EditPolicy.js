import React,{useState,useEffect  } from 'react';
import './EditPolicy.css'
import {Link} from 'react-router-dom';
import ellipse49 from './images/Ellipse 49.png';
import ellipse50 from './images/Ellipse 50.png'


function EditPolicy() {
 const [boots, setboots] = useState(false);
 const [image2, setimage2] = useState(ellipse50);
  const initialValues = {
    name: "sklfjlskdfjlsdk",
    emailaddress: "xyz@gmail.com",
    lastname: "asdfasdf",
    phonenumber: "123456789",
  };
  const [value, setValue] = useState();
  const [logindata, setlogindata] = useState(initialValues);

  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(true);
  const [moveto4, setmoveto4] = useState(false);

  const [box, setbox] = useState(false);
  const [box1, setbox1] = useState(false);
  const [box2, setbox2] = useState(false);
  const [box3, setbox3] = useState(false);
  const [box4, setbox4] = useState(false);
  const [box5, setbox5] = useState(false);

  const errorshows = () => {};
  const handleChange = () => {
    if (logindata.name == "sklfjlsk dfjlsdk") {
      setnameError("");
    } else {
      const userregex =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

      const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      const regexlastname =
        /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
      const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!userregex.test(logindata.name)) {
        setnameError("Please Enter valid Name");
      } else {
        setnameError("");
        setmoveto2(true);
      }
    }
  };
  const setborder = () => {
    let k = document.getElementsByClassName("phoneInputInput");
    console.log(k);
    k.Style.border = "none";
  };

  useEffect(handleChange, [logindata]);

  const changes1 = (e) => {
    console.log(e);
    // {
    //   boots ? setimage2(ellipse49) : setimage2(ellipse50);
    // }
    // {
    //   boots ? setboots(false) : setboots(true);
    // }
    //  {
    //    boots1 ? setimage21(ellipse49) : setimage21(ellipse50);
    //  }

    //  {
    //    boots1 ? setboots1(false) : setboots1(true);
    //  }
    //  {
    //    boots12 ? setimage22(ellipse49) : setimage22(ellipse50);
    //  }
    //  {
    //    boots12 ? setboots12(false) : setboots12(true);
    //  }
    if(e=='1'){
      setimage2(ellipse49) 
      setimage21(ellipse50);
      setimage22(ellipse50);
    }
     if (e == "2") {
       setimage2(ellipse50);
       setimage21(ellipse49);
       setimage22(ellipse50);
     }
      if (e == "3") {
        setimage2(ellipse50);
        setimage21(ellipse50);
        setimage22(ellipse49);
      }
  };
  const [boots1, setboots1] = useState(false);
  const [image21, setimage21] = useState(ellipse50);

  const changes11 = () => {
    
   
    

  };
  const [boots12, setboots12] = useState(false);
  const [image22, setimage22] = useState(ellipse50);

  const changes22 = () => {
   
    
   
  };

       const [data1, setdata1] = useState("Upon join Date");
        const [data2, setdata2] = useState("0 Day Per Year");
        const [data, setdata] = useState("1 Day Per Year");
       const [time, settime] = useState("9:00");
       const [year,setyear] = useState("2031");
       const [month,setmonth] = useState("Dec");
       const storemonth = (h) => {
                    setmonth(h);
       }
       const storeyear = (h) => {
        setyear(h);
       }
       const storetime = (h) => {
         console.log("clciklsdjf");
         settime(h);
         console.log(time);
       };
       const [time1, settime1] = useState("9:00");
       const storetime1 = (h) => {
         console.log("clciklsdjf");
         settime1(h);
         console.log(time);
       };
       const storedata1 = (h) => {
         setdata1(h);
       };
        const storedata = (h) => {
          setdata(h);
        };
        const storedata2 = (h) => {
          setdata2(h);
        };
       const date = new Date();
       const futureDate = date.getDate() + 3;
       date.setDate(futureDate);
       const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden" }}>
      <div
        className="upload-back"
        style={{ overFlow: "hidden", height: "max-content" }}
      >
        <div
          className="holiday_main"
          style={{
            width: "65%",
            height: "max-content",
            marginLeft: "18%",
            marginTop: "5%",
            marginBottom: "10%",
          }}
        >
          <div className="holiday_head">
            <p>Edit Policy</p>
            <div
              className="holiday_line"
              style={{ width: "90%", marginLeft: "5%" }}
            ></div>
          </div>
          <div className="holiday___data">
            <div style={{ display: "flex", marginLeft: "5%", marginTop: "2%" }}>
              <label
                for="exampleInputEmail1"
                className="basi-jobtitle"
                style={{ fontFamily: "Inter" }}
              >
                Type
              </label>
              <span className="required-sym" style={{ marginTop: "1%" }}></span>
            </div>
            <div>
              <input
                type="text"
                style={{
                  width: "91%",
                  borderRadius: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                  backgroundColor: "#f9f9f9",
                }}
                placeholder="Engagement"
                className="timeoff__input_1"
                name="name"
                onChange={(e) => {
                  setlogindata({ ...logindata, name: e.target.value });
                }}
              />
            </div>
            <p>{nameError}</p>
            <div style={{ marginTop: "1%" }}>
              <input
                type="text"
                style={{
                  width: "91%",
                  borderRadius: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                  backgroundColor: "#f9f9f9",
                }}
                placeholder=""
                className="timeoff__input_1"
              />
            </div>
            <div style={{ marginTop: "1%" }}>
              <textarea
                style={{
                  width: "91%",
                  borderRadius: "10px",
                  height: "80px",
                  paddingLeft: "10px",
                  backgroundColor: "#f9f9f9",
                }}
                placeholder="Description (optional)"
                className="textarea__editpolicy"
              ></textarea>
            </div>
            <div
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "-83%",
                position: "relative",
                marginTop: "1%",
              }}
            >
              <p className="edit__p">Accrual</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "4.3%",
                }}
              >
                <div
                  style={{ display: "flex", marginLeft: "2%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    Assign Date
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                </div>
                <div>
                  <div style={{ width: "100%", marginLeft: "1.5%" }}>
                    <div
                      class="dropdown policy__dropdown"
                      style={{ width: "100%", marginTop: "2%" }}
                    >
                      <button
                        class="btn dropdown-toggle profile--new "
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          width: "15rem",
                          marginTop: "1%",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {data1}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "14rem" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata1("Upon Join Date")}
                        >
                          Upon Join Date
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() =>
                            storedata1(" After Probition End Date")
                          }
                        >
                          After Probition End Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30%",
                }}
              >
                <div
                  style={{ display: "flex", marginLeft: "2%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    Entitlement
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                </div>
                <div>
                  <div style={{ width: "100%", marginLeft: "1.5%" }}>
                    <div
                      class="dropdown policy__dropdown"
                      style={{ width: "100%", marginTop: "1%" }}
                    >
                      <button
                        class="btn dropdown-toggle profile--new"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          marginTop: "1%",
                          width: "15rem",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {data}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "14rem" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata("Upon Join Date")}
                        >
                          Upon Join Date
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata(" After Probition End Date")}
                        >
                          After Probition End Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "-82%",
                position: "relative",
                marginTop: "1%",
              }}
            >
              <p
                className="edit__p"
                style={{ fontSize: "16px", marginTop: "2%" }}
              >
                Carry Over
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "4.3%",
                }}
              >
                <div
                  style={{ display: "flex", marginLeft: "2%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    Maximum Carry Over
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                </div>
                <div>
                  <div style={{ width: "100%", marginLeft: "1.5%" }}>
                    <div
                      class="dropdown policy__dropdown"
                      style={{ width: "100%", marginTop: "1%" }}
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
                          width: "15rem",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {data2}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "14rem" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata2("Upon Join Date")}
                        >
                          Upon Join Date
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() =>
                            storedata2(" After Probition End Date")
                          }
                        >
                          After Probition End Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30%",
                }}
              >
                <div
                  style={{ display: "flex", marginLeft: "2%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    Carry Over Expiration
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%" }}
                  ></span>
                </div>
                <div>
                  <div
                    style={{
                      width: "100%",
                      marginLeft: "1.5%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      class="dropdown policy__dropdown"
                      style={{ width: "100%", marginTop: "1%" }}
                    >
                      <button
                        class="btn dropdown-toggle profile--new"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          marginTop: "1%",
                          width: "7rem",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {month}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "7rem", overFlow: "auto" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Jan")}
                        >
                          Jan
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Feb")}
                        >
                          Feb
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Mar")}
                        >
                          Mar
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Apr")}
                        >
                          Apr
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("May")}
                        >
                          May
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("June")}
                        >
                          June
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("July")}
                        >
                          July
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Aug")}
                        >
                          Aug
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Sep")}
                        >
                          Sep
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Oct")}
                        >
                          Oct
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Nov")}
                        >
                          Nov
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storemonth("Dec")}
                        >
                          Dec
                        </button>
                      </div>
                    </div>
                    <div
                      class="dropdown policy__dropdown"
                      style={{
                        width: "100%",
                        marginTop: "1%",
                        marginLeft: "15%",
                      }}
                    >
                      <button
                        class="btn dropdown-toggle profile--new"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          marginTop: "1%",
                          width: "9rem",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {year}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "7rem" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata("Upon Join Date")}
                        >
                          Upon Join Date
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata(" After Probition End Date")}
                        >
                          After Probition End Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "-77%",
                position: "relative",
                marginTop: "1%",
              }}
            >
              <p
                className="edit__p"
                style={{ fontSize: "16px", marginTop: "2%" }}
              >
                Duration Allowed
              </p>
            </div>
            <div
              className="policy__box"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div
                className="policy_img"
                style={{ marginLeft: "3%", marginTop: "3%" }}
              >
                <img
                  src={image2}
                  name="1"
                  onClick={(e) => changes1(e.target.name)}
                />
              </div>
              <div
                className="policy__img_1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <p
                    className="policy__p_2"
                    style={{ marginLeft: "3%", marginTop: "3%" }}
                  >
                    Hourly
                  </p>
                </div>
                <div>
                  <p
                    className="policy__p_1"
                    style={{ marginLeft: "3%", marginTop: "0.5%" }}
                  >
                    Employee can book time off by hours which will be calculated
                    to days based on standard working hours.
                    <br /> Ex: Standard working hours = 8 hours/day, 3 hours off
                    = 0.375 days
                  </p>
                </div>
              </div>
            </div>
            <div
              className="policy__box"
              style={{ display: "flex", flexDirection: "row", marginTop: "2%" }}
            >
              <div
                className="policy_img"
                style={{ marginLeft: "3%", marginTop: "3%" }}
              >
                <img
                  src={image21}
                  name="2"
                  onClick={(e) => changes1(e.target.name)}
                />
              </div>
              <div
                className="policy__img_1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <p
                    className="policy__p_2"
                    style={{ marginLeft: "3%", marginTop: "3%" }}
                  >
                    Half Day
                  </p>
                </div>
                <div>
                  <p
                    className="policy__p_1"
                    style={{ marginLeft: "3%", marginTop: "0.5%" }}
                  >
                    Employee can book time off by 1st Half day or 2nd Half day,
                    both are calculated as 0.5 days regardless of standard
                    working hours.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="policy__box"
              style={{ display: "flex", flexDirection: "row", marginTop: "2%" }}
            >
              <div
                className="policy_img"
                style={{ marginLeft: "3%", marginTop: "3%" }}
              >
                <img
                  src={image22}
                  name="3"
                  onClick={(e) => changes1(e.target.name)}
                />
              </div>
              <div
                className="policy__img_1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div>
                  <p
                    className="policy__p_2"
                    style={{ marginLeft: "3%", marginTop: "3%" }}
                  >
                    Morning / Afternoon
                  </p>
                </div>
                <div>
                  <p
                    className="policy__p_1"
                    style={{ marginLeft: "3%", marginTop: "0.5%" }}
                  >
                    Employee can book time off by hours which will be calculated
                    to days based on standard working hours.
                    <br /> Ex: Standard working hours = 8 hours/day, 3 hours off
                    = 0.375 days
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "-72%",
                position: "relative",
                marginTop: "1%",
              }}
            >
              <p className="edit__p">Advanced Options</p>
            </div>
            <div style={{ display: "flex", marginLeft: "5%", marginTop: "2%" }}>
              <label
                for="exampleInputEmail1"
                className="basi-jobtitle"
                style={{ fontFamily: "Inter", fontWeight: "500" }}
              >
                Waiting Period
              </label>
              <span className="required-sym" style={{ marginTop: "1%" }}></span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "4.3%",
              }}
            >
              <div>
                <div
                  style={{
                    width: "100%",
                    marginLeft: "1.5%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    class="dropdown policy__dropdown"
                    style={{ width: "100%", marginTop: "1%" }}
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
                        width: "7rem",
                        paddingLeft: "30px",
                        fontFamily: "Inter",
                        opacity: "0.5",
                      }}
                    >
                      {month}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                      style={{ marginLeft: "7rem", overFlow: "auto" }}
                    >
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Jan")}
                      >
                        Jan
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Feb")}
                      >
                        Feb
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Mar")}
                      >
                        Mar
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Apr")}
                      >
                        Apr
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("May")}
                      >
                        May
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("June")}
                      >
                        June
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("July")}
                      >
                        July
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Aug")}
                      >
                        Aug
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Sep")}
                      >
                        Sep
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Oct")}
                      >
                        Oct
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Nov")}
                      >
                        Nov
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storemonth("Dec")}
                      >
                        Dec
                      </button>
                    </div>
                  </div>
                  <div
                    class="dropdown policy__dropdown"
                    style={{
                      width: "100%",
                      marginTop: "1%",
                      marginLeft: "5%",
                    }}
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
                        width: "9rem",
                        paddingLeft: "30px",
                        fontFamily: "Inter",
                        opacity: "0.5",
                      }}
                    >
                      {year}
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                      style={{ marginLeft: "7rem" }}
                    >
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storedata("Upon Join Date")}
                      >
                        Upon Join Date
                      </button>
                      <button
                        class="dropdown-item timeoff--1"
                        type="button"
                        onClick={() => storedata(" After Probition End Date")}
                      >
                        After Probition End Date
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginLeft: "4%",
                      marginTop: "0.2%",
                    }}
                  >
                    <div
                      class="dropdown policy__dropdown"
                      style={{ width: "100%", marginTop: "2%" }}
                    >
                      <button
                        class="btn dropdown-toggle profile--new"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          marginTop: "1%",
                          width: "15rem",
                          paddingLeft: "30px",
                          fontFamily: "Inter",
                          opacity: "0.5",
                        }}
                      >
                        {data1}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                        style={{ marginLeft: "14rem" }}
                      >
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() => storedata1("Upon Join Date")}
                        >
                          Upon Join Date
                        </button>
                        <button
                          class="dropdown-item timeoff--1"
                          type="button"
                          onClick={() =>
                            storedata1(" After Probition End Date")
                          }
                        >
                          After Probition End Date
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="testing-btn"
                style={{ marginLeft: "0%", marginBottom: "5%" }}
              >
                <Link
                  to="/Mytimeoff8"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button className="testing-button">Save</button>
                </Link>
                <Link
                  to="/Mytimeoff8"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "5%",
                  }}
                >
                  <button className="testing-button"> Cancel </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPolicy