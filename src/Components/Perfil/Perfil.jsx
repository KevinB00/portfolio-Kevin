import React from "react";
import "./Perfil.sass";
import profile_img from "../../assets/profile_img.jpg";
import { Linkedin } from "@vectopus/atlas-icons-react";
import github from "../../assets/github.png";

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
        <a
          href="https://www.linkedin.com/in/kevin-buena%C3%B1o-evans-038159262"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <Linkedin className="perfil-linkedin" />
        </a>
        <div className="github-link">
          <a
            href="https://github.com/KevinB00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" className="perfil-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
