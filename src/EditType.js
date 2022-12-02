import React from "react";
import "./Editholidat.css";
import './EditType.css'
import ellipse49 from './images/Ellipse 49.png';
import ellipse50 from './images/Ellipse 50.png';
import { Link } from "react-router-dom";
import { useState } from "react";
function EditType() {

  const [image,setimage] = useState(ellipse49);
  const [boots,setboots] = useState(false);
  const [image2,setimage2] = useState(ellipse50);
  const [coloring,setcoloring] = useState("#ffffff");
  const [coloring1,setcoloring1] = useState("#003666");
  const [boot,setboot] = useState("false");
  const [image1,setimage1] = useState(ellipse50);
   const [coloring2,setcoloring2] = useState("#003666");
   const [coloring3,setcoloring3] = useState("#ffffff")

   const changes1 = () => {
    {
            boots ? setimage2(ellipse49) : setimage2(ellipse50)
    }
    {
             boots ? setboots(false) : setboots(true);
    }
   }

  const changes = () => {
              {
                boot ? setimage(ellipse49) : setimage(ellipse50)
                            }

                          {
                            boot ? setboot(false) : setboot(true);
                          }
                          {
                            boot ? setcoloring("#ffffff") : setcoloring("#003666");
                          }
                          {
                            boot ? setcoloring1("#003666") : setcoloring1("#ffffff");
                          }

                          {
                                   boot ? setcoloring2("#003666") : setcoloring2("#ffffff");
                          }
                          {
                            boot ? setcoloring3("#ffffff") : setcoloring3("#003666");
                          }
                          {
                            boot ? setimage1(ellipse50) : setimage1(ellipse49)
                          }
  }
  
  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  return (
    <div style={{ overFlow: "hidden" }}>
      <div className="upload-back" style={{ overFlow: "hidden", height:"100vh" }}>
        <div className="holiday_main">
          <div className="holiday_head">
            <p>Edit Type</p>
            <div className="holiday_line" style={{width:'90%',marginLeft:'5.5%'}}></div>
          </div>
          <div className="holiday_head_1">
            <div style={{ marginTop: "3%" }}>
              <input
                type="text"
                style={{
                  width: "94%",
                  borderRadius: "10px",
                  height: "50px",
                  paddingLeft: "10px",
                  backgroundColor:"#f9f9f9"
                }}
                placeholder="Engagement"
                className="timeoff__input_1"
              />
            </div>
            <div style={{ diplay: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ display: "flex", marginLeft: "5%", marginTop: "2%" }}
                >
                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter" }}
                  >
                    Paid/Unpaid
                  </label>

                  <label
                    for="exampleInputEmail1"
                    className="basi-jobtitle"
                    style={{ fontFamily: "Inter", marginLeft: "40%" }}
                  >
                    Unit
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "4%",
                    marginLeft: "4%",
                  }}
                >
                  <div
                    className="email-2"
                    style={{
                      marginLeft: "1%",
                      width: "70px",
                      backgroundColor: coloring,
                      border:'none'
                    }}
                  >
                    <div
                      className="email-3"
                      style={{
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: "5%",
                        marginLeft: "5%",
                        border:'none'
                      }}
                      onClick={changes}
                    >
                      <img src={image} style={{ marginTop: "-15%" }} />
                      <p
                        className="email-p-1"
                        style={{ color: coloring1, marginLeft: "5%" }}
                      >
                        Paid
                      </p>
                    </div>
                  </div>
                  <div
                    className="email-2"
                    style={{
                      marginLeft: "1%",
                      width: "90px",
                      backgroundColor: coloring2,
                      border:'none',
                      marginLeft: "3%",
                    }}
                    onClick={changes}
                  >
                    <div
                      className="email-3"
                      style={{
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: "5%",
                        marginLeft: "5%",
                       
                      }}
                    >
                      <img src={image1} style={{ marginTop: "-10%" }} />
                      <p
                        className="email-p-1"
                        style={{ color: "#003666" , marginLeft: "3%" }}
                        
                      >
                        <Link
                          
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "400",
                            fontSize: "20",
                            color:coloring3
                          }}
                        >
                          Unpaid
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div
                    className="email-2"
                    style={{
                      marginLeft: "1%",
                      width: "60px",
                      backgroundColor: "white",
                      border: "none",
                      position: "relative",
                      marginLeft: "24%",
                    }}
                    onClick={changes1}
                  >
                    <div
                      className="email-3 editype_day"
                      style={{
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: "5%",
                        marginLeft: "5%",
                      }}
                    >
                      <img src={image2} style={{ marginTop: "-15%" }} />
                      <p
                        className="email-p-1"
                        style={{
                          color: "#003666",
                          marginLeft: "6%",
                          marginTop: "5%",
                        }}
                      >
                        <Link
                          
                          style={{
                            textDecoration: "none",
                            color: "#003666",
                            fontWeight: "400",
                            fontSize: "20",
                          }}
                        >
                          Day
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="testing-btn"
            style={{ marginLeft: "0%", marginBottom: "5%" }}
          >
            <Link to="/Mytimeoff8" style={{ textDecoration: "none", color: "white" }}>
              <button className="testing-button">Save</button>
            </Link>
            <Link
              to="/Mytimeoff8"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "5%",
              }}
            >
              <button className="testing-button"> Cancel </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditType;
