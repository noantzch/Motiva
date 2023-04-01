
import React from 'react'
import tresperros2 from './images/tresperros2.png';
import huella from "./images/huella.png";
import{ AiOutlineWhatsApp} from 'react-icons/ai';
import{ AiOutlineMail} from 'react-icons/ai';
import Map from './maps';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';


const Contacto = () => {
  return (
    <div>

      <img className="imgPortada" src={tresperros2} alt=".."></img>
      <h3 className="textoCentrado titulosActive titulos1">
        ¿Cómo podemos ayudarte?
      </h3>
      <p className="textoCentrado">
        Para atender todas tus consultas y recibir sugerencias, Motiva ofrece
        distintas vías de comunicación.
      </p>
      <br></br>
      <br></br>
      <h3 className="textoCentrado titulosActive">
        Vías comunicativas <img src={huella} alt="huella"></img>{" "}
      </h3>
      <div className="containerVias">
        <div className="vias">
          <div className="containerIcon">
            <a href="mailto:motivaterapia@gmail.com">
              <AiOutlineMail className="redesIcon" />
            </a>
          </div>
          <br></br>
          <h4 className="titulosActive">Por Email</h4>
          <br></br>
          <p className="textoCentrado">
            Contáctanos por mail <br></br> cuando y donde estés
          </p>
          <br></br>
          <a href="mailto:motivaterapia@gmail.com">
            <button className="btn btn-primary">Contactar</button>
          </a>
        </div>
        <div className="vias">
          <div className="containerIcon">
            <a href="https://api.whatsapp.com/send?phone=541149459525"
            target="_blank" rel="noreferrer">

            <AiOutlineWhatsApp className="redesIcon"></AiOutlineWhatsApp>
            </a>
          </div>
          <br></br>
          <h4 className="titulosActive">Por Whatsapp</h4>
          <br></br>
          <p className="textoCentrado">
            Agenda el <strong>116865563</strong> a <br></br> tus contactos y
            chateá <br></br>con nosotras
          </p>
          <br></br>
          <a href="https://api.whatsapp.com/send?phone=541149459525"
            target="_blank" rel="noreferrer">
            <button className="btn btn-primary">Mensaje directo</button>
          </a>
        </div>
      </div>
      <h4 className="titulosActive textoCentrado">
        Nuestra Ubicación aproximada
      </h4>
      <Map />
    <br></br><br></br>
      <div class="siguenos">
        <hr className="title-line"></hr>
        <h3 class="titulosActive textoCentrado">Siguenos en redes</h3>
        <hr className="title-line"></hr>
      </div>

      <div className="siguenosIcons">
        <div className="siguenosRedS">
          <div className="containerIcon">
            <a href='https://www.facebook.com/motiva.tacp' target='_blanck'>
              <AiFillFacebook className="redesIcon" />
            </a>
          </div>
          <p className="titulosActive">/motiva.tacp</p>
        </div>
        <div className="siguenosRedS">
          <div className="containerIcon">
            <a href='https://www.instagram.com/motiva.terapias/' target='_blanck'>
              <AiOutlineInstagram className="redesIcon" />
            </a>
          </div>
          <p className="titulosActive">@motiva.terapias</p>
        </div>
      </div>
    </div>
  );
};




export default Contacto

