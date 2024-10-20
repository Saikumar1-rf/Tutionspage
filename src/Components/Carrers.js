import React, { useEffect, useState } from 'react';

const Careers = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setCards(storedData);
  }, []);


  return (
    <div className="card-container grid grid-cols-2 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="card  border-2">
          <h1 className="font-extrabold">{card.role}</h1>
          <p >Name: {card.firstName}</p>
          <p>Subject: {card.subjectsLookingFor}</p>
          <p>Mode of Teaching: {card.modeOfTeaching}</p>
          <p>Location: {card.location}</p>
          <p>Available Timings: {card.availableTimings}</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;
