import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../redux/contacts/contacts-actions';

import Highlighter from 'react-highlight-words';

import './ContactListItem.scss';

function ContactListItem({ contact, filter, deleteContact }) {
  const { id, name, number } = contact;

  return (
    <>
      <span className="contactName">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={name}
        />
        :
      </span>
      <span className="contactNumber">
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={number}
        />
      </span>
      <div className="buttonsWrapper">
        <a className="callRef" href={'tel:' + number}>
          Call
        </a>
        <button className="deleteContactBtn" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ filter: state.contacts.filter });

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
