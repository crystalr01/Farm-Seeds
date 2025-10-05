import React from 'react';

const Crops = () => {

  const crops = [
    {
      id: 1,
      name: "Tomato",
      image: "https://www.sagiseeds.com/images/001.jpg"
    },
    {
      id: 2,
      name: "Hot Pepper",
      image: "https://www.sagiseeds.com/images/002.jpg"
    },
    {
      id: 3,
      name: "Sweet Pepper",
      image: "https://www.sagiseeds.com/images/003.jpg"
    },
    {
      id: 4,
      name: "Watermelon",
      image: "https://www.sagiseeds.com/images/004.jpg"
    },
    {
      id: 5,
      name: "Melon",
      image: "https://www.sagiseeds.com/images/005.jpg"
    },
    {
      id: 6,
      name: "Cucumber",
      image: "https://www.sagiseeds.com/images/006.jpg"
    },
    {
      id: 7,
      name: "Pumpkin",
      image: "https://www.sagiseeds.com/images/007.jpg"
    },
    {
      id: 8,
      name: "Eggplant",
      image: "https://www.sagiseeds.com/images/008.jpg"
    },
    {
      id: 9,
      name: "SQUASH",
      image: "https://www.sagiseeds.com/images/009.jpg"
    },
    {
      id: 10,
      name: "Okra",
      image: "https://www.sagiseeds.com/images/010.jpg"
    },
    {
      id: 11,
      name: "VINCA",
      image: "https://www.sagiseeds.com/images/011.jpg"
    },
    {
      id: 12,
      name: "MARIGOLD",
      image: "https://www.sagiseeds.com/images/012.jpg"
    },
    {
      id: 13,
      name: "SALVIA",
      image: "https://www.sagiseeds.com/images/013.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Indian
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Crops</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore various Indian crops with beautiful images
            </p>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(crop.name)}`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {crop.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {crop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crops;
