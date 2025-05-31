import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_n2s6xaa',         // ✅ Your actual EmailJS service ID
      'template_1fq3yxm',        // ✅ Your actual template ID
      form.current,
      '_ijeBDVbi5RiZ-ymt'        // ✅ Your actual public key (not private key!)
    )
    .then((result) => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('❌ Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    });
  };

  const sectionStyle = {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: '#f1f5f9',
    padding: '5rem 2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#38bdf8',
    fontWeight: 'bold',
  };

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const contactInfoStyle = {
    flex: '1',
    minWidth: '250px',
    padding: '1.5rem',
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(56, 189, 248, 0.1)',
  };

  const formStyle = {
    flex: '2',
    minWidth: '300px',
    padding: '1.5rem',
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(56, 189, 248, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#f1f5f9',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <div style={wrapperStyle}>
        <div style={contactInfoStyle}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f8fafc' }}>Get in Touch</h3>
          <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '0.5rem', color: '#38bdf8' }} /> sumitshukla9118@gmail.com
          </p>
          <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <FaPhone style={{ marginRight: '0.5rem', color: '#38bdf8' }} /> +91 7318206263
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: '#38bdf8' }} /> Prayagraj, India
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
          <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
          <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
          <textarea name="message" placeholder="Your Message" rows="5" style={{ ...inputStyle, resize: 'none' }} required />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
