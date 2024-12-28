import React from 'react'

const Header = () => {
    return (
        <header className="py-6 px-4 bg-black bg-opacity-30">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Vinay Bajrangi</h1>
                {/* <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:text-yellow-300 transition duration-300">About</a></li>
                        <li><a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
                    </ul>
                </nav> */}
            </div>
        </header>
    )
}

export default Header