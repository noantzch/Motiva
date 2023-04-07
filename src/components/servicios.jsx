import React from "react";
import portada from "./images/portadaServicios.png";
import tresperros from "./images/tresperros.png";
import huella from "./images/huella.png";
import perrito3 from "./images/perrito3.png";
import psico from "./images/psico.png";
import psicoPedago from "./images/psicoPedago.png";
import orientacion from "./images/orientacion.png";
import musicoTerapia from "./images/musicoTerapia.png";
import terapiaOcu from "./images/terapiaOcu.png";
import { AiFillCaretDown } from "react-icons/ai";
import perrito1 from "./images/perrito.png";

const Servicios = () => {
  return (
    <div className="backgroundPrimary">
      <img className="imgPortada" src={portada} alt="..."></img>
      <div className="textoImagenDerecha">
        <div className="textoTextoImagenDerecha">
          <h3>Sobre las terapias asistidas con perros </h3>
          <br></br>
          <p>
            Las terapias asistidas con animales consisten a un animal como
            recurso terapéutico con el objetivo de beneficiar las diferentes
            áreas de funcionamiento, física, social, cognitiva y emocional de
            las personas tratadas o pacientes.
          </p>
          <br></br>
          <p>
            Cabe destacar que no son terapias complementarias: son terapias de
            Psicología, Psicopedagogía, Ocupacional y Musicoterapia en las que
            se incorpora la presencia de los animales como parte integral de los
            tratamientos.
          </p>
          <br></br>
        </div>
        <img src={tresperros} alt="..." className="fotos" id="tresperros"></img>
      </div>
      <h3 className="textoCentrado">
        {" "}
        <img src={huella} alt="huella"></img> En Motiva{" "}
        <span className="titulosActive">nos especalizamos en... </span>{" "}
        <img src={perrito3} alt=".." id="perrito3"></img>{" "}
      </h3>
      <div className="textoImagenIzquierda">
        <img src={psico} alt="psico" className="fotos"></img>
        <div className="textoTextoImagenIzquierda">
          <h3 className="textoCentrado">Psicología</h3>
          <br></br>

          <div className="textoServiciosDesktop">
            <p>
              Se suele definir a la psicología como el estudio de los procesos
              mentales, las sensaciones, las percepciones y el comportamiento de
              un sujeto, más específicamente sobre las causas del mismo.
            </p>
            <br></br>
            <p>
              En nuestro espacio pensamos a la psicología desde lo vincular. La
              psicología estudia la manera de vincularnos con el otro. Se
              pretende crear un espacio donde los pacientes puedan desplegar su
              ser y descubramos juntos todo lo que hay por desarrollar.{" "}
            </p>
            <br></br>
            <p>
              Es un espacio de comunicación, de escucha, de mirada, de
              contención y construcción de andamiajes, convirtiéndose así en una
              plataforma de despliegue.
            </p>
          </div>

          <div className="textoServiciosMobile">
            <p>
              <a
                className="normalText"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                <p>
                  Se suele definir a la psicología como el estudio de los
                  procesos mentales, las sensaciones, las percepciones y el
                  comportamiento de un sujeto, más específicamente sobre las
                  causas del mismo.
                  <br></br>
                  <p className="textoCentrado btnShow myButton">
                    <AiFillCaretDown />
                  </p>
                </p>
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <div className="normalText">
                    <p>
                      En nuestro espacio pensamos a la psicología desde lo
                      vincular. La psicología estudia la manera de vincularnos
                      con el otro. Se pretende crear un espacio donde los
                      pacientes puedan desplegar su ser y descubramos juntos
                      todo lo que hay por desarrollar.{" "}
                    </p>
                    <br></br>
                    <p>
                      Es un espacio de comunicación, de escucha, de mirada, de
                      contención y construcción de andamiajes, convirtiéndose
                      así en una plataforma de despliegue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="textoImagenDerecha">
        <div className="textoTextoImagenDerecha">
          <h3 className="textoCentrado">Psicopedagogía</h3>
          <br></br>
          <div className="textoServiciosDesktop">
            <p>
              La psicopedagogía se centra en el estudio de un sujeto en
              situación de aprendizaje, en cualquier etapa de la vida. Además
              del estudio de los procesos de desarrollo cognitivo (durante todas
              las etapas de la vida del individuo), la psicopedagogía tiene tres
              objetivos prioritarios dentro de la práctica: la prevención, la
              detección y la intervención de las dificultades de aprendizaje de
              un individuo.
            </p>
            <br></br>
            <p>
              El proceso de aprendizaje definido en sentido amplio es aquel que
              incluye el conjunto de factores que inciden en las
              particularidades de la relación de un sujeto con el mundo cuando
              integra e incorpora conocimientos. No se circunscribe
              exclusivamente al aprendizaje escolar sino a la manera individual
              de procesar el conocimiento, condicionada por la capacidad
              subjetiva para instrumentarlas y transformarla{" "}
            </p>
            <br></br>
          </div>

          <div className="textoServiciosMobile">
            <p>
              <a
                className="normalText"
                data-bs-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                <p>
                  La psicopedagogía se centra en el estudio de un sujeto en
                  situación de aprendizaje, en cualquier etapa de la vida.
                  Además del estudio de los procesos de desarrollo cognitivo
                  (durante todas las etapas de la vida del individuo), la
                  psicopedagogía tiene tres objetivos prioritarios dentro de la
                  práctica: la prevención, la detección y la intervención de las
                  dificultades de aprendizaje de un individuo
                  <br></br>
                  <p className="textoCentrado btnShow myButton">
                    <AiFillCaretDown />
                  </p>
                </p>
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <div className="normalText">
                    <p>
                      El proceso de aprendizaje definido en sentido amplio es
                      aquel que incluye el conjunto de factores que inciden en
                      las particularidades de la relación de un sujeto con el
                      mundo cuando integra e incorpora conocimientos. No se
                      circunscribe exclusivamente al aprendizaje escolar sino a
                      la manera individual de procesar el conocimiento,
                      condicionada por la capacidad subjetiva para
                      instrumentarlas y transformarlas.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={psicoPedago} alt="psico" className="fotos"></img>
      </div>
      <div className="textoImagenIzquierda">
        <img src={terapiaOcu} alt="psico" className="fotos"></img>
        <div className="textoTextoImagenIzquierda">
          <h3 className="textoCentrado">Terapia Ocupacional </h3>
          <br></br>
          <div className="textoServiciosDesktop">
            <p>
              Consiste en el uso terapéutico de las actividades de cuidado,
              trabajo y juego para incrementar la independencia funcional y
              prevenir la incapacidad; puede incluir la adaptación de tareas o
              del entorno para alcanzar la máxima independencia y aumentar la
              calidad de vida.
            </p>
            <br></br>
            <p>
              Un profesional de terapia ocupacional trabaja con personas de
              todas las edades y con una variedad de necesidades, incluyendo
              personas con discapacidades físicas, mentales, emocionales o
              sociales, utilizando técnicas para mejorar la coordinación, la
              fuerza, el equilibrio y la destreza manual, así como también para
              mejorar la capacidad de atención, la memoria y el pensamiento
              crítico.{" "}
            </p>
            <br></br>
          </div>

          <div className="textoServiciosMobile">
            <p>
              <a
                className="normalText"
                data-bs-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                <p>
                  Consiste en el uso terapéutico de las actividades de cuidado,
                  trabajo y juego para incrementar la independencia funcional y
                  prevenir la incapacidad; puede incluir la adaptación de tareas
                  o del entorno para alcanzar la máxima independencia y aumentar
                  la calidad de vida.
                  <br></br>
                  <p className="textoCentrado btnShow myButton">
                    <AiFillCaretDown />
                  </p>
                </p>
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample3"
                >
                  <div className="normalText">
                    <p>
                      Un profesional de terapia ocupacional trabaja con personas
                      de todas las edades y con una variedad de necesidades,
                      incluyendo personas con discapacidades físicas, mentales,
                      emocionales o sociales, utilizando técnicas para mejorar
                      la coordinación, la fuerza, el equilibrio y la destreza
                      manual, así como también para mejorar la capacidad de
                      atención, la memoria y el pensamiento crítico.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="textoImagenDerecha">
        <div className="textoTextoImagenDerecha">
          <h3 className="textoCentrado">Musicoterapia</h3>
          <br></br>
          <div className="textoServiciosDesktop">
            <p>
              La musicoterapia es una disciplina de la salud que utiliza el
              recurso de la música y sus elementos (ritmo, melodía y armonia)
              para promover, prevenir y rehabilitar la salud. Esta tarea es
              realizada por un musicoterapeuta calificado. En ese proceso, el
              musicoterapeuta promueve y registra cambios expresivos, receptivos
              y relacionales que dan cuenta de la evolución.
            </p>
            <br></br>
          </div>

          <div className="textoServiciosMobile">
            <p>
              <a
                className="normalText"
                data-bs-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                <p>
                  La musicoterapia es una disciplina de la salud que utiliza el
                  recurso de la música y sus elementos (ritmo, melodía y
                  armonia) para promover, prevenir y rehabilitar la salud.
                  <br></br>
                  <p className="textoCentrado btnShow myButton">
                    <AiFillCaretDown />
                  </p>
                </p>
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample4"
                >
                  <div className="normalText">
                    <p>
                      Esta tarea es realizada por un musicoterapeuta calificado.
                      En ese proceso, el musicoterapeuta promueve y registra
                      cambios expresivos, receptivos y relacionales que dan
                      cuenta de la evolución.{" "}
                    </p>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={musicoTerapia} alt="psico" className="fotos"></img>
      </div>
      <div className="textoImagenIzquierda">
        <img src={orientacion} alt="psico" className="fotos"></img>
        <div className="textoTextoImagenIzquierda">
          <h3 className="textoCentrado">Orientacion a familias</h3>
          <br></br>
          <div className="textoServiciosDesktop">
            <p>
              Como parte sustancial de los tratamientos con niños, aparece el
              trabajo con sus familias. Se trabaja con padres, hermanos y otros
              familiares o colaboradores en pos de favorecer y acompañar el
              desarrollo de los chicos de la mejor manera.
            </p>
            <br></br>
            <p>
              Se busca favorecer espacios de intercambio y de contención siempre
              que se puede y el tratamiento o las familias lo requieren.{" "}
            </p>
            <br></br>
            <p>
              A su vez, se realiza también un importante trabajo con las
              diferentes instituciones educativas a las que los chicos asisten
              ya que son una parte grande de su día a día y consideramos
              fundamental estar en comunicación.
            </p>
          </div>

          <div className="textoServiciosMobile">
            <p>
              <a
                className="normalText"
                data-bs-toggle="collapse"
                href="#multiCollapseExample5"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                <p>
                  Como parte sustancial de los tratamientos con niños, aparece
                  el trabajo con sus familias. Se trabaja con padres, hermanos y
                  otros familiares o colaboradores en pos de favorecer y
                  acompañar el desarrollo de los chicos de la mejor manera.
                  <br></br>
                  <p className="textoCentrado btnShow myButton">
                    <AiFillCaretDown />
                  </p>
                </p>
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample5"
                >
                  <div className="normalText">
                    <p>
                      Se busca favorecer espacios de intercambio y de contención
                      siempre que se puede y el tratamiento o las familias lo
                      requieren..{" "}
                    </p>
                    <br></br>
                    <p>
                      A su vez, se realiza también un importante trabajo con las
                      diferentes instituciones educativas a las que los chicos
                      asisten ya que son una parte grande de su día a día y
                      consideramos fundamental estar en comunicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="sobreElProceso">
        <div className="sobreElProcesoTitulos">
          <h3 className="textoCentrado">Sobre el proceso</h3>
          <br></br>
          <p className="textoCentrado">
            Sabemos que las Terapias Asistidas con animales son nuevas en
            Argentina, así que te contamos en qué consisten los pasos luego de
            entrar en contacto:
          </p>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="lineaNumerosDektop">
          <div class="line-with-circles">
            <div class="circle small"></div>
            <div class="circle big">1</div>
            <div class="circle big">2</div>
            <div class="circle big">3</div>
            <div class="circle small"></div>
          </div>
        </div>
        <div className="pasosDesktop">
          <div className="textoPasos">
            <h3>Entrevista con Motiva</h3>
            <br></br>
            <p>
              En primer lugar realizaremos una entrevista para conocer la
              situación y necesidades del paciente. <br></br>Esta entrevista es
              gratuita
            </p>
          </div>
          <div className="textoPasos">
            <h3>Entrevista con el profesional</h3>
            <br></br>
            <p>
              La lleva a cabo el profesional a cargo de la terapia que va a
              comenzar el paciente, con los padres o tutores del mismo, con el
              fin de recabar la información necesaria para diseñar los objetivos
              del tratamiento.
            </p>
          </div>
          <div className="textoPasos">
            <h3>Primera sesión</h3>
            <br></br>
            <p>Se comienza a trabajar con el paciente.</p>
          </div>
        </div>

        <div className="lineaNumerosMobile">
          <div class="line-with-circles">
            <div class="circle small"></div>
            <br></br>
            <br></br>
            <div class="circle big">1</div>
            <br></br>
            <div className="textoPasos">
              <h3>Entrevista con Motiva</h3>
              <br></br>
              <br></br>
              <p>
                En primer lugar realizaremos una entrevista para conocer la
                situación y necesidades del paciente. <br></br>Esta entrevista
                es gratuita
              </p>
            </div>
            <br></br>
            <div class="circle big">2</div>
            <br></br>
            <div className="textoPasos">
              <h3>Entrevista con el profesional</h3>
              <br></br>
              <br></br>
              <p>
                La lleva a cabo el profesional a cargo de la terapia que va a
                comenzar el paciente, con los padres o tutores del mismo, con el
                fin de recabar la información necesaria para diseñar los
                objetivos del tratamiento.
              </p>
            </div>
            <br></br>
            <div class="circle big">3</div>
            <br></br>
            <div className="textoPasos">
              <h3>Primera sesión</h3>
              <br></br>
              <br></br>
              <p>Se comienza a trabajar con el paciente.</p>
            </div>
            <br></br>
            <br></br>
            <div class="circle small"></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="ayudarte">
        <h3 className="textoCentrado">
          <span className="titulosActive">Ante cualquier consulta</span>{" "}
          <a
            href="https://api.whatsapp.com/send?phone=541149459525"
            target="_blank"
            rel="noreferrer"
            className="ayudarte"
          >
            estamos acá para ayudarte
          </a>
        </h3>
        <img src={perrito1} className="imgPerrito" alt=".." id="perrito4"></img>
      </div>
    </div>
  );
};

export default Servicios;
