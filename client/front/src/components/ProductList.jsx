import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartMessage, setCartMessage] = useState('');

  const fallbackProducts = [
    {
      _id: '1',
      name: 'Sample Phone X',
      price: 999,
      description: 'A sample high-end phone with great features.',
    },
    {
      _id: '2',
      name: 'Sample Laptop Pro',
      price: 1999,
      description: 'A powerful sample laptop for professionals.',
    },
    {
      _id: '3',
      name: 'Wireless Headphones',
      price: 299,
      description: 'High-quality sound and long battery life.',
    },
  ];

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Unable to fetch products from server. Showing sample data.');
        setProducts(fallbackProducts);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    (product.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setCartMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => setCartMessage(''), 2000);
  };

  if (loading) {
    return <div className="text-white text-center mt-10">Loading products...</div>;
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Products</h2>
      <div className="flex justify-end items-center mb-4">
        <span className="inline-flex items-center px-4 py-2 bg-gray-900 rounded-full text-yellow-400 font-semibold text-lg">
          🛒 Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {error && (
        <div className="text-yellow-400 text-center mb-4">
          {error}
        </div>
      )}
      {cartMessage && (
        <div className="text-green-400 text-center mb-4">
          {cartMessage}
        </div>
      )}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-300">No products found.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id || product.id}
              className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-1">Price: ₹{product.price}</p>
              <p className="text-gray-400 text-sm">
                {product.description || 'No description available.'}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-2xl mb-2">Cart Items</h3>
        {cart.length === 0 ? (
          <div className="text-gray-400">Cart is empty.</div>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx} className="mb-1">{item.name} - ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
