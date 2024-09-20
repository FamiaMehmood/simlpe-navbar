import React from 'react';
import{ Link} from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <h1>contact</h1>
      <p>This is a contact page</p>
      <Link to='/about'>go to HOME </Link>
    </div>
  );
};

export default Contact;