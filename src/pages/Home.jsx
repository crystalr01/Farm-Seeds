import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-crop-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="block">Welcome to</span>
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  CropInfo
                </span>
                <span className="block text-4xl md:text-5xl">Smart Farming Solutions</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing agriculture with cutting-edge technology, expert insights, and sustainable practices for maximum crop yield.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/crops"
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <i className="fas fa-rocket mr-3 group-hover:animate-bounce"></i>
                Get Started
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
              <Link 
                to="/about"
                className="group border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-play-circle mr-3"></i>
                Learn More
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Crop Varieties</div>
                  <div className="w-12 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Regions Covered</div>
                  <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">10+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                  <div className="w-12 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1K+</div>
                  <div className="text-gray-600 font-medium">Happy Farmers</div>
                  <div className="w-12 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CropInfo?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the features that make us the leading choice for modern farmers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning algorithms analyze your farm data to provide personalized recommendations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-satellite text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Satellite Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-time satellite imagery and drone technology provide comprehensive field monitoring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile App</h3>
              <p className="text-gray-600 leading-relaxed">
                Access all features on-the-go with our intuitive mobile application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
