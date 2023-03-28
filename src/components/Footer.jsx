import React from "react";
import "../App.css";
import ubi from "../img-logos/ubi.png";
import ig from "../img-logos/ig.png";
import wsp from "../img-logos/wsp.png";

const Footer = () => {
  return (
    <>
      <div className="div-footer">
        <div className="footer-p">
          <p className="footer-motiva">Motiva terapias</p>
        </div>
        <div className="footer-texto-div">
          <a className="footer-texto" href="">
            Home
          </a>
          <a className="footer-texto" href="">
            Quienes somos
          </a>
          <a className="footer-texto" href="">
            Servicios
          </a>
          <a className="footer-texto" href="">
            Talleres y charlas
          </a>
          <a className="footer-texto" href="">
            Contacto
          </a>
        </div>
        <div className="ubi-footer">
          <img src={ubi} alt="" />
          <p>Zona Norte, Buenos Aires.</p>
        </div>
        <div className="div-footer-redes">
          <a href="https://www.instagram.com/motiva.terapias/" target="_blank">
            <img src={ig} alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5492216429731"
            target="_blank"
          >
            <img src={wsp} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
