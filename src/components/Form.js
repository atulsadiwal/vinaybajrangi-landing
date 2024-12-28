import React from 'react'

const Form = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-black bg-opacity-30">
            <div className="container mx-auto max-w-2xl bg-white p-10 rounded-xl">
                <h3 className="text-3xl font-bold mb-8 text-center text-black">Discover Your Cosmic Path</h3>
                <form className="space-y-6 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                            <input type="email" id="email" name="email" required
                                className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block mb-2 font-semibold">Mobile</label>
                        <input type="tel" id="mobile" name="mobile" required
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="dob" className="block mb-2 font-semibold">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required
                                className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block mb-2 font-semibold">Time of Birth</label>
                            <input type="time" id="time" name="time" required
                                className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="birthplace" className="block mb-2 font-semibold">Place of Birth</label>
                        <input type="text" id="birthplace" name="birthplace" required
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="question" className="block mb-2 font-semibold">Your Question</label>
                        <textarea id="question" name="question" rows={4} required
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        ></textarea>
                    </div>
                    <button type="submit"
                        className="w-full bg-yellow-400 text-purple-900 font-bold py-3 px-4 rounded-lg text-lg hover:bg-yellow-300 transition duration-300"
                    >
                        Reveal My Cosmic Insights
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Form