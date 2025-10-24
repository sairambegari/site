import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle2, Briefcase, Target, LineChart, Users2, TrendingUp, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { DecryptedText } from "../components/DecryptedText";

export default function BusinessConsulting() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Planning",
      description: "Develop clear, actionable strategies aligned with your long-term business objectives."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions backed by comprehensive market analysis and analytics."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Acceleration",
      description: "Identify and capitalize on opportunities to accelerate sustainable business growth."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Leverage our industry expertise and proven methodologies for success."
    }
  ];

  const services = [
    {
      title: "Business Strategy Development",
      description: "Comprehensive strategic planning to achieve your business goals and competitive advantage.",
      features: [
        "Market analysis and research",
        "Competitive positioning strategy",
        "Business model innovation",
        "Growth strategy development",
        "Strategic roadmap creation"
      ]
    },
    {
      title: "Operations Optimization",
      description: "Streamline processes and improve efficiency to maximize productivity and profitability.",
      features: [
        "Process analysis and redesign",
        "Workflow automation solutions",
        "Resource optimization",
        "Cost reduction strategies",
        "Performance metrics development"
      ]
    },
    {
      title: "Change Management",
      description: "Navigate organizational change successfully with structured change management frameworks.",
      features: [
        "Change readiness assessment",
        "Stakeholder engagement planning",
        "Communication strategy",
        "Training and development",
        "Post-implementation support"
      ]
    },
    {
      title: "Financial Planning & Analysis",
      description: "Strategic financial guidance to improve profitability and ensure long-term sustainability.",
      features: [
        "Financial forecasting and modeling",
        "Budget planning and management",
        "Investment analysis",
        "Cash flow optimization",
        "Risk assessment and mitigation"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Discovery",
      description: "We conduct thorough analysis of your business operations, challenges, and opportunities to understand your unique situation."
    },
    {
      step: "02",
      title: "Strategy Formulation",
      description: "Our experts develop customized strategies and actionable recommendations tailored to your goals."
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "We work alongside your team to execute strategies effectively and overcome implementation challenges."
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous tracking of KPIs and refinement of strategies to ensure sustainable success."
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
                  <Briefcase className="w-4 h-4" />
                  Business Consulting
                </span>
              </div>
              <h1 className="mb-6">
                Transform Your Business with Strategic Consulting
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Unlock your business's full potential with expert consulting services designed to optimize operations, accelerate growth, and drive sustainable success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Schedule Consultation
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
                  src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1OTk5MTU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business Consulting"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1E3A8A] p-6 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E3A8A] text-white p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-2xl">95%</div>
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
            <h2 className="mb-4">Why Choose Our Business Consulting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Baramij to gain strategic insights and practical solutions that drive meaningful business results.
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
            <h2 className="mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to address every aspect of your business challenges.
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
              <h2 className="mb-6">How Our Consulting Drives Results</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Baramij, we combine deep industry knowledge with proven methodologies to deliver consulting services that create lasting value. Our collaborative approach ensures that strategies are not only sound but also practical and achievable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Customized Solutions</h4>
                    <p className="text-gray-600">Every business is unique, so we tailor our recommendations to your specific needs and context.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Hands-On Implementation</h4>
                    <p className="text-gray-600">We don't just advise—we work with you to implement strategies and ensure successful execution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Measurable Outcomes</h4>
                    <p className="text-gray-600">We focus on delivering tangible results that impact your bottom line.</p>
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
                    src="https://images.unsplash.com/photo-1758873272562-aa5459cbf34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYwMDczMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Strategy Planning"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTk5Njk1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team Collaboration"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTk5ODg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business Analytics"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 rounded-xl text-white shadow-lg">
                  <div className="text-3xl mb-2">15+</div>
                  <div>Years of Experience</div>
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
            <h2 className="mb-4">Our Consulting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that delivers strategic clarity and practical results.
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
            <h2 className="mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our strategic consulting services can help you overcome challenges and achieve your business goals. Schedule a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contact">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Schedule Consultation
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
