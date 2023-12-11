import React from 'react';
import './Contact.css'; // Make sure you have a Contact.css for styling

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:pusthesh@mail.uc.edu">pusthesh@mail.uc.edu</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/srikanth-pusthem/" target="_blank" rel="noopener noreferrer">srikanth-pusthem</a></p>
      <p>GitHub: <a href="https://github.com/srikanthpusthem" target="_blank" rel="noopener noreferrer">srikanthpusthem</a></p>
    </section>
  );
};

export default Contact;
