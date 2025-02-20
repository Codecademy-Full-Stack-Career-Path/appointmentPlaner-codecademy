import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [duplicateAppointment, setDuplicateAppointment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    if (!duplicateAppointment) {
      addAppointment(name, contact, date, time);
      setName('');
      setContact('');
      setDate('');
      setTime('');
    } else {
      alert('Duplicate Appointment');
      setName('');
      setContact('');
      setDate('');
      setTime('');
      setDuplicateAppointment(false);
    }
    
  };

  useEffect(() => {
      if (appointments.some(appointment => appointment.time === time)) { 
        setDuplicateAppointment(true);
      }
    }, [time, appointments]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}

          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} />
      </section>
    </div>
  );
};