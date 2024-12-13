import React from "react";
import "./Perfil.sass";
import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/CV_KevinRodrigo.pdf";

const Perfil = () => {
  return (
    <div id="inicio" className="perfil">
      <img src={profile_img} alt="Mi foto" />
      <h1>Soy Kevin</h1>
      <br />
      <div className="profesiones-container">
        <span id="profesion1">Desarrollador</span>
        <ul className="profesiones">
          <li className="profesion2">Web</li>
          <li className="profesion2">Android</li>
          <li className="profesion2">JAVA</li>
          <li className="profesion2">PHP</li>
        </ul>
      </div>

      <p>
        Soy un Desarrollador Junior de Valencia, y tras terminar los dos ciclos
        superiores me dedico a la programación.
      </p>
      <div className="perfil-action">
        <div className="perfil-cv">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
