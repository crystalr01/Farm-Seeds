class App {
    constructor() {
        this.currentPage = 'home';
        this.components = {};
        this.pages = {};
        this.init();
    }

    init() {
        this.initializeComponents();
        this.setupRouting();
        this.loadPage('home');
    }

    initializeComponents() {
        // Initialize navbar and footer (always visible)
        this.components.navbar = new Navbar();
        this.components.footer = new Footer();
        
        // Render navbar and footer
        document.getElementById('navbar-container').innerHTML = this.components.navbar.render();
        document.getElementById('footer-container').innerHTML = this.components.footer.render();
    }

    setupRouting() {
        // Handle hash changes for routing
        window.addEventListener('hashchange', () => {
            const page = window.location.hash.slice(1) || 'home';
            this.loadPage(page);
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('href').slice(1);
                this.navigateTo(page);
            }
        });
    }

    navigateTo(page) {
        window.location.hash = page;
        this.loadPage(page);
    }

    loadPage(pageName) {
        const mainContent = document.getElementById('main-content');
        
        // Clean up previous page
        if (this.pages[this.currentPage]) {
            delete this.pages[this.currentPage];
        }

        // Load new page
        switch(pageName) {
            case 'home':
                this.pages.home = new HomePage();
                mainContent.innerHTML = this.pages.home.render();
                break;
            case 'about':
                this.pages.about = new AboutPage();
                mainContent.innerHTML = this.pages.about.render();
                break;
            case 'crops':
                this.pages.crops = new CropsPage();
                mainContent.innerHTML = this.pages.crops.render();
                break;
            case 'services':
                this.pages.services = new ServicesPage();
                mainContent.innerHTML = this.pages.services.render();
                break;
            case 'gallery':
                this.pages.gallery = new GalleryPage();
                mainContent.innerHTML = this.pages.gallery.render();
                break;
            case 'contact':
                this.pages.contact = new ContactPage();
                mainContent.innerHTML = this.pages.contact.render();
                break;
            default:
                this.pages.home = new HomePage();
                mainContent.innerHTML = this.pages.home.render();
                break;
        }

        this.currentPage = pageName;
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update active nav links
        this.updateActiveNavLinks(pageName);
    }

    updateActiveNavLinks(activePage) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('text-green-600', 'font-bold');
            link.classList.add('text-gray-700');
        });

        // Add active class to current page link
        document.querySelectorAll(`a[href="#${activePage}"]`).forEach(link => {
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
                link.classList.add('text-green-600', 'font-bold');
                link.classList.remove('text-gray-700');
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});

// Export for global access
window.App = App;
