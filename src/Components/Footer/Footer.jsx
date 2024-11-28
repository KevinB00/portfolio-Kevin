import React from "react";
import "./Footer.sass";
import cv from '../../assets/CV_KevinRodrigo.pdf'

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footerBottom">
        <div className="left">
          <p>Kevin Buenaño Evans 2024</p>
        </div>
        <div className="right">
          <p className="cv"><a href={cv} target="_blank" rel="noopener noreferrer" className="cv-link">Descargar CV</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
