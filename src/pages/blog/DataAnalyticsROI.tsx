import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function DataAnalyticsROI() {
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
            Data Analytics
          </span>
          
          <h1 className="text-[40px] sm:text-[48px] font-[700] text-foreground mb-6 leading-tight">
            Maximizing ROI with Data Analytics
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Jennifer Lee</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>February 22, 2025</span>
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            alt="Data Analytics ROI"
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
              In an era where data is often called "the new oil," organizations are investing heavily in analytics capabilities. But collecting data isn't enough—the real value lies in transforming that data into actionable insights that drive measurable business outcomes. Here's how to maximize your return on investment in data analytics.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Start with Business Objectives
            </h2>
            <p>
              The biggest mistake organizations make is implementing analytics without clear business objectives. Before investing in tools or hiring data scientists, identify the specific business problems you want to solve.
            </p>
            <p>
              Are you trying to reduce customer churn? Optimize pricing? Improve operational efficiency? Define success metrics upfront. This ensures your analytics initiatives align with business goals and makes it easier to measure ROI.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Build a Strong Data Foundation
            </h2>
            <p>
              Analytics is only as good as your data. Invest in data quality, governance, and infrastructure before building sophisticated models. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Establishing data standards and definitions across the organization</li>
              <li>Implementing data quality checks and cleansing processes</li>
              <li>Creating a single source of truth for key business metrics</li>
              <li>Building scalable data infrastructure that can handle growing volumes</li>
              <li>Ensuring data security and compliance with regulations</li>
            </ul>
            <p>
              Poor data quality can undermine even the most advanced analytics. Companies that invest in data quality see analytics projects deliver results 3x faster.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Focus on Actionable Insights
            </h2>
            <p>
              The goal of analytics isn't to create beautiful dashboards or complex models—it's to drive action. Every analysis should answer: "So what?" and "Now what?"
            </p>
            <p>
              Design your analytics outputs to be actionable. If you identify that customer satisfaction drops after a certain wait time, provide specific recommendations for reducing wait times. If your analysis shows which customer segments are most profitable, outline strategies for targeting those segments.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Democratize Data Access
            </h2>
            <p>
              Analytics shouldn't be confined to data teams. Empower business users with self-service analytics tools that let them explore data and generate insights without always relying on technical experts.
            </p>
            <p>
              This doesn't mean giving everyone access to everything. Implement proper governance and training. But when business users can answer their own questions, analytics teams can focus on more complex problems, and insights flow more quickly into decision-making.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Measure and Optimize Continuously
            </h2>
            <p>
              Establish key performance indicators (KPIs) for your analytics initiatives themselves. Track metrics like:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Time from question to insight</li>
              <li>Percentage of decisions informed by data</li>
              <li>Business impact of analytics-driven initiatives</li>
              <li>User adoption of analytics tools and dashboards</li>
              <li>Data quality scores</li>
            </ul>
            <p>
              Regularly review these metrics and adjust your approach. Analytics is an iterative process—what works today may need refinement tomorrow.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Invest in the Right Talent
            </h2>
            <p>
              Technology alone won't deliver analytics ROI—you need people who can translate business problems into analytical questions and insights into action. This requires a mix of skills:
            </p>
            <p>
              <strong>Data Engineers:</strong> Build and maintain data infrastructure and pipelines.
            </p>
            <p>
              <strong>Data Scientists:</strong> Develop advanced models and algorithms.
            </p>
            <p>
              <strong>Data Analysts:</strong> Generate insights from data and communicate findings.
            </p>
            <p>
              <strong>Business Analysts:</strong> Bridge the gap between business needs and technical solutions.
            </p>
            <p>
              Don't overlook the importance of data literacy across the organization. Invest in training programs that help all employees understand data concepts and make data-driven decisions.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Start Small, Scale Smart
            </h2>
            <p>
              Don't try to boil the ocean. Start with pilot projects that can deliver quick wins and demonstrate value. Choose use cases that are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Clearly defined and scoped</li>
              <li>Aligned with strategic business priorities</li>
              <li>Achievable with available data and resources</li>
              <li>Measurable in terms of business impact</li>
            </ul>
            <p>
              Success with initial projects builds momentum and secures buy-in for larger initiatives. Learn from each project and apply those lessons to future efforts.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Integrate Analytics into Workflows
            </h2>
            <p>
              The most valuable analytics are embedded into day-to-day workflows, not isolated in separate systems. Integrate insights into the tools your teams already use.
            </p>
            <p>
              For example, surface customer insights directly in your CRM, show inventory optimization recommendations in your supply chain system, or embed fraud detection alerts in your transaction processing workflows.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              Calculate and Communicate ROI
            </h2>
            <p>
              Quantify the value your analytics initiatives deliver. Track both hard and soft benefits:
            </p>
            <p>
              <strong>Hard Benefits:</strong> Revenue increases, cost reductions, efficiency gains, reduced waste or fraud.
            </p>
            <p>
              <strong>Soft Benefits:</strong> Faster decision-making, improved customer satisfaction, better employee productivity, reduced risk.
            </p>
            <p>
              Regularly communicate these results to stakeholders. When people see concrete evidence of analytics driving business value, they're more likely to support future investments and adopt data-driven practices.
            </p>

            <h2 className="text-[28px] font-[600] text-foreground mt-8 mb-4">
              The Bottom Line
            </h2>
            <p>
              Maximizing ROI from data analytics isn't about having the most advanced technology or the largest data science team. It's about aligning analytics with business objectives, building strong foundations, empowering people, and continuously improving.
            </p>
            <p>
              Organizations that approach analytics strategically see average ROI of 3-4x their investment within the first two years. But the real value often extends beyond direct ROI—analytics capabilities become a sustainable competitive advantage that drives long-term success.
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
            Unlock the Power of Your Data
          </h3>
          <p className="text-muted-foreground mb-6">
            Our analytics experts can help you build a data strategy that delivers measurable results.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Start Your Analytics Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
