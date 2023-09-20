import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CONTACTS } from './data/mock-contacts';
import Contact from './data/contact';
import ContactDetailComp from './components/contact-detail-comp';
import SearchingDataTableComp from './components/searching-data-table-comp';

function App() {
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);

  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal(contact: Contact) {
    setIsOpen(true)
    setSelectedContact(contact)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <SearchingDataTableComp
        contacts={CONTACTS}
        openModal={openModal} />
      <ContactDetailComp
        isModalOpened={modalIsOpen}
        onCloseModal={closeModal}
        contact={selectedContact} />
    </div>
  );
}

export default App;
