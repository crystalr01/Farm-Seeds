import React, { useState, useEffect } from 'react';

const Crops = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCrops, setVisibleCrops] = useState([]);

  const crops = [
    // Vegetables
    {
      id: 1,
      name: "Tomato",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1546470427-e5ac89c8ba3c?w=400&h=300&fit=crop",
      description: "Rich in vitamins and antioxidants, perfect for Indian climate",
      growthTime: "60-80 days",
      yield: "15-25 tons/hectare",
      color: "from-red-400 to-red-600"
    },
    {
      id: 2,
      name: "Hot Pepper",
      season: "kharif",
      category: "spice",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
      description: "Essential spice crop with high market demand",
      growthTime: "90-120 days",
      yield: "8-12 tons/hectare",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 3,
      name: "Sweet Pepper",
      season: "rabi",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
      description: "Colorful bell peppers rich in vitamin C",
      growthTime: "70-90 days",
      yield: "20-30 tons/hectare",
      color: "from-green-400 to-yellow-500"
    },
    {
      id: 4,
      name: "Watermelon",
      season: "summer",
      category: "fruit",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      description: "Refreshing summer fruit with high water content",
      growthTime: "80-100 days",
      yield: "25-40 tons/hectare",
      color: "from-green-500 to-red-400"
    },
    {
      id: 5,
      name: "Muskmelon",
      season: "summer",
      category: "fruit",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      description: "Sweet aromatic melon perfect for hot climate",
      growthTime: "85-95 days",
      yield: "15-25 tons/hectare",
      color: "from-orange-400 to-yellow-500"
    },
    {
      id: 6,
      name: "Cucumber",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop",
      description: "Cool and crisp vegetable with high water content",
      growthTime: "50-70 days",
      yield: "12-18 tons/hectare",
      color: "from-green-400 to-green-600"
    },
    {
      id: 7,
      name: "Pumpkin",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop",
      description: "Nutritious orange vegetable rich in beta-carotene",
      growthTime: "90-120 days",
      yield: "20-35 tons/hectare",
      color: "from-orange-400 to-orange-600"
    },
    {
      id: 8,
      name: "Eggplant",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&h=300&fit=crop",
      description: "Popular Indian vegetable known as brinjal",
      growthTime: "80-100 days",
      yield: "15-25 tons/hectare",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 9,
      name: "Bottle Gourd",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop",
      description: "Light green vegetable perfect for Indian cuisine",
      growthTime: "60-80 days",
      yield: "25-40 tons/hectare",
      color: "from-green-300 to-green-500"
    },
    {
      id: 10,
      name: "Okra",
      season: "kharif",
      category: "vegetable",
      image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=300&fit=crop",
      description: "Popular Indian vegetable known as bhindi",
      growthTime: "50-65 days",
      yield: "8-12 tons/hectare",
      color: "from-green-400 to-green-600"
    },
    // Cereals
    {
      id: 11,
      name: "Rice",
      season: "kharif",
      category: "cereal",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      description: "Staple food crop grown in flooded fields",
      growthTime: "120-150 days",
      yield: "3-5 tons/hectare",
      color: "from-yellow-400 to-green-500"
    },
    {
      id: 12,
      name: "Wheat",
      season: "rabi",
      category: "cereal",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      description: "Major cereal crop grown in cooler months",
      growthTime: "120-150 days",
      yield: "3-4 tons/hectare",
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 13,
      name: "Maize",
      season: "kharif",
      category: "cereal",
      image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
      description: "Versatile crop used for food and feed",
      growthTime: "90-120 days",
      yield: "4-6 tons/hectare",
      color: "from-yellow-400 to-yellow-600"
    },
    // Spices & Flowers
    {
      id: 14,
      name: "Marigold",
      season: "rabi",
      category: "flower",
      image: "https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?w=400&h=300&fit=crop",
      description: "Bright orange flowers used in festivals and decoration",
      growthTime: "60-80 days",
      yield: "8-12 tons/hectare",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 15,
      name: "Turmeric",
      season: "kharif",
      category: "spice",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop",
      description: "Golden spice with medicinal properties",
      growthTime: "240-300 days",
      yield: "15-25 tons/hectare",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 16,
      name: "Coriander",
      season: "rabi",
      category: "spice",
      image: "https://images.unsplash.com/photo-1599909533730-8b9e1c4c8e7e?w=400&h=300&fit=crop",
      description: "Essential herb and spice in Indian cooking",
      growthTime: "90-120 days",
      yield: "1-2 tons/hectare",
      color: "from-green-400 to-green-600"
    },
    // Cash Crops
    {
      id: 17,
      name: "Cotton",
      season: "kharif",
      category: "cash",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      description: "Major fiber crop requiring long growing season",
      growthTime: "180-200 days",
      yield: "1.5-2.5 tons/hectare",
      color: "from-white to-green-400"
    },
    {
      id: 18,
      name: "Sugarcane",
      season: "year-round",
      category: "cash",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?w=400&h=300&fit=crop",
      description: "Long-duration crop for sugar production",
      growthTime: "300-365 days",
      yield: "60-80 tons/hectare",
      color: "from-green-500 to-yellow-500"
    }
  ];

  const filteredCrops = crops.filter(crop => {
    const matchesFilter = filter === 'all' || crop.season === filter || crop.category === filter;
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    setVisibleCrops([]);
    const timer = setTimeout(() => {
      setVisibleCrops(filteredCrops);
    }, 100);
    return () => clearTimeout(timer);
  }, [filter, searchTerm, filteredCrops]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crop-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-bounce">
              🌱 Indian Crop Database 🌾
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Discover
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Indian Crops
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore comprehensive information about traditional and modern Indian crops with detailed growing guides.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search crops by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 shadow-lg"
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { key: 'all', label: 'All Crops', icon: '🌾' },
              { key: 'vegetable', label: 'Vegetables', icon: '🥬' },
              { key: 'fruit', label: 'Fruits', icon: '🍉' },
              { key: 'cereal', label: 'Cereals', icon: '🌾' },
              { key: 'spice', label: 'Spices', icon: '🌶️' },
              { key: 'flower', label: 'Flowers', icon: '🌸' },
              { key: 'cash', label: 'Cash Crops', icon: '💰' },
              { key: 'kharif', label: 'Kharif Season', icon: '☀️' },
              { key: 'rabi', label: 'Rabi Season', icon: '❄️' },
              { key: 'summer', label: 'Summer Season', icon: '🔥' }
            ].map(filterOption => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${filter === filterOption.key
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:shadow-md'
                  }`}
              >
                <span className="mr-2">{filterOption.icon}</span>
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">{crops.length}</div>
              <div className="text-gray-600 font-medium">Total Crops</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{crops.filter(c => c.category === 'vegetable').length}</div>
              <div className="text-gray-600 font-medium">Vegetables</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{crops.filter(c => c.season === 'kharif').length}</div>
              <div className="text-gray-600 font-medium">Kharif Crops</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">{crops.filter(c => c.category === 'spice').length}</div>
              <div className="text-gray-600 font-medium">Spices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleCrops.map((crop, index) => (
              <div
                key={crop.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${crop.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${crop.name}`;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`bg-gradient-to-r ${crop.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {crop.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      {crop.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-clock text-gray-400 text-sm"></i>
                      <span className="text-sm text-gray-500">{crop.growthTime}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {crop.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Season:</span>
                      <span className="font-semibold text-gray-700 capitalize">{crop.season}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Yield:</span>
                      <span className="font-semibold text-green-600">{crop.yield}</span>
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${crop.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:animate-pulse`}>
                    <i className="fas fa-info-circle mr-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {visibleCrops.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No crops found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
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

export default Crops;
