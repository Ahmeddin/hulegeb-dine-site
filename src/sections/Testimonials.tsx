import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aman Belay",
    role: "Food Critic",
    content: "The most authentic Doro Wat I've tasted outside of Addis Ababa. The atmosphere is sophisticated yet maintains that essential Ethiopian warmth.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Loyal Patron",
    content: "Hulegeb is our go-to for family celebrations. The communal dining experience with the Beyaynetu platter always brings us together.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Local Resident",
    content: "Don't miss the coffee ceremony. It's not just a drink; it's a sensory journey. The staff are incredibly hospitable and knowledgeable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary-green text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-gold font-medium uppercase tracking-widest text-sm"
          >
            Guest Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mt-2"
          >
            What People Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-gold opacity-20" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary-gold text-primary-gold" />
                ))}
              </div>
              
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">
                "{t.content}"
              </p>
              
              <div>
                <h4 className="font-serif text-xl text-white">{t.name}</h4>
                <p className="text-primary-gold text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;