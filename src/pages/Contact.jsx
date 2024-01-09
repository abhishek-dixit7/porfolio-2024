import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import RightArrow from '../components/Icons/RightArrow';

function Contact() {
  return (
    <>
      <h1 className="text-7xl mt-12 text-center hover:text-blue-600">
        Contact.
      </h1>
      <div className="my-12 mx-8 px-32 text-xl font-semibold">
        <p className="mt-4 mb-12">
          Want to get in touch? Feel free to drop me an email at{' '}
          <Link
            to="mailto:abhishekdixit9024@gmail.com"
            target="_blank"
            className="hover:text-blue-600"
          >
            abhishekdixit9024@gmail.com
          </Link>
        </p>
        <ContactForm />
        <Link to="/" className="relative hover:text-blue-600">
          Go back to Home
          <span className="absolute mx-2 pt-1 animate-forward">
            <RightArrow />
          </span>
        </Link>
      </div>
    </>
  );
}

export default Contact;
