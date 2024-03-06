import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import initialContacts from './contactsList.json';

console.log(initialContacts);

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {};

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
