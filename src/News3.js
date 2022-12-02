import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News3.css";
import RichTextEditor from "./shared/RichTextEditor";
import ellipse49 from './images/Ellipse 49.png'
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
    <div className="new3-1">
      <div className="new3-2">
        <div className="new3-3">
          <div className="new3-4">
            <p className="new3-5">Edits News</p>
            <div className="new3-6"></div>
          </div>
          <div className="new3-7">
            <div>
              <div style={{ display: "flex" }}>
                <label
                  form="exampleInputEmail1"
                  className="new3-12"
                  style={{
                    marginTop: "2%",
                    marginLeft: "5.5%",
                    color: "#003666",
                  }}
                >
                  Title
                </label>
                <span
                  className="required-sym"
                  style={{ marginTop: "2%" }}
                ></span>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="News Title"
                    className="new3-13"
                    style={{ width: "90%", paddingLeft: "3%", paddingTop:"-2rem" }}
                    name="offer"
                    onChange={handleChange}
                  />
                </div>
                <p>{offerError}</p>
              </div>
              <div>
              <img src={image2} onClick={changes1} className="new3-17" />
              <span style={{marginLeft:"1rem", color:"black", fontFamily:"inter", }}>Mark as important</span>
              </div>
              <div style={{ display: "flex", width: "auto" }}>
                    <label for="exampleInputEmail1" className="new3-12" style={{
                    marginTop: "2%",
                    marginLeft: "5.5%",
                    color: "black",
                  }}>
                      Content <span className="required-sym"></span>
                    </label>
                   
                  </div>

                  <div className="txt-data" style={{width:"90%", marginLeft:"5.5%",marginTop:"1rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
                
               
              <div style={{ display: "flex", flexDirection: "row" }}>
                </div>
              <div className="rej-btns" style={{marginTop:"3rem"}}>
                <button className="reject-btn" style={{ borderRadius: "10px" }}>
                  {moveto && moveto1 && moveto2 && moveto3 && moveto4 ? (
                    <Link
                      to="/News1"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Confirm 
                    </Link>
                  ) : (
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={() => alert("You are missing some Fields")}
                    >
                      Confrim
                    </Link>
                  )}
                </button>
                <button
                  className="reject-btn"
                  style={{ borderRadius: "10px", marginLeft: "5%" }}
                >
                  <Link
                    to="/News1"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Cancel
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offercandidate;
