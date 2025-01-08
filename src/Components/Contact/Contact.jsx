import React from "react";
import "./Contact.sass";
import { Envelope, Call, PinDestination } from "@vectopus/atlas-icons-react";
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c78c4af8-e5e5-4d78-8f3a-2b89c7a519a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Mensaje enviado");
    }
  };
  return (
    <div id="contacto" className="contact">
      <div className="contactTitulo">
        <h1>Contacto</h1>
      </div>
      <div className="contactSection">
        <div className="contactLeft">
          <div className="contactDeatails">
            <div className="contactDetail">
              <Envelope size={30} /> <p>kevin612003@gmail.com</p>
            </div>
            <div className="contactDetail">
              <Call size={30} /> <p>+34644743477</p>
            </div>
            <div className="contactDetail">
                <PinDestination size={30} /> <p>Valencia, España</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contactForm">
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" placeholder="Nombre" required />
          <label htmlFor="">Correo</label>
          <input type="email" name="email" placeholder="Correo" required />
          <label htmlFor="">Mensaje</label>
          <textarea name="message" rows="10" placeholder="Escribe tu mensaje" required></textarea>
          <button type="submit" className="contactButton">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
