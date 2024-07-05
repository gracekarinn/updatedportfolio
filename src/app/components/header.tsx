"use client";
import React, { useState } from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <div className='container mx-auto my-5'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-2xl px-2 font-bold text-black'>Grace <span className='text-purple-400'>Karin</span></a>
          <div className='flex'>
            <button 
              className='mx-1 text-black px-4 py-2 flex items-center'
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <FaToggleOn style={{ fontSize: '48px' }} /> : <FaToggleOff style={{ fontSize: '48px' }} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
