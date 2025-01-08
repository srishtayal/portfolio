import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './subcomponent/Footer';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // Loading state
  const [statusMessage, setStatusMessage] = useState(''); // Success/Error message

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true); // Start loading

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          e.target.reset(); // Clear the form
        },
        (error) => {
          setStatusMessage('Failed to send message. Try again later.');
          console.error('FAILED...', error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="overflow-x-hidden min-h-screen p-10 bg-[url('/photos/gradient.png')] bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl pt-52 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8cd49f] font-heading text-center">
          Contact
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
          Get in touch with me by submitting the form below
        </p>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-6 w-full max-w-lg font-body bg-transparent mt-10"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f] bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f] bg-transparent text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f] bg-transparent text-white placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`mt-4 p-4 rounded-md ${
                isSending ? 'bg-gray-400' : 'bg-[#8cd49f]'
              } text-gray-800 font-bold hover:bg-green-300 transition`}
            >
              {isSending ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-lg text-white font-body font-semibold">{statusMessage}</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
