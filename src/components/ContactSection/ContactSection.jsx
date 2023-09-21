import { useState } from "react";
import "./ContactSection.sass";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send(
      "service_hh68x8g",
      "template_mmpk2dg",
      templateParams,
      "VZufU4TkjCtbVTQMJ"
    );

    setName("");
    setEmail("");
    setMessage("");

    // .then((response) => {
    //   console.log("Email sent successfully:", response.status, response.text);
    // })
    // .catch((error) => {
    //   console.error("Email sending error:", error);
    // });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-container">
        <div>
          <form onSubmit={handlerSubmit}>
            <input
              required
              type="text"
              placeholder="Seu Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="Seu Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              required
              placeholder="Sua Mensagem"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div>
          <h2>Entre em contato</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
