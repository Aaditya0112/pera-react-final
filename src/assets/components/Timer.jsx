
import React, { useState, useEffect } from 'react';

const Timer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = + new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (<>
    <h1 className='heading mb-8'>Hurry Up, Get Your Seat Now !!!</h1>
    <div className="flex justify-center space-x-2">
      {timeLeft.days >= 0 && (
        <div className="bg-blue-200 rounded-lg p-4">
          <span className="text-3xl">{timeLeft.days}</span>
          <span className="text-xl">days</span>
        </div>
      )}
      {timeLeft.hours >= 0 && (
        <div className="bg-green-200 rounded-lg p-4">
          <span className="text-3xl">{timeLeft.hours}</span>
          <span className="text-xl">hours</span>
        </div>
      )}
      {timeLeft.minutes >= 0 && (
        <div className="bg-yellow-200 rounded-lg p-4">
          <span className="text-3xl">{timeLeft.minutes}</span>
          <span className="text-xl">minutes</span>
        </div>
      )}
      {timeLeft.seconds >= 0 && (
        <div className="bg-pink-200 rounded-lg p-4">
          <span className="text-3xl">{timeLeft.seconds}</span>
          <span className="text-xl">seconds</span>
        </div>
      )}
    </div>
    </>
  );
};

export default Timer;
