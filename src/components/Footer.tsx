import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-5">
              <img
                src="https://ik.imagekit.io/boostkit/Mintee/Mintee%20Logo_White.png?updatedAt=1745526582549"
                alt="Mintee Logo"
                className="h-10"
              />
            </Link>
            <p className="text-neutral-400 mb-5">
              Refreshing peppermint-infused water. Zero sugar, zero calories, made in Ireland.
            </p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <FacebookLogo size={22} weight="fill" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <InstagramLogo size={22} weight="fill" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <TwitterLogo size={22} weight="fill" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-inter-tight font-medium text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-neutral-400 hover:text-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/our-story" className="text-neutral-400 hover:text-primary transition-colors">Our Story</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter-tight font-medium text-lg mb-5 text-white">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-400 hover:text-primary transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter-tight font-medium text-lg mb-5 text-white">Newsletter</h4>
            <p className="text-neutral-400 mb-5">
              Subscribe to get special offers, free giveaways, and product launches.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-md text-neutral-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-14 pt-8 text-neutral-500 text-sm text-center">
          <p>&copy; {currentYear} Mintee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;