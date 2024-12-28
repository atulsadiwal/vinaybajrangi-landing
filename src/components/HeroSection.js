import React from 'react';

const HeroSection = () => {
    return (
        <section className="py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/astrology-8756543_960_720.webp"
                    alt="Starry night sky"
                    className="opacity-30 w-full h-full object-cover"
                    style={{ position: 'absolute', inset: 0 }}
                />
            </div>
            <div className="container mx-auto relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Unlock Your Cosmic Destiny</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    Discover the secrets written in the stars with world-renowned astrologer Vinay Bajrangi
                </p>
                <a href="#contact" className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 inline-block">
                    Reveal Your Future
                </a>
            </div>
        </section>
    );
};

export default HeroSection;