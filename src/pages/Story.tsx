import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, ArrowRight } from 'lucide-react';

const Story: React.FC = () => {
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
              About Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-inter-tight font-bold text-4xl md:text-6xl mb-5"
            >
              Our Story
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-700"
            >
              From humble beginnings to Ireland's favourite peppermint water brand.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background element */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-60 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Our Journey
              </div>
              <h2 className="font-inter-tight font-bold text-4xl md:text-5xl mb-6">The Mintee Story</h2>
              <p className="text-neutral-700 text-lg mb-6">
                I've been drinking peppermint tea for as long as I can remember. It helped with bloating, soothed my headaches, and was my go-to for caffeine-free hydration. But honestly? Plain water just didn't excite me.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                So I started chilling peppermint tea in the fridge – and that's when it clicked.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                That cool, crisp flavour felt like a little daily treat.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                Mintee was born out of that moment: a clean, crisp, naturally refreshing drink that makes drinking water something you actually look forward to.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                Built by The Chill Co, we're on a mission to bring purposeful, plant-based drinks to life. We use real Irish peppermint leaves, not artificial flavourings, and our drinks are made with care for both people and planet.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                We're here to create better drinks, one chilled bottle at a time.
              </p>
              <p className="text-neutral-700 text-lg italic">
                – Rebecca, Mintee Founder 🌿
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://ik.imagekit.io/boostkit/Mintee/BecJohn.png?updatedAt=1745526582952"
                  alt="Mintee founders"
                  className="w-full h-[500px] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-200 rounded-full z-0 opacity-60 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-300 rounded-full z-0 opacity-60 blur-xl animate-pulse-slow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutral-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-50 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              What We Stand For
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter-tight font-bold text-4xl md:text-5xl mb-5"
            >
              Our Values
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 text-lg"
            >
              These core principles guide everything we do at Mintee, from product development to sustainability commitments.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-md card-hover"
            >
              <div className="bg-primary-50 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-inter-tight font-semibold text-2xl mb-4">Natural Goodness</h3>
              <p className="text-neutral-600 text-lg">
                We believe in creating products with natural ingredients that support wellbeing. No artificial additives, ever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-md card-hover"
            >
              <div className="bg-primary-50 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                <Recycle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-inter-tight font-semibold text-2xl mb-4">Sustainability</h3>
              <p className="text-neutral-600 text-lg">
                We're committed to minimizing our environmental impact through responsible sourcing and recyclable packaging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-md card-hover"
            >
              <div className="bg-primary-50 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-inter-tight font-semibold text-2xl mb-4">Community</h3>
              <p className="text-neutral-600 text-lg">
                We proudly support Irish communities and source locally whenever possible to boost the local economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background element */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-60 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="order-2 md:order-1"
            >
              <div className="inline-block mb-5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Irish Roots
              </div>
              <h2 className="font-inter-tight font-bold text-4xl md:text-5xl mb-6">Our Irish Heritage</h2>
              <p className="text-neutral-700 text-lg mb-6">
                Proudly Irish, Mintee sources its water from a pristine spring in the Wicklow Mountains, known for its exceptional purity and mineral content.
              </p>
              <p className="text-neutral-700 text-lg mb-6">
                Our production facility is located in County Wicklow, where we employ local talent and contribute to the regional economy.
              </p>
              <p className="text-neutral-700 text-lg mb-8">
                We take inspiration from Ireland's lush green landscapes and commitment to sustainability, ensuring our processes and packaging respect our natural environment.
              </p>

              <Link to="/shop" className="btn btn-primary group">
                Discover Our Products
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2382728/pexels-photo-2382728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Irish landscape with mountains"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-mint-gradient text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium"
            >
              Join Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter-tight font-bold text-4xl md:text-5xl mb-5 text-white"
            >
              Join the Mintee Movement
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 text-lg mb-10"
            >
              Be part of our journey to refresh Ireland (and beyond) naturally. Experience the difference that Mintee can make to your day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/shop" className="btn bg-white text-primary hover:bg-neutral-100 shadow-xl">
                Shop Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;