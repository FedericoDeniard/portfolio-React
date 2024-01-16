import React, { useState } from 'react';

import './form.css';
import { useTranslation } from 'react-i18next';

function ContactForm() {

  const { t } = useTranslation();

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
    <form className="contact-form" id="contactform" data-netlify="true">
      <label htmlFor="name">*{t("NAME")}:</label>
      <input
        className="input"
        type="text"
        name="Nombre"
        id="name"
        placeholder={t("NAME")}
        value={settedName}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email" className="email">
        *{t("EMAIL")}
      </label>
      <input
        className="input"
        type="email"
        name="Email"
        id="email"
        placeholder={t("EMAIL")}
        value={settedEmail}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">{t("PHONE")}:</label>
      <input
        className="input"
        type="tel"
        name="Teléfono"
        id="phone"
        placeholder={t("PHONE")}
        value={settedPhone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[0-9]*"
      />
      <label htmlFor="subject">*{t("SUBJECT")}:</label>
      <input
        className="input"
        type="text"
        name="Asunto"
        id="subject"
        placeholder={t("SUBJECT")}
        value={settedSubject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <label htmlFor="message">*{t("MESSAGE")}:</label>
      <textarea
        name="Mensaje"
        id="message"
        placeholder={t("MESSAGE")}
        value={settedMessage}
        required
        onInput={handleInputChange}
      ></textarea>
      <div className="submit-area">
        <input className="input submit" type="submit" id="submit" onClick={sendEmail} value={t("SUBMIT")} />
        <label htmlFor="submit" id="submit-img" className="submit-img" onClick={sendEmail}>
          <img src="assets/icons/right.svg" alt="Enviar" />
        </label>
      </div>
    </form>
  );
}

export default ContactForm;
