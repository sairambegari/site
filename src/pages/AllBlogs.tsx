import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import DomeGallery from "../components/DomeGallery";

const allBlogPosts = [
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
  {
    id: 4,
    title: "Cybersecurity Best Practices for Modern Enterprises",
    excerpt: "Essential security strategies and practices to protect your organization from evolving cyber threats.",
    author: "David Martinez",
    date: "February 28, 2025",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    readTime: "7 min read",
    route: "/blog/cybersecurity-best-practices",
  },
  {
    id: 5,
    title: "Maximizing ROI with Data Analytics",
    excerpt: "Transform data into actionable insights and measure the business impact of your analytics initiatives.",
    author: "Jennifer Lee",
    date: "February 22, 2025",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    readTime: "6 min read",
    route: "/blog/data-analytics-roi",
  },
  {
    id: 6,
    title: "Building the Future of Remote Work with Technology",
    excerpt: "Explore how technology is enabling productive distributed teams and reshaping the modern workplace.",
    author: "Alex Thompson",
    date: "February 15, 2025",
    category: "Digital Workplace",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
    readTime: "7 min read",
    route: "/blog/remote-work-technology",
  },
];

const categories = [
  "All",
  "Digital Strategy",
  "Cloud Solutions",
  "AI & Innovation",
  "Cybersecurity",
  "Data Analytics",
  "Digital Workplace",
];

export default function AllBlogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Dome Gallery images with routes
  const domeGalleryImages = allBlogPosts.map(post => ({
    src: post.image,
    alt: post.title,
    route: post.route
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Dome Gallery Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <DomeGallery
            images={domeGalleryImages}
            fit={1.2}
            fitBasis="width"
            minRadius={800}
            maxRadius={1400}
            overlayBlurColor="#1E3A8A"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            grayscale={false}
            dragSensitivity={15}
            segments={40}
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[14px] font-[600] shadow-lg">
              Our Blog
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] text-foreground mb-6 leading-tight drop-shadow-lg"
          >
            Insights & Updates
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Explore our latest articles on digital transformation, technology trends, and business innovation. Click any image to dive in.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-xl border-border"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[14px] font-[500] transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              {/* Featured Image */}
              <Link to={post.route}>
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
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

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-[18px] mb-4">
              No articles found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-12 bg-gradient-to-br from-primary/5 to-secondary/20 rounded-2xl border border-border text-center"
        >
          <h2 className="text-[32px] font-[700] text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground text-[16px] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, trends, and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-6 rounded-xl border-border"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
