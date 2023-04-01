
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
            <AiOutlineWhatsApp className="redesIcon" />
          </div>
          <br></br>
          <h4 className="titulosActive">Por Email</h4>
          <br></br>
          <p className="textoCentrado">
            Contáctanos por mail <br></br> cuando y donde estés
          </p>
          <br></br>
          <button className="btn btn-primary">Contactar</button>
        </div>
        <div className="vias">
          <div className="containerIcon">
            <AiOutlineMail className="redesIcon" />
          </div>
          <br></br>
          <h4 className="titulosActive">Por Whatsapp</h4>
          <br></br>
          <p className="textoCentrado">
            Agenda el <strong>116865563</strong> a <br></br> tus contactos y
            chateá <br></br>con nosotras
          </p>
          <br></br>
          <button className="btn btn-primary">Mensaje directo</button>
        </div>
      </div>
      <h4 className="titulosActive textoCentrado">
        Nuestra Ubicación aproximada
      </h4>
      <Map />

      <div class="siguenos">
        <hr className="title-line"></hr>
        <h3 class="titulosActive textoCentrado">Siguenos en redes</h3>
        <hr className="title-line"></hr>
      </div>

      <div className="siguenosIcons">
        <div className="siguenosRedS">
          <div className="containerIcon">
            <AiFillFacebook className="redesIcon" />
          </div>
          <p className="titulosActive">/motiva.tacp</p>
        </div>
        <div className="siguenosRedS">
          <div className="containerIcon">
            <AiOutlineInstagram className="redesIcon" />
          </div>
          <p className="titulosActive">@motiva.terapias</p>
        </div>
      </div>
    </div>
  );
};




export default Contacto

