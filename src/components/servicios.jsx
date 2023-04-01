<<<<<<< HEAD
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
                href="#multiCollapseExample2"
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
                  id="multiCollapseExample2"
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
        <img src={psicoPedago} alt="psico" className="fotos"></img>
      </div>
      <div className="textoImagenIzquierda">
        <img src={terapiaOcu} alt="psico" className="fotos"></img>
        <div className="textoTextoImagenIzquierda">
          <h3 className="textoCentrado">Terapia Ocupacional </h3>
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
                href="#multiCollapseExample3"
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
                  id="multiCollapseExample3"
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
          <h3 className="textoCentrado">Musicoterapia</h3>
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
                href="#multiCollapseExample4"
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
                  id="multiCollapseExample4"
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
        <img src={musicoTerapia} alt="psico" className="fotos"></img>
      </div>
      <div className="textoImagenIzquierda">
        <img src={orientacion} alt="psico" className="fotos"></img>
        <div className="textoTextoImagenIzquierda">
          <h3 className="textoCentrado">Orientacion a familias</h3>
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
                href="#multiCollapseExample5"
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
                  id="multiCollapseExample5"
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
          <a href="google.com" className="ayudarte">
            estamos acá para ayudarte
          </a>
        </h3>
        <img src={perrito1} className="imgPerrito" alt=".." id="perrito4"></img>
      </div>
    </div>
  );
};

export default Servicios;
=======
import React from 'react'
import portada from './images/portadaServicios.png';
import tresperros from './images/tresperros.png';
import huella from './images/huella.png';
import perrito3 from './images/perrito3.png';
import psico from './images/psico.png';
import psicoPedago from './images/psicoPedago.png';
import orientacion from './images/orientacion.png';
import musicoTerapia from './images/musicoTerapia.png';
import terapiaOcu from './images/terapiaOcu.png';
import {AiFillCaretDown} from 'react-icons/ai';
import perrito1 from './images/perrito.png'

const Servicios = () => {

  
  return (
    <div className='backgroundPrimary'>
      <img className='imgPortada' src={portada} alt="..." ></img>
      <div className='textoImagenDerecha'>
          <div className='textoTextoImagenDerecha'>
            <h3>Sobre las terapias asistidas con perros </h3>
            <br></br>
            <p>Las terapias asistidas con animales consisten a un animal como recurso terapéutico con el objetivo de beneficiar las diferentes áreas de funcionamiento, física, social, cognitiva y emocional de las personas tratadas o pacientes.</p>
            <br></br>
            <p>Cabe destacar que no son terapias complementarias: son terapias de Psicología, Psicopedagogía, Ocupacional y Musicoterapia en las que se incorpora la presencia de los animales como parte integral de los tratamientos.</p><br></br>
          </div>
          <img src={tresperros} alt="..." className='fotos' id='tresperros'></img>
        </div>
      <h3 className='textoCentrado'> <img src={huella} alt="huella"></img>  En Motiva <span className='titulosActive'>nos especalizamos en... </span> <img src={perrito3} alt=".." id='perrito3'></img> </h3>
      <div className='textoImagenIzquierda'>
            <img src={psico} alt="psico" className='fotos'></img>
            <div className='textoTextoImagenIzquierda'>
                <h3 className='textoCentrado'>Psicología</h3><br></br>


                <div className='textoServiciosDesktop'>
                    <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo.</p>
                    <br></br>
                    <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                    <br></br>
                    <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                </div>

                <div className='textoServiciosMobile'>
                    <p>
                      <a className='normalText' data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo. 
                          <br></br>
                          <p className='textoCentrado btnShow myButton' >
                            <AiFillCaretDown />
                            </p> 

                        </p>
                        
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                          <div className="normalText">
                              <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                              <br></br>
                              <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                    
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>

            </div>
        </div>
        <div className='textoImagenDerecha'>
            <div className='textoTextoImagenDerecha'>
                <h3 className='textoCentrado'>Psicopedagogía</h3><br></br>
                <div className='textoServiciosDesktop'>
                    <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo.</p>
                    <br></br>
                    <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                    <br></br>
                    <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                </div>

                <div className='textoServiciosMobile'>
                    <p>
                      <a className='normalText' data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo. 
                          <br></br>
                          <p className='textoCentrado btnShow myButton' >
                            <AiFillCaretDown />
                            </p> 

                        </p>
                        
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">
                          <div className="normalText">
                              <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                              <br></br>
                              <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                    
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>
            </div>
            <img src={psicoPedago} alt="psico" className='fotos'></img>
        </div>
        <div className='textoImagenIzquierda'>
            <img src={terapiaOcu} alt="psico" className='fotos'></img>
            <div className='textoTextoImagenIzquierda'>
            <h3 className='textoCentrado'>Terapia Ocupacional </h3><br></br>
            <div className='textoServiciosDesktop'>
                    <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo.</p>
                    <br></br>
                    <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                    <br></br>
                    <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                </div>

                <div className='textoServiciosMobile'>
                    <p>
                      <a className='normalText' data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo. 
                          <br></br>
                          <p className='textoCentrado btnShow myButton' >
                            <AiFillCaretDown />
                            </p> 

                        </p>
                        
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample3">
                          <div className="normalText">
                              <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                              <br></br>
                              <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                    
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='textoImagenDerecha'>
            <div className='textoTextoImagenDerecha'>
                <h3 className='textoCentrado'>Musicoterapia</h3><br></br>
                <div className='textoServiciosDesktop'>
                    <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo.</p>
                    <br></br>
                    <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                    <br></br>
                    <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                </div>

                <div className='textoServiciosMobile'>
                    <p>
                      <a className='normalText' data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo. 
                          <br></br>
                          <p className='textoCentrado btnShow myButton' >
                            <AiFillCaretDown />
                            </p> 

                        </p>
                        
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample4">
                          <div className="normalText">
                              <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                              <br></br>
                              <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                    
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>
            </div>
            <img src={musicoTerapia} alt="psico" className='fotos'></img>
        </div>
        <div className='textoImagenIzquierda'>
            <img src={orientacion} alt="psico" className='fotos'></img>
            <div className='textoTextoImagenIzquierda'>
                <h3 className='textoCentrado'>Orientacion a familias</h3><br></br>
                <div className='textoServiciosDesktop'>
                    <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo.</p>
                    <br></br>
                    <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                    <br></br>
                    <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                </div>

                <div className='textoServiciosMobile'>
                    <p>
                      <a className='normalText' data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <p>Se suele definir a la psicología como el estudio de los procesos mentales, las sensaciones, las percepciones y el comportamiento de un sujeto, más específicamente sobre las causas del mismo. 
                          <br></br>
                          <p className='textoCentrado btnShow myButton' >
                            <AiFillCaretDown />
                            </p> 

                        </p>
                        
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseExample5">
                          <div className="normalText">
                              <p>En nuestro espacio pensamos a la psicología desde lo vincular. La psicología estudia la manera de vincularnos con el otro. Se pretende crear un espacio donde los pacientes puedan desplegar su ser y descubramos juntos todo lo que hay por desarrollar.  </p>
                              <br></br>
                              <p>Es un espacio de comunicación, de escucha, de mirada, de contención y construcción de andamiajes, convirtiéndose así en una plataforma de despliegue.</p>
                    
                          </div>
                        </div>
                      </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className='sobreElProceso'>
          <div className='sobreElProcesoTitulos'>
            <h3 className='textoCentrado'>Sobre el proceso</h3><br></br>
            <p className='textoCentrado'>Sabemos que las Terapias Asistidas con animales son nuevas en Argentina, así que te contamos en qué consisten los pasos luego de entrar en contacto:</p><br></br><br></br><br></br>
          </div>

          <div className='lineaNumerosDektop'>
            <div class="line-with-circles">
              <div class="circle small"></div>
              <div class="circle big">1</div>
              <div class="circle big">2</div>
              <div class="circle big">3</div>
              <div class="circle small"></div>
            </div>
          </div>
          <div className='pasosDesktop'>
            <div className='textoPasos'>
              <h3>Entrevista con Motiva</h3><br></br>
              <p>En primer lugar realizaremos una entrevista para conocer la situación y necesidades del paciente. <br></br>Esta entrevista es gratuita</p>
            </div>
            <div className='textoPasos'>
              <h3>Entrevista con el profesional</h3><br></br>
              <p>La lleva a cabo el profesional a cargo de la terapia que va a comenzar el paciente, con los padres o tutores del mismo, con el fin de recabar la información necesaria para diseñar los objetivos del tratamiento.</p>
            </div>
            <div className='textoPasos'>
              <h3>Primera sesión</h3><br></br>
              <p>Se comienza a trabajar con el paciente.</p>
            </div>
          </div>

          <div className='lineaNumerosMobile'>
            <div class="line-with-circles">
              <div class="circle small"></div>
              <br></br>
              <br></br>
              <div class="circle big">1</div>
              <br></br>
              <div className='textoPasos'>
              <h3>Entrevista con Motiva</h3><br></br>
              <br></br>
              <p>En primer lugar realizaremos una entrevista para conocer la situación y necesidades del paciente. <br></br>Esta entrevista es gratuita</p>
            </div>
              <br></br>
              <div class="circle big">2</div>
              <br></br>
              <div className='textoPasos'>
              <h3>Entrevista con el profesional</h3><br></br>
              <br></br>
              <p>La lleva a cabo el profesional a cargo de la terapia que va a comenzar el paciente, con los padres o tutores del mismo, con el fin de recabar la información necesaria para diseñar los objetivos del tratamiento.</p>
            </div>
            <br></br>
              <div class="circle big">3</div>
              <br></br>
              <div className='textoPasos'>
              <h3>Primera sesión</h3><br></br>
              <br></br>
              <p>Se comienza a trabajar con el paciente.</p>
            </div>
              <br></br>
              <br></br>
              <div class="circle small"></div>
            </div>
          </div>

        </div>
      <br></br><br></br>
        <div className='ayudarte'>
          <h3 className='textoCentrado' ><span className='titulosActive'>Ante cualquier consulta</span> <a href='www.google.com' className='ayudarte'>estamos acá para ayudarte</a></h3>
          <img src={perrito1} className="imgPerrito" alt=".." id='perrito4'></img>
        </div>

    </div>
  )
}

export default Servicios
>>>>>>> ab82b325b377f81d25f81f6ba1f94c562c23cc33
