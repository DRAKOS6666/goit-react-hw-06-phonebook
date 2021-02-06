import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';

import './ContactForm.scss';

function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let errorMessage;
  const setError = errorText => {
    errorMessage = errorText;
  };

  const isUnique = name => !contacts.some(contact => contact.name === name);

  const handleNameChange = e => {
    setName(e.target.value.trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }
    if (!isUnique(name)) {
      toast.warn(`${name} is already in contact`);
      return;
    }
    addContact(name, number);
    toast('Contact successfully added.');
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
            placeholder="Enter contact name"
            tabIndex="1"
            autoFocus
            required
            className="nameInput"
            type="text"
            onChange={handleNameChange}
          />
        </label>
        <label>
          Phone Number:
          <PhoneInput
            tabIndex="2"
            international
            placeholder="Enter number"
            value={number}
            onChange={setNumber}
            error={
              number
                ? isPossiblePhoneNumber(number)
                  ? undefined
                  : setError('Invalid phone number')
                : setError('Phone number required')
            }
          />
        </label>
        <input className="submitBtn" type="submit" value="ADD CONTACT" />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) =>
      dispatch(actions.addContact({ name, number })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
