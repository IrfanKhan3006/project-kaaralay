import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from "./images/Vector5.png";
import add from "./images/Additional Information.png";
import { Link } from "react-router-dom";
import "./Newprofile.css";
import PhoneInput from "react-phone-number-input";

function NewProfile() {

   const [data, setdata] = useState("select Job Title");
   const [data1, setdata1] = useState("select Job Title");
   const [data2, setdata2] = useState("select Job Title");
   const [data3, setdata3] = useState("select Job Title");
   const [data4, setdata4] = useState("select Job Title");
   const [box,setbox] = useState(false);
   const [box1, setbox1] = useState(false);
   const [box2, setbox2] = useState(false);
   const [box3, setbox3] = useState(false);
   const [box4, setbox4] = useState(false);
   const [box5,setbox5] = useState(false);
   const storedata = (h) => {
    setbox(true);
     setdata(h);
   };
   const storedata1 = (h) => {
     setbox1(true);
     setdata1(h);
   };

   const storedata2 = (h) => {
     setbox2(true);
     setdata2(h);
   };

   const storedata3 = (h) => {
     setbox3(true);
     setdata3(h);
   };

   const storedata4 = (h) => {
     setbox4(true);
     setdata4(h);
   };
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
          const phoneregex =
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

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

      const handleChange1 = (e) => {
        if (
          logindata.name == "sklfjlsk dfjlsdk" ||
          logindata.emailaddress == "xyz@gmail.com"
        ) {
        } else {
            const regexlastname =
              /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
          const userregex =
            /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

          const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
          // const regexlastname =
          //   /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
          // const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

          if (!userregex.test(logindata.name.trim())) {
            setnameError("Please Enter valid Name");
            setmoveto2(false);
          } else {
            setnameError("");
            setmoveto2(true);
          }
           if (!regexlastname.test(logindata.lastname)) {
             setlastnameError("please enter valid lastname");
             setmoveto1(false);
           } else {
             setlastnameError("");
             setmoveto1(true);
           }
          if (!regex.test(logindata.emailaddress)) {
            setemailError("Please Enter Valid Email Address");
            setmoveto(false);
          } else {
            setemailError("");
            setmoveto(true);
          }
          console.log(logindata.emailaddress);
        }
      };
      useEffect(handleChange1, [logindata]);
      const handleChange2 = (e) => {
        if (
          logindata.name == "sklfjls kdfjlsdk" ||
          logindata.emailaddress == "xyz@gmail.com" ||
          logindata.lastname == "asdfasdf"
        ) {
        } else {
          const userregex =
            /^[a-zA-Z0-9]([. -](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

          const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
          const regexlastname =
            /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
          const phoneregex =
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

          if (!userregex.test(logindata.name)) {
            setnameError("Please Enter valid Name");
            setmoveto(false);
          } else {
            if (logindata.name.length < 6) {
              setnameError("Please Enter valid Name");
              setmoveto(false);
            } else {
              setnameError("");
              setmoveto(true);
            }
          }
           if (!regexlastname.test(logindata.lastname)) {
             setlastnameError("please enter valid lastname");
             setmoveto1(false);
           } else {
             setlastnameError("");
             setmoveto1(true);
           }
          if (!regex.test(logindata.emailaddress)) {
            setemailError("Please Enter Valid Email Address");
            setmoveto2(false);
          } else {
            setemailError("");
            setmoveto2(true);
          }
          
        }
      };
      useEffect(handleChange2, [logindata]);
      const handleChange3 = (e) => {
        if (
          logindata.name == "sklfjlskdfjlsdk" ||
          logindata.emailaddress == "xyz@gmail.com" ||
          logindata.phonenumber == "123456789" ||
          logindata.lastname == "asdfasdf"
        ) {
        } else {
          console.log(logindata);
          const userregex =
            /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

          const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
          const regexlastname =
            /^[a-zA-Z0-9]([._ -](?![._ -])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
          const phoneregex =
            /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

          if (!phoneregex.test(logindata.phonenumber)) {
            setphoneError("Please Enter valid PhoneNumber");
            setmoveto3(false);
          } else {
            setphoneError("");
            setmoveto3(true);
          }
          if (!userregex.test(logindata.name)) {
            setnameError("Please Enter valid Name");
            setmoveto2(false);
          } else {
            setnameError("");
            setmoveto2(true);
          }
          if (!regex.test(logindata.emailaddress)) {
            setemailError("Please Enter Valid Email Address");
            setmoveto(false);
          } else {
            setemailError("");
            setmoveto(true);
          }
          if(!regexlastname.test(logindata.lastname)){
            setlastnameError("please enter valid lastname");
            setmoveto1(false);
          }
          else{
            setlastnameError("");
            setmoveto1(true);
          }
        }
      };
      useEffect(handleChange3, [logindata]);
      const checking = () => {
        moveto4 ? setmoveto4(false) : setmoveto4(true);
        console.log(moveto4);
      };
      const [lastnameShown, setlastnameShown] = useState(false);
      const togglelastnameVisiblity = () => {
        setlastnameShown(lastnameShown ? false : true);
      };
  const [sdate, setDate] = useState();
   const settingdetails = () => {
    setbox5(true);
   }


  return (
    <div className="Uploadim">
      <div className="newpro-1">
        <div className="newpro-2">
          <p>New Profile</p>
          <div className="newpro-3"></div>
        </div>
        <div className="newpro-4">
          <p>Basic Information</p>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  FIRST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                className="bas-form-enter-1"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
                name="name"
                onChange={(e) => {
                  setlogindata({ ...logindata, name: e.target.value });
                }}
              />
              <p>{nameError}</p>
            </div>

            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  LAST NAME
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                className="bas-form-enter-1"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
                name="lastname"
                onChange={(e) => {
                  setlogindata({ ...logindata, lastname: e.target.value });
                }}
              />
              <p>{lastnameError}</p>
            </div>
          </div>

          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Contact Email
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="bas-form-enter-1"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
                name="emailaddress"
                onChange={(e) => {
                  setlogindata({ ...logindata, emailaddress: e.target.value });
                }}
              />
              <p>{emailError}</p>
            </div>

            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Contact Number
                </label>
                <span className="required-sym"></span>
              </div>
              <PhoneInput
                international
                defaultCountry="RU"
                className="phoneInput_1"
                style={{ marginTop: "2%", paddingLeft: "5%", width: "28rem" }}
                onChange={setValue}
              />
              <p>{phoneError}</p>
            </div>
          </div>

          <div className="mt-6" style={{ marginLeft: "2%", marginTop: "0%" }}>
            <Form.Check aria-label="option 1" onClick={settingdetails}/>
            <p style={{ marginLeft: "1%", fontSize: "16px" }}>
              send email invitation
            </p>
          </div>
          <p>Job Information</p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  position: "relative",

                  width: "100%",
                  fontSize: "14px",
                }}
              >
                <label
                  for="exampleInputEmail1"
                  className="jaabtitle"
                  style={{ opacity: "1" }}
                >
                  Join Date
                </label>
                <span className="required-sym"></span>
              </div>
              <div
                className="dropdown---1"
                style={{ display: "flex", width: "450px" }}
              >
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    opacity: "0.5",
                    paddingRight: "1rem",
                    paddingLeft: "20px",
                  }}
                  className="rec-tog-date bas-form-enter-1"
                  required
                />
              </div>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginLeft: "7%",
              }}
            >
              <div style={{ display: "flex", marginTop: "-1%" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Office
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle profile--new"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "470px",
                      marginTop: "1.8%",
                      marginLeft: "-2.5%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "20rem" }}
                  >
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata("Action")}
                    >
                      Action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata("Another action")}
                    >
                      Another action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata("Something else here")}
                    >
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%", width: "100%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Job Type
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle profile--new"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "470px",
                      marginTop: "1.8%",
                      marginLeft: "-2.5%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data1}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "20rem" }}
                  >
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata1("Action")}
                    >
                      Action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata1("Another action")}
                    >
                      Another action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata1("Something else here")}
                    >
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Employement Type
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle profile--new"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "470px",
                      marginTop: "1.8%",
                      marginLeft: "-2.5%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data2}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "20rem" }}
                  >
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata2("Action")}
                    >
                      Action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata2("Another action")}
                    >
                      Another action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata2("Something else here")}
                    >
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bas-data"
            style={{ display: "flex", marginTop: "1%", width: "100%" }}
          >
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Department
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle profile--new"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "470px",
                      marginTop: "1.8%",
                      marginLeft: "-2.5%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data3}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "20rem" }}
                  >
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata3("Action")}
                    >
                      Action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata3("Another action")}
                    >
                      Another action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata3("Something else here")}
                    >
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="basi-jobtitle">
                  Line Manager
                </label>
                <span className="required-sym"></span>
              </div>
              <div>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle profile--new"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "470px",
                      marginTop: "1.8%",
                      marginLeft: "-2.5%",
                      fontFamily: "Inter",
                      opacity: "0.5",
                    }}
                  >
                    {data4}
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                    style={{ marginLeft: "20rem" }}
                  >
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata4("Action")}
                    >
                      Action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata4("Another action")}
                    >
                      Another action
                    </button>
                    <button
                      class="dropdown-item"
                      type="button"
                      onClick={() => storedata4("Something else here")}
                    >
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newpro-p">
            {" "}
            <p>Additional Information</p>
          </div>
          <p className="newpro-pp">Current CTC</p>
          <div className="textarea-pp">
            <p className="tst" style={{ opacity: "0.5" }}>
              Current CTC
            </p>
          </div>
          <div className="rej-btns" style={{ marginLeft: "25%" }}>
            {moveto && moveto1 && moveto2 && box && box1 && box2 && box3 && box4 && box5 ? (
              <Link
                to="/Recrutimentmain"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="reject-btn" style={{ borderRadius: "10px" }}>
                  Create
                </button>
              </Link>
            ) : (
              <Link
               onClick={() => alert("Please Enter the valid details")}
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className="reject-btn" style={{ borderRadius: "10px" }}>
                  Create
                </button>
              </Link>
            )}
            <Link to="/Add" style={{ textDecoration: "none", color: "white" }}>
              <button
                className="reject-btn"
                style={{ borderRadius: "10px", marginLeft: "5%" }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProfile;
