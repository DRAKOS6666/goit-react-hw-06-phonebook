import actionTypes from './contacts-types';

export const setContacts = contacts => ({
  type: actionTypes.SET_CONTACTS,
  payload: contacts,
});
export const addContact = contact => ({
  type: actionTypes.ADD_CONTACT,
  payload: contact,
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const findContact = text => ({
  type: actionTypes.FIND_CONTACT,
  payload: text,
});
