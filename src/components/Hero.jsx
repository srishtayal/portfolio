import React from 'react';
import Demo from './subcomponent/Intro';
import Grid from './subcomponent/Grid';

function Hero() {
    return (
        <div>
            <Demo />
            <div className="min-h-screen bg-[#18181B] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
                <div className="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-0 relative p-8">
                    <div className="max-w-7xl mt-0 pt-0 border-neutral-200 mx-auto text-balance text-gray-500">
                        <Grid />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;