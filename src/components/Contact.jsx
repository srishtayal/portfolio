import React from 'react';
import Footer from './subcomponent/Footer';

function Contact() {
    return (
        <div className="overflow-x-hidden min-h-screen p-10 bg-[url('/photos/gradient.png')] bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
            <div className="text-center space-y-6">
                <h1 className="text-4xl pt-52 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8cd49f] font-heading text-center">Contact</h1>
                <p className="font-body text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
                    Get in touch with me by submitting the form below
                </p>
                <form className="flex flex-col space-y-4 w-full max-w-md font-body">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f]"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f]"
                    />
                    <textarea 
                        placeholder="Message" 
                        rows="4"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8cd49f]"
                    />
                    <button 
                        type="submit"
                        className="mt-4 bg-[#8cd49f] text-gray-500 p-3 rounded-md hover:bg-green-300 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
