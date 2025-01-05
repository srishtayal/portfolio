import React from 'react';

function Hero() {
    return (
        <div className="min-h-screen p-10 bg-[url('/photos/gradient.png')] bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl pt-52 sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8cd49f] font-heading text-center">
                Hi, I'm Srishti.
                <span className='block mt-5'>
                    A developer.
                </span>
            </h1>

            <p className="pt-10 font-body text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed">
                A sophomore at NSUT, passionate about building 
                <br /> innovative web applications.
            </p>
    
                <div className="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-24 relative p-8">
                    <div className="max-w-7xl mt-12 pt-12 border-neutral-200 mx-auto text-balance text-gray-500">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-6">
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 md:row-span-2">
                                <p className="text-orange-600">Photography</p>
                                <p className="mt-4 text-sm font-body">
                                    Capture moments in stunning detail with our advanced camera
                                    technology. Perfect for professionals and enthusiasts alike.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2">
                                <p className="text-orange-600">Coding</p>
                                <p className="mt-4 text-sm font-body">
                                    Build the future with powerful development tools. From web to
                                    mobile, create anything you can imagine.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-3 lg:row-span-2">
                                <p className="text-orange-600">Music</p>
                                <p className="mt-4 text-sm font-body">
                                    Experience the power of sound with high-fidelity audio.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2">
                                <p className="text-orange-600">Video Production</p>
                                <p className="mt-4 text-sm font-body">
                                    Create cinematic masterpieces with professional-grade tools.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2 lg:col-span-2">
                                <p className="text-orange-600">Gaming</p>
                                <p className="mt-4 text-sm font-body">
                                    Immerse yourself in new worlds with cutting-edge graphics and
                                    gameplay.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2">
                                <p className="text-orange-600">AI</p>
                                <p className="mt-4 text-sm font-body">
                                    Harness the power of artificial intelligence.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2">
                                <p className="text-orange-600">VR</p>
                                <p className="mt-4 text-sm font-body">
                                    Step into virtual reality and explore new dimensions.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-3">
                                <p className="text-orange-600">IoT Ecosystem</p>
                                <p className="mt-4 text-sm font-body">
                                    Connect your world with smart devices. Create a seamless network
                                    of intelligent gadgets.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2">
                                <p className="text-orange-600">Cloud</p>
                                <p className="mt-4 text-sm font-body">
                                    Scale your projects with powerful cloud solutions.
                                </p>
                            </div>
                            <div className="bg-gray-100 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl col-span-full lg:col-span-1">
                                <p className="text-orange-600">Security</p>
                                <p className="mt-4 text-sm font-body">
                                    Protect your digital assets with advanced cybersecurity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Hero;
