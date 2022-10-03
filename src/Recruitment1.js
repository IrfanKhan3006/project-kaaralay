import React,{useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import jobs from './images/jobs.png'
import candidate from './images/candidate.png'
import { Link } from 'react-router-dom';
import setting from './images/settings 3.png'
import  searchbar  from './images/search_black_24dp 1.png';
import Dropdown from 'react-bootstrap/Dropdown'
import Recruitdetails from './Recruitdetails'
import jobicon from './images/Mask group.png'
import Header from './Header'
import Recruitcontent from "./Recruitcontent";
import RecrutimentPos from './RecrutimentPos'

function Recruitment1() {
     const details = [
       {
         id: 1,
         name: "John Doe",
         role: "developer",
         candidates: "4 candidates",
       },
       {
         id: 2,
         name: "VicWayne",
         role: "developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Jane Doe",
         role: "developer",
         candidates: "4 candidates",
       },
       {
         id: 3,
         name: "Jane Doe",
         role: "developer",
         candidates: "4 candidates",
       },
     ];
     const [back,setback] = useState("none");
     const [dec,setdec] = useState(false);
      const clickbtn = () => {
        setdec(true);
        setback("blur(8px)");
      };
        const clickbtnn = () => {
        setdec(false);
          setback("none");
        };
     const [data, setdata] = useState(true);
     const [opac,setopac] = useState('10');
      
    const showsearch = () => {
        setopac('0.1')
    }
     const showicon = (e) => {
       
          
          if(data)
          { 
            setdata(false);
            
        }
          else
          { 
            setdata(true);
            setopac('10');
          }
     }

     
  return (
    <div>
      <div style={{ filter: back }}>
        <Header />
        <Container>
          <Row>
            <Col>
              <div onClick={showsearch} className="main-block">
                <div className="block" style={{ display: "flex" }}>
                  <img
                    src={searchbar}
                    className="search-bar"
                    style={{ opacity: opac }}
                  />

                  <input
                    type="search"
                    placeholder="        search"
                    style={{ width: "60%" }}
                    className="rec-search"
                    onClick={showicon}
                  />
                  <div className="bag">
                    <Link>
                      <div>
                        <img src={jobs} className="bag-icon" />
                      </div>
                    </Link>
                  </div>
                  <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                    <Link>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={candidate} className="bag-icon-1" />
                        <p
                          style={{
                            fontSize: "9px",
                            marginLeft: "8%",
                            color: "#003666",
                            textDecoration: "none",
                          }}
                        >
                          candidate
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="bag" style={{ backgroundColor: "#ffffff" }}>
                    <Link>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <img src={setting} className="bag-icon-2" />
                        <p
                          style={{
                            fontSize: "9px",
                            marginLeft: "18%",
                            color: "#003666",
                            textDecoration: "none",
                          }}
                        >
                          settings
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
            className="rec-select"
          >
            <div
              className="rec-drop"
              style={{ marginLeft: "2%", position: "relative", left: "0%" }}
            >
              <Dropdown
                className="rec-down"
                style={{ border: "none", outline: "none" }}
              >
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="rec-tog"
                >
                  All Employement
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "5%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  id="dropdown-basic"
                  className="rec-tog"
                >
                  All Department
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "5%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  className="rec-tog"
                >
                  All Office
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div
              className="rec-drop"
              style={{ marginLeft: "2%", position: "relative", left: "0%" }}
            >
              <Dropdown className="rec-down">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: " #FAFAFA",
                    color: "black",
                    border: "none",
                  }}
                  className="rec-tog"
                >
                  All status
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ color: "black" }}>
                  <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <h6 style={{ marginLeft: "5%", marginTop: "5%" }}>
                        Action
                      </h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="new-job" onClick={clickbtn}>
              <div div className="user-job">
                <div>
                  {" "}
                  <img
                    src={jobicon}
                    style={{ marginLeft: "15px", marginTop: "15px" }}
                  />
                </div>
                <div className="post">
                  <p>NEW JOB POST</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "13%" }}>
            <div>
              {details.map((user) => (
                <div className="details">
                  {user.name}
                  <p className="details-1">{user.role}</p>
                  <p className="details-2">{user.candidates}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {dec ? (
        <div className="create">
          <Recruitcontent />
        </div>
      ) : null}
    </div>
  );
}

export default Recruitment1