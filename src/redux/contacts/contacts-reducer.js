import { combineReducers } from 'redux';

import actionTypes from './contacts-types';

const contactItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CONTACTS:
      return payload;

    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FIND_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});
