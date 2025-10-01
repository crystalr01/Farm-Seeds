// Crop data
const crops = [
    {
        name: "Rice",
        season: "Kharif",
        duration: "120-150 days",
        temperature: "20-35°C",
        rainfall: "1000-2000mm",
        soil: "Clay loam",
        icon: "fas fa-seedling",
        color: "bg-green-500",
        image: "🌾"
    },
    {
        name: "Wheat",
        season: "Rabi",
        duration: "120-150 days", 
        temperature: "15-25°C",
        rainfall: "300-400mm",
        soil: "Well-drained loam",
        icon: "fas fa-wheat-awn",
        color: "bg-yellow-600",
        image: "🌾"
    },
    {
        name: "Maize",
        season: "Kharif",
        duration: "80-120 days",
        temperature: "21-27°C", 
        rainfall: "500-750mm",
        soil: "Well-drained fertile",
        icon: "fas fa-corn",
        color: "bg-yellow-500",
        image: "🌽"
    },
    {
        name: "Cotton",
        season: "Kharif",
        duration: "180-200 days",
        temperature: "21-30°C",
        rainfall: "500-1000mm", 
        soil: "Black cotton soil",
        icon: "fas fa-cloud",
        color: "bg-white border-2 border-gray-300",
        image: "🌱"
    },
    {
        name: "Sugarcane",
        season: "Year-round",
        duration: "12-18 months",
        temperature: "20-26°C",
        rainfall: "1000-1500mm",
        soil: "Deep fertile loam",
        icon: "fas fa-candy-cane",
        color: "bg-green-600",
        image: "🎋"
    },
    {
        name: "Potato",
        season: "Rabi",
        duration: "70-120 days",
        temperature: "15-20°C",
        rainfall: "500-700mm",
        soil: "Sandy loam",
        icon: "fas fa-circle",
        color: "bg-yellow-700",
        image: "🥔"
    }
];

// Function to create crop cards
function createCropCards() {
    const cropCardsContainer = document.getElementById('crop-cards');
    
    crops.forEach((crop, index) => {
        const cropCard = document.createElement('div');
        cropCard.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer';
        cropCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-4xl">${crop.image}</div>
                    <div class="${crop.color} ${crop.color.includes('white') ? 'text-gray-800' : 'text-white'} w-12 h-12 rounded-full flex items-center justify-center">
                        <i class="${crop.icon}"></i>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">${crop.name}</h3>
                <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                        <i class="fas fa-calendar-alt w-4 mr-2 text-crop-green"></i>
                        <span><strong>Season:</strong> ${crop.season}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-clock w-4 mr-2 text-crop-green"></i>
                        <span><strong>Duration:</strong> ${crop.duration}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-thermometer-half w-4 mr-2 text-crop-green"></i>
                        <span><strong>Temperature:</strong> ${crop.temperature}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-tint w-4 mr-2 text-crop-green"></i>
                        <span><strong>Rainfall:</strong> ${crop.rainfall}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-mountain w-4 mr-2 text-crop-green"></i>
                        <span><strong>Soil:</strong> ${crop.soil}</span>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="w-full bg-crop-green text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                        <i class="fas fa-info-circle mr-2"></i>Learn More
                    </button>
                </div>
            </div>
        `;
        
        // Add click event for crop details
        cropCard.addEventListener('click', () => showCropDetails(crop));
        
        cropCardsContainer.appendChild(cropCard);
    });
}

// Function to show crop details in modal
function showCropDetails(crop) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-md w-full max-h-screen overflow-y-auto">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-bold text-gray-800">${crop.name} Details</h2>
                    <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.closest('.fixed').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="text-center mb-6">
                    <div class="text-6xl mb-4">${crop.image}</div>
                    <div class="${crop.color} ${crop.color.includes('white') ? 'text-gray-800' : 'text-white'} w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <i class="${crop.icon} text-2xl"></i>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-gray-800 mb-2">Growing Season</h3>
                        <p class="text-gray-600">${crop.season}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-gray-800 mb-2">Growth Duration</h3>
                        <p class="text-gray-600">${crop.duration}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-gray-800 mb-2">Temperature Range</h3>
                        <p class="text-gray-600">${crop.temperature}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-gray-800 mb-2">Rainfall Requirement</h3>
                        <p class="text-gray-600">${crop.rainfall}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold text-gray-800 mb-2">Soil Type</h3>
                        <p class="text-gray-600">${crop.soil}</p>
                    </div>
                </div>
                <div class="mt-6">
                    <button class="w-full bg-crop-green text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-semibold" onclick="this.closest('.fixed').remove()">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuButton = document.querySelector('.md\\:hidden button');
    const nav = document.querySelector('nav');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-full');
            nav.classList.toggle('left-0');
            nav.classList.toggle('right-0');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('shadow-lg');
            nav.classList.toggle('p-4');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('space-y-4');
        });
    }
}

// Weather animation
function animateWeatherCards() {
    const weatherCards = document.querySelectorAll('#weather .bg-white');
    weatherCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.text-3xl.font-bold');
    
    const animateCounter = (counter, target) => {
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + (target >= 1000 ? 'K+' : '+');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + (target >= 1000 ? 'K+' : '+');
            }
        }, 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const text = counter.textContent;
                const target = parseInt(text.replace(/[^0-9]/g, ''));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCropCards();
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollAnimations();
    animateCounters();
    
    // Add some delay for weather animation
    setTimeout(animateWeatherCards, 1000);
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('h2');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});
