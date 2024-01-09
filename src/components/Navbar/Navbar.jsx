import React, { useEffect } from 'react';
import darkLogo from '../../assets/dark-thunder.png';
import lightLogo from '../../assets/light-thunder.png';
import { NavLink } from 'react-router-dom';
import useTheme from '../../context/ThemeContext';
import ThemeLight from '../Icons/ThemeLight';
import ThemeDark from '../Icons/ThemeDark';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-around md:justify-between lg:justify-between items-center text-xl">
      <div>
        <NavLink to="/">
          <img
            src={theme === 'dark' ? lightLogo : darkLogo}
            alt="logo"
            className="rounded-xl w-7 md:w-10 lg:w-10 md:hover:animate-spin-slow"
          />
        </NavLink>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-8 justify-around md:justify-between lg:justify-between items-center">
        <div className="flex gap-4 md:gap-8 lg:gap-8 ">
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? 'hidden' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? 'hidden' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? 'hidden' : ''}`}
          >
            Contact
          </NavLink>
        </div>
        <div className="cursor-pointer " onClick={toggleTheme}>
          {theme === 'dark' ? <ThemeLight /> : <ThemeDark />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
