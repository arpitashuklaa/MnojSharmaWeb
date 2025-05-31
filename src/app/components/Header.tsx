"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Buy", link: "/products" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[var(--saffron-darker)] to-[var(--saffron-dark)] shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold text-2xl md:text-3xl tracking-wide"
          >
            Manoj Kumar Sharma
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  className="text-white hover:text-[var(--saffron-light)] px-3 py-2 rounded-md transition-colors duration-300 font-medium block relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--saffron-light)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          {!isMobileMenuOpen && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 focus:outline-none"
              aria-label="Open menu"
            >
              <FiMenu className="h-6 w-6" />
            </motion.button>
          )}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[var(--saffron-darker)] to-[var(--saffron-dark)] shadow-xl"
            >
              <div className="flex justify-end p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="text-white p-2 focus:outline-none"
                  aria-label="Close menu"
                >
                  <FiX className="h-6 w-6" />
                </motion.button>
              </div>

              <ul className="px-4 py-2 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      className="block px-4 py-3 text-white hover:bg-[var(--saffron-accent)] rounded-md transition-all duration-300"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
