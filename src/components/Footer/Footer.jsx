import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../../context/ThemeContext';
import { Github, Linkedin, Twitter } from '../Icons';
import { githubUrl, linkedinUrl, twitterUrl } from '../../constants/constants';

function Footer() {
  const { theme } = useTheme();
  return (
    <div className="flex gap-4 justify-center items-center md:justify-normal lg:justify-normal md:items-start lg:items-start">
      {theme === 'dark' ? (
        <>
          <Link to={linkedinUrl}>
            <Linkedin textColor="text-white hover:text-blue-500" />
          </Link>
          <Link to={githubUrl}>
            <Github textColor="text-white hover:text-blue-500" />
          </Link>
          <Link to={twitterUrl}>
            <Twitter textColor="text-white hover:text-blue-500" />
          </Link>
        </>
      ) : (
        <>
          <Link to={linkedinUrl}>
            <Linkedin textColor="text-black hover:text-blue-500" />
          </Link>
          <Link to={githubUrl}>
            <Github textColor="text-black hover:text-blue-500" />
          </Link>
          <Link to={twitterUrl}>
            <Twitter textColor="text-black hover:text-blue-500" />
          </Link>
        </>
      )}
    </div>
  );
}

export default Footer;
