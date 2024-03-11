import { useState, useEffect } from 'react';
import './App.css';

// import ContactForm1 from './components/ContactForm/ContactForm1';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import initialContacts from './contactsList.json';

const App = () => {
  // state contacts
  const [contacts, setContacts] = useState(() => {
    // data verification in LS
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  // state filter
  const [filter, setFilter] = useState('');

  // useEffect, save LS
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // function updated state, addContact
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  // function delete contact
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  // filter contacts
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      {/* <h2>ContactForm</h2> */}
      {/* send function updated state */}
      {/* <ContactForm1 addContact={addContact} /> */}

      {/* <h2>ContactForm (Formik) </h2> */}
      {/* send function updated state */}
      <ContactForm addContact={addContact} />

      {/* send filter and function delete contact */}
      <SearchBox filter={filter} setFilter={setFilter} />

      {/* send filterContacts and function delete contact */}
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
