import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../Icons/RightArrow';

function Goto({ text, to, className }) {
  return (
    <Link
      to={to}
      className={`relative md:hover:text-blue-600 lg:hover:text-blue-600 ${className}`}
    >
      {text}
      <span className="absolute mx-2 pt-0.5 md:pt-1 lg:pt-1 animate-forward">
        <RightArrow />
      </span>
    </Link>
  );
}

export default Goto;
