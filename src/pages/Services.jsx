import React, { useState } from 'react';

const Services = () => {
  const [selectedLocation, setSelectedLocation] = useState('koppal');

  const services = [
    {
      id: 1,
      title: "Seedling Nursery",
      description: "High-quality seedling production with advanced nursery techniques for optimal plant growth",
      icon: "fas fa-seedling",
      price: "₹500-2,000/tray",
      color: "from-green-500 to-green-600",
      features: ["Disease-free seedlings", "Hybrid varieties", "Organic growing medium", "Expert care"]
    },
    {
      id: 2,
      title: "Seed Production & Multiplication",
      description: "Professional seed production and multiplication services for various crop varieties",
      icon: "fas fa-wheat-awn",
      price: "₹5,000-15,000/acre",
      color: "from-yellow-500 to-orange-600",
      features: ["Certified seeds", "High germination rate", "Genetic purity", "Quality testing"]
    },
    {
      id: 3,
      title: "Home Farms Operations",
      description: "Comprehensive farming operations across our three strategic locations",
      icon: "fas fa-tractor",
      price: "Contact for pricing",
      color: "from-blue-500 to-blue-600",
      features: ["Koppal, Karnataka", "Ranebennur, Karnataka", "D. Raja Farm, Maharashtra", "Modern equipment"]
    },
    {
      id: 4,
      title: "Pollen Production",
      description: "Specialized pollen production services for hybrid seed development and crop breeding",
      icon: "fas fa-flower",
      price: "₹8,000-20,000/kg",
      color: "from-purple-500 to-pink-600",
      features: ["Pure pollen lines", "Controlled environment", "Quality assurance", "Timely delivery"]
    },
    {
      id: 5,
      title: "Seed Storage Solutions",
      description: "Advanced seed storage facilities with climate control and quality preservation",
      icon: "fas fa-warehouse",
      price: "₹200-500/quintal/month",
      color: "from-indigo-500 to-purple-600",
      features: ["Climate controlled", "Pest management", "Quality monitoring", "Inventory tracking"]
    },
    {
      id: 6,
      title: "Crop Planning & Advisory",
      description: "Expert guidance on crop selection and seasonal planning",
      icon: "fas fa-calendar-check",
      price: "₹2,999/month",
      color: "from-teal-500 to-green-600",
      features: ["Soil analysis", "Weather forecasting", "Market trends", "Expert consultation"]
    }
  ];

  const farmLocations = [
    {
      id: 'koppal',
      name: 'Koppal Farm, Karnataka',
      address: 'Koppal District, Karnataka, India',
      coordinates: { lat: 15.3505, lng: 76.1544 },
      specialties: ['Seed Production', 'Seedling Nursery', 'Cotton Farming'],
      area: '500 acres',
      established: '2015',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56!2d76.1544!3d15.3505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x9c5d5d5d5d5d5d5d!2sKoppal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin'
    },
    {
      id: 'ranebennur',
      name: 'Ranebennur Farm, Karnataka',
      address: 'Ranebennur, Haveri District, Karnataka, India',
      coordinates: { lat: 14.6186, lng: 75.6294 },
      specialties: ['Pollen Production', 'Hybrid Seeds', 'Research & Development'],
      area: '300 acres',
      established: '2018',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56!2d75.6294!3d14.6186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf36c1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sRanebennur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin'
    },
    {
      id: 'maharashtra',
      name: 'D. Raja Farm, Maharashtra',
      address: 'D. Raja Farm, Maharashtra, India',
      coordinates: { lat: 19.7515, lng: 75.7139 },
      specialties: ['Seed Storage', 'Processing Unit', 'Distribution Center'],
      area: '200 acres',
      established: '2020',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56!2d75.7139!3d19.7515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba6c1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sMaharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin'
    }
  ];

  const selectedFarm = farmLocations.find(farm => farm.id === selectedLocation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crop-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
              🌾 Professional Agricultural Services 🌱
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Farming Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From seedling nursery to seed storage, we provide end-to-end agricultural services across multiple locations in India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional agricultural services designed to maximize your farming success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Locations Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Farm Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations across Karnataka and Maharashtra for comprehensive agricultural services.
            </p>
          </div>

          {/* Location Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {farmLocations.map(farm => (
              <button
                key={farm.id}
                onClick={() => setSelectedLocation(farm.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedLocation === farm.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:shadow-md'
                }`}
              >
                <i className="fas fa-map-marker-alt mr-2"></i>
                {farm.name.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Selected Farm Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Farm Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-xl mr-4">
                  <i className="fas fa-farm text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedFarm.name}</h3>
                  <p className="text-gray-600">{selectedFarm.address}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-expand-arrows-alt text-green-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Farm Area</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{selectedFarm.area}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
                    <span className="font-semibold text-gray-800">Established</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{selectedFarm.established}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fas fa-star text-yellow-500 mr-2"></i>
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFarm.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>
                Contact This Location
              </button>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-3xl p-4 shadow-xl">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <iframe
                  src={selectedFarm.mapEmbed}
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${selectedFarm.name} Location`}
                  className="rounded-2xl"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  <i className="fas fa-map-marker-alt text-green-600 mr-1"></i>
                  {selectedFarm.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts to discuss your agricultural needs and find the perfect solution for your farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>Call Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                <i className="fas fa-envelope mr-2"></i>Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
