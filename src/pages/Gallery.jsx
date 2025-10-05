import React, { useState, useEffect, useCallback } from 'react';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    // Farm Fields & Crops
    { id: 1, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/01.jpg" },
    { id: 2, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/02.jpg" },
    { id: 3, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/07.jpg" },
    { id: 4, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/08.jpg" },
    { id: 5, category: "technology", image: "https://www.sagiseeds.com/images/gallery/big/09.jpg" },
    { id: 6, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/11.jpg" },
    { id: 7, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/13.jpg" },
    { id: 8, category: "crops", image: "https://www.sagiseeds.com/images/gallery/big/14.jpg" },

    // Farming Technology & Equipment
    { id: 9, category: "technology", image: "https://www.sagiseeds.com/images/gallery/big/15.jpg" },
    { id: 10, category: "technology", image: "https://www.sagiseeds.com/images/gallery/big/16.jpg" },
    { id: 11, category: "technology", image: "https://www.sagiseeds.com/images/gallery/big/18.jpg" },
    { id: 12, category: "technology", image: "https://www.sagiseeds.com/images/gallery/big/19.jpg" },

    // Harvesting & Processing
    { id: 13, category: "harvest", image: "https://www.sagiseeds.com/images/gallery/big/22.jpg" },
    { id: 14, category: "harvest", image: "https://www.sagiseeds.com/images/gallery/big/24.jpg" },
    { id: 15, category: "harvest", image: "https://www.sagiseeds.com/images/gallery/big/25.jpg" },
    { id: 16, category: "harvest", image: "https://www.sagiseeds.com/images/gallery/big/27.jpg" },

    // Nursery & Seedlings
    { id: 17, category: "nursery", image: "https://www.sagiseeds.com/images/gallery/big/28.jpg" },
    { id: 18, category: "nursery", image: "https://www.sagiseeds.com/images/gallery/big/30.jpg" },
    { id: 19, category: "nursery", image: "https://www.sagiseeds.com/images/gallery/big/31.jpg" },
    { id: 20, category: "nursery", image: "https://www.sagiseeds.com/images/gallery/big/32.jpg" },

    // Farm Infrastructure
    { id: 21, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/34.jpg" },
    { id: 22, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/35.jpg" },
    { id: 23, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/36.jpg" },
    { id: 24, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/37.jpg" },

    { id: 25, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/38.jpg" },
    { id: 26, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/39.jpg" },
    { id: 27, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/40.jpg" },
    { id: 28, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/41.jpg" },

    { id: 25, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/42.jpg" },
    { id: 26, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/43.jpg" },
    { id: 27, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/44.jpg" },
    { id: 28, category: "infrastructure", image: "https://www.sagiseeds.com/images/gallery/big/45.jpg" },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

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
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  // Auto-play slideshow in modal
  useEffect(() => {
    if (!isModalOpen) return;

    const interval = setInterval(nextImage, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [isModalOpen, currentImageIndex, nextImage]);

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

        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
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
                    alt={`Gallery item ${item.id}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=Image+${item.id}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <i className="fas fa-expand text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              src={galleryItems[currentImageIndex]?.image}
              alt={`Gallery item ${galleryItems[currentImageIndex]?.id}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-end text-white mb-4">
                <div className="text-right">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryItems.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                      ? 'border-white shadow-lg'
                      : 'border-white/30 hover:border-white/60'
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={`Gallery item ${item.id}`}
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
              style={{ width: `${((currentImageIndex + 1) / galleryItems.length) * 100}%` }}
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
