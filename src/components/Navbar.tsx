import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Home, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-800">LocalMart</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">Products</Link>
            
            {user ? (
              <>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Logout
                </button>
                <span className="text-gray-600">Welcome, {user.username}</span>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
            
            <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}