import React, { useState } from 'react';

import './form.css';

function ContactForm() {
  const [settedName, setName] = useState('');
  const [settedEmail, setEmail] = useState('');
  const [settedPhone, setPhone] = useState('');
  const [settedSubject, setSubject] = useState('');
  const [settedMessage, setMessage] = useState('');

  function autoExpand(textarea) {
    textarea.style.height = '0';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    autoExpand(event.target);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    window.Email.send({
      SecureToken: '07646e85-d00a-4804-8cdd-8f6a646ef7c9',
      To: 'fededeniard@gmail.com',
      From: 'fededeniard@gmail.com',
      Subject: settedSubject,
      Body: `De: ${settedEmail} <br>
              Nombre: ${settedName} <br>
              Teléfono: ${settedPhone} <br>
              Mensaje: ${settedMessage}`,
    }).then(() =>
      alert('Tu correo electrónico fue enviado correctamente. ¡Gracias por contactarte!')
    );
  };

  return (
    <form className="contact-form" id="contactform">
      <label htmlFor="name">*Nombre:</label>
      <input
        className="input"
        type="text"
        name="Nombre"
        id="name"
        placeholder="Nombre"
        value={settedName}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email" className="email">
        *Correo Electrónico:
      </label>
      <input
        className="input"
        type="email"
        name="Email"
        id="email"
        placeholder="Correo Electrónico"
        value={settedEmail}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">Teléfono:</label>
      <input
        className="input"
        type="tel"
        name="Teléfono"
        id="phone"
        placeholder="Teléfono"
        value={settedPhone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[0-9]*"
      />
      <label htmlFor="subject">*Asunto:</label>
      <input
        className="input"
        type="text"
        name="Asunto"
        id="subject"
        placeholder="Asunto"
        value={settedSubject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <label htmlFor="message">*Mensaje:</label>
      <textarea
        name="Mensaje"
        id="message"
        placeholder="Mensaje"
        value={settedMessage}
        required
        onInput={handleInputChange}
      ></textarea>
      <div className="submit-area">
        <input className="input submit" type="submit" id="submit" onClick={sendEmail} />
        <label htmlFor="submit" id="submit-img" className="submit-img" onClick={sendEmail}>
          <img src="./src/assets/icons/right.svg" alt="Enviar" />
        </label>
      </div>
    </form>
  );
}

export default ContactForm;
