import React from "react";
import "./Footer.sass";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footerBottom">
        <div className="left">
          <p>Kevin Buenaño Evans 2024</p>
        </div>
        <div className="right">
          <p className="linkedin"><a href='https://www.linkedin.com/in/kevin-buena%C3%B1o-evans-038159262' target="_blank" rel="noopener noreferrer" className="linkedin-link">Linkedin</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
