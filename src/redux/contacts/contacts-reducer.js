import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contacts-actions';
// import actionTypes from './contacts-types';

// const contactItemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.SET_CONTACTS:
//       return payload;

//     case actionTypes.ADD_CONTACT:
//       return [...state, payload];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
const items = createReducer([], {
  [actions.setContacts]: (_, { payload }) => payload,
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FIND_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [actions.findContact]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});
