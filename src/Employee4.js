import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import vector from './images/Vector5.png'
import add from './images/Additional Information.png'
import {Link} from 'react-router-dom'
import './Employee4.css'
import dashblur from './images/dashblur.jpeg'
function NewProfile() {
  const [sdate, setDate] = useState();
  const [back, setback] = useState("none");

  return (
    <div className="upload-back3"  >
      <div >
      <div className="n1" >
        <div style={{marginTop:"2%"}}>
        <p className="ne12">Assign Checklist</p>
        <hr />
        </div>
        
        <div className='roq'>
            <div>
              <label>Checklist Template </label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
              placeholder=''
              type="Employee"
              className='bq'
              style={{marginLeft:"20%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
            
        </div>
        <div className='roq'>
            <div>
              <label> HR-in-charge  </label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
              placeholder=''
              type="Employee"
              className='bq'
              style={{marginLeft:"40%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
        </div>
        
        <div className='wq'>
            <span>We will send reminders to employee about incomplete tasks.</span>
        </div>
        <div className="req" style={{ marginLeft: "17%", paddingBottom: "5%" }}>
            <button className="rejq" style={{ borderRadius: "10px", border:"none" }}>
              <Link
                to=""
                style={{ textDecoration: "none", color: "white", border:"none" }}
              >
                Onboard
              </Link>
            </button>
            <button
              className="rejq"
              style={{ borderRadius: "10px", marginLeft: "5%", border:"none" }}
            >
              <Link
                to=""
                style={{ textDecoration: "none", color: "white", border:"none" }}
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

export default NewProfile