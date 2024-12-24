import React from 'react';

function About() {
    return (
        <div className="overflow-x-hidden min-h-screen p-10 bg-[url('/photos/gradient.png')] bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl pt-40 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8cd49f] font-heading text-center">
                I'm Srishti.
            </h1>
            <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row items-center p-10 sm:p-20 gap-12">
                <div 
                    className="bg-[url('/photos/srishti.jpeg')] bg-cover rounded-full bg-no-repeat bg-center w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-128 lg:h-96 shadow-lg" 
                    id="image"
                >
                </div>
                <div className="text-left">
                    <h2 className="text-3xl font-semibold text-[#8cd49f] leading-relaxed">
                        I'm a Sophomore at NSUT, pursuing Engineering in Electronics.
                    </h2>
                    <p className="text-xl mt-2 font-body text-white">
                        I'm passionate about technology and innovation, I focus on web development, AI solutions, and game design. 
                        I actively participate in hackathons, building impactful projects that address real-world challenges through 
                        creativity, problem-solving, and continuous learning.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
