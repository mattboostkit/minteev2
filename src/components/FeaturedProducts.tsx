import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'phosphor-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-28 md:py-36 bg-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 w-[900px] h-[900px] rounded-full bg-gradient-radial from-primary-50 to-transparent opacity-40 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium"
            >
              Our Products
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter-tight font-bold text-4xl md:text-5xl mb-6"
            >
              Discover <span className="text-gradient">Mintee</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-600"
            >
              Discover our range of peppermint-infused waters, created to refresh and revitalise you throughout your day.
            </motion.p>
          </div>

          <Link to="/shop" className="group flex items-center text-primary font-semibold">
            View All Products
            <ArrowRight weight="bold" className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
                {/* Removed overlay for better UX */}
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-primary">
                    {product.size}
                  </span>
                  <span className="badge badge-neutral">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-inter-tight font-semibold text-2xl mb-3">
                  {product.name}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-xl">£{product.price.toFixed(2)}</span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="p-3 rounded-full bg-primary-50 text-primary hover:bg-primary-100 transition-colors duration-300"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart weight="bold" className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/shop`}
                      className="btn btn-primary py-2 px-4"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;