import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from './images/Vector5.png'
import add from './images/Additional Information.png'
import {Link} from 'react-router-dom'
import './Employee3.css'
import dashblur from './images/dashblur.jpeg'
function NewProfile() {
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
    
    const datregex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!datregex.test(logindata.lastname)) {
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
    
    const datregex =/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-7]+.)+[A-Za-z]+$/;
    const regexpassword =
      /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const phoneregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (!userregex.test(logindata.name)) {
      setnameError("Please Enter valid Name");
      setmoveto(true);
    } else {
      setnameError("");
      setmoveto(false);
    }
    if (!datregex.test(logindata.lastname)) {
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

    const regex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const regexpassword =
      /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const phoneregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    const datregex =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
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
    if (!datregex.test(logindata.lastname)) {
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
    <div style={{ overflow: "hidden" }} className="upload-back1">
      <div>
        <div className="n">
          <div style={{ marginTop: "2%" }}>
            <p className="ne1">OFFBOARD EMPLOYEE</p>
            <hr />
          </div>
          <div className="ro" style={{ width: "100%" }}>
            <div>
              <label>Employee</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
                placeholder="Employee"
                type="Employee"
                className="b"
                style={{
                  marginLeft: "47%",
                  marginTop: "2%",
                  paddingLeft: "10%",
                }}
                name="name"
                onChange={handleChange}
              />
              <p>{nameError}</p>
            </div>
          </div>
          <div className="ro">
            <div>
              <label>Last Working Date</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
                placeholder="Date"
                type="Employee"
                className="b"
                style={{
                  marginLeft: "18%",
                  marginTop: "2%",
                  paddingLeft: "10%",
                }}
                name="lastname"
                onChange={handleChange1}
                
              />
              <p>{lastnameError}</p>
            </div>
          </div>
          <div className="ro">
            <div>
              <label>Reason of Leaving</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
                placeholder="Reason of Leaving"
                type="Employee"
                className="b"
                style={{
                  marginLeft: "18%",
                  marginTop: "2%",
                  paddingLeft: "10%",
                }}
                name="emailaddress"
                onChange={handleChange2}
              />
              <p>{emailError}</p>
            </div>
          </div>
          <div className="ro">
            <div>
              <label>
                <span style={{ margintop: "10%" }}>Manager Reassignment</span>
              </label>
            </div>
            <div>
              <input
                placeholder="Line Manager"
                type="Employee"
                className="b"
                style={{
                  marginLeft: "6%",
                  marginTop: "2%",
                  paddingLeft: "10%",
                }}
                name="number"
                onChange={handleChange3}
              />
              <p>{phoneError}</p>
            </div>
          </div>
          <div className="ro">
            <div>
              <label>Note</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <textarea
                id="freeform"
                name="freeform"
                className="bas-txt-upload"
                style={{ marginLeft: "50%", height: "20vh", width: "17.5em" }}
              ></textarea>
            </div>
          </div>
          <div className="w">
            <span>
              Employee’s account is auto deactivated on last working date.
              <br />
              Offboarding will delete all tasks, progress, information and files
              of an IN PROGRESS onboarding checklist (if any).
            </span>
          </div>
          <div
            className="re"
            style={{ marginLeft: "17%", paddingBottom: "5%" }}
          ><Link to="/Employee1" style={{ textDecoration: "none", color: "white" }}>
            <button
              className="rej"
              style={{ borderRadius: "10px", border: "none" }}
            >
              
                Save
             
            </button>
            </Link>
            <Link to="/Employee1" style={{ textDecoration: "none", color: "white" }}>
            <button
              className="rej"
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

export default NewProfile