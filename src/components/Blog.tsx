import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in 2025: Key Trends to Watch",
    excerpt: "Explore the latest trends shaping digital transformation and how businesses can stay ahead in an ever-evolving landscape.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "Digital Strategy",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    readTime: "5 min read",
    route: "/blog/digital-transformation-2025",
  },
  {
    id: 2,
    title: "Cloud Migration: A Complete Guide for Enterprises",
    excerpt: "Learn the essential steps and best practices for successfully migrating your enterprise infrastructure to the cloud.",
    author: "Michael Chen",
    date: "March 10, 2025",
    category: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    readTime: "8 min read",
    route: "/blog/cloud-migration-guide",
  },
  {
    id: 3,
    title: "AI & Machine Learning: Practical Applications",
    excerpt: "Discover how AI and ML are transforming business operations with real-world use cases and implementation strategies.",
    author: "Dr. Emily Roberts",
    date: "March 5, 2025",
    category: "AI & Innovation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    readTime: "6 min read",
    route: "/blog/ai-practical-applications",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px] font-[500] mb-4">
            Insights & Updates
          </span>
          <h2 className="text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Stay updated with the latest trends, insights, and best practices in digital consulting and technology innovation.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              {/* Featured Image */}
              <Link to={post.route}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-[12px] font-[500] rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-[12px] text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <Link to={post.route}>
                  <h3 className="text-[20px] font-[600] text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-muted-foreground text-[14px] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read Time & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-muted-foreground font-[500]">
                    {post.readTime}
                  </span>
                  <Link to={post.route}>
                    <button className="flex items-center gap-2 text-primary text-[14px] font-[500] group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/blog">
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
