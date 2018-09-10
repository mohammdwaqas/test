import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import olxImage from "../images/olx_logo.png";
import "./header.css";
export default class Header extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header">
        <Navbar className="CustomeNavbar" expand="md">
          <NavbarBrand href="/">
            <img className="logo" src={olxImage} alt="site-logo" />{" "}
          </NavbarBrand>
          <span className="top-heading"> Pakistan's Largest Market Place </span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <i className="fas fa-qrcode fa-2x bar-code" />
              </NavItem>
              <NavItem>
                <Link to="/signIn">
                  <div className="user-account">
                    <i className="fas fa-user-alt user-icon" />
                    <span className="">
                      <strong>My Account</strong>
                    </span>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <div className="add">
                  <Link to='posting'>Submit An Add</Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
