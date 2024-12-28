import React from 'react'

const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-black bg-opacity-50 text-center">
            <p>&copy; 2024 Vinay Bajrangi Astrology. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-300 transition duration-300">Terms of Service</a>
            </div>
        </footer>
    )
}

export default Footer