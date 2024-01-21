import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import Goto from '../components/Goto/Goto';

function Contact() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-7xl mt-12 text-center hover:text-blue-600">
        Contact.
      </h1>
      <div className="my-12 mx-8 md:px-32 lg:px-32 md:text-xl lg:text-xl font-semibold">
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
        <Goto text="Go back to Home" to="/" />
      </div>
    </>
  );
}

export default Contact;
