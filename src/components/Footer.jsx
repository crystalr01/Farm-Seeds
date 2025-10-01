import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">CropInfo</h3>
                <p className="text-green-400 text-sm">Smart Farming Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering farmers with cutting-edge technology and expert knowledge to achieve sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => window.open('https://facebook.com/cropinfo')} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button onClick={() => window.open('https://twitter.com/cropinfo')} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </button>
              <button onClick={() => window.open('https://instagram.com/cropinfo')} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <i className="fab fa-instagram text-xl"></i>
              </button>
              <button onClick={() => window.open('https://linkedin.com/company/cropinfo')} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>About Us
                </Link>
              </li>
              <li>
                <Link to="/crops" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>Crops
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200 flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Crop Planning & Advisory</li>
              <li className="text-gray-300 text-sm">Weather Monitoring</li>
              <li className="text-gray-300 text-sm">Pest Management</li>
              <li className="text-gray-300 text-sm">Irrigation Solutions</li>
              <li className="text-gray-300 text-sm">Market Intelligence</li>
              <li className="text-gray-300 text-sm">Soil Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-green-400 mt-1"></i>
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Agriculture Hub<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-green-400"></i>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-green-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-green-400"></i>
                <a href="mailto:info@cropinfo.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@cropinfo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CropInfo. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
