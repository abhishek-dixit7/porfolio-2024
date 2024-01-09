import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormStatus(true);
  };

  return formStatus ? (
    <h1 className="mb-12">
      Thank you for reaching out. I'll get back to you{' '}
      <span className="hover:text-red-600">asap</span>.
    </h1>
  ) : (
    <>
      <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-400 mb-8 px-4 py-2 rounded bg-transparent"
          placeholder="Name"
          required
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          id="email"
          type="email"
          className="w-full border border-gray-400 mb-8 px-4 py-2 rounded bg-transparent"
          placeholder="Email"
          required
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          id="message"
          type="textArea"
          className="text-start w-full border border-gray-400 mb-8 min-h-32 px-4 py-2 rounded bg-transparent resize-none"
          placeholder="Message"
          rows="5"
          required
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        <button className="bg-black text-white dark:bg-white dark:text-black mb-8 px-12 py-4 rounded hover:animate-pulse">
          Send Message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
