import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function CloudMigrationGuide() {
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
            Cloud Solutions
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            Cloud Migration: A Complete Guide for Enterprises
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Michael Chen</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
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
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80"
            alt="Cloud Migration Guide"
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
              Cloud migration is one of the most critical decisions enterprises make in their digital transformation journey. Moving from legacy on-premises infrastructure to the cloud promises increased agility, cost savings, and improved scalability. However, the migration process requires careful planning and execution to ensure success.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Understanding Cloud Migration
            </h2>
            <p>
              Cloud migration involves moving data, applications, and IT processes from on-premises infrastructure to cloud-based systems, or from one cloud environment to another. This transformation can take many forms, from simple lift-and-shift operations to complete application re-architecting for cloud-native environments.
            </p>
            <p>
              The benefits are substantial: reduced infrastructure costs, improved disaster recovery capabilities, enhanced security, and the ability to scale resources up or down based on demand. However, realizing these benefits requires a strategic approach.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Phase 1: Assessment and Planning
            </h2>
            <p>
              Before beginning any migration, conduct a comprehensive assessment of your current infrastructure. Identify which applications and data sets are suitable for cloud migration and which might need to remain on-premises for regulatory or performance reasons.
            </p>
            <p>
              Create a detailed inventory of your applications, their dependencies, and their resource requirements. This assessment will help you choose the right cloud service model (IaaS, PaaS, or SaaS) and deployment model (public, private, or hybrid cloud) for each workload.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Phase 2: Choosing the Right Cloud Provider
            </h2>
            <p>
              Not all cloud providers are created equal. Major players like AWS, Microsoft Azure, and Google Cloud Platform each offer unique strengths and pricing models. Consider factors such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Geographic presence and data center locations</li>
              <li>Compliance certifications relevant to your industry</li>
              <li>Service level agreements (SLAs) and uptime guarantees</li>
              <li>Integration capabilities with existing tools</li>
              <li>Total cost of ownership, including hidden costs</li>
            </ul>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Phase 3: Migration Strategies
            </h2>
            <p>
              There are several migration strategies, often referred to as the "6 Rs of migration":
            </p>
            <p>
              <strong>Rehost (Lift and Shift):</strong> Move applications to the cloud without modifications. This is the quickest approach but doesn't take full advantage of cloud-native features.
            </p>
            <p>
              <strong>Replatform:</strong> Make minor optimizations to take advantage of cloud capabilities without changing core architecture.
            </p>
            <p>
              <strong>Refactor/Re-architect:</strong> Redesign applications to be cloud-native, maximizing benefits but requiring the most time and resources.
            </p>
            <p>
              <strong>Repurchase:</strong> Move to a SaaS solution, replacing existing applications.
            </p>
            <p>
              <strong>Retain:</strong> Keep certain applications on-premises, at least temporarily.
            </p>
            <p>
              <strong>Retire:</strong> Decommission applications that are no longer needed.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Phase 4: Security and Compliance
            </h2>
            <p>
              Security should be a top priority throughout the migration process. Implement encryption for data in transit and at rest, establish robust identity and access management (IAM) policies, and ensure compliance with relevant regulations such as GDPR, HIPAA, or SOC 2.
            </p>
            <p>
              Consider implementing a zero-trust security model where every access request is verified, regardless of origin. Regular security audits and penetration testing should become part of your ongoing cloud operations.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Phase 5: Execution and Testing
            </h2>
            <p>
              Begin with a pilot migration of non-critical applications to test your processes and identify potential issues. Use this opportunity to train your team and refine your migration playbook.
            </p>
            <p>
              Implement comprehensive testing at every stage—functionality testing, performance testing, security testing, and disaster recovery testing. Have rollback plans in place for every migration wave.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Post-Migration: Optimization and Governance
            </h2>
            <p>
              Migration is just the beginning. Continuously monitor your cloud environment for performance, cost, and security. Implement cloud governance policies to prevent sprawl and ensure resources are used efficiently.
            </p>
            <p>
              Use cloud-native tools for monitoring, logging, and cost management. Regularly review your architecture and make adjustments to optimize performance and reduce costs. Many organizations find they can reduce their cloud spending by 20-30% through proper optimization.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Conclusion
            </h2>
            <p>
              Cloud migration is a journey that requires careful planning, skilled execution, and ongoing optimization. By following a structured approach and leveraging the right expertise, enterprises can successfully navigate this transition and unlock the full potential of cloud computing. The investment in doing it right pays dividends in agility, innovation, and competitive advantage.
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
            Need Help with Cloud Migration?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our cloud experts can guide you through every step of your migration journey.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Speak to an Expert
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
