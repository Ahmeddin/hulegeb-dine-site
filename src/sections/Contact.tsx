import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-gold font-medium uppercase tracking-widest text-sm">Find Us</span>
            <h2 className="text-4xl md:text-5xl text-primary-green mt-2 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary-green text-white p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Our Location</h4>
                  <p className="text-dark-brown/70 leading-relaxed">
                    123 Culinary Way, Addis Quarter<br />
                    Washington D.C., Metro Area
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-green text-white p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Call Us</h4>
                  <p className="text-dark-brown/70">+1 (202) 555-0123</p>
                  <p className="text-dark-brown/70">+1 (202) 555-0124</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-green text-white p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Email Us</h4>
                  <p className="text-dark-brown/70">reservations@hulegeb.com</p>
                  <p className="text-dark-brown/70">events@hulegeb.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-green text-white p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Opening Hours</h4>
                  <p className="text-dark-brown/70">Tuesday - Thursday: 5pm - 10pm</p>
                  <p className="text-dark-brown/70">Friday - Saturday: 5pm - 11pm</p>
                  <p className="text-dark-brown/70">Sunday: 12pm - 9pm</p>
                  <p className="text-primary-gold font-medium mt-1">Monday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border-8 border-white"
          >
            {/* Map Placeholder */}
            <div className="w-full h-full bg-slate-200 relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/cedaec61-fc72-430d-85ca-96388a802d8d/restaurant-ambiance-jpg-a11e68d9-1775331369562.webp" 
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Location Map"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-green/60 p-8 text-center">
                <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center text-white mb-4 animate-bounce">
                  <MapPin size={32} />
                </div>
                <h3 className="text-white text-2xl mb-2">Visit Hulegeb</h3>
                <p className="text-white/80 max-w-xs mx-auto">
                  Click to open in Google Maps for directions to our flagship location.
                </p>
                <Button className="mt-6 bg-white text-primary-green hover:bg-primary-gold hover:text-white rounded-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;