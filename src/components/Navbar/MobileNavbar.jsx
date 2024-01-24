import React from 'react';
import Hamburger from '../Icons/Hamburger';
import Cross from '../Icons/Cross';
import useMobileNav from '../../context/MobileNavContext';

function MobileNavbar() {
  const { mobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <div className="relative">
      <button
        onClick={toggleMobileNav}
        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
      >
        <Hamburger isOpen={mobileNavOpen} />
        <Cross isOpen={mobileNavOpen} />
      </button>
    </div>
  );
}

export default MobileNavbar;
