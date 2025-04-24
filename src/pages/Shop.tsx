import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import InfoPopup from '../components/InfoPopup';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const Shop: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Show payment info popup when clicking checkout
  React.useEffect(() => {
    const showInfoTimeout = setTimeout(() => {
      if (cartItems.length > 0) {
        setIsInfoOpen(true);
      }
    }, 2000);

    return () => clearTimeout(showInfoTimeout);
  }, [cartItems.length]);

  return (
    <>
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary-600 text-white text-sm font-medium"
            >
              Our Products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-gazpacho font-black text-4xl md:text-6xl mb-5"
            >
              Shop Mintee Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-700"
            >
              Discover our range of refreshing peppermint waters, designed to invigorate your day naturally.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-gazpacho font-black text-2xl">
            Our Products
          </h2>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-lg"
          >
            <ShoppingCart className="w-6 h-6" />
            <span>Basket</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-primary text-white text-xs font-medium rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <ProductList products={products} />
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <InfoPopup
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </>
  );
};

export default Shop;