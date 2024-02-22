import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./form.css";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  function autoExpand(textarea) {
    textarea.style.height = "0";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  const handleInputChange = (event) => {
    autoExpand(event.target);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = handleSubmit((data) => {
    const { email, name, phone, subject, body } = data;
    window.Email.send({
      SecureToken: "07646e85-d00a-4804-8cdd-8f6a646ef7c9",
      To: "fededeniard@gmail.com",
      From: "fededeniard@gmail.com",
      Subject: subject,
      Body: `De: ${email} <br>
              Nombre: ${name} <br>
              Teléfono: ${phone} <br>
              Mensaje: ${body}`,
    }).then(() =>
      alert(
        "Tu correo electrónico fue enviado correctamente. ¡Gracias por contactarte!"
      )
    );
    reset();
  });

  return (
    <form className="contact-form" id="contactform" onSubmit={sendEmail}>
      <label htmlFor="name">*{t("NAME")}:</label>
      <input
        className="input"
        type="text"
        name="Nombre"
        id="name"
        placeholder={t("NAME")}
        {...register("name", {
          required: { value: true, message: t("NAME-REQUIRED") },
          minLength: { value: 2, message: t("NAME-MIN__LENGTH") },
          maxLength: { value: 20, message: t("NAME-MAX__LENGTH") },
        })}
      />
      {errors.name && <span className="error">{errors.name.message}</span>}
      <label htmlFor="email" className="email">
        *{t("EMAIL")}
      </label>
      <input
        className="input"
        type="email"
        name="Email"
        id="email"
        placeholder={t("EMAIL")}
        {...register("email", {
          required: { value: true, message: t("EMAIL-REQUIRED") },
          pattern: {
            value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/,
            message: t("EMAIL-INVALID"),
          },
        })}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}
      <label htmlFor="phone">{t("PHONE")}:</label>
      <input
        className="input"
        type="tel"
        name="Teléfono"
        id="phone"
        placeholder={t("PHONE")}
        pattern="[0-9]*"
        {...register("phone", {
          required: { value: false },
        })}
      />
      <label htmlFor="subject">*{t("SUBJECT")}:</label>
      <input
        className="input"
        type="text"
        name="Asunto"
        id="subject"
        placeholder={t("SUBJECT")}
        {...register("subject", {
          required: { value: true, message: t("SUBJECT-REQUIRED") },
        })}
      />
      {errors.subject && (
        <span className="error">{errors.subject.message}</span>
      )}
      <label htmlFor="message">*{t("MESSAGE")}:</label>
      <textarea
        name="Mensaje"
        id="message"
        placeholder={t("MESSAGE")}
        onInput={handleInputChange}
        {...register("body", {
          required: { value: true, message: t("BODY-REQUIRED") },
        })}
      ></textarea>
      {errors.body && <span className="error">{errors.body.message}</span>}
      <div className="submit-area">
        <input
          className="input submit"
          type="submit"
          id="submit"
          value={t("SUBMIT")}
        />
        <label htmlFor="submit" id="submit-img" className="submit-img">
          <img src="assets/icons/right.svg" alt="Enviar" />
        </label>
      </div>
    </form>
  );
}

export default ContactForm;
