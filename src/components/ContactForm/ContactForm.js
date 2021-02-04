import React, { useState } from 'react';
import propTypes from 'prop-types';
import './ContactForm.scss';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
    event.target.reset();
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            className="formInput"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            required
            name="number"
            className="formInput"
            type="number"
            onChange={handleInputChange}
          />
        </label>
        <input className="submitBtn" type="submit" value="Add contact" />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;
