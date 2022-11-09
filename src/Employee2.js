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
  
  return (
    <div style={{overflow:'auto'}} className="upload-back2">
   
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
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
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
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
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
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
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
                style={{ marginTop: "5%", paddingLeft:"5%" }}
              />
            </div>
          </div>
          <div className="mt-610" style={{ marginLeft: "8%", marginTop: "0%" }}>
            <Form.Check aria-label="option 1" />
            <p style={{ marginLeft: "1%", fontSize: "16px" }}>
              send email invitation
            </p>
          </div>
          <div className="rej-btnsaa" style={{ marginLeft: "25%", paddingBottom: "5%"}}>
            <button className="reject-btnaa" style={{ borderRadius: "10px" , border:"none" }}>
              <Link
                to=""
                style={{ textDecoration: "none", color: "white" }}
              >
                Save
              </Link>
            </button>
            <button
              className="reject-btnaa"
              style={{ borderRadius: "10px", marginLeft: "5%", border:"none"  }}
            >
              <Link
                to=""
                style={{ textDecoration: "none", color: "white" }}
              >
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Employee