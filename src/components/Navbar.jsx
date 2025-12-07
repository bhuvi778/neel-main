import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="flex items-center relative">
        {/* Logo Section */}
        <div className="relative px-6 py-3 flex items-center">
          <Link to="/" className="flex items-center space-x-2 z-10">
            <img src="/image/1000466873-removebg-preview.png" alt="Neelbert Innotech" className="h-10 w-10 object-contain drop-shadow-lg" />
            <div className="flex flex-col leading-tight">
              <h1 className="text-white text-base font-bold drop-shadow-md">Neelbert</h1>
              <h1 className="text-white text-base font-bold drop-shadow-md">Innotech</h1>
              <p className="text-white/90 text-[10px]">Pvt. Ltd.</p>
            </div>
          </Link>
        </div>

        {/* Navigation Menu Section */}
        <div className="flex-1 flex items-center justify-between px-6 py-3 bg-blue-600">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            <Link to="/" className={`nav-link text-white hover:text-blue-200 ${isActive('/') ? 'text-blue-200' : ''}`}>
              <i className="fas fa-home mr-2"></i>
              Home
            </Link>
            <Link to="/about" className={`nav-link text-white hover:text-blue-200 ${isActive('/about') ? 'text-blue-200' : ''}`}>
              <i className="fas fa-info-circle mr-2"></i>
              About
            </Link>
            <Link to="/services" className={`nav-link text-white hover:text-blue-200 ${isActive('/services') ? 'text-blue-200' : ''}`}>
              <i className="fas fa-cogs mr-2"></i>
              Services
            </Link>
            <Link to="/projects" className={`nav-link text-white hover:text-blue-200 ${isActive('/projects') ? 'text-blue-200' : ''}`}>
              <i className="fas fa-project-diagram mr-2"></i>
              Projects
            </Link>

            {/* Pages dropdown */}
            <div className="relative group">
              <button className="nav-link text-white hover:text-blue-200">
                <i className="fas fa-file-alt mr-2"></i>
                Pages <i className="fas fa-chevron-down ml-2 text-sm"></i>
              </button>
              <div className="dropdown-menu">
                <Link to="/blog" className="dropdown-item">
                  <i className="fas fa-blog mr-2"></i>
                  Our Blog
                </Link>
                <Link to="/team" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i>
                  Our Team
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  <i className="fas fa-star mr-2"></i>
                  Testimonial
                </Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-link text-white hover:text-blue-200 ${isActive('/contact') ? 'text-blue-200' : ''}`}>
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </Link>
          </div>

          {/* Contact info */}
          <div className="hidden xl:flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <div className="animate-pulse">
                <i className="fa fa-phone-alt text-white text-xl"></i>
              </div>
              <div className="border-r border-white/30 pr-3">
                <div className="text-white/80 text-xs">Have any questions?</div>
                <div className="text-white font-semibold text-sm">Call: + 0123 456 7890</div>
              </div>
              <button className="text-white hover:text-blue-200 transition">
                <i className="bi bi-search text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-menu-item">
            <i className="fas fa-home mr-2"></i>
            Home
          </Link>
          <Link to="/about" className="mobile-menu-item">
            <i className="fas fa-info-circle mr-2"></i>
            About
          </Link>
          <Link to="/services" className="mobile-menu-item">
            <i className="fas fa-cogs mr-2"></i>
            Services
          </Link>
          <Link to="/projects" className="mobile-menu-item">
            <i className="fas fa-project-diagram mr-2"></i>
            Projects
          </Link>
          <button
            onClick={() => setShowPages(!showPages)}
            className="mobile-menu-item justify-between"
          >
            <span><i className="fas fa-file-alt mr-2"></i>Pages</span>
            <i className={`fas fa-chevron-${showPages ? 'up' : 'down'} text-sm`}></i>
          </button>
          {showPages && (
            <div className="pl-4">
              <Link to="/blog" className="mobile-menu-item">
                <i className="fas fa-blog mr-2"></i>
                Our Blog
              </Link>
              <Link to="/team" className="mobile-menu-item">
                <i className="fas fa-users mr-2"></i>
                Our Team
              </Link>
              <Link to="/testimonial" className="mobile-menu-item">
                <i className="fas fa-star mr-2"></i>
                Testimonial
              </Link>
            </div>
          )}
          <Link to="/contact" className="mobile-menu-item">
            <i className="fas fa-envelope mr-2"></i>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
