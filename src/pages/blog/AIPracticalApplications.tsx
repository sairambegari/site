import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function AIPracticalApplications() {
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
            AI & Innovation
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            AI & Machine Learning: Practical Applications
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Dr. Emily Roberts</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
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
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
            alt="AI and Machine Learning Applications"
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
              Artificial Intelligence and Machine Learning have evolved from experimental technologies to essential business tools. Today's organizations are leveraging AI not just for automation, but for gaining competitive advantages through intelligent decision-making, personalization, and predictive analytics. Let's explore the practical applications that are delivering real value.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Customer Service Automation
            </h2>
            <p>
              AI-powered chatbots and virtual assistants have revolutionized customer service. Modern systems can handle complex queries, understand context, and provide personalized responses 24/7. They're not just answering FAQs—they're resolving issues, processing transactions, and even detecting customer sentiment.
            </p>
            <p>
              Leading companies report that AI chatbots handle up to 80% of routine inquiries, freeing human agents to focus on complex issues that require empathy and creative problem-solving. The result? Reduced wait times, lower operational costs, and improved customer satisfaction.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Predictive Analytics and Business Intelligence
            </h2>
            <p>
              Machine learning algorithms excel at identifying patterns in massive datasets that would be impossible for humans to detect. Businesses are using predictive analytics for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Demand forecasting to optimize inventory levels</li>
              <li>Customer churn prediction to enable proactive retention</li>
              <li>Sales forecasting for better resource allocation</li>
              <li>Risk assessment in financial services</li>
              <li>Predictive maintenance in manufacturing</li>
            </ul>
            <p>
              These applications transform reactive businesses into proactive organizations that can anticipate and prepare for future trends.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Personalization at Scale
            </h2>
            <p>
              AI enables hyper-personalization across digital experiences. E-commerce platforms use ML algorithms to recommend products based on browsing history, purchase patterns, and similar customer behaviors. Streaming services curate content recommendations that keep users engaged.
            </p>
            <p>
              Marketing teams leverage AI to create personalized email campaigns, dynamic website content, and targeted advertising. This level of personalization was once only possible for luxury brands with dedicated staff—now it's accessible to businesses of all sizes through AI.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Fraud Detection and Security
            </h2>
            <p>
              Financial institutions and e-commerce platforms use machine learning to detect fraudulent transactions in real-time. These systems analyze patterns across millions of transactions, identifying anomalies that indicate potential fraud.
            </p>
            <p>
              Unlike rule-based systems, ML models continuously learn and adapt to new fraud patterns, staying ahead of increasingly sophisticated attacks. They can flag suspicious activities while minimizing false positives that frustrate legitimate customers.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Process Automation and Optimization
            </h2>
            <p>
              Robotic Process Automation (RPA) combined with AI is transforming back-office operations. Intelligent automation can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process invoices and expense reports</li>
              <li>Extract and validate data from documents</li>
              <li>Automate data entry and reconciliation</li>
              <li>Generate reports and insights</li>
              <li>Route work items to appropriate teams</li>
            </ul>
            <p>
              Organizations implementing intelligent automation report efficiency gains of 40-60% in targeted processes, along with improved accuracy and compliance.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Natural Language Processing Applications
            </h2>
            <p>
              NLP technologies are making human-computer interaction more natural and intuitive. Applications include:
            </p>
            <p>
              <strong>Sentiment Analysis:</strong> Understanding customer feedback from reviews, social media, and surveys to gauge brand perception and product satisfaction.
            </p>
            <p>
              <strong>Document Analysis:</strong> Automatically extracting key information from contracts, legal documents, and research papers.
            </p>
            <p>
              <strong>Voice Assistants:</strong> Enabling hands-free interaction with systems through natural language commands.
            </p>
            <p>
              <strong>Translation Services:</strong> Breaking down language barriers in global business communications.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Computer Vision in Action
            </h2>
            <p>
              Computer vision technologies are finding practical applications across industries:
            </p>
            <p>
              In retail, computer vision powers cashier-less stores and virtual try-on experiences. Manufacturing uses it for quality control and defect detection. Healthcare leverages it for medical image analysis and diagnosis assistance.
            </p>
            <p>
              These applications demonstrate that AI isn't just about replacing human workers—it's about augmenting human capabilities and enabling us to focus on higher-value activities.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Implementation Strategy
            </h2>
            <p>
              Successfully implementing AI requires a strategic approach:
            </p>
            <p>
              Start with clearly defined business problems. Don't implement AI for its own sake—focus on use cases that deliver measurable value. Begin with pilot projects to prove value and build organizational confidence.
            </p>
            <p>
              Ensure you have the right data infrastructure. AI models are only as good as the data they're trained on. Invest in data quality, governance, and security.
            </p>
            <p>
              Build or acquire the necessary talent. Whether through hiring, training, or partnerships, you need people who understand both AI technology and your business domain.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Looking Ahead
            </h2>
            <p>
              AI and machine learning are no longer emerging technologies—they're essential tools for competitive businesses. The organizations that will thrive are those that view AI not as a replacement for human intelligence, but as a powerful amplifier of human capabilities.
            </p>
            <p>
              The future belongs to companies that can effectively combine human creativity, judgment, and empathy with AI's ability to process vast amounts of data, identify patterns, and automate routine tasks. The question isn't whether to adopt AI, but how to do it strategically and ethically.
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
            Ready to Implement AI in Your Business?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our AI experts can help you identify opportunities and implement solutions that deliver real value.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
