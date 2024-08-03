import React, { useState } from 'react';
// import '../stylesheets/HoverCard.css';

// import img from '../Images/1.jpeg'
const HoverCard = (props) => {
  const { id, title, description, imageSrc, bio } = props.Data;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-72 bg-indigo-300 h-80 rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out ${isFlipped ? 'flip' : ''}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >

      <div className="absolute inset-0  text-white flex items-center justify-center transition-opacity duration-300 ease-in-out">
        <div className="text-center">
          
          
          {!isFlipped && <img className="w-56 h-56 object-cover object-center rounded-full" src={imageSrc} alt={title} />}
          {!isFlipped && <h2 className="font-bold text-xl mb-2">{title}</h2>}
          {isFlipped&&<p>{description}</p>}
          {isFlipped&&<p>{bio}</p>}
        </div>
      </div>

    
      <div className="flip-back absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-0">
        <div className="text-center">
          <p>{description}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;


