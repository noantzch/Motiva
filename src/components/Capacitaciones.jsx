import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import capacitaciones1 from "../img-logos/capacitaciones1.jpg";
import capacitaciones2 from "../img-logos/capacitaciones2.jpg";
import capacitaciones3 from "../img-logos/capacitaciones3.jpg";
import capacitaciones4 from "../img-logos/capacitaciones4.jpg";
import capacitaciones5 from "../img-logos/capacitaciones5.jpg";
import cursoCapacitacionTAP from "../img-logos/Curso-Capacitación-TAP.pdf";

function Capacitaciones() {
  return (
    <div>
      <div className="capacitaciones-1">
        <div className="capacitaciones-texto-1">
          <h2>Capacitaciones</h2>
          <p>
            Desde Motiva ofrecemos una capacitación TAP (Terapias Asistidas con
            Perros) donde abordamos los beneficios de este tipo de terapia, el
            lenguaje canino, el vínculo terapéutico, los tipos de abordajes
            posibles y las distintas poblaciones con las que se trabaja.
          </p>
          <p>
            Para mas información pueden encontrar el temario completo en{" "}
            <a href={cursoCapacitacionTAP} download>
              este link
            </a>
          </p>
        </div>
        <div>
          <img
            className="capacitaciones-img-1"
            src={capacitaciones1}
            alt="imagen de una sesión"
          />
        </div>
      </div>
      <h2 className="capacitaciones-texto-2">
        Características de la C<span>apacitación en TAP</span>
      </h2>
      <div className="capacitaciones-2">
        <div className="capacitaciones-card">
          <img
            src={capacitaciones2}
            alt="imagen un chico participando de una sesión con un perro"
          />
          <h3>Público</h3>
          <div className="capacitaciones-texto-3">
            <p>
              Dirigido a profesionales y estudiantes de carreras relacionadas
              con la salud, adiestradores, personas con carreras y/o intereses
              afines.
            </p>
            <p>
              No es requisito ser profesional ni tener experiencia o
              conocimientos previos.
            </p>
          </div>
        </div>
        <div className="capacitaciones-card">
          <img
            src={capacitaciones3}
            alt="imagen un chica participando de una sesión con un perro"
          />
          <h3>Duración y modalidad</h3>
          <div className="capacitaciones-texto-3">
            <p>
              El mismo tiene una duración de 2 meses y tiene una modalidad 100%
              virtual, donde habrá clases especiales con invitados que poseen
              una gran trayectoria en el tema.
            </p>
            <p>Cada clase tendrá una instancia de intercambio y preguntas.</p>
          </div>
        </div>
        <div className="capacitaciones-card">
          <img
            src={capacitaciones4}
            alt="imagen un chica participando de una sesión con un perro"
          />
          <h3>Certificación</h3>
          <div className="capacitaciones-texto-3">
            <p>
              Al finalizar el curso ofrecemos la posibilidad (opcional) de
              realizar un encuentro presencial, para que puedas conocer nuestro
              espacio y realizar algunas actividades juntos.
            </p>
            <p>Además, se entregarán certificados.</p>
          </div>
        </div>
      </div>
      <h2 className="capacitaciones-h2">Ciclos de charlas</h2>
      <div className="capacitaciones-p">
        <p>
          En Motiva contamos con un proyecto llamado “Ciclo de charlas” que
          consiste en generar conversaciones sobre diferentes temáticas de
          interés con invitad@s especializad@s en el tema.
        </p>
        <p>
          Nuestros ciclos nos abrieron la puerta a recibir propuestas de
          diversas instituciones (Centros de día, geriátricos y colegios, entre
          otros), en las que nos convocaron a realizar alguna
          actividad/intervención en las mismas con nuestros perros/as.
        </p>
      </div>
      <div className="capacitaciones-img2">
        <img src={capacitaciones5} alt="" />
      </div>
      <div className="capacitaciones-div-h2-1">
        <h2 className="capacitaciones-h2-1">
          Para sumarte a nuestras capacitaciones y charlas escribinos a través
          de <Link to={"/contacto"}>nuestros medios de contacto</Link>
        </h2>
      </div>
    </div>
  );
}

export default Capacitaciones;
