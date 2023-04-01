
import React from "react";
import quienes from "./images/quienes.png";
import perrito1 from "./images/perrito.png";
import huella from "./images/huella.png";
import psicologiaB from "./images/psicologiaB.png";
import psicopedagogiaB from "./images/psicopedagogiaB.png";
import terapiaB from "./images/terapiaB.png";
import capacitacionesB from "./images/capacitacionesB.png";
import conejito from "./images/conejito.png";
import comentario1 from "./images/comentarios/comentario1.png";
import comentario2 from "./images/comentarios/comentario2.png";
import comentario3 from "./images/comentarios/comentario3.png";
import comentario4 from "./images/comentarios/comentario4.png";
import jimeyorochi from "./images/comentarios/jimeyrochi.png";
import perrito2 from "./images/perrito2.png";
import CarouselMotiva from "./carousel";
import { useNavigate } from "react-router-dom";

export const Bienvenida = () => {
  const navigate = useNavigate();
  const navigateQuienesSomos = () => {
    navigate("/quienes-somos");
  };
  const navigateServicios = () => {
    navigate("/terapias");
  };
  const navigateCapacitaciones = () => {
    navigate("/capacitaciones ");
  };

  return (
    <div className="backgroundPrimary">
      <CarouselMotiva />
      <div className="bienvenidaContainer">
        <h2 className="titulos1">
          {" "}
          <img src={huella} alt="huella"></img> Te damos la bienvenida a{" "}
          <span className="titulosActive">Motiva</span>
        </h2>
        <p className="bienvenidaTexto">
          Luego de haber formado parte del equipo de ETAP por varios años,
          pionero en las Terapias Asistidas en nuestro país, hoy les damos la
          bienvenida a Motiva, un espacio fundado con mucho amor, compuesto por
          un equipo interdisciplinario de profesionales con formación académica
          y en Terapias Asistidas con Perros. <br></br>
          <br></br>
          Te invitamos a descubrir el espacio y cómo podemos ayudarte para que
          mejorar tu calidad de vida y la de tus seres queridos.
        </p>
      </div>
      <div className="textoImagenIzquierda">
        <img
          src={quienes}
          alt="quienesSomos"
          id="imgQuiene"
          className="fotos"
        ></img>
        <div className="textoTextoImagenIzquierda">
          <h3>Quienes Somos</h3>
          <br></br>
          <p className="quienestexto">
            Somos Rosario y Jimena, fundadoras y directoras del espacio de
            Motiva: <br></br>
          </p>
          <p>
            {" "}
            Un proyecto que nace de la necesidad de generar un enfoque distinto
            a las terapias tradicionales, logrando combinar las dos cosas que
            amamos: nuestra profesión con los animales.
          </p>
          <button className="btn btn-primary" onClick={navigateQuienesSomos}>
            Leer más
          </button>
          <img
            src={perrito1}
            alt="perrito1"
            className="imgPerrito"
            id="perrito1"
          ></img>
        </div>
      </div>
      <div className="nuestrasterapiasBienvenida">
        <h2 className="titulos1">
          Nuestras <span className="titulosActive">Terapias</span>{" "}
        </h2>

        <div className="cardsContainer">
          <div className="cardContainer">
            <img
              src={psicologiaB}
              alt="psicoogia"
              className="cardImageB fotos"
            ></img>
            <h2 className="titulos3 textoCentrado">Psicología</h2>
            <p className="textoCentrado">
              Se suele definir a la psicología como el estudio de los procesos
              mentales, las sensaciones, las percepciones y el comportamiento de
              un sujeto, más específicamente sobre las causas del mismo. En
              nuestro espacio pensamos a la psicología desde lo vincular. La
              psicología estudia la manera de vincularnos con el otro. Se
              pretende crear un ....
            </p>
          </div>
          <div className="cardContainer">
            <img
              src={psicopedagogiaB}
              alt="psicoogia"
              className="cardImageB fotos"
            ></img>
            <h2 className="titulos3 textoCentrado">Psicopedagogía</h2>
            <p className="textoCentrado">
              Enfocada en la evaluación, diagnóstico y tratamiento de
              dificultades en el aprendizaje. Tiene como objetivo mejorar el
              rendimiento académico, la autoestima y la motivación del niño o
              joven.
            </p>
          </div>
          <div className="cardContainer">
            <img
              src={terapiaB}
              alt="psicoogia"
              className="cardImageB fotos"
            ></img>
            <h2 className="titulos3 textoCentrado">Terapia Ocupacional</h2>
            <p className="textoCentrado">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed hendrerit felis, et ornare nisi. Quisque et nunc vel metus
              pellentesque molestie at ac justo.{" "}
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary textoCentrado "
          onClick={navigateServicios}
        >
          Conocer más
        </button>
      </div>
      <div className="textoImagenDerecha">
        <div className="textoTextoImagenDerecha">
          <h3>Capacitaciones</h3>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            hendrerit felis, et ornare nisi. Quisque et nunc vel metus
            pellentesque molestie at ac justo. Pellentesque varius volutpat
            libero egestas volutpat. Vestibulum malesuada lorem ac laoreet
            consequat. Aenean vel justo vulputate, cursus nunc ac, facilisis
            nisl.
          </p>
          <br></br>
          <p>
            Pellentesque varius volutpat libero egestas volutpat. Vestibulum
            malesuada lorem ac laoreet consequat. Aenean vel justo vulputate,
            cursus nunc ac, facilisis nisl.
          </p>
          <br></br>
          <button
            className="btn btn-primary textoCentrado "
            onClick={navigateCapacitaciones}
          >
            Conocer más
          </button>
          <br></br>
          <br></br>
          <br></br>
          <img src={conejito} alt=".." id="conejito"></img>
        </div>
        <img src={capacitacionesB} alt="..." className="fotos"></img>
      </div>

      <div className="huellasBackground textoCentrado">
        <div className="nuestrosPacientesDicenB">
          <h3>Nuestros pacientes dicen...</h3>
          <p>
            Nos enorgullece haber podido ayudar a tantas personas a mejorar su
            calidad de vida
          </p>

          <div className="nuestrosPacientesCards cardsContainer">
            <div className="cardContainer">
              <img
                src={comentario1}
                className="card-img-top cardComentario"
                alt="..."
              ></img>
            </div>
            <div className="cardContainer">
              <img
                src={comentario2}
                className="card-img-top cardComentario"
                alt="..."
              ></img>
            </div>
            <div className="cardContainer">
              <img
                src={comentario3}
                className="card-img-top cardComentario"
                alt="..."
              ></img>
            </div>
            <div className="card">
              <img
                src={comentario4}
                className="card-img-top cardComentario"
                alt="..."
              ></img>
            </div>
          </div>
          <div className="nuestrosPacientesCardsCarrousel">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={comentario1}
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={comentario2}
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={comentario3}
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={comentario4}
                    className="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="preFooterB">
          <h3 className="titulos3 textoCentrado">
            “Nos enorgullece haber podido ayudar a tantas personas a mejorar su
            calidad de vida. Amamos lo que hacemos, y ...”
          </h3>
          <br></br>
          <img alt="JimeYRochi" src={jimeyorochi}></img>
          <img
            src={perrito2}
            alt="perrit2"
            className="imgPerrito"
            id="perrito2"
          ></img>
        </div>
      </div>
    </div>
  );
};
