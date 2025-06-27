import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link ,Router,Route,Routes } from 'react-router-dom'
import ProductsList from './components/ProductList'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Homeui/Home'
import Orbitalpage from './components/Orbitalpage'
import CartPage from './components/CartPage'
import BUyingPag from './components/BUyingPag'

// import WishlistPage from './components/WishlistPage'
// import ProductCard from './components/ProductCard'


function App() {
  return (
    <div className='w-full  bg-gradient-to-bl from-blue-950 to-black'>
      <Navbar/>
      <Routes>
        
          <Route path="/products" element={<ProductsList />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy" element={<BUyingPag />} />

          {/* <Route path="/cart" element={<CartPage />} /> */}
{/* <Route path="/wishlist" element={<WishlistPage />} /> */}
          
        
        </Routes>
        

      
    </div>
  )
}

export default App
