import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quotes } from 'phosphor-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Fitness Instructor",
      quote: "Mintee is my go-to drink during workouts. The refreshing peppermint taste is exactly what I need to stay hydrated and focused.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      name: "James O'Connor",
      role: "Office Worker",
      quote: "I've replaced my afternoon coffee with Mintee and feel much better for it. The natural peppermint gives me the lift I need without the caffeine crash.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Yoga Teacher",
      quote: "My clients and I love Mintee after an intense yoga session. It's refreshing, clean, and doesn't contain any of the artificial ingredients found in other drinks.",
      rating: 4,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-mint-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-100 opacity-40 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-medium"
          >
            Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-gazpacho font-black text-4xl md:text-5xl mb-6"
          >
            What Our <span className="text-gradient">Customers</span> Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-600 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from our community of Mintee enthusiasts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-primary-100">
                <Quotes size={36} weight="fill" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mr-5 ring-2 ring-primary-100"
                />
                <div>
                  <h4 className="font-gazpacho font-black text-lg">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    weight={i < testimonial.rating ? "fill" : "regular"}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                  />
                ))}
              </div>

              <blockquote className="text-neutral-700 italic text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;