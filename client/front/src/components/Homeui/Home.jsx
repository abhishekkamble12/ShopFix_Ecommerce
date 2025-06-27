import React from 'react'
import Hero from '../Hero'
import ProductsList from '../ProductList'
import Orbitalpage from '../Orbitalpage'
import { OrbitingCirclesDemo } from '../OrbitingCirclesDemo'
import Footer from '../Footer'

function Home() {
  return (
    <div>
        <div className='w-full h-screen bg-gradient-to-bl from-blue-950 to-black'>
            <Hero />
           
        </div>
       <div className='w-full h-auto relative bottom-[15pc] bg-gradient-to-bl flex flex-row from-blue-950 to-black  justify-center items-center'>
        <div className='w-full relative left-[1pc] top-1 border-2 h-auto flex flex-row justify-center items-center'>

         <OrbitingCirclesDemo />
         
        </div>
       
       </div>
        {/* Footer can be added here if needed */}
        <Footer/>
      
    </div>
  )
}

export default Home
