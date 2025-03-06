import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './subcomponent/Footer';
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); 
  const [statusMessage, setStatusMessage] = useState(''); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true); 

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          e.target.reset(); 
        },
        (error) => {
          setStatusMessage('Failed to send message. Try again later.');
          console.error('FAILED...', error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full">
      <AuroraBackground className="overflow-hidden h-auto pt-12 sm:pt-28 md:pt-32 lg:pt-40">

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-start px-6 sm:px-10 md:px-14 lg:px-20 py-6"

        >
          <div className=" min-h-screen p-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white] font-heading text-center">
          Contact
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
          Get in touch with me by submitting the form below
        </p>

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
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f7f3d9] bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f7f3d9] bg-transparent text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f7f3d9] bg-transparent text-white placeholder-gray-400"
            />
            <button
              type="submit"
              disabled={isSending}
              className={`mt-4 p-4 rounded-md ${
                isSending ? 'bg-gray-400' : 'bg-[#f7f3d9]'
              } text-gray-800 font-bold hover:bg-yellow-100 transition`}
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
        </motion.div>
      </AuroraBackground>

      

    </div>
  );
};

export default Contact;
