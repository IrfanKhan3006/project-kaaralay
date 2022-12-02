import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from './images/Vector5.png'
import add from './images/Additional Information.png'
import {Link} from 'react-router-dom'
import './Employee2.css'
import dashblur from './images/dashblur.jpeg'
function Employee() {
  const [sdate, setDate] = useState();
  const [back, setback] = useState("none");
  /* validations*/
  const initialValues = {
    name: "",
    emailaddress: "",
    number: "",
    lastname: "",
  };

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
    <div style={{ overflow: "hidden" }} className="upload-back2">
      <div>
        <div className="newpr">
          <div className="newpr-2">
            <p>New Profile</p>
            <div className="newpr-3"></div>
          </div>
          <div
            className="bas-dataaa"
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
                <label for="exampleInputEmail1" className="ba">
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
                className="bas"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
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
              }}
            >
              <div style={{ display: "flex" }}>
                <label for="exampleInputEmail1" className="ba">
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
                className="bas"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
                name="lastname"
                onChange={handleChange2}
              />
              <p>{lastnameError}</p>
            </div>
          
          </div>
          <div
            className="bas-dataaa"
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
                <label for="exampleInputEmail1" className="ba">
                  EMAIL ADDRESS
                </label>
                <span className="required-sym"></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                className="bas"
                style={{ marginTop: "2%", paddingLeft: "5%" }}
                name="emailaddress"
                onChange={handleChange2}
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
                <label for="exampleInputEmail1" className="ba">
                  JOIN DATE
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Number"
                className="bas"
                style={{ marginTop: "5%", paddingLeft: "5%" }}
              />
            </div>
          </div>
          <div className="mt-610" style={{ marginLeft: "8%", marginTop: "0%" }}>
            <Form.Check aria-label="option 1" style={{marginTop:"-0.2rem"}} />
            <p style={{ marginLeft: "1%", fontSize: "16px" }}>
              Send Email Invitation
            </p>
          </div>
          <div className="rej-btnsaa" style={{ marginLeft: "25%", paddingBottom: "5%"}}>
            
          <Link
                to="/Employee1"
                style={{ textDecoration: "none", color: "white" }}
              ><button className="reject-btnaa" style={{ borderRadius: "10px" , border:"none" }}>
                Save
            </button>
            </Link>
            <Link
                to="/Employee1"
                style={{ textDecoration: "none", color: "white" }}
              >
            <button
              className="reject-btnaa"
              style={{ borderRadius: "10px", marginLeft: "5%", border: "none" }}
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

export default Employee