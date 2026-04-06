import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Users, Clock, Info } from "lucide-react";

const Reservation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Simulate API call or Netlify form submission
    try {
      // In production, this would be handled by Netlify forms automatically
      // if data-netlify="true" is present on the form tag.
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Reservation request sent! We will confirm your table shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="reservation" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-green opacity-[0.03] -z-0 skew-x-[-15deg] translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-dark-brown/5 flex flex-col lg:flex-row">
          
          {/* Form Info Side */}
          <div className="lg:w-2/5 bg-primary-green p-10 md:p-12 text-white flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary-gold font-medium uppercase tracking-widest text-xs mb-4 inline-block"
              >
                Table Booking
              </motion.span>
              <h2 className="text-4xl mb-6">Join Us for a Memorable Meal</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Whether it's a romantic dinner, a family gathering, or a corporate event, Hulegeb provides the perfect setting.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-primary-gold/20 p-2 rounded-lg text-primary-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Dinner Hours</p>
                    <p className="text-sm text-white/60">Tue - Sun: 5:00 PM - 10:30 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary-gold/20 p-2 rounded-lg text-primary-gold">
                    <Info size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Special Requests</p>
                    <p className="text-sm text-white/60">Dietary needs? Just let us know in the form.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm italic text-white/80">
                "The atmosphere at Hulegeb is unmatched. Truly the finest Ethiopian dining experience in the city."
              </p>
              <p className="mt-2 text-primary-gold font-serif text-sm">— James R.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-12">
            <form 
              name="reservation" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify Hidden Input */}
              <input type="hidden" name="form-name" value="reservation" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    required 
                    className="bg-cream/30 border-dark-brown/10 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="bg-cream/30 border-dark-brown/10 h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Input 
                      id="date" 
                      name="date" 
                      type="date" 
                      required 
                      className="bg-cream/30 border-dark-brown/10 h-12 pl-10"
                    />
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-brown/40" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <div className="relative">
                    <Input 
                      id="time" 
                      name="time" 
                      type="time" 
                      required 
                      className="bg-cream/30 border-dark-brown/10 h-12 pl-10"
                    />
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-brown/40" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <div className="relative">
                    <Input 
                      id="guests" 
                      name="guests" 
                      type="number" 
                      min="1" 
                      max="20" 
                      placeholder="Number" 
                      required 
                      className="bg-cream/30 border-dark-brown/10 h-12 pl-10"
                    />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-brown/40" size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests (Optional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about any allergies or special occasions..." 
                  className="bg-cream/30 border-dark-brown/10 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-14 bg-primary-gold hover:bg-gold-hover text-white text-lg font-semibold rounded-xl transition-all active:scale-[0.98]"
              >
                {isLoading ? "Processing..." : "Confirm My Reservation"}
              </Button>
              
              <p className="text-center text-xs text-dark-brown/40">
                By submitting this form, you agree to receive reservation updates.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;