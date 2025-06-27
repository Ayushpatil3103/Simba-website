import React, { useEffect, useState } from 'react';
import logo from './assets/simba-files/simba-logo.png'; // Change to your actual logo path
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
useEffect(() => {
  const timer1 = setTimeout(() => setFadeOut(true), 2000);
  const timer2 = setTimeout(() => {
    if (typeof onFinish === 'function') {
      onFinish();
    }
  }, 3000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, [onFinish]);


  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Preloader;
