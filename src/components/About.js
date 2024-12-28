import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-black bg-opacity-30">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/image/logo.jpeg"
                        alt="Vinay Bajrangi"
                        className="rounded-full bg-white p-8 h-80 w-80 mx-auto"
                    />
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-3xl font-bold mb-4">About Vinay Bajrangi</h3>
                    <p className="text-lg mb-6">
                        With over 20 years of experience, Vinay Bajrangi has helped thousands of individuals navigate their life's journey through the ancient wisdom of astrology. His unique blend of traditional knowledge and modern insights provides accurate and actionable guidance.
                    </p>
                    <ul className="list-disc list-inside text-lg">
                        <li>Expert in Vedic and Western Astrology</li>
                        <li>Renowned author and speaker</li>
                        <li>Featured on major television networks</li>
                        <li>Personalized consultations for life's big decisions</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About