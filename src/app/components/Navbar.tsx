'use client'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Home", "About Me", "Buy", "Testimonials", "Contact"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">
            Manoj Kumar Sharma
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:bg-amber-600 px-3 py-2 rounded-md transition-colors duration-300 font-medium block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Only shows when menu is closed */}
          {!isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Open menu"
            >
              <FiMenu className="h-6 w-6 transition-all duration-500" />
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Simple backdrop without blur */}
          <div 
            className="fixed inset-0 bg-black/30 transition-opacity duration-500 ease-in-out opacity-100"
            onClick={toggleMobileMenu}
          />
          
          {/* Menu Panel - Slides from left */}
          <div
            className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-amber-500 to-orange-600 shadow-xl transition-transform duration-500 ease-out translate-x-0"
          >
            {/* Single Close Button inside the menu */}
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMobileMenu}
                className="text-white p-2 focus:outline-none transition-transform duration-300 hover:scale-110"
                aria-label="Close menu"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <ul className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-3 text-white hover:bg-amber-600 rounded-md transition-all duration-500 ease-out opacity-100 translate-x-0"
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;