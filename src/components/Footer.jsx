import React from "react";
import "../App.css";
import ubi from "../img-logos/ubi.png";
import ig from "../img-logos/ig.png";
import wsp from "../img-logos/wsp.png";
import { Link } from "react-router-dom";
import footerlogo from "../img-logos/footer-logo.png";

const Footer = () => {
  return (
    <>
      <div className="div-footer">
        <div className="footer-p">
          <p className="footer-motiva">
            Motiva <span>terapias</span>
          </p>
          <img className="footer-logo" src={footerlogo} alt="" />
        </div>
        <div className="footer-texto-div">
          <Link className="footer-texto" to="/">
            Home
          </Link>
          <Link className="footer-texto" to="/quienes-somos">
            Quienes somos
          </Link>
          <Link className="footer-texto" to="/terapias">
            Servicios
          </Link>
          <Link className="footer-texto" to="/capacitaciones">
            Talleres y charlas
          </Link>
          <Link className="footer-texto" to="/contacto">
            Contacto
          </Link>
        </div>

        <div className="ubi-footer">
          <Link to="/contacto">
            <p>
              {" "}
              <img src={ubi} alt="" />
              Zona Norte, Buenos Aires.
            </p>
          </Link>
        </div>

        <div className="div-footer-redes">
          <a
            href="https://www.instagram.com/motiva.terapias/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ig} alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=541149459525"
            target="_blank"
            rel="noreferrer"
          >
            <img src={wsp} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
