import React from 'react';

function Hamburger({ isOpen }) {
  return (
    <svg
      className={`fill-current h-4 w-4 ${isOpen ? 'hidden' : 'block'}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
}

export default Hamburger;
