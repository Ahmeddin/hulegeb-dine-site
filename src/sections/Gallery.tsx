import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/hero-bg-jpg-a7a13368-1775331369823.webp",
    title: "Dining Hall",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/dish-beyaynetu-jpg-67962eca-1775331371351.webp",
    title: "Traditional Platter",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/dish-dorowat-jpg-ae31217c-1775331370232.webp",
    title: "Gourmet Stew",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/coffee-ceremony-jpg-52774d5d-1775331370216.webp",
    title: "Coffee Ceremony",
    span: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-gold font-medium uppercase tracking-widest text-sm"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary-green mt-2"
          >
            Atmosphere & Artistry
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;