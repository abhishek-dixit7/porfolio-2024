import { useContext, createContext } from 'react';

const MobileNavContext = createContext({
  mobileNavOpen: false,
  toggleMobileNav: () => {},
  closeMobileNav: () => {},
});

export default function useMobileNav() {
  return useContext(MobileNavContext);
}

export const NavProvider = MobileNavContext.Provider;
