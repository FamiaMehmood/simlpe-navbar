import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is an about page</p>
      <Link to='/contacts'>go to contact</Link>
    </div>
  );
};

export default About;