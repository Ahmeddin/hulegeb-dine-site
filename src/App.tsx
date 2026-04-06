import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Specials from "./sections/Specials";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Reservation from "./sections/Reservation";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import "./hulegeb.css"; // Import custom styles

function App() {
  useEffect(() => {
    // Basic SEO
    document.title = "Hulegeb | Modern Ethiopian Fine Dining";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience the authentic flavors of Ethiopia at Hulegeb. Premium dining, traditional recipes, and a warm, welcoming atmosphere.");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specials />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;