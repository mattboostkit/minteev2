import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'phosphor-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <h2 className="font-gazpacho font-black text-4xl md:text-5xl text-white mb-6 drop-shadow-md">
              Ready to experience the Mintee difference?
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl drop-shadow-md">
              Join thousands of satisfied customers who have made Mintee a part of their daily routine. Try it today and put a pep in your step!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="btn bg-white text-primary hover:bg-neutral-100 shadow-xl group"
              >
                Shop Now
                <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/our-story"
                className="btn btn-outline hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Refreshing Mintee water"
                className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        weight="fill"
                        className="text-yellow-400 w-5 h-5"
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-neutral-800">4.9/5</span>
                </div>
                <p className="text-sm text-neutral-600 mt-1">From 500+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;