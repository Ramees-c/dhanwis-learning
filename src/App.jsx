import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Testimonials from './components/Testimonials/Testimonials'
import FaqComponent from './components/FaqComponent/FaqComponent'

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Courses />
      <Testimonials />
      <FaqComponent />
    </div>
  ) 
}

export default App