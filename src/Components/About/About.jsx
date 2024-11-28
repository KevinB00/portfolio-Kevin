import React from "react";
import "./About.sass";

const About = () => {
  return (
    <div id="sobremi" className="about">
      <div className="aboutTitulo">
        <h1>Sobre mí</h1>
      </div>
      <div className="aboutSecciones">
        <div className="aboutTexto">
          <p>
            Soy un Desarrollador recién titulado de los ciclos: Ciclo Superior
            de Desarrollo de Aplicaciones Multiplataforma, Ciclo Superior de
            Desarrollo de Aplicaciones Web.
          </p>
          <p>
            Y durante estos dos ciclos he ido perfeccionando mis habilidades en
            el desarrollo de aplicaciones web en dónde empezé a aprender React,
            PHP, mi proyecto lo desplegué en AWS, y mobile con Kotlin y Android
            Studio desarrolle mi primera app movil. Las prácticas de empresa me
            ayudaron a explorar nuevas tecnologías y conocer nuevas metodologías
            de flujo de trabajo como JIRA.
          </p>
        </div>
        <div id="habilidades" className="aboutSkills">
          <h3>Lenguajes de programación</h3>
          <div className="aboutSkill">
            <p>Java</p>
            <hr style={{ width: "48%" }} />
          </div>
          <div className="aboutSkill">
            <p>Kotlin</p>
            <hr style={{ width: "40%" }} />
          </div>
          <h3>Backend</h3>
          <div className="aboutSkill">
            <p>PHP</p>
            <hr style={{ width: "38%" }} />
          </div>
          <div className="aboutSkill">
            <p>Spring</p>
            <hr style={{ width: "27%" }} />
          </div>
          <h3>Frontend</h3>
          <div className="aboutSkill">
            <p>HTML/CSS</p>
            <hr style={{ width: "55%" }} />
          </div>
          <div className="aboutSkill">
            <p>Sass</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="aboutSkill">
            <p>JavaScript</p>
            <hr style={{ width: "45%" }} />
          </div>
          <div className="aboutSkill">
            <p>React</p>
            <hr style={{ width: "36%" }} />
          </div>
          <div className="aboutSkill">
            <p>Bootstrap</p>
            <hr style={{ width: "45%" }} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
