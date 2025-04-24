import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Drop, Sparkle, Flag, PersonSimpleRun, Check } from 'phosphor-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf weight="fill" className="h-8 w-8 text-primary" />,
      title: "Refreshing and Functional",
      description: "Mintee contains natural peppermint extract, providing a refreshing taste while supporting digestion and alertness."
    },
    {
      icon: <Drop weight="fill" className="h-8 w-8 text-primary" />,
      title: "Zero Sugar, Zero Calories",
      description: "Enjoy the refreshing taste without the guilt. Mintee has no added sugar and zero calories."
    },
    {
      icon: <Sparkle weight="fill" className="h-8 w-8 text-primary" />,
      title: "Digestive Benefits",
      description: "Peppermint has been shown to aid digestion and soothe the stomach. Perfect for after meals or any time."
    },
    {
      icon: <Flag weight="fill" className="h-8 w-8 text-primary" />,
      title: "Made in Ireland",
      description: "Proudly Irish, Mintee is bottled at source using pure Irish spring water and sustainable practices."
    },
    {
      icon: <PersonSimpleRun weight="fill" className="h-8 w-8 text-primary" />,
      title: "Made for Modern Life",
      description: "Designed for busy lifestyles, Mintee provides a moment of refreshment in your hectic day."
    },
    {
      icon: <Check weight="bold" className="h-8 w-8 text-primary" />,
      title: "Naturally Good",
      description: "No artificial sweeteners, flavours, or preservatives. Just natural goodness in every sip."
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-50 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium"
          >
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter-tight font-bold text-4xl md:text-5xl mb-6"
          >
            Better for you, <span className="text-gradient">better for all</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-lg max-w-2xl mx-auto"
          >
            Our peppermint-infused water is designed to refresh you naturally while providing functional benefits that support your active lifestyle.
          </motion.p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-10 ${
                index === 0 ? 'bg-gradient-to-br from-primary-50 to-primary-100/50 md:row-span-2 shadow-md' :
                index === 3 ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white md:col-span-2 shadow-md' :
                'bg-white border border-neutral-100 shadow-soft hover:shadow-md hover:border-primary-100 transition-all duration-300'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                index === 3 ? 'bg-white/20' : 'bg-primary-50'
              }`}>
                {benefit.icon}
              </div>

              <h3 className={`font-inter-tight font-semibold text-xl md:text-2xl mb-4 ${
                index === 3 ? 'text-white' : 'text-neutral-900'
              }`}>
                {benefit.title}
              </h3>

              <p className={`${index === 3 ? 'text-white/90' : 'text-neutral-600'} leading-relaxed`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;