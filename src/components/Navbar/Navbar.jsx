import React from 'react';
import darkLogo from '../../assets/dark-thunder.png';
import lightLogo from '../../assets/light-thunder.png';
import { NavLink } from 'react-router-dom';
import useTheme from '../../context/ThemeContext';
import MobileNavbar from './MobileNavbar';
import NavSection from './NavSection';
import useMobileNav from '../../context/MobileNavContext';

function Navbar() {
  const { theme } = useTheme();
  const { closeMobileNav } = useMobileNav();

  return (
    <div className="flex justify-between items-center text-xl">
      <div>
        <NavLink to="/" onClick={closeMobileNav}>
          <img
            src={theme === 'dark' ? lightLogo : darkLogo}
            alt="logo"
            className="rounded-xl w-7 md:w-10 lg:w-10 md:hover:animate-spin-slow"
          />
        </NavLink>
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block items-center">
        <NavSection />
      </div>
    </div>
  );
}

export default Navbar;
