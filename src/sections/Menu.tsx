import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isPopular?: boolean;
}

const menuData: MenuItem[] = [
  // Starters
  { id: 1, name: "Sambusa", description: "Crispy pastry shells filled with spiced lentils, onions, and green peppers.", price: "$9.00", category: "starters" },
  { id: 2, name: "Kategna", description: "Toasted injera with berbere spice and clarified butter (kibe).", price: "$8.50", category: "starters", isPopular: true },
  { id: 3, name: "Ayibe", description: "Traditional Ethiopian cottage cheese seasoned with herbs.", price: "$7.00", category: "starters" },
  
  // Mains
  { id: 4, name: "Doro Wat", description: "The national dish of Ethiopia. Spicy chicken stew simmered in berbere with a hard-boiled egg.", price: "$24.00", category: "mains", isPopular: true },
  { id: 5, name: "Special Kitfo", description: "Minced prime beef seasoned with mitmita and kibe. Served with ayibe and gomen.", price: "$26.00", category: "mains" },
  { id: 6, name: "Yetsom Beyaynetu", description: "A vibrant sampler of vegetarian dishes: lentils, cabbage, beets, and collard greens on injera.", price: "$21.00", category: "mains", isPopular: true },
  { id: 7, name: "Zilzil Tibs", description: "Sautéed strips of beef with onions, rosemary, and jalapeños.", price: "$23.00", category: "mains" },
  
  // Desserts
  { id: 8, name: "Coffee Tiramisu", description: "Modern take on tiramisu using bold Ethiopian espresso.", price: "$11.00", category: "desserts" },
  { id: 9, name: "Baklava Platter", description: "Layers of filo pastry with honey and nuts.", price: "$9.50", category: "desserts" },
  
  // Drinks
  { id: 10, name: "Hulegeb Signature Coffee", description: "Ceremonial grade Ethiopian coffee served with traditional frankincense.", price: "$12.00", category: "drinks", isPopular: true },
  { id: 11, name: "Tej (Honey Wine)", description: "Traditional Ethiopian fermented honey wine.", price: "$9.00", category: "drinks" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("mains");

  const categories = [
    { value: "starters", label: "Starters" },
    { value: "mains", label: "Main Dishes" },
    { value: "desserts", label: "Desserts" },
    { value: "drinks", label: "Drinks" },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-gold font-medium uppercase tracking-widest text-sm"
          >
            Culinary Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary-green mt-2"
          >
            The Hulegeb Menu
          </motion.h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mt-6" />
        </div>

        <Tabs defaultValue="mains" onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-cream/50 p-1 rounded-full border border-dark-brown/10">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary-gold data-[state=active]:text-white"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              >
                {menuData
                  .filter((item) => item.category === activeCategory)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group p-4 border-b border-dashed border-dark-brown/20 flex justify-between items-start gap-4 hover:bg-cream/30 transition-colors rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-serif text-dark-brown group-hover:text-primary-gold transition-colors">
                            {item.name}
                          </h3>
                          {item.isPopular && (
                            <Badge variant="outline" className="text-[10px] uppercase border-primary-gold text-primary-gold px-1.5 py-0">
                              Chef's Choice
                            </Badge>
                          )}
                        </div>
                        <p className="text-dark-brown/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-xl font-serif text-primary-green font-bold whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-dark-brown/50 text-sm italic">
            * All main dishes are served with fresh, house-made Injera. Gluten-free options available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;