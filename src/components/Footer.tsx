import { Linkedin, Twitter, Instagram, Mail, ArrowUp } from "lucide-react";
import { TextPressureEffect } from "./TextPressureEffect";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Handle scrolling when navigating with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Blog", id: "blog" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@baramij.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <TextPressureEffect
              text="Baramij"
              className="text-[28px] font-[700] mb-4 text-white"
            />
            <p className="text-white/80 text-[14px] leading-relaxed mb-6 max-w-md">
              Empowering businesses through innovative digital consulting solutions.
              We transform challenges into opportunities and help you achieve
              sustainable growth in the digital age.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-[14px]">
            © {new Date().getFullYear()} Baramij. All rights reserved.
          </p>
          <p className="text-white/70 text-[14px]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}