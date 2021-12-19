import React from 'react';
import {Col,Row,Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
    return (
    <footer className="footer">
    <Col sm={6} md={4}  className="footer-left">
    <Row>
        <p className="about">
        <span>BANK OF ANATOLIA</span>
        Historical Banking Experience with modern technogical trends
        </p>
        <Row className="icons">
        <Link to="/">
        <i className="fa fa-facebook"></i>
        </Link>
        <Link to="/">
        <i className="fa fa-twitter"></i>
        </Link>
        <Link to="/">
        <i className="fa fa-linkedin"></i>
        </Link>
        <Link to="/">
        <i className="fa fa-google-plus"></i>
        </Link>
        <Link to="/">
        <i className="fa fa-instagram"></i>
        </Link>

        </Row>
    </Row>
    </Col>
    <Col  sm={6} md={4}  className="footer-center"> 
    <div>
        <i className="fa fa-map-marker"></i>
        <p>
            <span>Stret name and number</span>City,Country
        </p>
    </div>
    <div>
        <i className="fa fa-phone"></i>
        <p>
            <span>(+00) 0000 000 000</span>
        </p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p>
            <span>email@bankofanatolia.com</span>
        </p>
    </div>
    </Col>
    <Col  sm={6} md={4}  className="footer-right"> 

    <img src={logo} alt="logo" style={{height:"100px"}}/>

    <p className="menu">
        <Link to="/">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="/about">Package</Link>|
        <Link to="/about">Location</Link>|
        <Link to="/about">Contact</Link>
        
    </p>
    <p className="name">Bank of Anatolia © 2021</p>
    
    </Col>

    </footer>
    );
};

export default Footer;
