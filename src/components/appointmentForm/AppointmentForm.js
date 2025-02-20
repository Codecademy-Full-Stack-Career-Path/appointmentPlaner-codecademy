import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleSelectChange = (e) => {
    setContact(e.target.value);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={ name } onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="phone">Date</label>
      <input type="date" id="date" value={ date } onChange={(e) => setDate(e.target.value)} min={getTodayString} required />

      <label htmlFor="email">Time</label>
      <input type="time" id="time" value={ time } onChange={(e) => setTime(e.target.value)} required />

      <ContactPicker contacts={contacts} value={contact} handleSelectChange={handleSelectChange} name={name} />
      
      <button type="submit">Submit</button>
    </form>
  );
};
