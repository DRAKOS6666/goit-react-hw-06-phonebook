import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import './App.scss';

function App({ contacts }) {
  return (
    <div className="wrapper">
      <h1>DRAKOS Phonebook</h1>
      <ContactForm />

      <h2>
        Contacts: <span className="contactsTittle">{contacts.length}</span>
      </h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <div className="contactListWrapper">
            <ContactList />
          </div>
        </>
      ) : (
        <h3>Please add contacts...</h3>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps)(App);
