import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../redux/contacts/contacts-actions';

function Filter({ findContact }) {
  const findContactQuery = event =>
    findContact(event.target.value.toLowerCase());

  return (
    <label>
      Find contacts by name:
      <input type="search" autoComplete="on" onChange={findContactQuery} />
    </label>
  );
}

// Filter.propTypes = {
//   onFindItem: propTypes.func.isRequired,
//   numberOfContacts: propTypes.oneOfType([propTypes.object, propTypes.number]),
// };

const mapDispatchToProps = dispatch => {
  return {
    findContact: text => dispatch(actions.findContact(text)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
