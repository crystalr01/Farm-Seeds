import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg">
              <i className="fas fa-seedling text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CropInfo</h1>
              <p className="text-xs text-gray-500">Smart Farming Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-home mr-1"></i>Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-info-circle mr-1"></i>About
            </Link>
            <Link 
              to="/crops" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/crops') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-seedling mr-1"></i>Crops
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/services') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-cogs mr-1"></i>Services
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/gallery') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-images mr-1"></i>Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <i className="fas fa-envelope mr-1"></i>Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              <i className="fas fa-phone mr-2"></i>Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home mr-2"></i>Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle mr-2"></i>About
              </Link>
              <Link 
                to="/crops" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-seedling mr-2"></i>Crops
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-cogs mr-2"></i>Services
              </Link>
              <Link 
                to="/gallery" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-images mr-2"></i>Gallery
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope mr-2"></i>Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
