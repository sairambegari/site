import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1522199899308-2eef382e2158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1OTg2MDIxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@baramij.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of Cloud Solutions",
      image:
        "https://images.unsplash.com/photo-1524538198441-241ff79d153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU5OTE0OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@baramij.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Business Strategy Lead",
      image:
        "https://images.unsplash.com/photo-1589114207353-1fc98a11070b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnR8ZW58MXx8fHwxNzU5OTA4ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@baramij.com",
      },
    },
    {
      name: "David Park",
      role: "Cybersecurity Expert",
      image:
        "https://images.unsplash.com/photo-1551862390-7894b509f8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTg0MjQ1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@baramij.com",
      },
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
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
            Our Team
          </h2>
          <h3 className="text-[40px] font-[700] mb-4 text-foreground">
            Meet Our Experts
          </h3>
          <p className="text-muted-foreground text-[18px] max-w-2xl mx-auto leading-relaxed">
            Our team of experienced professionals is dedicated to delivering
            exceptional results for every client.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h4 className="text-[20px] font-[600] text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary text-[14px] font-[500]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
