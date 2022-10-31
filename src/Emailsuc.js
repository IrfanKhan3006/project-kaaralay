import React from 'react'
import ellipse from './images/Ellipse 3.png'
import email from './images/Email campaign-pana (1) 1.png'

import logo from './images/logo1 1.png'
import {Row,Col} from 'react-bootstrap'

import Rectangle from './images/Rectangle 11.png'

function Emailsuc() {
  return (
    <div className="email-suc" style={{overflow:'auto',overflowX:'hidden'}}>
      <Row style={{ marginTop: "6%" }}>
        <Col xd={12} style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          {" "}
          <img src={logo} className="img-fluid" style={{height:'30rem',marginTop:'-5%'}}/>
        </Col>
      </Row>
      <Row >
        <Col className="text-center" style={{position:'fixed'}}>
          <h2 className="text-center" style={{ color: "white",marginTop:'-7%' }}>
            Your Email has Verified Successfully !{" "}
          </h2>
          <br />
          <p className="text-center" style={{ color: "white" }}>
            {" "}
            By Verifying this, you agree to our <span>Terms</span> &{" "}
            <span>Conditions</span> and <span>Privacy Policy</span>
          </p>
        </Col>
      </Row>
      <Row >
        <Col style={{marginLeft:'32%'}}>
          <img src={email} className="img-fluid text-center" style={{height:'20rem',width:'35rem',alignItems:'center',marginTop:'-7%',justifyContent:'center'}}/>
        </Col>
      </Row>
    </div>
  );
}

export default Emailsuc