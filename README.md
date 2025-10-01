# 🌾 Crop Information Dashboard

A modern, responsive crop information dashboard built with **Tailwind CSS**. This project provides comprehensive information about various crops, their growing seasons, weather requirements, and farming tips.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Crop Cards**: Click on any crop to see detailed information
- **Modern UI**: Beautiful gradients, animations, and hover effects
- **Weather Information**: Real-time weather insights for farming
- **Farming Tips**: Expert advice for better crop management
- **Smooth Animations**: Engaging user experience with CSS animations

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Interactive functionality
- **Font Awesome**: Beautiful icons
- **CSS Animations**: Smooth transitions and effects

## 📦 Installation & Setup

### Method 1: Quick Start (Using CDN)
The project is already set up to use Tailwind CSS via CDN. Simply open `index.html` in your browser.

### Method 2: Local Development Setup

1. **Clone or download the project**
   ```bash
   cd crop-info
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography
   ```

4. **Build CSS**
   ```bash
   npm run build
   ```

5. **Start development server**
   ```bash
   npm run serve
   ```

6. **For development with auto-rebuild**
   ```bash
   npm run dev
   ```

## 🌱 Project Structure

```
crop-info/
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── tailwind.config.js      # Tailwind configuration
├── package.json           # Node.js dependencies
├── README.md              # Project documentation
└── src/
    └── input.css          # Custom CSS and Tailwind directives
```

## 🎨 Customization

### Colors
The project uses custom color palette defined in `tailwind.config.js`:
- **crop-green**: Primary green colors for agriculture theme
- **crop-brown**: Earth tones for natural feel
- **crop-yellow**: Accent colors for highlights

### Adding New Crops
To add new crops, edit the `crops` array in `script.js`:

```javascript
const crops = [
    {
        name: "Your Crop",
        season: "Season",
        duration: "Growth period",
        temperature: "Temperature range",
        rainfall: "Rainfall requirement",
        soil: "Soil type",
        icon: "fas fa-icon-name",
        color: "bg-color-class",
        image: "🌱"
    }
    // ... add more crops
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev`: Start development with CSS watching
- `npm run build`: Build optimized CSS for production
- `npm run serve`: Start local HTTP server
- `npm start`: Alias for serve command

## 🌟 Key Features Explained

### Interactive Crop Cards
- Hover effects with smooth transitions
- Click to view detailed crop information
- Modal popup with comprehensive details

### Weather Section
- Real-time weather display
- Temperature, humidity, and rainfall info
- Weather-based farming recommendations

### Farming Tips
- Expert advice cards
- Categorized tips for different aspects
- Visual icons for easy identification

### Smooth Animations
- Scroll-triggered animations
- Counter animations for statistics
- Typing effect for hero title
- Floating animations for visual appeal

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please create an issue in the repository.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Font Awesome** for beautiful icons
- **Agriculture community** for inspiration and crop data

---

**Happy Farming! 🌾**
