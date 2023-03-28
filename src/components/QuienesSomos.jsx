import React from "react";
import quienessomos1 from "../img-logos/quienes-somos1.png";
import quienessomos2 from "../img-logos/quienes-somos2.jpg";
import quienessomos3 from "../img-logos/quienes-somos3.png";
import quienessomo4 from "../img-logos/quienes-somos4.jpg";
import quienessomo5 from "../img-logos/quienes-somos5.jpg";
import quienessomo6 from "../img-logos/quienes-somos6.png";

function QuienesSomos() {
  return (
    <div>
      <div className="quienessomos1">
        <div>
          <img src={quienessomos1} alt="" />
        </div>
        <div>
          <h2>Sobre Motiva</h2>
          <div className="quienessomos-p">
            <p>
              Somos Rosario y Jimena, fundadoras y directoras del espacio de
              Motiva: un proyecto que nace de la necesidad de generar un enfoque
              distinto a las terapias tradicionales, logrando combinar las dos
              cosas que amamos: nuestra profesión con los animales.
            </p>
            <p>
              En Motiva creemos en la importancia de la conexión humana y
              animal, y trabajamos para promover la salud emocional, física y
              mental de nuestros pacientes a través de los distintos
              tratamientos con nuestros perros especialmente entrenados.{" "}
            </p>
            <p>
              Con la ayuda de nuestros profesionales capacitados, nuestros
              pacientes pueden experimentar una mayor confianza, beneficiar el
              desarrollo de las habilidades sociales y la comunicación, mejorar
              su bienestar general.
            </p>
          </div>
        </div>
        <div>
          <img src={quienessomos2} alt="" />
        </div>
      </div>
      <div className="quienessomos2">
        <img src={quienessomos3} alt="" />
        <h2>Nuestro equipo</h2>
      </div>
      <div className="div-quienessomos-card">
        <div className="quienessomos-card">
          <img src={quienessomo4} alt="" />
          <h3>Jime Tarcetti</h3>
          <p>Lic. en Psicología y Psicopedagogía</p>
          <div className="quienessomos-a">
            <a href="">Consultar Cv</a>
          </div>
        </div>
        <div className="quienessomos-card">
          <img src={quienessomo5} alt="" />
          <h3>Rochi Rico</h3>
          <p>Lic. en Psicopedagogía</p>
          <div className="quienessomos-a">
            <a href="">Consultar Cv</a>
          </div>
        </div>
      </div>
      <div className="icon-quienes-somos">
        <img src={quienessomo6} alt="" />
      </div>
    </div>
  );
}

export default QuienesSomos;
