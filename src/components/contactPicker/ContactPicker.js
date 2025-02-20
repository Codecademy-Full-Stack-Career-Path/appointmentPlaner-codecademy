import React from "react";

export const ContactPicker = ({ contacts, handleSelectChange, value, name }) => {

  return (
    <>
      <label htmlFor="contact">Select Contact</label>
      <select
        id="contact"
        value={value}
        onChange={handleSelectChange}
        name={name}
        required
      >
        <option value="">-- No Contact Selected --</option>

        {contacts.map((contact, index) => {
         //const { name } = contact;

          return (
            <option value={contact.name} key={index} >
              {contact.name}
            </option>
          )
        })}
      </select>
    </>
  );
};
