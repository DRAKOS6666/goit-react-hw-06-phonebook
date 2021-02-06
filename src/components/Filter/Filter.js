import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';

function Filter({ findContact }) {
  const findContactQuery = ({ target }) =>
    findContact(target.value.toLowerCase());

  return (
    <label>
      Find contacts:
      <input
        placeholder="Enter a part of name or nubmer"
        type="search"
        autoComplete="on"
        onChange={findContactQuery}
      />
    </label>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    findContact: text => dispatch(actions.findContact(text)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
