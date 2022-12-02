import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Document2.css";
import ellipse49 from './images/Ellipse 49.png'
import { Dropdown } from "react-bootstrap";
import ellipse50 from './images/Ellipse 50.png'

function Offercandidate() {
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);
  /*validations*/
  const initialValues = {
    offer: "",
    subject: "",
    to: "",
    textArea: "",
  };
  const [value, setValue] = useState("");
  const [data0, setdata0] = useState("All Jobs Titles");
  const [subjectShown, setsubjectShown] = useState(false);
  const [logindata, setlogindata] = useState(initialValues);
  const [moveto4, setmoveto4] = useState(false);
  const [toError, settoError] = useState("");
  const [textarea, setTextArea] = useState("");
  const [offerError, setofferError] = useState("");
  const [subjectError, setsubjectError] = useState("");
  const [moveto, setmoveto] = useState(false);
  const [moveto1, setmoveto1] = useState(false);
  const [checkboxerror, setcheckboxerror] = useState("");
  const [moveto2, setmoveto2] = useState(false);
  const getValue = (value) => {
    setValue(value);
  };
  const [moveto3, setmoveto3] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
  };
  const [boots, setboots] = useState(false);
  const [image2, setimage2] = useState(ellipse50);
 
   const changes1 = () => {
     {
       boots ? setimage2(ellipse49) : setimage2(ellipse50);
     }
     {
       boots ? setboots(false) : setboots(true);
     }
   };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.subject)) {
      setsubjectError("Please Enter the valid Offer");
      setmoveto1(false);
    } else {
      setsubjectError("");
      setmoveto1(true);
    }
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.subject)) {
      setsubjectError("Please Enter the valid Offer");
      setmoveto1(false);
    } else {
      setsubjectError("");
      setmoveto1(true);
    }

    if (!regex.test(logindata.to)) {
      settoError("Please Enter the valid Field");
      setmoveto2(false);
    } else {
      settoError("");
      setmoveto2(true);
    }
  };
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
    console.log(logindata);
    const regex = /^[a-zA-Z ]*$/;
    const regexpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!regex.test(logindata.offer)) {
      setofferError("Please Enter the Offer");
      setmoveto(false);
    } else {
      setofferError("");
      setmoveto(true);
    }
    if (!regex.test(logindata.subject)) {
      setsubjectError("Please Enter the valid Offer");
      setmoveto1(false);
    } else {
      setsubjectError("");
      setmoveto1(true);
    }

    if (!regex.test(logindata.to)) {
      settoError("Please Enter the valid Field");
      setmoveto2(false);
    } else {
      settoError("");
      setmoveto2(true);
    }
    if (!regex.test(logindata.textArea)) {
      setTextArea("Please Enter the valid Field");
      setmoveto3(false);
    } else {
      if (logindata.textArea.length >= 150) {
        setTextArea("");
        setmoveto3(true);
      } else {
        setTextArea("Please Enter the valid Field");
        setmoveto(false);
      }
    }
  };

  /*validations*/
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
    }
  };
  const changeStyles = (e) => {
    if (e.target.id == "bold") {
      var k = document.getElementById("freeform");
      if (k.style.fontWeight == "bold") {
        k.style.fontWeight = "none";
        console.log(k.style.fontWeight);
      } else {
        console.log("ues");
        k.style.fontWeight = e.target.id;
      }
    }
    if (e.target.id == "italic") {
      var k = document.getElementById("freeform");
      if (k.style.fontStyle == "italic") k.style.fontStyle = "none";
      else {
        console.log("ues");
        k.style.fontStyle = e.target.id;
      }
    }
    if (e.target.id == "underline") {
      var k = document.getElementById("freeform");
      if (k.style.textDecoration == "underline")
        k.style.textDecoration = "none";
      else {
        console.log("ues");
        k.style.textDecoration = e.target.id;
      }
    }
  };
  const checking = () => {
    moveto4 ? setmoveto4(false) : setmoveto4(true);
    console.log(moveto4);
  };
  return (
    <div className="Document2-1">
      <div className="Document2-2">
        <div className="Document2-3">
          <div className="Document2-4">
            <p className="Document2-5">Share With</p>
            <hr style={{width:"90%",marginLeft:"2rem"}}/>
          </div>
          <div style={{marginLeft:"2rem"}}>
          <img src={image2} onClick={changes1} className="Document2-6" />
          <span className="Document2-7">Everyone</span>
          </div>
          <div style={{display:"flex",flexDirection:"row", width:"100%"}}>
          <div style={{marginLeft:"2rem", marginTop:"5%",display:'flex',flexDirection:'row',width:'40%'}}>
      <div >  <img src={image2} onClick={changes1} className="Document2-6"  /></div>  
      <div>   <span className="Document2-7" style={{marginLeft:"0%"}}>Departments</span></div> 
          </div>
          <div style={{width:'100%'}}>
          <Dropdown style={{ marginTop: "6%", marginLeft:"2rem",width:'100%' }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "4.2%",
                  fontSize: "16px",
                  width: "25rem",
                }}
              >
                {data0}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "8rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Admin")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Admin</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Account")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Account
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("HR Manager")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      HR Manager
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row", width:"100%"}}>
          <div style={{marginLeft:"2rem", marginTop:"5%"}}>
          <img src={image2} onClick={changes1} className="Document2-6" style={{marginLeft:"0%"}} />
          <span className="Document2-7" style={{marginLeft:"0%"}}>Offices</span>
          </div>
          <div>
          <Dropdown style={{ marginTop: "6%", marginLeft:"7rem" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "4.2%",
                  fontSize: "16px",
                  width: "20rem",
                }}
              >
                {data0}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "8rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Admin")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Admin</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Account")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Account
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("HR Manager")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      HR Manager
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row", width:"100%"}}>
          <div style={{marginLeft:"2rem", marginTop:"5%"}}>
          <img src={image2} onClick={changes1} className="Document2-6" style={{marginLeft:"0%"}} />
          <span className="Document2-7" style={{marginLeft:"0%", width:"150%"}}>Employee Groups</span>
          </div>
          <div>
          <Dropdown style={{ marginTop: "6%", marginLeft:"2rem" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="dropdown__status"
                style={{
                  marginLeft: "-3%",
                  marginTop: "4.2%",
                  fontSize: "16px",
                  width: "25rem",
                }}
              >
                {data0}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "8rem" }}>
                <Dropdown.Item href="#/action-1">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Admin")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>Admin</h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("Account")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      Account
                    </h6>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {" "}
                  <div
                    style={{ display: "flex" }}
                    onClick={() => setdata0("HR Manager")}
                  >
                    <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                      HR Manager
                    </h6>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offercandidate;
