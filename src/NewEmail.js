import React, { useState } from "react";
import jobs from "./images/jobs.png";
import './Emailtem.css';
import { Link } from "react-router-dom";
import RichTextEditor from "./shared/RichTextEditor";


function NewEmail() {
     const [back, setback] = useState("none");
     const [dec, setdec] = useState(false);
     const clickbtn = () => {
       setdec(true);
       setback("blur(8px)");
     };
     const clickbtnn = () => {
       setdec(false);
       setback("none");
     };
     const [data, setdata] = useState(true);
     const [opac, setopac] = useState("10");
     const getValue = (value) => {
      setValue(value);
    };
    const [value, setValue] = useState("");

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
  const [sdate, setDate] = useState();
  const [textlist, settext] = useState([]);
  const changetextstyle = (e) => {
    console.log(e.target.id);
    if (e.target.id == "dotted-list") {
      let k = document.getElementById("freeform").value;
      console.log(document.getElementById("freeform").value);
      const myArray = document.getElementById("freeform").value.split(".");
      document.getElementById("freeform").value = myArray;
      let ul = document.createElement("ul");
      document.getElementById("freeform").value = "";
      for (let user of myArray) {
        let li = document.createElement("li");
        li.innerText = user;

        ul.appendChild(li);
        document.getElementById("freeform").value += li.innerText;
      }
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

  return (
    <div>
    <div style={{ overflow: "hidden" }} >
        <div style={{ textAlign: "left", marginTop:"2rem", height:"58rem", marginBottom:"1rem" }} className="emaildiv">
          <p className="email-p" style={{marginLeft:"20rem", color:"#E0791B", fontSize:"20px"}}>NEW EMAIL TEMPLATE</p>
          <hr></hr>
          <p className="email-p">STAGE *</p>
          <input type="text" placeholder="Select Stage" className="email-input" />
          <p className="email-p" style={{ marginTop: "3%" }}>
            EMIAL TEMPLATE *
          </p>
          <input
            type="email"
            placeholder="Name"
            className="email-input"
          />
          <p className="email-p" style={{ marginTop: "3%" }}>
            SUBJECT *
          </p>
          <input
            type="text"
            placeholder="Subject"
            className="email-input"
          />{" "}
           <div className="txt-data" style={{paddingTop:"2rem", paddingBottom:"1.5rem"}}>
                    <RichTextEditor initialValue="" getValue={getValue} />
                  </div>
          <p className="email-p">PLACEHOLDERS *</p>
          <input
            type="text"
            placeholder="{{candidate_first_name}} {{candidate_last_name}} {{company_name}} {{job_title}}"
            className="email-input"
          />
        <Link
              to="/EmailTemplate"
              style={{ textDecoration: "none", color: "white",  }}
            >
          <button className="email-btn" style={{marginLeft:"15rem", marginTop:"2rem"}}>
            
              Save And Continue
            
          </button>{" "}
          </Link>

          <Link
              to="/EmailTemplate"
              style={{ textDecoration: "none", color: "white", }}
            >
          <button className="email-btn" style={{ marginLeft: "3%" }}>
           
              Cancel
          </button>
          </Link>

        </div>
        </div>
        </div>
        
  );
}

export default NewEmail;
