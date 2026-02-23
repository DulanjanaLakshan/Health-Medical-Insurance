import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '@/components/Layout';
import { Stethoscope, CreditCard, Phone, Home, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  const [clicks, setClicks] = useState(0);

  const handleCompassClick = () => {
    setClicks(prev => prev + 1);
    if (clicks + 1 === 3) {
      alert("You found the secret page! Here's a 5% wellness discount code: VITALIS5");
    }
  };

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-20">
        <motion.div 
          className="mb-8 cursor-pointer"
          onClick={handleCompassClick}
          whileHover={{ rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <Compass className="w-32 h-32 text-vitalis-teal" strokeWidth={1} />
        </motion.div>

        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-vitalis-navy">404: This page took a sick day</h1>
        <p className="text-xl text-vitalis-grey mb-12 max-w-lg">
          The page you're looking for isn't available right now. But we can help you find what you need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {[
            { icon: Stethoscope, title: "Find a Doctor", desc: "Search our network", link: "/providers", action: "Search" },
            { icon: CreditCard, title: "Check Coverage", desc: "View your benefits", link: "/portal", action: "Login" },
            { icon: Phone, title: "Contact Support", desc: "24/7 assistance", link: "/contact", action: "Get Help" },
            { icon: Home, title: "Home Base", desc: "Return to homepage", link: "/", action: "Go Home" }
          ].map((card, i) => (
            <Link key={i} to={card.link} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all group border border-transparent hover:border-vitalis-teal/20">
              <div className="w-12 h-12 bg-vitalis-sage rounded-xl flex items-center justify-center text-vitalis-teal mx-auto mb-4 group-hover:bg-vitalis-teal group-hover:text-white transition-colors">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-vitalis-grey mb-4">{card.desc}</p>
              <span className="text-vitalis-coral font-medium text-sm group-hover:underline">{card.action}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
