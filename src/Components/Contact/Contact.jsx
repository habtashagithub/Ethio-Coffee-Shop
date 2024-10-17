import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_e6ga8xb", "template_1027rx9", form.current, {
      publicKey: "OKZMycJHvJmSr9th3",
    });
    e.target.reset();
  };

  return (
    <section className="contact" id="Contact">
      <h2 className="contact-heading">Contact us</h2>
      <form ref={form} onSubmit={sendEmail} action="#">
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <div className="input-box1">
          <input type="text" name="email subject" placeholder="Message" />
        </div>

        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default Contact;
