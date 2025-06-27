import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { wishlistAPI } from '../../services/api';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { isAuthenticated, user } = useAuth();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }

    setIsLoading(true);
    const success = await addToCart(product, 1);
    setIsLoading(false);
  };

  const handleAddToWishlist = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to wishlist');
      return;
    }

    try {
      const wishlistData = {
        user: user.id,
        product: product._id,
        note: ''
      };

      await wishlistAPI.addToWishlist(wishlistData);
      setIsWishlisted(true);
      toast.success('Added to wishlist!');
    } catch (error) {
      toast.error('Failed to add to wishlist');
    }
  };

  const calculateDiscount = () => {
    if (!product.discountPercentage) return 0;
    return Math.round((product.discountPercentage / 100) * product.price);
  };

  const discountedPrice = product.price - calculateDiscount();

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{product.discountPercentage}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleAddToWishlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <FaHeart />
          </button>
          
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-8 h-8 rounded-full bg-white text-gray-600 hover:bg-primary-600 hover:text-white flex items-center justify-center text-sm transition-colors disabled:opacity-50"
            title="Add to cart"
          >
            <FaShoppingCart />
          </button>
        </div>

        {/* Stock Status */}
        {product.stockQuantity <= 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product._id}`} className="block">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {product.discountPercentage > 0 ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <FaStar className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-600">4.5</span>
          </div>
        </div>

        {/* Stock Info */}
        <div className="text-sm text-gray-500 mb-3">
          {product.stockQuantity > 0 ? (
            <span className="text-green-600">
              In Stock ({product.stockQuantity} available)
            </span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || product.stockQuantity <= 0}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 