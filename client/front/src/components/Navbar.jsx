import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link ,BrowserRouter,Route,Routes} from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full h-auto flex flex-row border-2 text-2xl text-amber-50 justify-evenly rounded-2xl'>
      <h1 className="font-bold text-3xl">Shopfix</h1>

      <div>
        <ul className='flex flex-row gap-14 space-x-10 py-1'>
          <li><Link to="/" className='hover:text-yellow-400 border-2 rounded-4xl px-4 py-1 bg-blue-800 text-white  relative top-1.5'>Home</Link></li>
          <li><Link to="/products" className='hover:text-yellow-400 border-2 rounded-4xl px-4 py-1 text-white   bg-blue-800 mt-4 relative top-1.5 '>Product</Link></li>
          <li><Link to="/signup" className='hover:text-yellow-400 border-2 rounded-4xl px-4 py-1 text-white  bg-blue-900 mt-4 relative top-1.5'>Signup</Link></li>
          <li><Link to="/cart" className='hover:text-yellow-400 border-2 text-white rounded-4xl px-4 py-1 bg-blue-800 relative top-1.5'>Cart</Link></li>
         
        </ul>
        
      </div>

      <div className='mt-1 rounded-2xl px-2'>
        <FaUser />
      </div>
    </div>
  );
}

export default Navbar;
