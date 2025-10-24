import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle2, TrendingUp, Search, Target, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DecryptedText } from "../components/DecryptedText";

export default function DigitalMarketingSEO() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Online Visibility",
      description: "Boost your search engine rankings and get found by customers actively searching for your services."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Traffic",
      description: "Attract qualified leads who are more likely to convert into paying customers through strategic keyword targeting."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Measurable ROI",
      description: "Track every metric and optimize campaigns in real-time to maximize your marketing investment."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Brand Authority",
      description: "Build trust and credibility in your industry through consistent, valuable content and engagement."
    }
  ];

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive on-page and off-page SEO strategies to improve your organic search rankings.",
      features: [
        "Keyword research and analysis",
        "Technical SEO audits",
        "Content optimization",
        "Link building campaigns",
        "Local SEO optimization"
      ]
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Data-driven PPC campaigns across Google Ads, social media, and display networks.",
      features: [
        "Campaign strategy and setup",
        "Ad copywriting and testing",
        "Bid management and optimization",
        "Conversion tracking",
        "Monthly performance reports"
      ]
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social platforms.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships"
      ]
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions.",
      features: [
        "Content strategy and planning",
        "Blog writing and optimization",
        "Video content production",
        "Email marketing campaigns",
        "Marketing automation"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current digital presence, competitors, and target audience to create a customized strategy."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our team develops a comprehensive digital marketing plan aligned with your business goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute campaigns across chosen channels with careful attention to detail and brand consistency."
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description: "Continuous monitoring, testing, and optimization to ensure maximum ROI with transparent reporting."
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
                  <Search className="w-4 h-4" />
                  Digital Marketing & SEO
                </span>
              </div>
              <h1 className="mb-6">
                Grow Your Business with Data-Driven Digital Marketing
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Reach your target audience, increase conversions, and dominate search rankings with our comprehensive digital marketing and SEO services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Get Started Today
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
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTk5NzY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Marketing Analytics"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-[#1E3A8A] p-6 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E3A8A] text-white p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Average Growth</div>
                    <div className="text-2xl">+247%</div>
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
            <h2 className="mb-4">Why Choose Our Digital Marketing Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Baramij to transform your online presence and achieve measurable business growth.
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
            <h2 className="mb-4">Our Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to elevate your digital presence and drive real results.
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
              <h2 className="mb-6">How Our Services Help Your Business</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Baramij, we don't just execute campaigns—we become your strategic partner in growth. Our holistic approach combines cutting-edge digital marketing techniques with deep industry expertise to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Strategic Planning</h4>
                    <p className="text-gray-600">We develop customized strategies based on your unique business goals and market position.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Expert Execution</h4>
                    <p className="text-gray-600">Our certified specialists implement proven tactics across all digital channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E3A8A] text-white p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-2">Continuous Optimization</h4>
                    <p className="text-gray-600">We constantly test, measure, and refine to maximize your ROI.</p>
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
                    src="https://images.unsplash.com/photo-1668903678359-e810dd966016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBvcHRpbWl6YXRpb24lMjBzdHJhdGVneXxlbnwxfHx8fDE3NjAwNzEwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="SEO Strategy"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYwMDcxMDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Content Marketing"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjAwMTQ4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Social Media Marketing"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 rounded-xl text-white shadow-lg">
                  <div className="text-3xl mb-2">500+</div>
                  <div>Successful Campaigns</div>
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
            <h2 className="mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures consistent results and sustainable growth.
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
            <h2 className="mb-6">Ready to Dominate Your Market?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a digital marketing strategy that drives real, measurable results for your business. Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contact">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Schedule Free Consultation
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
