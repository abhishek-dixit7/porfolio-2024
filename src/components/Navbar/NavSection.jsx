import React from 'react';
import useTheme from '../../context/ThemeContext';
import ThemeLight from '../Icons/ThemeLight';
import ThemeDark from '../Icons/ThemeDark';
import { NavLink } from 'react-router-dom';
import useMobileNav from '../../context/MobileNavContext';

function NavSection({ isMobile = false }) {
  const { theme, toggleTheme } = useTheme();
  const { closeMobileNav } = useMobileNav();

  return (
    <div
      className={`${
        isMobile
          ? 'text-2xl flex flex-col items-center justify-center gap-8  mb-8 h-[40dvh]'
          : 'flex justify-between items-center gap-8'
      }`}
    >
      <div
        className={`flex md:gap-8 lg:gap-8 ${
          isMobile ? 'flex-col items-center gap-8' : ''
        }`}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive && !isMobile ? 'hidden' : ''} ${
              isMobile && isActive && 'underline '
            }`
          }
          onClick={closeMobileNav}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive && !isMobile ? 'hidden' : ''} ${
              isMobile && isActive && 'underline '
            }`
          }
          onClick={closeMobileNav}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive && !isMobile ? 'hidden' : ''} ${
              isMobile && isActive && 'underline '
            }`
          }
          onClick={closeMobileNav}
        >
          Contact
        </NavLink>
      </div>
      <div className="cursor-pointer " onClick={toggleTheme}>
        {theme === 'dark' ? <ThemeLight /> : <ThemeDark />}
      </div>
    </div>
  );
}

export default NavSection;
