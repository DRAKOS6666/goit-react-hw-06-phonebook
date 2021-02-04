import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import * as actions from '../../redux/contacts/contacts-actions';

import './App.scss';

function App({
  contacts,
  filter,
  setContacts,
  addContact,
  findContact,
  deleteContact,
}) {
  useEffect(() => {
    const contactsInLocalStorage = localStorage.getItem('contacts');
    if (contactsInLocalStorage) {
      try {
        setContacts(JSON.parse(contactsInLocalStorage));
        return;
      } catch (error) {
        console.log('LocalStoage parse Error');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isUnique = name => !contacts.some(contact => contact.name === name);

  const createContact = ({ name, number }) => {
    if (name !== '' && isUnique(name)) {
      const id = uuidv4();
      const newContact = { name, number, id };
      addContact(newContact);
    }
    if (!isUnique(name)) {
      alert(`${name} is already in contact`);
    }
  };

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={createContact} />

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
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setContacts: contacts => dispatch(actions.setContacts(contacts)),
    addContact: contact => dispatch(actions.addContact(contact)),
    // deleteContact: id => dispatch(actions.deleteContact(id)),
    findContact: text => dispatch(actions.findContact(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
