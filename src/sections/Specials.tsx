import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const specials = [
  {
    title: "Signature Beyaynetu",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/dish-beyaynetu-jpg-67962eca-1775331371351.webp",
    description: "Our most popular platter featuring a kaleidoscope of meat and vegetable stews on a grand bed of injera.",
    price: "$32.00",
  },
  {
    title: "Grand Doro Wat",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/dish-dorowat-jpg-ae31217c-1775331370232.webp",
    description: "A slow-simmered masterpiece. Tender chicken thighs and hard-boiled eggs in a rich, spicy berbere reduction.",
    price: "$28.00",
  },
  {
    title: "The Coffee Ceremony",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/coffee-ceremony-jpg-52774d5d-1775331370216.webp",
    description: "Not just coffee, but an experience. Freshly roasted beans, ceremonial pottery, and aromatic frankincense.",
    price: "$15.00",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="py-24 bg-primary-green text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-gold font-medium uppercase tracking-widest text-sm"
            >
              Chef's Specialities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mt-2 text-white"
            >
              Exquisite Signature Dishes
            </motion.h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white rounded-full hidden md:flex"
          >
            <a href="#menu">View Full Menu</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={special.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-dark-brown/30 border-none overflow-hidden h-full group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={special.image}
                    alt={special.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary-gold text-white font-serif px-4 py-1 rounded-full text-lg shadow-lg">
                    {special.price}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl text-white mb-4 group-hover:text-primary-gold transition-colors">
                    {special.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {special.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-primary-gold p-0 h-auto hover:text-white transition-colors"
                  >
                    Explore Ingredients →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Button
            asChild
            className="bg-primary-gold text-white hover:bg-gold-hover rounded-full w-full py-6"
          >
            <a href="#menu">View Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Specials;