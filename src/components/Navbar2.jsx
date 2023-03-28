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
    <>
      <div className="div-navbar">
        {/*       <Navbar bg="light" expand="lg">
      <Container>
        <div>
          <img className="logo-navbar" src={logo} alt="logo motiva terapias" />
          <p className="texto-motiva">Motiva</p>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className="navbar-texto">
          <Nav.Link>
            <div>
              <img className="patita-animacion" src={patita} alt="" />
              <a className="texto-navbar" href="">
                Home
              </a>
            </div>
            </Nav.Link>
            <Nav.Link>
            <div>
              <img className="patita-animacion" src={patita} alt="" />
              <a className="texto-navbar" href="">
                Quienes somos
              </a>
            </div>
            </Nav.Link>
            <Nav.Link>
            <div>
              <img className="patita-animacion" src={patita} alt="" />
              <a className="texto-navbar" href="">
                Terapias
              </a>
            </div>
            </Nav.Link>
            <Nav.Link>
            <div>
              <img className="patita-animacion" src={patita} alt="" />
              <a className="texto-navbar" href="">
                Capacitaciones
              </a>
            </div>
            </Nav.Link>
            <Nav.Link>
            <div>
              <img className="patita-animacion" src={patita} alt="" />
              <a className="texto-navbar" href="">
                Contacto
              </a>
            </div>
            </Nav.Link>
          </div>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar> */}

        <Navbar expand="lg">
          <Container className="navbar-2">
            <div>
              <img
                className="logo-navbar"
                src={logo}
                alt="logo motiva terapias"
              />
              <p className="texto-motiva">Motiva</p>
            </div>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="navlink">
                  <img className="patita-animacion" src={patita} alt="" />
                  <NavLink className="texto-navbar">Home</NavLink>
                </NavLink>
                <NavLink className="navlink">
                  <img className="patita-animacion" src={patita} alt="" />
                  <NavLink to="/quienes-somos" className="texto-navbar">
                    Quienes somos
                  </NavLink>
                </NavLink>
                <NavLink className="navlink">
                  <img className="patita-animacion" src={patita} alt="" />
                  <NavLink to="/terapias" className="texto-navbar">
                    Terapias
                  </NavLink>
                </NavLink>
                <NavLink className="navlink">
                  <img className="patita-animacion" src={patita} alt="" />
                  <NavLink to="/capacitaciones" className="texto-navbar">
                    Capacitaciones
                  </NavLink>
                </NavLink>
                <NavLink className="navlink">
                  <img className="patita-animacion" src={patita} alt="" />
                  <NavLink to="/contacto" className="texto-navbar">
                    Contacto
                  </NavLink>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navbar2;
