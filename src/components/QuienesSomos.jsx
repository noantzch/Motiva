import React from "react";
import quienessomos1 from "../img-logos/quienes-somos1.png";
import quienessomos2 from "../img-logos/quienes-somos2.jpg";
import quienessomos3 from "../img-logos/quienes-somos3.png";
import quienessomo4 from "../img-logos/quienes-somos4.jpg";
import quienessomo5 from "../img-logos/quienes-somos5.jpg";
import quienessomo6 from "../img-logos/quienes-somos6.png";
import quienessomos7 from "../img-logos/quienes-somos7.png";
import quienessomos8 from "../img-logos/quienes-somos8.png";
import quienessomos9 from "../img-logos/quienes-somos9.png";
import quienessomos10 from "../img-logos/quienes-somos10.png";
import quienessomos11 from "../img-logos/quienes-somos11.png";
import quienessomos12 from "../img-logos/quienes-somos12.png";
import quienessomos13 from "../img-logos/quienes-somos13.png";
import quienessomos14 from "../img-logos/quienes-somos14.png";
import quienessomos15 from "../img-logos/quienes-somos15.png";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

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
            <a href="google.com">Consultar Cv</a>
          </div>
        </div>
        <div className="quienessomos-card">
          <img src={quienessomo5} alt="" />
          <h3>Rochi Rico</h3>
          <p>Lic. en Psicopedagogía</p>
          <div className="quienessomos-a">
            <a href="google.com">Consultar Cv</a>
          </div>
        </div>
      </div>
      <div className="icon-quienes-somos">
        <img src={quienessomo6} alt="" />
      </div>
      <div className="div-cuadros-quienesomos">
        <div className="div-cuadros">
          <h3>2 Psicólogos</h3>
          <p>Lic. en Psicología</p>
        </div>
        <div className="div-cuadros">
          <h3>2 Terapistas</h3>
          <p>Lic. en Terapia ocupacional</p>
        </div>
        <div className="div-cuadros">
          <h3>1 Psicopedagoga</h3>
          <p>Lic. en Psicopedagogía</p>
        </div>
        <div className="div-cuadros">
          <h3>1 Musicoterapeuta</h3>
          <p>Lic. en Musicoterapía</p>
        </div>
      </div>
      <div className="div-texto-img">
        <h2>Equipo animal</h2>
        <img src={quienessomos7} alt="" />
      </div>
      <div className="div-animales-desc">
        <div className="animales-desc">
          <img src={quienessomos8} alt="" />
          <h3>Porota</h3>
          <div>
            <p>
              Ella es una Cabeza de leon de 4 años. Se lleva bien con otros
              animales, le gustan mucho los mimos. Come todo tipo de verduras y
              frutas, su preferida es la banana.En el caso de ella no recibe un
              entrenamiento, sino que se la desensibiliza para que pueda
              disfrutar de las caricias y de la interacción con los niños.
            </p>
          </div>
        </div>
        <div className="animales-desc">
          <img src={quienessomos9} alt="" />
          <h3>India</h3>
          <div>
            <p>
              Es una Pastor shetland de 4 años y es nuestro “comodín”. Tiene una
              gran capacidad de adaptación a las distintas situaciones y es muy
              cariñosa. Puede permanecer tranquila o activar y jugar con gran
              entusiasmo. India puede ingresar al consultorio para múltiples
              actividades, ya sea para acompañar pasivamente, para realizar
              alguna tarea en la que tenga algún tipo de participación o para
              jugar activamente.
            </p>
          </div>
        </div>
        <div className="animales-desc">
          <img src={quienessomos10} alt="" />
          <h3>Shiva</h3>
          <div>
            <p>
              Es un Border Collie de 7 años y es muy juguetona y tiene mucha
              energía.Por su naturaleza necesita actividades (ya sea físicas o
              mentales) gran parte del tiempo e ingresa al consultorio para
              juegos/tareas más activas, que requieran movimiento. También se
              puede trabajar actividades más pasivas que incluyan comida.
            </p>
          </div>
        </div>
        <div className="animales-desc">
          <img src={quienessomos11} alt="" />
          <h3>Otto</h3>
          <div>
            <p>
              Es un Boyero de berna de 9 años y el es muy tranquilo y dormilón
              con el en el consultorio podés hacer juegos pasivos: por ejemplo
              acostarlo y ponerle objetos encima (autitos, fichas), o
              disfrazarlo con diferentes objetivos. También podés cepillarlo y
              peinarlo por horas. Sin dudas darle de comer es la actividad que
              más disfruta.
            </p>
          </div>
        </div>
        <div className="animales-desc">
          <img src={quienessomos12} alt="" />
          <h3>Enzo</h3>
          <div>
            <p>
              Es un Boyero de berna y tiene 1 años y es juegueton y el mas
              cachorro de los perritos. Con el en el consultorio realizamos
              juegos de olfato o de búsqueda y pueden encontrarle diferentes
              objetivos,todavía se encuentra en proceso de formación.
            </p>
          </div>
        </div>
        <div className="animales-desc">
          <img src={quienessomos13} alt="" />
          <h3>Mila</h3>
          <div>
            <p>
              Ella es una Golden retriever , tiene una gran energía. Le gusta
              mucho la pelota y la comida. Ambas opciones las pueden usar para
              guiarla por circuito o saltar vallas por ej.
            </p>
          </div>
        </div>
      </div>
      <div className="preguntas-frecuentes">
        <div className="div-preguntas">
          <h3>Preguntas frecuentes</h3>
          <p>
            Aquí encontrarás las respuestas a algunas de las preguntas más
            comunes que nuestros clientes suelen hacer.{" "}
          </p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header >
                ¿Quienes pueden realizar estos tipos de terapia?
              </Accordion.Header>
              <Accordion.Body>
                Trabajamos con niños y adolecentes con y sin discapacidad, pero
                cualquier persona puede realizar esta terapia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                ¿Los animales están siempre presentes en la sesión?
              </Accordion.Header>
              <Accordion.Body>
                Todas las terapias No siempre tiene que estar presente el
                perro/a en la sesión, eso va a depender del objetivo que se
                quiera trabajar en cada tratamiento y de la actividad/juego a
                realizar.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Trabajan con obras sociales?</Accordion.Header>
              <Accordion.Body>
                Trabajamos con obras sociales y tambien de forma particular.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Como nos podemos contactar?</Accordion.Header>
              <Accordion.Body>
                A través de nuestras vías comunicativas: email y Whatsapp. Para
                más información, visita la página "Contacto".
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <img src={quienessomos14} alt="" />
        </div>
      </div>
      <div className="link-quienessomos">
        <img src={quienessomos15} alt="" />
        <h3>Ante cualquier consulta <Link to={"/contacto"}>estamos acá para ayudarte</Link></h3>
      </div>
    </div>
  );
}

export default QuienesSomos;
