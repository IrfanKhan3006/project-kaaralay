import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from './images/Vector5.png'
import add from './images/Additional Information.png'
import {Link} from 'react-router-dom'
import './Employee10.css'
import dashblur from './images/dashblur.jpeg'
function Employee() {
  const [sdate, setDate] = useState();
  const [back, setback] = useState("none");
  
  return (
    <div className="Employee10" style={{overflow:'auto'}}>
      <div className="Employee10-1">
        <div>
              <div className="Employee10-2">
                            <p> 
                            New Dependent
                            </p>
              </div>
              <hr  className='Employee10-3'/>
        </div>
        <div
            className=" Employee10-8"
            style={{ display: "flex", paddingTop: "4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  FIRST NAME <span className="required-sym"></span>
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4">
              LAST NAME <span className="required-sym"></span>
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%" }}
          />
          </div>
          </div>
          </div>
          <div
            className=" Employee10-8"
            style={{ display: "flex", marginTop: "-4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  DATE OF BIRTH
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                  
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4">
              GENDER
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%" }}
          />
          </div>
          </div>
          </div>
          <div
            className=" Employee10-8"
            style={{ display: "flex", marginTop: "-4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  RELATIONSHIP
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                  
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4">
              NATIONALITY 
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%" }}
          />
          </div>
          </div>
          </div>
          <div
            className=" Employee10-8"
            style={{ display: "flex", marginTop: "-4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  DISTRICT  
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                  
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4">
              CITY 
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%" }}
          />
          </div>
          </div>
          </div>
          <div
            className=" Employee10-8"
            style={{ display: "flex", marginTop: "-4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  PERSONAL ID  
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                  
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4" style={{width: "38%"}}>
              PERSONAL TAX ID
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%", marginleft: "0rem" }}
          />
          </div>
          </div>
          </div>
          <div
            className=" Employee10-8"
            style={{ display: "flex", marginTop: "-4%", }}
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
                <label for="exampleInputEmail1" className="Employee10-4">
                  EFFECTIVE START DATE
                </label>
                <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                  
                className="Employee10-5"
                style={{ marginTop: "2%", paddingLeft:"5%" }}
              />
              </div>
              </div>
              <div
              class="form-group"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            ><div style={{ display: "flex" }}>
            <label for="exampleInputEmail1" className="Employee10-4">
              EFFECTIVE END DATE
            </label>
            <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
              
            className="Employee10-5"
            style={{ marginTop: "2%", paddingLeft:"5%" }}
          />
          </div>
          </div>
          </div>  
          <div className="Employee10-6" style={{ marginLeft: "24%", paddingBottom: "5%" }}>
          <Link
                to="/employee9"
                style={{ textDecoration: "none", color: "white", border:"none" }}
              >
            <button className="  Employee10-7" style={{ borderRadius: "10px", border:"none" }}>
              
                Save
              
            </button>
            </Link>
            <Link
                to="/employee9"
                style={{ textDecoration: "none", color: "white", border:"none" }}
              >
            <button
              className="  Employee10-7"
              style={{ borderRadius: "10px", marginLeft: "5%", border:"none" }}
            >
              
                Cancel
              
            </button>
            </Link>
          </div> 
   </div>
    </div>
  )
}
export default Employee
