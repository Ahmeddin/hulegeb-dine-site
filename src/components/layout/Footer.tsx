import React from "react";
import { UtensilsCrossed, Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-brown text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <UtensilsCrossed className="w-8 h-8 text-primary-gold" />
              <span className="text-2xl font-serif font-bold text-white">HULEGEB</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-8">
              A premium dining destination dedicated to the authentic flavors and warm hospitality of Ethiopia. 
              Join us for an unforgettable culinary journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary-gold hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary-gold hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-6 text-primary-gold">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Menu Selection", "Photo Gallery", "Special Offers", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().split(" ")[0]}`} 
                    className="text-white/60 hover:text-primary-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-6 text-primary-gold">Dining Info</h4>
            <ul className="space-y-4 text-white/60">
              <li>Reservation Policy</li>
              <li>Group Dining & Events</li>
              <li>Gift Certificates</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-6 text-primary-gold">Newsletter</h4>
            <p className="text-white/60 mb-6">
              Subscribe to receive updates on seasonal menus and special events.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-primary-gold"
              />
              <Button className="bg-primary-gold hover:bg-gold-hover text-white">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Hulegeb Restaurant. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-primary-gold transition-colors text-sm uppercase tracking-widest"
          >
            Back to Top <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;