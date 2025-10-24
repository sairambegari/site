import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function RemoteWorkTechnology() {
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
            Digital Workplace
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            Building the Future of Remote Work with Technology
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Alex Thompson</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 15, 2025</span>
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
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80"
            alt="Remote Work Technology"
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
              The shift to remote and hybrid work models is one of the most significant workplace transformations of our time. Technology is the enabler that makes distributed teams not just possible, but productive and engaged. Let's explore how forward-thinking organizations are leveraging technology to build the future of work.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Collaboration Platforms: The Digital Office
            </h2>
            <p>
              Modern collaboration platforms go far beyond simple video conferencing. They're creating virtual workspaces that replicate and enhance in-person collaboration.
            </p>
            <p>
              Tools like Microsoft Teams, Slack, and Zoom are integrating features like persistent chat, file sharing, virtual whiteboards, and seamless app integrations. These platforms become the central hub where work happens, reducing the need to switch between multiple applications.
            </p>
            <p>
              The key is choosing platforms that fit your team's workflow and culture. Some teams thrive with asynchronous communication, while others need real-time collaboration. Understanding your needs ensures technology enhances rather than hinders productivity.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Project Management and Productivity Tools
            </h2>
            <p>
              When teams are distributed, visibility into work progress becomes crucial. Modern project management tools provide transparency without micromanagement.
            </p>
            <p>
              Platforms like Asana, Monday.com, and Jira help teams track tasks, manage workflows, and maintain alignment on priorities. The best implementations focus on outcomes rather than activity, giving teams autonomy while ensuring accountability.
            </p>
            <p>
              Productivity tools should reduce overhead, not create it. Choose solutions that integrate with existing workflows and require minimal maintenance. The goal is to spend less time managing tools and more time doing meaningful work.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Secure Remote Access and VPNs
            </h2>
            <p>
              Security cannot be an afterthought in remote work environments. Virtual Private Networks (VPNs) and Zero Trust Network Access (ZTNA) solutions ensure employees can securely access company resources from anywhere.
            </p>
            <p>
              Modern security approaches go beyond traditional VPNs. Zero Trust models verify every access request based on identity, device health, and context. This provides stronger security while often delivering better user experience than legacy VPN solutions.
            </p>
            <p>
              Implement multi-factor authentication (MFA) across all systems. Provide employees with secure devices or clear security guidelines for personal devices. Regular security training helps teams understand and follow best practices.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Cloud-Based Infrastructure
            </h2>
            <p>
              Cloud computing is the foundation of modern remote work. It enables access to applications and data from anywhere, on any device, while maintaining performance and security.
            </p>
            <p>
              Organizations are migrating key systems to cloud-based alternatives: email and productivity suites to Microsoft 365 or Google Workspace, file storage to cloud services, and even desktop environments to virtual desktop infrastructure (VDI) or Desktop-as-a-Service (DaaS) solutions.
            </p>
            <p>
              Cloud infrastructure also supports scalability. Companies can quickly onboard new employees, spin up test environments, or scale resources to meet demand without physical infrastructure constraints.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Employee Experience and Engagement
            </h2>
            <p>
              Technology can help maintain culture and connection in distributed teams. Virtual team building platforms, recognition tools, and employee feedback systems keep remote workers engaged.
            </p>
            <p>
              Consider tools that facilitate informal interactions—virtual coffee chats, team games, or casual video hangouts. These replicate the water cooler conversations that build relationships and foster innovation.
            </p>
            <p>
              Employee wellness platforms, mental health resources, and flexible scheduling tools show commitment to work-life balance. When employees feel supported, they're more productive and loyal.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Communication Best Practices
            </h2>
            <p>
              Having the right tools is only half the battle. Establishing communication norms is equally important:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Define which channels to use for different types of communication</li>
              <li>Set expectations around response times</li>
              <li>Encourage video-on for important meetings to build connection</li>
              <li>Document decisions and important information for asynchronous access</li>
              <li>Respect time zones and working hours in global teams</li>
            </ul>
            <p>
              Over-communication is better than under-communication in remote settings. Be explicit about context, expectations, and deadlines that might be obvious in person.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Performance Monitoring and Analytics
            </h2>
            <p>
              Some organizations struggle with trust in remote environments, leading to invasive monitoring tools. This is counterproductive. Instead, focus on outcome-based metrics.
            </p>
            <p>
              Use analytics to understand team productivity patterns, identify bottlenecks, and improve processes—not to surveil employees. Transparency about what's being measured and why builds trust.
            </p>
            <p>
              Regular one-on-ones, clear goal-setting, and continuous feedback are more valuable than any monitoring tool. Manage by results, not by activity or hours logged.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Training and Development
            </h2>
            <p>
              Remote work shouldn't mean reduced learning opportunities. E-learning platforms, virtual training sessions, and digital mentorship programs ensure continuous professional development.
            </p>
            <p>
              Create digital libraries of training resources that employees can access on-demand. Encourage skill-sharing sessions where team members teach each other. Support attendance at virtual conferences and webinars.
            </p>
            <p>
              Invest in technical skills training so all employees can effectively use remote work tools. Don't assume digital literacy—provide support and resources for those who need it.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              The Hybrid Future
            </h2>
            <p>
              Many organizations are adopting hybrid models that combine remote and in-office work. This requires technology that bridges physical and virtual spaces.
            </p>
            <p>
              Invest in quality audio-visual equipment for meeting rooms to ensure remote participants aren't second-class citizens. Use digital whiteboards and collaboration tools that work equally well for in-person and remote team members.
            </p>
            <p>
              Hot-desking and room booking systems help manage flexible office space. Integration between physical and digital systems creates seamless experiences regardless of where employees work.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Looking Forward
            </h2>
            <p>
              The future of work is flexible, technology-enabled, and focused on outcomes over location. Organizations that embrace this shift—with the right tools, policies, and culture—will attract top talent and drive innovation.
            </p>
            <p>
              Technology continues to evolve. Virtual reality meetings, AI-powered productivity assistants, and advanced collaboration tools are on the horizon. Stay curious, experiment with new tools, and continuously refine your approach.
            </p>
            <p>
              Remember that technology is an enabler, not a solution in itself. Success requires combining the right tools with thoughtful policies, strong leadership, and a culture that values flexibility, trust, and results.
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
            Transform Your Remote Work Experience
          </h3>
          <p className="text-muted-foreground mb-6">
            Let us help you build a technology stack that empowers your distributed team.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Get Expert Guidance
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
