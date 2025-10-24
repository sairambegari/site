import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Award, Users, TrendingUp } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Align technology with your business goals for maximum impact.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Over a decade of successful digital transformation projects.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Tailored solutions that prioritize your unique needs.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Strategies designed to scale with your business.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTk5MzIxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-[16px] font-[600] mb-3 uppercase tracking-wide">
              About Baramij
            </h2>
            <h3 className="text-[40px] font-[700] mb-6 text-foreground leading-tight">
              Your Partner in Digital Excellence
            </h3>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-6">
              At Baramij, we believe that technology should empower, not complicate.
              With over a decade of experience in digital consulting, we help businesses
              navigate the complex digital landscape with confidence.
            </p>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-6">
              Our mission is to deliver innovative, scalable solutions that transform
              challenges into opportunities. We combine strategic thinking with technical
              expertise to drive meaningful results for our clients.
            </p>
            <div className="flex items-center gap-8 mt-8">
              <div>
                <div className="text-[36px] font-[700] text-primary">150+</div>
                <div className="text-muted-foreground text-[14px]">Projects Completed</div>
              </div>
              <div>
                <div className="text-[36px] font-[700] text-primary">98%</div>
                <div className="text-muted-foreground text-[14px]">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-[36px] font-[700] text-primary">50+</div>
                <div className="text-muted-foreground text-[14px]">Expert Consultants</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-[18px] font-[600] mb-2 text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}