import React from 'react';
import Hero from '../components/Hero';
import BenefitsSection from '../components/BenefitsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';
import NewsletterSection from '../components/NewsletterSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <FeaturedProducts />
      <TestimonialSection />
      <CtaSection />
      <NewsletterSection />
    </>
  );
};

export default Home;