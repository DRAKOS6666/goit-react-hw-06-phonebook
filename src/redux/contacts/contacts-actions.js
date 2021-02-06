import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import actionTypes from './contacts-types';

// export const setContacts = contacts => ({
//   type: actionTypes.SET_CONTACTS,
//   payload: contacts,
// });
export const setContacts = createAction('contacts/setContacts');

// export const addContact = ({ name, number }) => {
//   const id = uuidv4();
//   return {
//     type: actionTypes.ADD_CONTACT,
//     payload: { name, number, id },
//   };
// };
export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    const id = uuidv4();
    return {
      payload: { name, number, id },
    };
  },
);

// export const deleteContact = contactId => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: contactId,
// });
export const deleteContact = createAction('contacts/deleteContact');

// export const findContact = text => ({
//   type: actionTypes.FIND_CONTACT,
//   payload: text,
// });
export const findContact = createAction('filter/findContactText');
