import React from 'react'

const Services = () => {
    return (
        <section id="services" className="py-20 px-4">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-12">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                        <img
                            src="/image/Know-What-Your-Future-Life-Partner-Will-Be-Like.webp"
                            alt="Personal Horoscope"
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-bold mb-2">Personal Horoscope</h4>
                        <p>Detailed analysis of your birth chart and future predictions</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                        <img
                            src="/image/260_Know When You Will Get Married (2).webp"
                            alt="Relationship Compatibility"
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-bold mb-2">Relationship Compatibility</h4>
                        <p>Discover your cosmic connection with your partner</p>
                    </div>
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                        <img
                            src="/image/261_Know If You Have The Yoga to Do Business.webp"
                            alt="Career Guidance"
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-bold mb-2">Career Guidance</h4>
                        <p>Navigate your professional path with celestial insights</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services