import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/hero-bg-jpg-a7a13368-1775331369823.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-primary-gold font-medium tracking-[0.2em] mb-4 uppercase"
          >
            Authentic Taste of Ethiopia
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Elevated Tradition <br />
            <span className="italic text-primary-gold">Exquisite Flavor.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to Hulegeb, where ancestral recipes meet modern culinary artistry. 
            Experience a journey through the highlands of Ethiopia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-primary-gold hover:bg-gold-hover text-white px-8 py-6 text-lg rounded-full group"
            >
              <a href="#menu">
                View Our Menu
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary-green px-8 py-6 text-lg rounded-full"
            >
              <a href="#reservation">Book Your Table</a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
        >
          <a href="#about">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;