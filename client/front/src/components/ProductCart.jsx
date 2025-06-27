import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, cartItems, wishlistItems } = useCart();

  const inCart = cartItems.some((item) => item.id === product.id);
  const inWishlist = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <div className="mt-2 flex gap-2">
        <button
          className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
          onClick={() => addToCart(product)}
          disabled={inCart}
        >
          {inCart ? 'In Cart' : 'Add to Cart'}
        </button>

        <button
          className="bg-pink-500 px-3 py-1 rounded hover:bg-pink-600"
          onClick={() => addToWishlist(product)}
          disabled={inWishlist}
        >
          {inWishlist ? 'In Wishlist' : 'Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
