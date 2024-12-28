import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white font-sans">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Form />
      <Footer />
    </div>
  )
}

export default App