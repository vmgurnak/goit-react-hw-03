import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import initialContacts from './contactsList.json';

const App = () => {
  // state contacts
  const [contacts, setContacts] = useState(initialContacts);
  // state filter
  const [filter, setFilter] = useState('');

  // function updated state
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // function delete contact
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // filter contacts
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filterContacts);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

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
