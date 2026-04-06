import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/restaurant-ambiance-jpg-a11e68d9-1775331369562.webp"
                alt="Sharing a meal at Hulegeb"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-gold/10 -z-0 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary-green/5 -z-0 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-primary-gold font-medium uppercase tracking-widest text-sm">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl text-primary-green">
              Celebrating the Spirit of Ethiopian Hospitality
            </h2>
            <p className="text-lg text-dark-brown/80 leading-relaxed italic border-l-4 border-primary-gold pl-6">
              "Hulegeb" means "versatile" or "all-encompassing" in Amharic—a name that reflects our commitment to serving a rich tapestry of flavors to every guest.
            </p>
            <p className="text-dark-brown/70 leading-relaxed">
              Founded on the belief that a meal is more than just sustenance—it's a communal experience—Hulegeb brings the ancient traditions of Ethiopia to the modern table. From our hand-ground spices to the rhythmic dance of the coffee ceremony, every detail is crafted to transport you to the heart of the Horn of Africa.
            </p>
            <p className="text-dark-brown/70 leading-relaxed">
              Our chefs specialize in slow-cooked stews (wats), perfectly fermented injera, and the finest selection of organic coffee beans, all sourced with respect for tradition and a passion for excellence.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-serif text-primary-gold mb-1">15+</div>
                <div className="text-xs uppercase tracking-tighter text-dark-brown/60">Years of Tradition</div>
              </div>
              <div className="text-center border-x border-dark-brown/10">
                <div className="text-3xl font-serif text-primary-gold mb-1">100%</div>
                <div className="text-xs uppercase tracking-tighter text-dark-brown/60">Organic Spices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-primary-gold mb-1">24/7</div>
                <div className="text-xs uppercase tracking-tighter text-dark-brown/60">Warm Welcome</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;