import React from "react";
import "./Menu.css";
import { Col, Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const menu = (props) => {
  return (
    <Col md={12}>
      <Navbar inverse="true" collapseOnSelect>
        {/* <Navbar.Brand>
          <Col md={5}>
            <NavLink to={"/"} exact>
              Customer - Account
            </NavLink>
          </Col>
        </Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={"/customer-list"} exact>
              <Col md={5}>
                <NavItem md={5} eventkey={1}>
                  Customers
                </NavItem>
              </Col>
            </LinkContainer>
            <LinkContainer to={"/customer-account"}>
              <Col md={5}>
                <NavItem eventkey={2}>Accounts </NavItem>
              </Col>
            </LinkContainer>
            <LinkContainer to={"/register"}>
              <Col md={5}>
                <NavItem eventkey={3}>Register</NavItem>
              </Col>
            </LinkContainer>
            <LinkContainer to={"/login"}>
              <Col md={5}>
                <NavItem eventkey={4}>Login</NavItem>
              </Col>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default menu;
