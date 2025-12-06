import React from "react";
import { FaInstagram, FaTiktok, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import backgroundTexture from "@assets/generated_images/dark_modern_abstract_background_with_subtle_digital_money_patterns.png";
import personalBrandingImg from "@assets/generated_images/futuristic_personal_branding_concept_with_neon_glowing_fingerprint_or_identity_symbol.png";

const products = [
  {
    id: 1,
    url: "https://shop.beacons.ai/jason.marks6762/5d33383b-06ed-492d-b08e-748451030fe7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Money Mindset",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWdyb2ZkZThnd3Nlbzlpb2tvNnVxdmlleWU0eTB1enllam9pNXdvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F4nBKBWxcWzcdMJX2W/giphy.gif",
    price: "$19.95",
    originalPrice: null
  },
  {
    id: 2,
    url: "https://shop.beacons.ai/jason.marks6762/b29b88ad-80e1-4b01-ab5c-07931cbcfb90?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "1 on 1 Call With Me",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHAwY2d3Y2czN2ozY2c5MWJjcHJpZWNveDI5bTRva2FmamY0NHhrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KpOqvmCFdNMhF0pQb7/giphy.gif",
    price: "$299.95",
    originalPrice: null
  },
  {
    id: 3,
    url: "https://shop.beacons.ai/jason.marks6762/8ec64a7f-7102-49de-bb62-495569610324?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate Glow Up Guide 2025",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZkZ3g0N3JycmMwdWtxZHN5cHdpc2k1c2s2MzlwbG9nM2l2b2VyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2n6UHtrc1VgxmMwX8f/giphy.gif",
    price: "$79.95",
    originalPrice: "$159.95"
  },
  {
    id: 4,
    url: "https://shop.beacons.ai/jason.marks6762/409b557b-2287-4c2d-8db9-bf5aa4f64c78?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate 10 Minute Home Workout",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXR0a2N5cGszeGI1Zzk1c2FpbnVuaTZmd2Z5cHBjbjM5Y2JtbTlpbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qNj41KxhsoiQ0/giphy.gif",
    price: "$49.95",
    originalPrice: "$99.95"
  },
  {
    id: 5,
    url: "https://shop.beacons.ai/jason.marks6762/13ec095f-9a8c-4b15-8e11-0abd5e6bb5f7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate Personal Branding Guide",
    image: personalBrandingImg,
    price: "$19.95",
    originalPrice: "$49.95"
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-background/90 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center gap-8">
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
          className="flex gap-4 w-full justify-center mb-8"
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

        {/* Products Section - Masonry/Grid Layout */}
        <div className="w-full space-y-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex items-center justify-between border-b border-white/10 pb-4"
          >
             <h2 className="text-xl font-bold uppercase tracking-tight">Shop Products</h2>
             <span className="text-xs text-muted-foreground uppercase tracking-widest">Digital Collection</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className={`block group relative ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <Card className="h-full bg-zinc-900/40 border-white/5 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm overflow-hidden group-hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]">
                  <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    <img 
                      src={product.image} 
                      alt={product.label}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-end justify-between">
                       <div>
                          <h3 className="font-bold text-xl md:text-2xl text-white mb-2 group-hover:text-primary transition-colors leading-tight max-w-[80%]">
                            {product.label}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-lg text-primary font-bold">{product.price}</span>
                            {product.originalPrice && (
                              <span className="font-mono text-sm text-muted-foreground line-through decoration-red-500/50">{product.originalPrice}</span>
                            )}
                          </div>
                       </div>
                       
                       <Button size="sm" className="bg-white text-black hover:bg-primary hover:text-black font-bold rounded-full px-6 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                         Buy Now
                       </Button>
                    </div>
                  </div>
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
          className="text-center text-xs text-muted-foreground mt-20 pb-8 w-full border-t border-white/5 pt-8"
        >
          <p>© 2025 Jason Marks. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default LandingPage;
