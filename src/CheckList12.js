import React,{useState,useEffect} from 'react'
import RichTextEditor from "./shared/RichTextEditor";
import {Link} from 'react-router-dom';
import './CheckList12.css'

function CheckList12() {
  /* validations*/
  const initialValues = {
    name: "",
    emailaddress: "",
    number: "",
    lastname: "",
  };
const [value, getValue] = useState("");
  const [logindata, setlogindata] = useState(initialValues);
  const [nameError, setnameError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [emailError, setemailError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [moveto2, setmoveto2] = useState(false);
  const [moveto3, setmoveto3] = useState(false);
  const [data, setdata] = useState("select Job Title");
  const [data1, setdata1] = useState("select Job Title");
  const [data2, setdata2] = useState("select Job Title");
  const [data3, setdata3] = useState("select Job Title");
  const [data4, setdata4] = useState("select Job Title");
  const storedata = (h) => {
    setdata(h);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
      setmoveto1(false);
    } else {
      setlastnameError("");
      setmoveto1(true);
    }
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
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
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const userregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!phoneregex.test(logindata.number)) {
      setphoneError("Please Enter valid PhoneNumber");
      setmoveto3(false);
    } else {
      setphoneError("");
      setmoveto3(true);
    }
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!userregex.test(logindata.lastname)) {
      setlastnameError("Please Enter Valid last name");
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
  };

  /* validations complete*/
  return (
    <div className="upload-back">
      <div
        className="checklist12_1"
        style={{ marginLeft: "23%", marginTop: "6%", marginBottom: "3%" }}
      >
        <div className="checklist12_maindata">
          <div
            className="holiday_head"
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <p>Edit Task</p>
            <div
              className="holiday_line"
              style={{ width: "90%", marginLeft: "5%" }}
            ></div>
          </div>

          <div className="checklist12_data">
            <div className="checklist12_data_1">
              <div
                class="form-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "4.5%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <label for="exampleInputEmail1" className="basi-jobtitle">
                    Task Name
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%", marginLeft: "0.5%" }}
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Task Name"
                  className="bas-form-enter-1"
                  style={{
                    marginTop: "1%",
                    paddingLeft: "3%",
                    width: "80%",
                    borderRadius: "5px",
                    border: "1px solid #EEEEEE",
                    background: "#FAFAFA",
                  }}
                  name="name"
                  onChange={handleChange}
                />
                <p>{nameError}</p>
              </div>

              <div
                class="form-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "4.5%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <label for="exampleInputEmail1" className="basi-jobtitle">
                    Task Type
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%", marginLeft: "0.5%" }}
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=" Task Type"
                  className="bas-form-enter-1"
                  style={{
                    marginTop: "1%",
                    paddingLeft: "3%",
                    width: "80%",
                    borderRadius: "5px",
                    border: "1px solid #EEEEEE",
                    background: "#FAFAFA",
                  }}
                  name="name"
                  onChange={handleChange}
                />
                <p>{nameError}</p>
              </div>
              <div
                class="form-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "4.5%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <label for="exampleInputEmail1" className="basi-jobtitle">
                    Assignee
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%", marginLeft: "0.5%" }}
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Assignee"
                  className="bas-form-enter-1"
                  style={{
                    marginTop: "1%",
                    paddingLeft: "3%",
                    width: "80%",
                    borderRadius: "5px",
                    border: "1px solid #EEEEEE",
                    background: "#FAFAFA",
                  }}
                  name="name"
                  onChange={handleChange}
                />
                <p>{nameError}</p>
              </div>
              <div
                class="form-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "4.5%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <label for="exampleInputEmail1" className="basi-jobtitle">
                    Due date
                  </label>
                  <span
                    className="required-sym"
                    style={{ marginTop: "1%", marginLeft: "0.5%" }}
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="June 8, 1992"
                  className="bas-form-enter-1"
                  style={{
                    marginTop: "1%",
                    paddingLeft: "3%",
                    width: "20%",
                    borderRadius: "5px",
                    border: "1px solid #EEEEEE",
                    background: "#FAFAFA",
                     }}
                  name="name"
                  onChange={handleChange}
                />
                <p>{nameError}</p>
              </div>

              <div
                className="txt-data"
                style={{ marginLeft: "4%", width: "90%" }}
              >
                <RichTextEditor initialValue="" getValue={getValue} />
              </div>
              <div
                className="testing-btn checklist__btn"
                style={{
                  marginLeft: "8%",
                  marginBottom: "3%",
                  marginTop: "3%",
                  marginLeft: "22%",
                }}
              >
                <Link
                  to="/Mysettings1"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "40%",
                  }}
                >
                  <button className="testing-button">Confirm</button>
                </Link>
                <Link
                  to="/Mysettings"
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

export default CheckList12