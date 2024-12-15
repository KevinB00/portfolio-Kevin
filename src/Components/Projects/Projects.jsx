import React from "react";
import "./Projects.sass";
import img_mascotas from "../../assets/menumascota.jpg";
import img_nutri from "../../assets/nutridelivery.jpg";
import kotlin from "../../assets/kotlin.jpg";
import android from "../../assets/android.jpg";
import sqlite from "../../assets/Sqlite.jpeg";
import github from "../../assets/github.jpg";
import react from "../../assets/react.jpg";
import bootstrap from "../../assets/bootstrap.jpg";
import php from "../../assets/php.jpg";
import amazon from "../../assets/amazonAWS.jpg";

function Projects() {
  const linkFidoFriend = "https://github.com/KevinB00/FidoFriend.git";
  const linkNutriDelivery = "https://github.com/KevinB00/nutri-delivery.git";

  return (
    <div id="proyectos" className="projects">
      <div className="projects-title">
        <h1>Mis proyectos</h1>
      </div>
      <div className="projects-cards">
        <div className="projects-card">
          <h2>FidoFriend</h2>
          <img
            className="project-img"
            src={img_mascotas}
            alt="proyecto mascotas"
          />
          <p>
            Este proyecto consiste en una aplicación Android para el cuidado de
            mascotas. Se podrá tener un registro de las mascotas para controlar
            su salud.
          </p>
          <div className="informacion">
            <div className="tecnologias">
              <img src={kotlin} alt="Kotlin" />
              <img src={android} alt="Android Studio" />
              <img className="sqlite" src={sqlite} alt="SQLite" />
            </div>
            <div className="links">
              <a
                className="link-github"
                href={linkFidoFriend}
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-card">
          <h2>NutriDelivery</h2>
          <img
            className="project-img"
            src={img_nutri}
            alt="imagen nutridelivery"
          />

          <p>
            Aplicación web para la conpra de alimentos y bebidas saludables de
            varios restaurantes de España desde la comodidad de tu casa.
          </p>
          <div className="informacion">
            <div className="tecnologias">
              <img className="react" src={react} alt="React" />
              <img src={bootstrap} alt="Bootstrap" />
              <img className="php" src={php} alt="PHP" />
              <img src={amazon} alt="AWS" />
            </div>
            <div className="links">
              <a
                className="link-github"
                href={linkNutriDelivery}
                target="_blank"
                rel="noreferrer"
              >
                <img className="github" src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
