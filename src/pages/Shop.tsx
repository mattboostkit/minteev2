import React, { useState } from 'react';
import { FilterIcon, ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import InfoPopup from '../components/InfoPopup';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const Shop: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const categories = ['Classic', 'Strong', 'Flavoured', 'Multipacks'];
  
  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

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
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium"
            >
              Our Products
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-inter-tight font-bold text-4xl md:text-6xl mb-5"
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
      
      <div className="container mx-auto py-16">
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary rounded-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-primary text-white text-xs font-medium rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className={`w-full md:w-72 md:block ${isMobileFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-md sticky top-24">
              <div className="flex items-center mb-6">
                <FilterIcon className="w-5 h-5 mr-3 text-primary" />
                <h3 className="font-inter-tight font-semibold text-xl">Filters</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-4 text-neutral-900">Categories</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setCategoryFilter(null)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm ${
                      categoryFilter === null 
                        ? 'bg-gradient-to-r from-primary to-primary-600 text-white font-medium' 
                        : 'hover:bg-neutral-100'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm ${
                        categoryFilter === category 
                          ? 'bg-gradient-to-r from-primary to-primary-600 text-white font-medium' 
                          : 'hover:bg-neutral-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:block">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center justify-center w-full btn btn-primary"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  View Cart {totalItems > 0 && `(${totalItems})`}
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="font-inter-tight font-semibold text-2xl">
                {categoryFilter ? `${categoryFilter} Products` : 'All Products'}
              </h2>
              <p className="text-neutral-500 font-medium">{filteredProducts.length} products</p>
            </div>
            
            <ProductList products={filteredProducts} />
          </div>
        </div>
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