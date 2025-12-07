import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/image/1000466873-removebg-preview.png" alt="Neelbert Innotech" className="h-14 w-14 object-contain" />
                <div className="flex flex-col leading-tight">
                  <h3 className="text-white text-lg font-bold">Neelbert</h3>
                  <h3 className="text-secondary text-lg font-bold">Innotech</h3>
                  <p className="text-xs text-gray-400">Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for innovative IT solutions. We specialize in custom software development, cloud services, cybersecurity, and digital transformation.
              </p>
              <div className="flex space-x-2">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                  <i className="fab fa-facebook-f text-primary"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                  <i className="fab fa-twitter text-primary"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                  <i className="fab fa-instagram text-primary"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                  <i className="fab fa-linkedin-in text-primary"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-secondary transition">
                    <i className="fas fa-angle-right mr-2"></i>About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-secondary transition">
                    <i className="fas fa-angle-right mr-2"></i>Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-secondary transition">
                    <i className="fas fa-angle-right mr-2"></i>Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-secondary transition">
                    <i className="fas fa-angle-right mr-2"></i>Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">Our Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-secondary transition cursor-pointer">
                  <i className="fas fa-angle-right mr-2"></i>Custom Software Development
                </li>
                <li className="text-gray-400 hover:text-secondary transition cursor-pointer">
                  <i className="fas fa-angle-right mr-2"></i>Cloud Computing Solutions
                </li>
                <li className="text-gray-400 hover:text-secondary transition cursor-pointer">
                  <i className="fas fa-angle-right mr-2"></i>Cybersecurity Services
                </li>
                <li className="text-gray-400 hover:text-secondary transition cursor-pointer">
                  <i className="fas fa-angle-right mr-2"></i>Mobile App Development
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-secondary">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-secondary mt-1 mr-3"></i>
                  <span className="text-gray-400">23 Ranking Street, New York, USA</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-secondary mr-3"></i>
                  <span className="text-gray-400">Email@Example.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-secondary mr-3"></i>
                  <span className="text-gray-400">+0123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 Neelbert Innotech Pvt. Ltd. All Rights Reserved.</p>
              <p>
                Designed by{' '}
                <a href="#" className="text-primary hover:underline">
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 shadow-lg z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default Footer;
