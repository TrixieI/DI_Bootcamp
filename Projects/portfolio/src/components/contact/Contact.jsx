import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const notify = () => toast("Email sent successfully!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8a0lbp3', 'template_dw9nbw8', form.current, 'user_ADxNPM5StMMwNQlXeyi3P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      notify()
  };

  return (
    <form className="footer_contact" ref={form} onSubmit={sendEmail}>
      <label>Subject</label>
      <input placeholder="Subject..." required type="text" name="subject" />
      <label>Name</label>
      <input placeholder="Your name..." required type="text" name="name" />
      <label>Email</label>
      <input placeholder="Your email address..." required type="email" name="email" />
      <label>Message</label>
      <textarea placeholder="Your message..." required name="message" />
      <input className="button" type="submit" value="Send" />
      <ToastContainer />
    </form>
  );
};