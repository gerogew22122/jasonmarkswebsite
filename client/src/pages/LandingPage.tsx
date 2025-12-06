import React from "react";
import { FaInstagram, FaTiktok, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import backgroundTexture from "@assets/generated_images/dark_modern_abstract_background_with_subtle_digital_money_patterns.png";

const products = [
  {
    id: 1,
    url: "https://shop.beacons.ai/jason.marks6762/5d33383b-06ed-492d-b08e-748451030fe7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "Exclusive Guide",
  },
  {
    id: 2,
    url: "https://shop.beacons.ai/jason.marks6762/b29b88ad-80e1-4b01-ab5c-07931cbcfb90?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "Masterclass Access",
  },
  {
    id: 3,
    url: "https://shop.beacons.ai/jason.marks6762/8ec64a7f-7102-49de-bb62-495569610324?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "Premium Resource",
  },
  {
    id: 4,
    url: "https://shop.beacons.ai/jason.marks6762/409b557b-2287-4c2d-8db9-bf5aa4f64c78?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "Strategy Bundle",
  },
  {
    id: 5,
    url: "https://shop.beacons.ai/jason.marks6762/13ec095f-9a8c-4b15-8e11-0abd5e6bb5f7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "Complete Toolkit",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full text-white overflow-x-hidden bg-background relative selection:bg-primary selection:text-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="relative z-10 max-w-md mx-auto px-6 py-12 md:py-20 flex flex-col items-center gap-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20 mb-4 backdrop-blur-sm">
            BRISBANE, AU
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-glow">
            Content<br/>
            <span className="text-primary">To Cash</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light tracking-wide pt-2">
            Jason Marks
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 w-full justify-center"
        >
          <a 
            href="https://www.instagram.com/marksjasonfrederick" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="outline" size="lg" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
              <FaInstagram className="h-6 w-6" />
            </Button>
          </a>
          <a 
            href="https://www.tiktok.com/@coolsweat6762" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Button variant="outline" size="lg" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
              <FaTiktok className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"
        />

        {/* Products Section */}
        <div className="w-full space-y-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-bold uppercase tracking-tight text-center mb-6"
          >
            My Products
          </motion.h2>

          <div className="grid gap-4">
            {products.map((product, index) => (
              <motion.a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className="block group"
              >
                <Card className="bg-zinc-900/50 border-white/5 hover:border-primary/50 transition-all duration-300 backdrop-blur-md overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-4 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <FaShoppingCart className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                          {product.label}
                        </h3>
                        <p className="text-xs text-muted-foreground">Instant Access</p>
                      </div>
                    </div>
                    <FaArrowRight className="text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center text-xs text-muted-foreground mt-12 pb-8"
        >
          <p>© 2025 Jason Marks. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default LandingPage;
