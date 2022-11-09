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

  return (
    <div style={{overflow:'auto'}} className="upload-back1">
    <div>
   
      <div className="n">
        <div style={{marginTop:"2%"}}>
        <p className="ne1">OFFBOARD EMPLOYEE</p>
        <hr />
        </div>
        <div className='ro'>
            <div>
              <label>Employee</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
              placeholder='Employee'
              type="Employee"
              className='b'
              style={{marginLeft:"47%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
        </div>
        <div className='ro'>
        <div>
              <label>Last Working Date</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
              placeholder='Date'
              type="Employee"
              className='b'
              style={{marginLeft:"18%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
        </div>
        <div className='ro'>
        <div>
              <label>Reason of Leaving</label>
              <span className="required-sym"></span>
            </div>
            <div>
              <input
              placeholder='Reason of Leaving'
              type="Employee"
              className='b'
              style={{marginLeft:"18%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
        </div>
        <div className='ro'>
            <div >
              <label><span style={{margintop:"10%"}}>Manager Reassignment</span></label>
            </div>
            <div>
              <input
              placeholder='Line Manager'
              type="Employee"
              className='b'
              style={{marginLeft:"6%", marginTop:"2%",paddingLeft: "10%"}}
              />
            </div>
        </div>
        <div className='ro'>
        <div>
              <label>Note</label>
              <span className="required-sym"></span>
            </div>
            <div>
                <textarea
                id="freeform"
                name="freeform"
                className="bas-txt-upload"
                style={{marginLeft:"50%", height:"20vh", width:"17.5em"}}></textarea>
            </div>
        </div>
        <div className='w'>
            <span>Employee’s account is auto deactivated on last working date.<br />
Offboarding will delete all tasks, progress, information and files of an IN PROGRESS onboarding checklist (if any).</span>
        </div>
        <div className="re" style={{ marginLeft: "17%", paddingBottom: "5%" }}>
            <button className="rej" style={{ borderRadius: "10px", border: "none" }}>
              <Link
                to=""
                style={{ textDecoration: "none", color: "white" }}
              >
                Save
              </Link>
            </button>
            <button
              className="rej"
              style={{ borderRadius: "10px", marginLeft: "5%", border: "none" }}
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

export default NewProfile