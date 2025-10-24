import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@baramij.com",
      link: "mailto:hello@baramij.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Business St, Suite 100, New York, NY 10001",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
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
            Get In Touch
          </h2>
          <h3 className="text-[40px] font-[700] mb-4 text-foreground">
            Let's Start a Conversation
          </h3>
          <p className="text-muted-foreground text-[18px] max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground text-[14px] font-[500] mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-6 rounded-lg border border-border bg-input-background focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground text-[14px] font-[500] mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-6 rounded-lg border border-border bg-input-background focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground text-[14px] font-[500] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-4 rounded-lg border border-border bg-input-background focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-[600] text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground text-[14px] hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-[14px]">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Google Map */}
            <div className="bg-card p-6 rounded-xl shadow-md border border-border h-64 overflow-hidden">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  title="Baramij Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096033!2d144.9537353159042!3d-37.81720974202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-primary/10 p-6 rounded-xl">
              <h4 className="text-[18px] font-[600] text-foreground mb-3">
                Office Hours
              </h4>
              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-[500]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-[500]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-[500]">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}