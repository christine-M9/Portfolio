// ContactMe.jsx
import React from 'react';

const ContactMe = () => {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <p>
        Let's connect! Feel free to reach out if you have any questions or if you're interested
        in discussing potential projects or collaborations.
      </p>
      <form action="https://formspree.io/f/mjvnbbop" method="POST">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Christine Juma" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="christine@example.com" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Write your message here..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
