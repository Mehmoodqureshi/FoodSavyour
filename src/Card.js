import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ name, description }) => {
 return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
 );
};

export default Card;