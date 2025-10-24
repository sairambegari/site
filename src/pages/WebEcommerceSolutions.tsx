import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle2, ShoppingCart, Smartphone, Code, Zap, CreditCard, ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { DecryptedText } from "../components/DecryptedText";

export default function WebEcommerceSolutions() {
  const benefits = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Conversion-Optimized Design",
      description: "Beautiful, intuitive interfaces designed to turn visitors into loyal customers."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Development",
      description: "Responsive designs that deliver seamless experiences across all devices."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning-Fast Performance",
      description: "Optimized for speed and performance to reduce bounce rates and increase sales."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payment Integration",
      description: "Multiple payment gateways with bank-level security for customer peace of mind."
    }
  ];

  const services = [
    {
      title: "Custom Website Development",
      description: "Build stunning, high-performance websites tailored to your brand and business goals.",
      features: [
        "Custom UI/UX design and development",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWA)",
        "API development and integration",
        "Performance optimization"
      ]
    },
    {
      title: "E-commerce Platform Solutions",
      description: "Complete e-commerce solutions that scale with your business growth.",
      features: [
        "Multi-vendor marketplace development",
        "Shopping cart and checkout optimization",
        "Inventory management systems",
        "Product catalog management",
        "Order tracking and fulfillment"
      ]
    },
    {
      title: "Payment & Security",
      description: "Secure, reliable payment processing with industry-leading security standards.",
      features: [
        "Multiple payment gateway integration",
        "SSL certificates and HTTPS setup",
        "PCI DSS compliance",
        "Fraud detection and prevention",
        "Secure user authentication"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your platform running smoothly.",
      features: [
        "24/7 technical support",
        "Regular security updates",
        "Performance monitoring",
        "Backup and disaster recovery",
        "Feature enhancements"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business requirements, target audience, and competitors to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive, conversion-focused interfaces with interactive prototypes for your approval."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Expert developers build your platform using modern technologies with rigorous quality assurance testing."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We deploy your platform and continuously monitor and optimize for peak performance and conversions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Web & E-commerce Solutions
                </span>
              </div>
              <h1 className="mb-6">
                Build Powerful E-commerce Platforms That Drive Sales
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your business with custom web and e-commerce solutions designed to deliver exceptional user experiences and maximize conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Start Your Project
                  </button>
                </Link>
                <Link to="/#pricing">
                  <button className="glass-shine border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                    View Pricing
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYwMDczMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="E-commerce Development"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1E3A8A] p-6 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E3A8A] text-white p-3 rounded-lg">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                    <div className="text-2xl">200+</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Why Choose Our Web & E-commerce Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Baramij to create digital experiences that engage customers and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#1E3A8A] text-white p-3 rounded-lg w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Comprehensive Web Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end web and e-commerce development services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="mb-3 text-[#1E3A8A]">
                  <DecryptedText text={service.title} speed={30} />
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">How Our Solutions Transform Your Business</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Baramij, we don't just build websites—we create digital experiences that drive results. Our comprehensive approach combines cutting-edge technology with user-centered design to deliver platforms that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">User-Centric Design</h4>
                    <p className="text-gray-600">We design intuitive interfaces that make shopping enjoyable and conversion effortless.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Scalable Architecture</h4>
                    <p className="text-gray-600">Our solutions grow with your business, handling increased traffic and transactions seamlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">We provide continuous maintenance and updates to ensure peak performance.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2MDA3MzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Online Shopping"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc1OTk4ODE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Responsive Design"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTk5OTg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Web Development"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 rounded-xl text-white shadow-lg">
                  <div className="text-3xl mb-2">98%</div>
                  <div>Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures on-time delivery and exceptional quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-6xl mb-4 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent opacity-20">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#2563EB]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6">Ready to Launch Your E-commerce Platform?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build a powerful online presence that drives sales and delights customers. Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contact">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Start Your Project
                </button>
              </Link>
              <Link to="/">
                <button className="glass-shine border-2 border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Back to Home
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
