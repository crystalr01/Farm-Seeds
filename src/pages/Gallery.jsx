import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryItems = [
    // Farm Fields & Crops
    { id: 1, title: "Tomato Field Cultivation", category: "crops", image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=800&h=600&fit=crop", description: "Healthy tomato plants in organized rows" },
    { id: 2, title: "Green Leafy Vegetables", category: "crops", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", description: "Fresh green vegetables growing in the field" },
    { id: 3, title: "Cabbage Farming", category: "crops", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&h=600&fit=crop", description: "Large cabbage heads ready for harvest" },
    { id: 4, title: "Pepper Cultivation", category: "crops", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop", description: "Red and green peppers growing on plants" },
    { id: 5, title: "Cucumber Greenhouse", category: "technology", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", description: "Cucumber plants in controlled environment" },
    { id: 6, title: "Eggplant Harvest", category: "crops", image: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=800&h=600&fit=crop", description: "Fresh eggplants ready for market" },
    { id: 7, title: "Okra Plantation", category: "crops", image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=800&h=600&fit=crop", description: "Okra plants with fresh green pods" },
    { id: 8, title: "Bottle Gourd Farm", category: "crops", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&h=600&fit=crop", description: "Bottle gourds growing on vines" },
    
    // Farming Technology & Equipment
    { id: 9, title: "Modern Irrigation System", category: "technology", image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop", description: "Advanced drip irrigation in action" },
    { id: 10, title: "Tractor Operations", category: "technology", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop", description: "Modern farming equipment at work" },
    { id: 11, title: "Greenhouse Technology", category: "technology", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", description: "Climate-controlled growing environment" },
    { id: 12, title: "Seed Processing Unit", category: "technology", image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop", description: "Modern seed processing facility" },
    
    // Harvesting & Processing
    { id: 13, title: "Fresh Harvest Collection", category: "harvest", image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=800&h=600&fit=crop", description: "Freshly harvested vegetables" },
    { id: 14, title: "Watermelon Harvest", category: "harvest", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop", description: "Ripe watermelons ready for market" },
    { id: 15, title: "Pumpkin Collection", category: "harvest", image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=600&fit=crop", description: "Orange pumpkins after harvest" },
    { id: 16, title: "Corn Field Harvest", category: "harvest", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&h=600&fit=crop", description: "Golden corn ready for harvest" },
    
    // Nursery & Seedlings
    { id: 17, title: "Seedling Nursery", category: "nursery", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", description: "Young plants in nursery trays" },
    { id: 18, title: "Tomato Seedlings", category: "nursery", image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=800&h=600&fit=crop", description: "Healthy tomato seedlings growing" },
    { id: 19, title: "Pepper Seedlings", category: "nursery", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop", description: "Young pepper plants in trays" },
    { id: 20, title: "Vegetable Nursery", category: "nursery", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=800&h=600&fit=crop", description: "Various vegetable seedlings" },
    
    // Farm Infrastructure
    { id: 21, title: "Storage Facility", category: "infrastructure", image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop", description: "Modern storage warehouse" },
    { id: 22, title: "Processing Center", category: "infrastructure", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop", description: "Crop processing facility" },
    { id: 23, title: "Farm Office", category: "infrastructure", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop", description: "Administrative building" },
    { id: 24, title: "Research Lab", category: "infrastructure", image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=800&h=600&fit=crop", description: "Agricultural research facility" }
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  // Auto-play slideshow in modal
  useEffect(() => {
    if (!isModalOpen) return;
    
    const interval = setInterval(nextImage, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [isModalOpen, currentImageIndex]);

  // Auto-slide background images for stats cards
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % galleryItems.length);
        setIsAnimating(false);
      }, 200); // Small delay for smooth transition
    }, 1500); // Change background every 1.5 seconds
    
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crop-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
              📸 Farm Gallery 🌾
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Showcasing Our
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Agricultural Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of modern farming techniques, successful implementations, and agricultural innovations.
            </p>
          </div>

          {/* Enhanced Animated Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Total Photos Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-pulse-slow">
              {/* Background Image with Ken Burns Effect */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-105'} group-hover:scale-125`}
                style={{
                  backgroundImage: `url(${galleryItems[currentBgIndex]?.image})`,
                }}
              ></div>
              
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/85 via-green-600/90 to-emerald-700/95 group-hover:from-green-400/90 group-hover:via-green-500/95 group-hover:to-emerald-600/95 transition-all duration-500"></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 text-center text-white">
                <div className="bg-white/25 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-bounce-slow">
                  <i className="fas fa-camera text-3xl group-hover:text-4xl transition-all duration-300"></i>
                </div>
                <div className="text-5xl font-black mb-3 group-hover:scale-125 transition-all duration-500 animate-count-up drop-shadow-lg">
                  {galleryItems.length}
                </div>
                <div className="font-bold text-xl text-white/95 mb-2 group-hover:text-2xl transition-all duration-300">Total Photos</div>
                <div className="text-sm text-white/80 font-medium">High Quality Images</div>
                
                {/* Progress Bar */}
                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>

            {/* Crop Photos Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 animate-pulse-slow" style={{animationDelay: '0.2s'}}>
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-105'} group-hover:scale-125`}
                style={{
                  backgroundImage: `url(${galleryItems[(currentBgIndex + 6) % galleryItems.length]?.image})`,
                }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/85 via-blue-600/90 to-cyan-700/95 group-hover:from-blue-400/90 group-hover:via-blue-500/95 group-hover:to-cyan-600/95 transition-all duration-500"></div>
              
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-12 left-6 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
              </div>
              
              <div className="relative p-8 text-center text-white">
                <div className="bg-white/25 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-lg animate-bounce-slow">
                  <i className="fas fa-seedling text-3xl group-hover:text-4xl transition-all duration-300"></i>
                </div>
                <div className="text-5xl font-black mb-3 group-hover:scale-125 transition-all duration-500 animate-count-up drop-shadow-lg">
                  {galleryItems.filter(i => i.category === 'crops').length}
                </div>
                <div className="font-bold text-xl text-white/95 mb-2 group-hover:text-2xl transition-all duration-300">Crop Photos</div>
                <div className="text-sm text-white/80 font-medium">Farm Cultivation</div>
                
                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            {/* Technology Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 animate-pulse-slow" style={{animationDelay: '0.4s'}}>
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-105'} group-hover:scale-125`}
                style={{
                  backgroundImage: `url(${galleryItems[(currentBgIndex + 12) % galleryItems.length]?.image})`,
                }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/85 via-purple-600/90 to-indigo-700/95 group-hover:from-purple-400/90 group-hover:via-purple-500/95 group-hover:to-indigo-600/95 transition-all duration-500"></div>
              
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-4 right-8 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
              </div>
              
              <div className="relative p-8 text-center text-white">
                <div className="bg-white/25 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-bounce-slow">
                  <i className="fas fa-cogs text-3xl group-hover:text-4xl transition-all duration-300 animate-spin-slow"></i>
                </div>
                <div className="text-5xl font-black mb-3 group-hover:scale-125 transition-all duration-500 animate-count-up drop-shadow-lg">
                  {galleryItems.filter(i => i.category === 'technology').length}
                </div>
                <div className="font-bold text-xl text-white/95 mb-2 group-hover:text-2xl transition-all duration-300">Technology</div>
                <div className="text-sm text-white/80 font-medium">Modern Equipment</div>
                
                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full animate-pulse" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>

            {/* Harvest Card */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:-rotate-1 animate-pulse-slow" style={{animationDelay: '0.6s'}}>
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-105'} group-hover:scale-125`}
                style={{
                  backgroundImage: `url(${galleryItems[(currentBgIndex + 18) % galleryItems.length]?.image})`,
                }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/85 via-red-600/90 to-pink-700/95 group-hover:from-orange-400/90 group-hover:via-red-500/95 group-hover:to-pink-600/95 transition-all duration-500"></div>
              
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                <div className="absolute top-6 left-10 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute bottom-10 right-4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
              </div>
              
              <div className="relative p-8 text-center text-white">
                <div className="bg-white/25 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-lg animate-bounce-slow">
                  <i className="fas fa-wheat-awn text-3xl group-hover:text-4xl transition-all duration-300"></i>
                </div>
                <div className="text-5xl font-black mb-3 group-hover:scale-125 transition-all duration-500 animate-count-up drop-shadow-lg">
                  {galleryItems.filter(i => i.category === 'harvest').length}
                </div>
                <div className="font-bold text-xl text-white/95 mb-2 group-hover:text-2xl transition-all duration-300">Harvest</div>
                <div className="text-sm text-white/80 font-medium">Fresh Produce</div>
                
                <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
                  <div className="bg-white h-full rounded-full animate-pulse" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Photos', icon: '📷' },
              { key: 'crops', label: 'Crops', icon: '🌱' },
              { key: 'technology', label: 'Technology', icon: '🚜' },
              { key: 'harvest', label: 'Harvest', icon: '🌾' },
              { key: 'nursery', label: 'Nursery', icon: '🌿' },
              { key: 'infrastructure', label: 'Infrastructure', icon: '🏭' }
            ].map(filterOption => (
              <button 
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  filter === filterOption.key 
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg' 
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:shadow-md'
                }`}
              >
                <span className="mr-2">{filterOption.icon}</span>
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-bold">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <i className="fas fa-expand text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No photos found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Slideshow */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 text-3xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Main Image */}
          <div className="max-w-6xl max-h-[80vh] mx-auto px-4">
            <img 
              src={filteredItems[currentImageIndex]?.image} 
              alt={filteredItems[currentImageIndex]?.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between text-white mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{filteredItems[currentImageIndex]?.title}</h3>
                  <p className="text-white/80">{filteredItems[currentImageIndex]?.description}</p>
                </div>
                <div className="text-right">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-white shadow-lg' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-5000 ease-linear"
              style={{ width: `${((currentImageIndex + 1) / filteredItems.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

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
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes count-up {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-count-up {
          animation: count-up 1s ease-out;
        }
        
        /* Hover effects */
        .group:hover .animate-spin-slow {
          animation-duration: 2s;
        }
        
        /* Ken Burns effect */
        @keyframes kenBurns {
          0% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.1) rotate(1deg);
          }
          50% {
            transform: scale(1.05) rotate(-0.5deg);
          }
          75% {
            transform: scale(1.15) rotate(0.5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        
        /* Floating animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        
        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
