import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-0 w-[900px] h-[900px] rounded-full bg-gradient-radial from-primary-100 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute -bottom-24 right-0 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-50 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="md:col-span-6 lg:col-span-5"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium">
              Natural Refreshment
            </div>
            <h1 className="font-gazpacho font-black text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]">
              Put a <span className="text-gradient">pep</span> in your step
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl">
              Refreshing peppermint-infused water with zero sugar and zero calories. Made in Ireland with natural ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn btn-primary group">
                Shop Now
                <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/our-story" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="md:col-span-6 lg:col-span-7 relative"
          >
            <div className="relative z-10 flex justify-center items-center">
              <img
                src="https://ik.imagekit.io/boostkit/Mintee/Home_Bottles_Small.png?updatedAt=1745526582765"
                alt="Mintee water bottle"
                className="w-full h-auto"
                style={{ objectFit: "contain", maxHeight: "600px" }}
              />

              {/* Floating product badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute left-0 top-1/4 glass-card p-4 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-lg">0</span>
                  </div>
                  <span className="text-sm font-medium">Zero Sugar</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute right-0 top-2/3 glass-card p-4 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-lg">🇮🇪</span>
                  </div>
                  <span className="text-sm font-medium">Irish Made</span>
                </div>
              </motion.div>
            </div>

            {/* Background design elements */}
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-primary-300 rounded-full z-0 opacity-20 animate-pulse-slow"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary-400 rounded-full z-0 opacity-20 animate-float"></div>
          </motion.div>
        </div>
      </div>

      {/* Features strip */}
      <div className="relative mt-20 md:mt-28 lg:mt-32 py-8 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <span className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">✓</span>
              <span className="text-sm font-medium">Zero Sugar</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">✓</span>
              <span className="text-sm font-medium">Zero Calories</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">✓</span>
              <span className="text-sm font-medium">Natural Ingredients</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">✓</span>
              <span className="text-sm font-medium">Made in Ireland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;