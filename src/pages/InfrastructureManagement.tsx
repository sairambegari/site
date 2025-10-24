import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle2, Server, Shield, Cloud, Activity, Clock, ArrowRight, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { DecryptedText } from "../components/DecryptedText";

export default function InfrastructureManagement() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced security measures to protect your critical infrastructure and data assets."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring to ensure maximum uptime and performance."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Optimization",
      description: "Efficient cloud infrastructure management to reduce costs and improve scalability."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Response",
      description: "Fast incident response and resolution to minimize downtime and business impact."
    }
  ];

  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions designed for scalability, security, and cost-efficiency.",
      features: [
        "Multi-cloud architecture design",
        "Cloud migration and deployment",
        "Auto-scaling configuration",
        "Cost optimization strategies",
        "Disaster recovery planning"
      ]
    },
    {
      title: "Network & Server Management",
      description: "Proactive management of your network infrastructure and server environments.",
      features: [
        "Network design and optimization",
        "Server configuration and maintenance",
        "Load balancing and redundancy",
        "Performance tuning",
        "Capacity planning"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Robust security frameworks to protect your infrastructure and ensure compliance.",
      features: [
        "Security audits and assessments",
        "Firewall and intrusion detection",
        "Data encryption solutions",
        "Compliance management (GDPR, HIPAA)",
        "Security incident response"
      ]
    },
    {
      title: "Monitoring & Support",
      description: "Continuous monitoring and expert support to keep your systems running smoothly.",
      features: [
        "24/7 system monitoring",
        "Proactive issue detection",
        "Performance analytics",
        "Regular health checks",
        "Technical support and troubleshooting"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "We evaluate your current infrastructure setup, identify bottlenecks, and assess security vulnerabilities."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized infrastructure solution optimized for your specific requirements."
    },
    {
      step: "03",
      title: "Deployment & Migration",
      description: "Seamless implementation and migration with minimal disruption to your business operations."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous monitoring, maintenance, and optimization to ensure peak performance and reliability."
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
                  <Server className="w-4 h-4" />
                  Infrastructure Management
                </span>
              </div>
              <h1 className="mb-6">
                Reliable IT Infrastructure for Maximum Uptime
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Ensure your business runs smoothly with comprehensive infrastructure management, cloud solutions, and 24/7 monitoring from our expert team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Get Started
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
                  src="https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5OTkxODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="IT Infrastructure"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1E3A8A] p-6 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E3A8A] text-white p-3 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Uptime</div>
                    <div className="text-2xl">99.9%</div>
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
            <h2 className="mb-4">Why Choose Our Infrastructure Management?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Baramij to ensure your IT infrastructure is secure, scalable, and always available.
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
            <h2 className="mb-4">Complete Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end infrastructure management services to keep your business running at peak performance.
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
              <h2 className="mb-6">How Our Infrastructure Services Support Your Business</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Baramij, we understand that reliable IT infrastructure is the backbone of modern business. Our comprehensive management services ensure your systems are always available, secure, and optimized for performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Proactive Management</h4>
                    <p className="text-gray-600">We identify and resolve issues before they impact your business operations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Scalable Solutions</h4>
                    <p className="text-gray-600">Our infrastructure grows with your business, accommodating increased demand effortlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Cost Efficiency</h4>
                    <p className="text-gray-600">Optimize your IT spending with right-sized infrastructure and efficient resource allocation.</p>
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
                    src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwMDI4NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cloud Computing"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGluZnJhc3RydWN0dXJlJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NjAwNzMwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Infrastructure Monitoring"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjAwMDg1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Data Center"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 rounded-xl text-white shadow-lg">
                  <div className="text-3xl mb-2">24/7</div>
                  <div>System Monitoring</div>
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
            <h2 className="mb-4">Our Infrastructure Management Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures optimal performance, security, and reliability.
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
            <h2 className="mb-6">Ready to Optimize Your Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's ensure your IT infrastructure is secure, reliable, and ready to support your business growth. Get started with a free infrastructure assessment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contact">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Request Assessment
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
