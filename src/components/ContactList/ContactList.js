import React from 'react';

import { connect } from 'react-redux';

import ContactListItem from './ContactListItem/ContactListItem';
import './ContactList.scss';

function ContactList({ contacts, filter, deleteContact }) {
  const filteredContacts = filter
    ? contacts.filter(contact => {
        if (contact.name) {
          return (
            contact.name.toLowerCase().includes(filter) ||
            contact.number.toLowerCase().includes(filter)
          );
        }
        return false;
      })
    : contacts;

  return filteredContacts.length === 0 ? (
    <h3>Nothing found</h3>
  ) : (
    <>
      {filter && filteredContacts.length > 0 && (
        <h3 className="findedTittle">
          Was finded <span>{filteredContacts.length}</span> contact(s)
        </h3>
      )}
      <ul className="contactList">
        {filteredContacts.map(contact => (
          <li className="contactListItem" key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps)(ContactList);
