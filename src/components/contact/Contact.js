/** @format */

import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com"></a>
            <form action=""></form>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@Mariam</h5>
            <a href="https://twitter.com/mariam"></a>
            <form action=""></form>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Chat With Me</h5>
            <a href="https://api.whatsapp.com/send?phone=08182921823"></a>
            <form action=""></form>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
