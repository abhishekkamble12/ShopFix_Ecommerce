import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-300">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Browse Products
        </Link>
      </div>
    );
  }

  const totalPrice = cartItems
    .reduce((total, item) => total + (item.price || 0), 0)
    .toFixed(2);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <ul className="space-y-6">
        {cartItems.map((item, idx) => (
          <li
            key={item._id || item.id || idx}
            className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-4 shadow-md"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name || 'QR code'}
                className="w-48 h-48 object-contain rounded mb-4 md:mb-0 md:mr-6 bg-white"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/qr-placeholder.png';
                }}
              />
            )}
            <div className="flex-1 w-full">
              <h3 className="text-xl font-bold mb-1">{item.name}</h3>
              <p className="text-gray-300 mb-1">Price: ₹{item.price}</p>
              <p className="text-gray-400 mb-2">{item.description || 'No description available.'}</p>
              <Link to="/buy">
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400">
                  Buy Now
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right">
        <span className="text-xl">Total: ₹{totalPrice}</span>
      </div>
    </div>
  );
}

export default CartPage;
