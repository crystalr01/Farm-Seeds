import React, { useState } from 'react';

const About = () => {
  const [activeLeader, setActiveLeader] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Sagi Sai Babu Raju (S.S.B.RAJU)",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "SSB RAJU leads this company as Managing Director and has 35 plus years of Seed production experience. His last job was Global Production Manager and travelled extensively through many countries to manage Hand Pollinated as well as Bee pollinated Crops. To his credit, he has built a strong network of farmers and professional team in India for his previous company. He is also the pioneer in introducing modern technology into seed production for India, like drip, Mulch, fertigation through drip, net house production and pollen supply.",
      experience: "35+ Years",
      expertise: ["Seed Production", "Global Operations", "Technology Innovation", "Team Building"],
      color: "from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      name: "Dov Hecht",
      position: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Dov Hecht is a Director in Sagi Seeds and crop consultant. After managing several projects in South America, he started working in Israel in 1992 at Pioneer Vegetable Genetics in seed production and later this company changed ownership to Sun Seeds and to NunhemsZaden. Dov held the functions of Production Manager and Israel country Manager, EUMEA production manager of tomato, pepper and watermelon and Global Production Manager Tomato and Pepper. From 2010, he was Global Production Manager Crop Technology and Area Development. Dov left Nunhems in December 2013 and started his own seed production operation in Peru where he is producing hybrid seeds of hand pollinated crops as Tomato, Pepper, Melon, Watermelon, Cucumber etc.",
      experience: "30+ Years",
      expertise: ["Crop Consulting", "International Operations", "Hybrid Seeds", "Production Management"],
      color: "from-green-600 to-emerald-700"
    }
  ];

  const boardMembers = [
    { name: "Sagi Sai Babu Raju (S.S.B.RAJU)", position: "Managing Director", icon: "fas fa-crown" },
    { name: "Sagi Sree Lakshmi", position: "Director", icon: "fas fa-user-tie" },
    { name: "Sagi Krishna Vardhan Raju", position: "Director", icon: "fas fa-user-tie" },
    { name: "Sagi Sriteja", position: "Director", icon: "fas fa-user-tie" },
    { name: "Dov Hecht", position: "Director", icon: "fas fa-user-tie" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crop-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
              🌱 About Our Company 🌾
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Transforming Agriculture with
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation & Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leading the seed industry with reliable multiplication services and cutting-edge agricultural solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-crop-pattern"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <i className="fas fa-bullseye text-4xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              To provide reliable & consistent Seed Multiplication and related services to Global Seed Industry. 
              We constantly innovate and improve our production to provide quality seed to farmers by maintaining 
              excellent genetic purity and germination, and also keep ourselves vigilant on the purity of the seed.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our company's success with decades of industry experience.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Leader Selector */}
            <div className="flex justify-center gap-4 mb-12">
              {leaders.map((leader, index) => (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeader(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeLeader === index
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:shadow-md'
                  }`}
                >
                  {leader.name.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {/* Active Leader Profile */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Leader Image */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${leaders[activeLeader].color} opacity-20`}></div>
                  <img 
                    src={leaders[activeLeader].image} 
                    alt={leaders[activeLeader].name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-600">Experience</div>
                          <div className="text-2xl font-bold text-gray-800">{leaders[activeLeader].experience}</div>
                        </div>
                        <div className={`bg-gradient-to-r ${leaders[activeLeader].color} p-3 rounded-xl`}>
                          <i className="fas fa-award text-white text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leader Info */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{leaders[activeLeader].name}</h3>
                    <div className={`inline-block bg-gradient-to-r ${leaders[activeLeader].color} text-white px-4 py-2 rounded-full font-semibold`}>
                      {leaders[activeLeader].position}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {leaders[activeLeader].bio}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-3">
                      {leaders[activeLeader].expertise.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className={`bg-gradient-to-r ${leaders[activeLeader].color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      <i className="fas fa-envelope mr-2"></i>Contact
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-green-500 hover:text-green-600 transition-all duration-300">
                      <i className="fas fa-linkedin mr-2"></i>LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinguished board members bring diverse expertise and strategic vision to guide our company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-center">
                  <div className={`bg-gradient-to-r ${index === 0 ? 'from-blue-600 to-indigo-700' : 'from-green-600 to-emerald-700'} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${member.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-gray-600 font-semibold mb-4">{member.position}</div>
                  {index === 0 && (
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      <i className="fas fa-star mr-1"></i>Managing Director
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our company culture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously pushing boundaries with cutting-edge technology and modern agricultural practices.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintaining the highest standards in genetic purity, germination rates, and seed quality.
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-handshake text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Building trust through consistent delivery and dependable partnerships with farmers worldwide.
              </p>
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

export default About;
