import React from "react";
import my from "./assets/my.svg";

export default function Contact() {
  return (
    <div className="contact-container  py-5">
      {/* <div className="py-5"> */}
      <p className="title">Interseted working with me </p>

      <div className="social-media-container">
        <a href="/">
          <i class="bi bi-facebook"></i>
        </a>

        <a href="/">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="/">
          <i class="bi bi-github"></i>
        </a>
        <a href="/">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <p className="my-2">Get In Touch</p>
      {/* </div> */}
    </div>
  );
}
