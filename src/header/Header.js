import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Header.css";
import logo from "../images/logo.png";
import {Icon} from "semantic-ui-react";

const Header = () => {
  return (
    <div className="header-container">
      <Container fluid>
        <Container className="nav-top">
          <Row>
            <Col className="d-none d-md-block">
              <TopNav />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="nav-middle"></Container>
      <Row>
        <Col>

        <img className="nav-logo" src={logo} alt="logo"/>

        </Col>

          <Col className="align-items">
            <MiddleNav/>
          </Col>
        
      </Row>
    </div>
  );
};

const TopNav = () => {
  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="advantage"
        onSelect={handleNavClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="advantage">Advantage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const MiddleNav = () => {
  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };
return(
<div>
        <Nav className="d-flex  justify-content-center">
        <Nav.Item>
          <Nav.Link bsPrefix="middle-navbar">
          <Icon name="user" circular size="large"
          className="d-block"></Icon>
          Sign In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Icon name="unlock alternate" circular size="large"
          className="d-block"></Icon>
          Register
        </Nav.Item>
      </Nav>
</div>
);
};

export default Header;
