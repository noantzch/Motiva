import React from "react";
import "../App.css";
import logo from "../img-logos/logo-navbar.png";
import patita from "../img-logos/animacion-patita.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbarc">
      <Container id="div-nav">
        <div className="div-logo-motiva">
          <NavLink to="/">
            <Navbar.Brand href="#home" className="nav-img">
              <img src={logo} alt="" />
              Motiva
            </Navbar.Brand>
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav menuu" />

        <Navbar.Collapse id="responsive-navbar-nav menuu">
          <Nav id="nav-links">
            <div className="nav-logo-link">
              <img id="img-logo" src={patita} alt="patita png" />
              <NavLink to="/" className="nav-li">
                Home
              </NavLink>
            </div>
            <div className="nav-logo-link">
              <img id="img-logo" src={patita} alt="patita png" />
              <NavLink className="nav-li" to="/quienes-somos">
                Quienes somos
              </NavLink>
            </div>
            <div className="nav-logo-link">
              <img id="img-logo" src={patita} alt="patita png" />
              <NavLink className="nav-li" to="/terapias">
                Terapias
              </NavLink>
            </div>
            <div className="nav-logo-link">
              <img id="img-logo" src={patita} alt="patita png" />
              <NavLink className="nav-li" to="/capacitaciones">
                Capacitaciones
              </NavLink>
            </div>
            <div className="nav-logo-link">
              <img id="img-logo" src={patita} alt="patita png" />
              <NavLink className="nav-li" to="/contacto">
                Contacto
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
