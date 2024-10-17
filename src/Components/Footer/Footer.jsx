import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ethiopia Coffee</h1>
        <p className="footer__description">
          The best place to make <br />
          more free and relax
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Arbaminch,Ethiopia <br />
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +251927056715 <br />
              Ethiopiancoffee@email.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact us</h2>
            <div className="footer__information">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="input-box">
              <input
                className="input1"
                type="text"
                name="email subject"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="footer_button">
              Send Message
            </button>
          </div>
        </div>
        <div className="footer__group">
          <ul className="footer__social">
            <a href="#facebook" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="#instagram"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#tiktok" target="_blank" className="footer__social-link">
              <i className="bx bxl-tiktok"></i>
            </a>
          </ul>
          <span className="footer__copy">
            Copyright &#169; Habtamua. All rigths reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
