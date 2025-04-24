import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperPlaneTilt } from 'phosphor-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would typically send the email to a server
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neutral-50"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-50 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-50 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter-tight font-bold text-4xl md:text-5xl mb-6"
          >
            Stay refreshed with our updates
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-lg mb-10"
          >
            Subscribe to our newsletter for exclusive offers, recipe ideas, and be the first to know about new products.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-lg"
              required
            />
            <button
              type="submit"
              className="btn btn-primary py-4 px-6 sm:whitespace-nowrap"
            >
              <PaperPlaneTilt weight="bold" className="w-5 h-5 mr-2" />
              Subscribe
            </button>
          </motion.form>
          
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-sm text-primary font-medium"
            >
              Thank you for subscribing!
            </motion.div>
          )}
          
          <p className="text-xs text-neutral-500 mt-5">
            By subscribing, you agree to our Privacy Policy. We'll never share your details with anyone else.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;