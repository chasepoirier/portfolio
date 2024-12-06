"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiLaunch = () => {
  const [windowAvailable, setWindowAvailable] = useState(false);

  useEffect(() => {
    // Check if window is available after the component has mounted
    setWindowAvailable(true);
  }, []);

  if (!windowAvailable) {
    return null; // Or return a loading spinner, etc.
  }

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      tweenDuration={1500}
    />
  );
};

export default ConfettiLaunch;
