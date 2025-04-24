import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List, X, ShoppingCart, ArrowRight } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src="https://ik.imagekit.io/boostkit/Mintee/Mintee%20Logo.png?updatedAt=1745526582680"
              alt="Mintee Logo"
              className="h-10"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Shop</NavLink>
            <NavLink to="/our-story" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>Our Story</NavLink>
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => window.location.href = '/shop'}
              className="relative mr-4 p-2 rounded-full hover:bg-primary-50 transition-colors"
            >
              <ShoppingCart weight="bold" className="w-6 h-6 text-neutral-700 hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <Link to="/shop" className="btn btn-primary ml-4 group">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => window.location.href = '/shop'}
              className="relative mr-4 p-2"
            >
              <ShoppingCart weight="bold" className="w-6 h-6 text-neutral-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="text-neutral-700 focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <List weight="bold" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img
                    src="https://ik.imagekit.io/boostkit/Mintee/Mintee%20Logo.png?updatedAt=1745526582680"
                    alt="Mintee Logo"
                    className="h-10"
                  />
                </Link>
                <button
                  className="text-neutral-700 focus:outline-none p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <X weight="bold" className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 text-xl">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-2 border-b border-neutral-100 ${isActive ? 'text-primary font-medium' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `py-2 border-b border-neutral-100 ${isActive ? 'text-primary font-medium' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/our-story"
                  className={({ isActive }) =>
                    `py-2 border-b border-neutral-100 ${isActive ? 'text-primary font-medium' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </NavLink>
              </nav>

              <div className="mt-auto">
                <Link
                  to="/shop"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;