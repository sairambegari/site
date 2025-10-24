// Suppress Three.js warnings globally at app initialization
if (typeof window !== 'undefined' && typeof console !== 'undefined') {
  const originalWarn = console.warn.bind(console);
  const originalError = console.error.bind(console);
  
  console.warn = (...args: any[]) => {
    const message = String(args[0] || '');
    if (
      message.includes('Multiple instances of Three.js') ||
      message.includes('THREE.WebGLRenderer') ||
      message.toLowerCase().includes('three')
    ) {
      return; // Suppress Three.js warnings
    }
    originalWarn(...args);
  };

  console.error = (...args: any[]) => {
    const message = String(args[0] || '');
    if (
      message.includes('Multiple instances of Three.js') ||
      message.includes('THREE.WebGLRenderer')
    ) {
      return; // Suppress Three.js errors
    }
    originalError(...args);
  };
}

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages/HomePage";
import DigitalMarketingSEO from "./pages/DigitalMarketingSEO";
import WebEcommerceSolutions from "./pages/WebEcommerceSolutions";
import BusinessConsulting from "./pages/BusinessConsulting";
import InfrastructureManagement from "./pages/InfrastructureManagement";
import AllServices from "./pages/AllServices";
import AllBlogs from "./pages/AllBlogs";
import DigitalTransformation2025 from "./pages/blog/DigitalTransformation2025";
import CloudMigrationGuide from "./pages/blog/CloudMigrationGuide";
import AIPracticalApplications from "./pages/blog/AIPracticalApplications";
import CybersecurityBestPractices from "./pages/blog/CybersecurityBestPractices";
import DataAnalyticsROI from "./pages/blog/DataAnalyticsROI";
import RemoteWorkTechnology from "./pages/blog/RemoteWorkTechnology";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change (but not if there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen cursor-none">
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview_page.html" element={<HomePage />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/digital-marketing-seo" element={<DigitalMarketingSEO />} />
          <Route path="/services/web-ecommerce-solutions" element={<WebEcommerceSolutions />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/infrastructure-management" element={<InfrastructureManagement />} />
          <Route path="/blog" element={<AllBlogs />} />
          <Route path="/blog/digital-transformation-2025" element={<DigitalTransformation2025 />} />
          <Route path="/blog/cloud-migration-guide" element={<CloudMigrationGuide />} />
          <Route path="/blog/ai-practical-applications" element={<AIPracticalApplications />} />
          <Route path="/blog/cybersecurity-best-practices" element={<CybersecurityBestPractices />} />
          <Route path="/blog/data-analytics-roi" element={<DataAnalyticsROI />} />
          <Route path="/blog/remote-work-technology" element={<RemoteWorkTechnology />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}