import React from 'react';
import propTypes from 'prop-types';
import './ContactListItem.scss';

function ContactListItem({ contact, onClickDelete }) {
  const { id, name, number } = contact;
  return (
    <>
      <span className="contactName">
        {name}: {number}
      </span>
      <button className="deleteContactBtn" onClick={() => onClickDelete(id)}>
        Delete
      </button>
      <a className="callRef" href={'tel:' + number}>
        Call
      </a>
    </>
  );
}

ContactListItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string,
  }).isRequired,
  onClickDelete: propTypes.func.isRequired,
};

export default ContactListItem;
