import React, { useState } from "react";
import "./NavBar.sass";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MenuSquare, XmarkCircle } from "@vectopus/atlas-icons-react";

const NavBar = () => {
  const [menu, setMenu] = useState("inicio");
  const menuRef = React.useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  }
  return (
    <div className="navbar">
      <MenuSquare onClick={openMenu} className="at-menu-square"/>
      <ul ref={menuRef} className="nav-menu">
        <XmarkCircle onClick={closeMenu} className="at-xmark-circle"/>
        <li>
          <AnchorLink offset={50} href="#inicio">
            <button onClick={() => setMenu("inicio")}>Inicio</button>
            {menu === "inicio" ? <div className="underline"></div> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#proyectos">
            <button onClick={() => setMenu("proyectos")}>Proyectos</button>
            {menu === "proyectos" ? <div className="underline"></div> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#sobremi">
            <button onClick={() => setMenu("sobremi")}>Sobre mi</button>
            {menu === "sobremi" ? <div className="underline"></div> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#habilidades">
            <button onClick={() => setMenu("habilidades")}>Habilidades</button>
            {menu === "habilidades" ? <div className="underline"></div> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="nav-connect-anchor" offset={50} href="#contacto">
        <div className="nav-connect">Contacta conmigo</div>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
