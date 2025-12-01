"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    emailjs.send(
      "service_e8reqol",         // <-- REPLACE
      "template_zv3u6sh",        // <-- REPLACE
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "5LfQbQ0yKpcUjCRmQ"          // <-- REPLACE
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("Something went wrong. Try again!");
    });
  };

  return (
    <div className="contact-page">

      {/* ------- TOP TITLE ------- */}
      <h1 className="contact-main-title">Contact</h1>
      <p className="contact-main-subtext">
        I&apos;m always excited to collaborate on innovative and exciting projects!
      </p>

      {/* ------- EMAIL + PHONE SECTION ------- */}
      <div className="contact-info-row">

        {/* Email */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 4L12 12L20 4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <p className="contact-info-label">E-mail</p>
            <p className="contact-info-value">bhavyarathore575@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="7" y="2" width="10" height="20" rx="3" />
              <circle cx="12" cy="18" r="1" />
            </svg>
          </div>
          <div>
            <p className="contact-info-label">Phone</p>
            <p className="contact-info-value">+91 7696698784</p>
          </div>
        </div>

      </div>

      {/* ------- SEND A MESSAGE ------- */}
      <h2 className="send-message-title">Send a message</h2>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>

          <label className="form-label">Name</label>
          <input
            className="form-input"
            placeholder="Jane Smith"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <label className="form-label">Email</label>
          <input
            className="form-input"
            placeholder="jane@framer.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            placeholder="How can I help you?"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button className="form-submit-btn">Send Message</button>

          {status && (
            <p style={{ marginTop: "10px", color: "#00c46c" }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
