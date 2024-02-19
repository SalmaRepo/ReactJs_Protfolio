import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Footer from "../Footer/Footer";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzgyvtf",
        "template_a3x8k0i",
        form.current,
        "BWQjExIBVQJwK8clK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSent(!sent);
  };
  return (
    <div className="contactContainer">
      <div className="contactSection" id="Contact">
        {!sent && (
          <form ref={form} className="form" onSubmit={sendEmail}>
            <h2 className="formHead">Contact Me</h2>
            <label>Name</label>
            <input
              type="text"
              className="input message"
              name="user_name"
              placeholder="John Deer"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="johnDeer@gmail.com"
              className="input message"
            />
            <label>Message</label>
            <textarea name="message" className="input message" />
            <input type="submit" className="formSubmit" value="Send" />
          </form>
        )}

        <div className="successContainer">
          {sent && (
            <div className="success">
              <div class="success-checkmark">
                <div class="check-icon">
                  <span class="icon-line line-tip"></span>
                  <span class="icon-line line-long"></span>
                  <div class="icon-circle"></div>
                  <div class="icon-fix"></div>
                </div>
              </div>

              <h1 className="messageContact">Message Sent!</h1>
            </div>
          )}

          {sent && (
            <button className="formSubmitSent" onClick={() => setSent(false)}>
              Send More
            </button>
          )}
        </div>

        <div className="contactLinks">
          <a
            href="https://github.com/SalmaRepo"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/salma-begum-sheik-540bb061"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.xing.com/profile/Salma_Sheik2/web_profiles"
            className="contactLink"
          >
            <i
              class="fa-brands fa-xing"
              target="_blank"
              rel="noopener noreferrer"
            ></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
