import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function DigitalTransformation2025() {
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
            Digital Strategy
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            Digital Transformation in 2025: Key Trends to Watch
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
            alt="Digital Transformation 2025"
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
              As we navigate through 2025, digital transformation continues to reshape the business landscape at an unprecedented pace. Organizations that embrace these changes are not just surviving—they're thriving in ways previously unimaginable. Let's explore the key trends that are defining digital transformation this year.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              1. AI-Powered Everything
            </h2>
            <p>
              Artificial Intelligence has moved beyond being a buzzword to becoming an essential component of business operations. From customer service chatbots to predictive analytics, AI is revolutionizing how companies interact with customers and make data-driven decisions.
            </p>
            <p>
              Machine learning algorithms are now capable of processing vast amounts of data in real-time, providing insights that help businesses stay ahead of market trends. Companies leveraging AI for personalization are seeing engagement rates increase by up to 40%.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              2. Cloud-First Architecture
            </h2>
            <p>
              The shift to cloud computing is no longer optional—it's imperative. Organizations are moving away from traditional on-premises infrastructure to cloud-first architectures that offer scalability, flexibility, and cost-efficiency.
            </p>
            <p>
              Multi-cloud and hybrid cloud strategies are becoming the norm, allowing businesses to leverage the best features of different cloud providers while maintaining control over their data and applications. This approach reduces vendor lock-in and improves disaster recovery capabilities.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              3. Enhanced Cybersecurity Measures
            </h2>
            <p>
              With digital transformation comes increased vulnerability to cyber threats. In 2025, we're seeing a surge in zero-trust security models, where no user or device is automatically trusted, regardless of their location within or outside the network perimeter.
            </p>
            <p>
              Companies are investing heavily in advanced threat detection systems powered by AI and machine learning. Real-time monitoring and automated response systems are becoming standard practice to protect sensitive data and maintain customer trust.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              4. Customer Experience Revolution
            </h2>
            <p>
              Digital transformation is fundamentally about improving the customer experience. Omnichannel strategies ensure customers receive consistent, personalized experiences across all touchpoints—whether they're shopping online, using a mobile app, or visiting a physical store.
            </p>
            <p>
              Advanced analytics and customer data platforms (CDPs) enable businesses to understand customer behavior at a granular level, allowing for hyper-personalized marketing campaigns and product recommendations.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              The Path Forward
            </h2>
            <p>
              Digital transformation is not a destination but a continuous journey. Organizations that succeed are those that foster a culture of innovation, invest in their people, and remain agile in the face of change. The trends we're seeing in 2025 are just the beginning—the future promises even more exciting developments.
            </p>
            <p>
              The key to success lies in understanding that digital transformation is about more than just technology. It's about reimagining business processes, enhancing customer experiences, and creating value in new and innovative ways. Companies that embrace this holistic approach will be best positioned to thrive in the digital age.
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
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let our expert consultants guide you through your digital transformation journey.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
