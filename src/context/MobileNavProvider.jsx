import React, { useState } from 'react';
import { NavProvider } from './MobileNavContext';

function MobileNavProvider({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <NavProvider value={{ mobileNavOpen, toggleMobileNav, closeMobileNav }}>
      {children}
    </NavProvider>
  );
}

export default MobileNavProvider;
