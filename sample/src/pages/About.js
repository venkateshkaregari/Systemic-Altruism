import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>Hi, I'm Jane Doe, a passionate web developer with expertise in front-end technologies. I love creating engaging and responsive web experiences.</p>
      <ul>
        <li>HTML5</li>
        <li>CSS3 / SCSS</li>
        <li>JavaScript / TypeScript</li>
        <li>React.js / Next.js</li>
      </ul>
      <img src="https://via.placeholder.com/150" alt="Jane Doe" />
    </section>
  );
};

export default About;
