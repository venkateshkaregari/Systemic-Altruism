import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/your_profile">LinkedIn</a>
        <a href="https://github.com/your_profile">GitHub</a>
        {/* Add more social media links as needed */}
      </div>
    </section>
  );
};

export default Contact;
