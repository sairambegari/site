import { motion } from "motion/react";
import { Search, ShoppingCart, Briefcase, Server, ArrowRight, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const allServices = [
  {
    id: 1,
    icon: Search,
    title: "Digital Marketing & SEO",
    description:
      "Drive organic traffic and boost your online visibility with data-driven SEO strategies, content marketing, and comprehensive digital campaigns.",
    longDescription: "Our digital marketing experts help you build a strong online presence through strategic SEO, content marketing, social media management, and PPC campaigns.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYwMDA1MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/services/digital-marketing-seo",
    features: ["SEO Optimization", "Content Strategy", "Social Media Marketing", "PPC Campaigns"],
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Web & E-commerce Solutions",
    description:
      "Build stunning, high-performance websites and e-commerce platforms that convert visitors into customers and scale with your business.",
    longDescription: "Custom web development and e-commerce solutions designed to deliver exceptional user experiences and drive conversions.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjAwOTY1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/services/web-ecommerce-solutions",
    features: ["Custom Website Development", "E-commerce Platforms", "Payment Integration", "Mobile Responsive Design"],
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic business consulting to optimize operations, improve efficiency, and accelerate growth through data-driven insights and expert guidance.",
    longDescription: "Transform your business with strategic consulting services that help you identify opportunities, overcome challenges, and achieve sustainable growth.",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MDA5MjE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/services/business-consulting",
    features: ["Strategic Planning", "Process Optimization", "Market Analysis", "Growth Strategy"],
  },
  {
    id: 4,
    icon: Server,
    title: "Infrastructure Management",
    description:
      "Comprehensive IT infrastructure management including cloud solutions, system optimization, and 24/7 monitoring to ensure maximum uptime.",
    longDescription: "Reliable IT infrastructure management services that keep your systems running smoothly with proactive monitoring and rapid issue resolution.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMTAzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/services/infrastructure-management",
    features: ["Cloud Migration", "System Monitoring", "Security Management", "Disaster Recovery"],
  },
];

const categories = [
  "All",
  "Marketing",
  "Development",
  "Consulting",
  "Technology",
];

export default function AllServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = allServices.filter((service) => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[14px] font-[600] shadow-lg">
              Our Services
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] text-white mb-6 leading-tight drop-shadow-lg"
          >
            Complete Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Explore our comprehensive range of consulting services designed to transform your business and drive sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-xl border-border"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.route}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group h-full">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[12px] font-[600]">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-[24px] font-[700] mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-[12px] text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary group-hover:gap-2 transition-all duration-300">
                      <span className="font-[600] text-[14px]">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-[24px] font-[600] text-foreground mb-2">
              No services found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white mt-20"
        >
          <h2 className="text-[36px] font-[700] mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored solution for your specific needs.
          </p>
          <Link to="/#contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-[600] px-8 py-6 rounded-xl"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
