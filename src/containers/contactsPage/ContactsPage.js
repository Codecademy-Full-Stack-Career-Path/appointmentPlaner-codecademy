import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');

 const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicateName) {
    // setName(name);
    // setPhone(phone);
    // setEmail(email);
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
    console.log('Added Contact');
   } else {
    alert('Duplicate contact');
    setName('');
    setPhone('');
    setEmail('');
    setDuplicateName(false);
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.some(contact => contact.name === name)) {
      setDuplicateName(true);
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={ name }
          setName={ setName } 
          phone={ phone }
          setPhone={ setPhone }
          email={ email } 
          setEmail={ setEmail }
          handleSubmit={ handleSubmit } />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={ contacts } />
      </section>
    </div>
  );
};
