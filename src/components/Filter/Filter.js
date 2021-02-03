import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';

function Filter({ contacts, findContact }) {
  const filteredContacts = contacts.items.filter(contact => {
    if (contact.name) {
      return contact.name.toLowerCase().includes(contacts.filter);
    }
  });

  const numberOfContacts =
    filteredContacts.length < contacts.length && filteredContacts.length !== 0
      ? filteredContacts.length
      : null;

  const findContactQuery = event =>
    findContact(event.target.value.toLowerCase());

  return (
    <label>
      Find contacts by name:
      <input type="text" onChange={findContactQuery} />
      {numberOfContacts && <h3>Was finded {numberOfContacts} contact(s)</h3>}
    </label>
  );
}

Filter.propTypes = {
  onFindItem: propTypes.func.isRequired,
  numberOfContacts: propTypes.oneOfType([propTypes.object, propTypes.number]),
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findContact: text => dispatch(actions.findContact(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
