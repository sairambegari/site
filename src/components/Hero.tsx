import { motion } from "motion/react";
import { Button } from "./ui/button";
import GridDistortion from "./GridDistortion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Distortion Background Effect */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <GridDistortion
          imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="w-full h-full"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-primary/70 to-[#2563EB]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-[48px] sm:text-[56px] lg:text-[64px] font-[700] mb-6 leading-tight">
            Empowering Businesses Through
            <br />
            Digital Consulting
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transform your business with expert consulting services in IT strategy,
          cloud solutions, and digital transformation. We deliver innovative solutions
          that drive growth and efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl text-[16px] font-[600]"
          >
            Get Started
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 text-[16px] font-[600]"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* Removed scroll indicator mouse icon */}
    </section>
  );
}