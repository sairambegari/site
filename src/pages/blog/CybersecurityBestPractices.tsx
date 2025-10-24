import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function CybersecurityBestPractices() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-[500]">Back to Blog</span>
        </motion.button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px] font-[500] mb-6">
            Cybersecurity
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            Cybersecurity Best Practices for Modern Enterprises
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>David Martinez</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 28, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bookmark className="w-4 h-4" />
              Save
            </Button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-12 shadow-2xl"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
            alt="Cybersecurity Best Practices"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-foreground space-y-6 text-[16px] leading-relaxed">
            <p>
              In today's interconnected digital landscape, cybersecurity is no longer optional—it's a critical business imperative. With cyberattacks becoming more sophisticated and frequent, enterprises must adopt comprehensive security strategies to protect their data, systems, and reputation. This guide outlines essential best practices for building a robust cybersecurity posture.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Implement Zero Trust Architecture
            </h2>
            <p>
              The traditional "castle and moat" security model is obsolete. Zero Trust assumes that threats can come from anywhere—inside or outside your network. Every access request must be verified, regardless of its origin.
            </p>
            <p>
              Key principles include: verify explicitly using all available data points, use least privilege access by granting minimum necessary permissions, and assume breach by segmenting access and verifying end-to-end encryption.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Multi-Factor Authentication (MFA)
            </h2>
            <p>
              Passwords alone are insufficient protection. MFA adds an extra layer of security by requiring users to provide multiple forms of verification. Organizations implementing MFA can prevent up to 99.9% of automated cyberattacks.
            </p>
            <p>
              Deploy MFA across all systems, especially for privileged accounts, remote access, and cloud services. Consider implementing adaptive authentication that adjusts security requirements based on risk factors like location, device, and behavior patterns.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Regular Security Audits and Assessments
            </h2>
            <p>
              Conduct comprehensive security audits at least annually, with continuous monitoring in between. This includes vulnerability assessments, penetration testing, and security configuration reviews.
            </p>
            <p>
              Don't just test your technical defenses—assess your policies, procedures, and employee awareness. Social engineering attacks often target the human element, making security awareness training crucial.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Data Encryption and Protection
            </h2>
            <p>
              Encrypt sensitive data both in transit and at rest. Use industry-standard encryption protocols like AES-256 for data at rest and TLS 1.3 for data in transit. Don't forget about endpoint encryption for laptops and mobile devices.
            </p>
            <p>
              Implement data loss prevention (DLP) solutions to monitor and control data movement. Classify data based on sensitivity and apply appropriate protection measures for each classification level.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Patch Management and Updates
            </h2>
            <p>
              Unpatched software is one of the most common entry points for attackers. Establish a rigorous patch management program that prioritizes critical security updates and ensures timely deployment across all systems.
            </p>
            <p>
              Automate patching where possible, but maintain oversight for critical systems. Test patches in a non-production environment before widespread deployment to avoid disrupting operations.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Incident Response Planning
            </h2>
            <p>
              Despite best efforts, security incidents will occur. Having a well-documented incident response plan can mean the difference between a minor inconvenience and a catastrophic breach.
            </p>
            <p>
              Your incident response plan should include: clear roles and responsibilities, communication protocols, containment procedures, evidence preservation guidelines, and recovery steps. Conduct regular tabletop exercises to ensure your team knows how to execute the plan under pressure.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Employee Security Awareness Training
            </h2>
            <p>
              Humans are often the weakest link in security. Regular training helps employees recognize and respond to security threats. Cover topics like phishing identification, password hygiene, safe browsing practices, and reporting procedures.
            </p>
            <p>
              Make training engaging and relevant. Use simulated phishing campaigns to test awareness and provide immediate feedback. Remember that security awareness isn't a one-time event—it requires ongoing reinforcement.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Secure Cloud Configurations
            </h2>
            <p>
              Cloud misconfigurations are a leading cause of data breaches. Use cloud security posture management (CSPM) tools to continuously monitor your cloud environment for misconfigurations and compliance violations.
            </p>
            <p>
              Follow the principle of least privilege when setting up cloud access controls. Regularly review and audit cloud permissions, removing unnecessary access rights. Enable cloud-native security features like encryption, logging, and monitoring.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Network Segmentation
            </h2>
            <p>
              Divide your network into segments based on security requirements. This limits the potential impact of a breach—if attackers compromise one segment, they can't automatically access the entire network.
            </p>
            <p>
              Implement micro-segmentation in data centers and cloud environments for even greater granularity. Use firewalls and access controls between segments to enforce security policies.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Third-Party Risk Management
            </h2>
            <p>
              Your security is only as strong as your weakest vendor. Assess the security posture of third-party vendors before granting them access to your systems or data. Include security requirements in vendor contracts and conduct regular security reviews.
            </p>
            <p>
              Limit third-party access to only what's necessary and monitor their activities. Be especially vigilant with vendors who handle sensitive data or have access to critical systems.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Continuous Improvement
            </h2>
            <p>
              Cybersecurity is not a destination—it's an ongoing journey. The threat landscape constantly evolves, requiring organizations to continuously adapt and improve their defenses.
            </p>
            <p>
              Stay informed about emerging threats and vulnerabilities. Participate in information sharing communities. Regularly review and update your security policies and procedures. Invest in security tools and technologies that provide visibility, automation, and intelligence.
            </p>
            <p>
              Most importantly, foster a security-first culture where everyone understands their role in protecting the organization. When security becomes part of your organizational DNA, you're better positioned to defend against whatever threats emerge.
            </p>
          </div>
        </motion.article>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-2xl border border-border"
        >
          <h3 className="text-[24px] font-[600] text-foreground mb-3">
            Strengthen Your Security Posture
          </h3>
          <p className="text-muted-foreground mb-6">
            Let our cybersecurity experts assess your current security and help you implement best practices.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Request Security Assessment
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
