import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Hero />
      <Services />
    </div>
  ) 
}

export default App