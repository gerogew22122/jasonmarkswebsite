import React, { useRef } from "react";
import { FaInstagram, FaTiktok, FaArrowRight, FaShoppingCart, FaStar } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import backgroundTexture from "@assets/generated_images/dark_modern_abstract_background_with_subtle_digital_money_patterns.png";
import personalBrandingImg from "@assets/generated_images/futuristic_personal_branding_concept_with_neon_glowing_fingerprint_or_identity_symbol.png";
import profilePhoto from "@assets/image_1764985020684.png";

const products = [
  {
    id: 5,
    url: "https://shop.beacons.ai/jason.marks6762/5d33383b-06ed-492d-b08e-748451030fe7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate Personal Branding Guide",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmQ2M2hyOXl3YjQ2aWFzcHg3cjJjdnlsM205bXNldzk2dGx2cWsyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xeAqBxu7wd3Ie0o/giphy.gif",
    price: "$19.95",
    originalPrice: "$49.95",
    tag: "ESSENTIAL"
  },
  {
    id: 4,
    url: "https://shop.beacons.ai/jason.marks6762/b29b88ad-80e1-4b01-ab5c-07931cbcfb90?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate 10 Minute Home Workout",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXR0a2N5cGszeGI1Zzk1c2FpbnVuaTZmd2Z5cHBjbjM5Y2JtbTlpbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qNj41KxhsoiQ0/giphy.gif",
    price: "$49.95",
    originalPrice: "$99.95",
    tag: "FITNESS"
  },
  {
    id: 3,
    url: "https://shop.beacons.ai/jason.marks6762/8ec64a7f-7102-49de-bb62-495569610324?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Ultimate Glow Up Guide 2025",
    image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTZkZ3g0N3JycmMwdWtxZHN5cHdpc2k1c2s2MzlwbG9nM2l2b2VyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2n6UHtrc1VgxmMwX8f/giphy.gif",
    price: "$79.95",
    originalPrice: "$159.95",
    tag: "NEW"
  },
  {
    id: 2,
    url: "https://shop.beacons.ai/jason.marks6762/409b557b-2287-4c2d-8db9-bf5aa4f64c78?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "1 on 1 Call With Me",
    image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHAwY2d3Y2czN2ozY2c5MWJjcHJpZWNveDI5bTRva2FmamY0NHhrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KpOqvmCFdNMhF0pQb7/giphy.gif",
    price: "$299.95",
    originalPrice: null,
    tag: "EXCLUSIVE"
  },
  {
    id: 1,
    url: "https://shop.beacons.ai/jason.marks6762/13ec095f-9a8c-4b15-8e11-0abd5e6bb5f7?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fjason.marks6762&show_back_button=true",
    label: "The Money Mindset",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWdyb2ZkZThnd3Nlbzlpb2tvNnVxdmlleWU0eTB1enllam9pNXdvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F4nBKBWxcWzcdMJX2W/giphy.gif",
    price: "$999.95",
    originalPrice: "$1,999.95",
    tag: "BEST SELLER"
  },
];

const ProductSection = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full min-h-[70vh] md:min-h-[60vh] flex flex-col justify-center relative py-12"
    >
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="group block w-full">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-none md:rounded-3xl border-y md:border border-white/10 md:hover:border-primary/50 transition-colors duration-500">
          {/* Image Background */}
          <div className="absolute inset-0 bg-black">
            <img 
              src={product.image} 
              alt={product.label}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="flex justify-between items-start">
              <span className="bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {product.tag}
              </span>
              <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] text-white group-hover:text-primary transition-colors duration-300">
                {product.label}
              </h2>
              
              <div className="flex items-center gap-4 border-t border-white/20 pt-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-mono font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm font-mono text-muted-foreground line-through decoration-destructive">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <Button className="ml-auto rounded-full px-8 py-6 text-lg font-bold bg-white text-black hover:bg-primary hover:text-black transition-all duration-300">
                  GET ACCESS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-primary selection:text-black font-sans">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <span className="text-xl font-bold tracking-tighter text-white">JM.</span>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/marksjasonfrederick" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@coolsweat6762" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            <FaTiktok size={24} />
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-0 md:px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-4 relative overflow-hidden">
           <motion.div 
             style={{ y }}
             className="relative z-10 flex flex-col items-center"
           >
             <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, type: "spring" }}
               className="mb-8 relative"
             >
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)]">
                 <img 
                   src={profilePhoto} 
                   alt="Jason Marks" 
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute -bottom-2 -right-2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black">
                 AU
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mb-6 flex justify-center"
             >
               <span className="px-4 py-1.5 rounded-full border border-white/20 text-sm font-mono tracking-widest bg-white/5 backdrop-blur-md">
                 BRISBANE • AUSTRALIA
               </span>
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase mix-blend-screen"
             >
               Content<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-transparent">To Cash</span>
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-md mx-auto font-light"
             >
               Stop leaving money on the table. Turn your digital presence into a revenue machine.
             </motion.p>
           </motion.div>

           {/* Scroll Indicator */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
           >
             <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
           </motion.div>
        </section>

        {/* Editorial Product Feed */}
        <section className="pb-32 space-y-0 md:space-y-12">
          <div className="px-6 md:px-0 mb-12 flex items-baseline justify-between border-b border-white/10 pb-4">
            <h3 className="text-sm font-mono text-muted-foreground">COLLECTION 01</h3>
            <h3 className="text-sm font-mono text-primary">[ 2025 ]</h3>
          </div>
          
          {products.map((product, index) => (
            <ProductSection key={product.id} product={product} index={index} />
          ))}
        </section>
        
        <footer className="py-12 text-center border-t border-white/10 text-muted-foreground text-sm">
           <p>&copy; 2025 JASON MARKS. ALL RIGHTS RESERVED.</p>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
