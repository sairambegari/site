import { motion } from "motion/react";
import { Search, ShoppingCart, Briefcase, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Digital Marketing & SEO",
      description:
        "Drive organic traffic and boost your online visibility with data-driven SEO strategies, content marketing, and comprehensive digital campaigns.",
      route: "/services/digital-marketing-seo",
    },
    {
      icon: ShoppingCart,
      title: "Web & E-commerce Solutions",
      description:
        "Build stunning, high-performance websites and e-commerce platforms that convert visitors into customers and scale with your business.",
      route: "/services/web-ecommerce-solutions",
    },
    {
      icon: Briefcase,
      title: "Business Consulting",
      description:
        "Strategic business consulting to optimize operations, improve efficiency, and accelerate growth through data-driven insights and expert guidance.",
      route: "/services/business-consulting",
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description:
        "Comprehensive IT infrastructure management including cloud solutions, system optimization, and 24/7 monitoring to ensure maximum uptime.",
      route: "/services/infrastructure-management",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-[16px] font-[600] mb-3 uppercase tracking-wide">
            Our Services
          </h2>
          <h3 className="text-[40px] font-[700] mb-4 text-foreground">
            Comprehensive Consulting Solutions
          </h3>
          <p className="text-muted-foreground text-[18px] max-w-2xl mx-auto leading-relaxed">
            We offer a full spectrum of consulting services designed to address
            your unique business challenges and opportunities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group cursor-pointer h-full"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-[22px] font-[600] mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );

            return service.route ? (
              <Link key={index} to={service.route}>
                {CardContent}
              </Link>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
