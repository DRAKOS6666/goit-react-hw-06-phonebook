import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

import ContactListItem from './ContactListItem/ContactListItem';
import './ContactList.scss';

function ContactList({ contacts, deleteContact }) {
  const filteredContacts = contacts.filter
    ? contacts.items.filter(contact => {
        if (contact.name) {
          return contact.name.toLowerCase().includes(contacts.filter);
        }
      })
    : contacts.items;

  return filteredContacts.length === 0 ? (
    <h3>Nothing found</h3>
  ) : (
    <>
      {contacts.filter && filteredContacts.length > 0 && (
        <h3 className="findedTittle">
          Was finded <span>{filteredContacts.length}</span> contact(s)
        </h3>
      )}
      <ul className="contactList">
        {filteredContacts.map(contact => (
          <li className="contactListItem" key={contact.id}>
            <ContactListItem contact={contact} onClickDelete={deleteContact} />
          </li>
        ))}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string,
//     }),
//   ).isRequired,
//   deleteContact: propTypes.func.isRequired,
// };

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
