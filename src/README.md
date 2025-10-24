# Baramij - Modern Consultancy Website

A professional, modern consultancy website built with React, TypeScript, and Tailwind CSS featuring smooth animations, interactive effects, and a comprehensive content management system.

---

## 🎨 Design System

- **Brand Name**: Baramij
- **Primary Color**: `#1E3A8A` (Deep Royal Blue)
- **Accent Color**: `#2563EB` (Vibrant Blue)
- **Typography**: Poppins (Google Fonts)
- **CSS Framework**: Tailwind CSS v4.0
- **Animation Library**: Motion (Framer Motion)

---

## 📦 Dependencies & Libraries

### Core Framework
- **React** (v18+) - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** (v6+) - Client-side routing

### Styling & UI
- **Tailwind CSS** (v4.0) - Utility-first CSS framework
- **shadcn/ui** - Reusable UI component library
  - Includes: Button, Card, Dialog, Form, Input, Select, Tabs, and 40+ components
  - All components located in `/components/ui/`

### Animation & Effects
- **Motion** (Framer Motion fork) - Animation library
  - Import: `import { motion } from 'motion/react'`
- **Lucide React** - Icon library for clean, consistent icons

### 3D Graphics
- **Three.js** - 3D graphics library
  - Used for DomeGallery component
  - Singleton pattern in `/lib/three.ts`

### Forms & Validation
- **React Hook Form** (v7.55.0) - Form state management
  - Must use version-specific import: `import { ... } from 'react-hook-form@7.55.0'`

### Notifications
- **Sonner** (v2.0.3) - Toast notifications
  - Import: `import { toast } from 'sonner@2.0.3'`

---

## 📁 Project Structure

```
├── App.tsx                      # Main application entry point with routing
├── styles/
│   └── globals.css              # Tailwind v4 global styles & theme tokens
├── components/                  # Reusable components
│   ├── About.tsx                # About section component
│   ├── Blog.tsx                 # Blog preview section
│   ├── CardNav.tsx              # Animated card navigation (ReactBits)
│   ├── Contact.tsx              # Contact form with validation
│   ├── CurvedLoop.tsx           # Curved text animation (ReactBits)
│   ├── CustomCursor.tsx         # Animated custom cursor
│   ├── DecryptedText.tsx        # Text decryption animation
│   ├── DomeGallery.tsx          # 3D dome gallery with Three.js
│   ├── Footer.tsx               # Footer with links and info
│   ├── GridDistortion.tsx       # Grid distortion hero effect (ReactBits)
│   ├── Hero.tsx                 # Hero section with animations
│   ├── Navbar.tsx               # Sticky navbar with dropdowns
│   ├── Pricing.tsx              # Pricing plans with payment integration hooks
│   ├── Services.tsx             # Services overview section
│   ├── Team.tsx                 # Team members showcase
│   ├── TextPressureEffect.tsx   # Pressure-based text animation (ReactBits)
│   ├── figma/
│   │   └── ImageWithFallback.tsx # Protected image component
│   └── ui/                      # shadcn/ui components (40+ components)
├── pages/                       # Page-level components
│   ├── HomePage.tsx             # Main landing page
│   ├── AllServices.tsx          # Services archive with search/filter
│   ├── AllBlogs.tsx             # Blog archive with 3D dome gallery
│   ├── DigitalMarketingSEO.tsx  # Service detail page
│   ├── WebEcommerceSolutions.tsx # Service detail page
│   ├── BusinessConsulting.tsx   # Service detail page
│   ├── InfrastructureManagement.tsx # Service detail page
│   └── blog/                    # Individual blog article pages
│       ├── DigitalTransformation2025.tsx
│       ├── CloudMigrationGuide.tsx
│       ├── AIPracticalApplications.tsx
│       ├── CybersecurityBestPractices.tsx
│       ├── DataAnalyticsROI.tsx
│       └── RemoteWorkTechnology.tsx
├── data/
│   └── blogData.ts              # Centralized blog post data
├── lib/
│   └── three.ts                 # Three.js singleton initialization
└── guidelines/
    └── Guidelines.md            # Development guidelines
```

---

## 🧩 Key Components

### Custom Components from ReactBits

1. **TextPressureEffect** (`/components/TextPressureEffect.tsx`)
   - Interactive text that responds to cursor pressure
   - Used in Navbar logo

2. **GridDistortion** (`/components/GridDistortion.tsx`)
   - Animated grid distortion effect for hero backgrounds
   - Canvas-based interactive animation

3. **CurvedLoop** (`/components/CurvedLoop.tsx`)
   - SVG-based curved text marquee animation
   - Draggable and interactive
   - Used in Pricing section header

4. **CardNav** (`/components/CardNav.tsx`)
   - Animated navigation cards
   - Smooth hover effects

5. **CustomCursor** (`/components/CustomCursor.tsx`)
   - Fully custom animated cursor
   - Follows mouse movement with smooth transitions

### Core Sections

6. **Hero** - Full-screen hero with grid distortion background
7. **About** - Company introduction with stats
8. **Services** - Service cards with navigation to detail pages
9. **Blog** - Blog preview with featured articles
10. **Pricing** - Three pricing tiers with payment integration hooks
11. **Team** - Team member cards with social links
12. **Contact** - Contact form with React Hook Form validation
13. **Footer** - Multi-column footer with links and branding

### 3D Gallery

14. **DomeGallery** (`/components/DomeGallery.tsx`)
   - Interactive 3D dome displaying blog images
   - Drag to rotate, click to navigate
   - Uses Three.js with singleton pattern
   - Featured in AllBlogs page

---

## 🎯 Features

### Navigation
- ✅ Sticky navbar with smooth scroll
- ✅ Services dropdown menu (4 services)
- ✅ Blog dropdown menu (6 articles)
- ✅ Mobile-responsive hamburger menu
- ✅ Smooth page transitions with React Router

### Content Management
- ✅ 4 Service detail pages
- ✅ 6 Blog article pages
- ✅ Blog archive with search & filtering
- ✅ Services archive with search & filtering
- ✅ Centralized blog data in `/data/blogData.ts`

### Interactive Effects
- ✅ Custom animated cursor (global)
- ✅ Grid distortion hero background
- ✅ Curved loop text animation
- ✅ Text pressure effects on logo
- ✅ Smooth scroll animations (Motion)
- ✅ Hover effects on all interactive elements
- ✅ 3D dome gallery with drag controls

### Forms & Validation
- ✅ Contact form with React Hook Form
- ✅ Search functionality in blog/services archives
- ✅ Toast notifications for user feedback

---

## 💳 Payment Integration (Pricing Section)

The Pricing component (`/components/Pricing.tsx`) is **payment-ready** with integration hooks:

### Current Setup
- Three pricing tiers: Basic ($999), Standard ($2,499), Premium ($4,999)
- Each plan has a `priceId` field for payment provider integration
- `handleChoosePlan()` function ready for payment logic

### How to Integrate Payments

#### Option 1: Stripe
```bash
npm install @stripe/stripe-js
```

```tsx
// In Pricing.tsx
import { loadStripe } from '@stripe/stripe-js';

const handleChoosePlan = async (plan) => {
  const stripe = await loadStripe('your_publishable_key');
  
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId: plan.priceId,
      planName: plan.name
    })
  });
  
  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
};
```

#### Option 2: PayPal
```bash
npm install @paypal/react-paypal-js
```

#### Option 3: Other Providers
- Paddle
- Razorpay
- Square

**Note**: Replace the `scrollToContact()` logic in `handleChoosePlan()` with actual payment processing.

---

## 🎨 Tailwind CSS v4 Configuration

Located in `/styles/globals.css`:

### Custom CSS Variables
- Color tokens for light/dark modes
- Consistent spacing and radius tokens
- Chart color palette
- Custom font weights

### Utility Classes
- `.glass-shine` - Animated glass reflection effect on hover
- Custom cursor styles (global `cursor: none`)

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

---

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- All components are fully responsive
- Hamburger menu for mobile navigation
- Stacked layouts for smaller screens

---

## 🎭 Dark Mode Support

- Full dark mode theme defined in `globals.css`
- Color tokens automatically switch
- Toggle can be added via shadcn/ui theme provider

---

## 🔍 SEO & Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Alt text for images (via ImageWithFallback)
- Keyboard navigation support
- Focus states on all interactive elements

---

## 📝 Version-Specific Imports

Some libraries require specific version imports:

```tsx
// React Hook Form - MUST specify version
import { useForm } from 'react-hook-form@7.55.0';

// Sonner - MUST specify version
import { toast } from 'sonner@2.0.3';

// Motion - Standard import
import { motion } from 'motion/react';
```

---

## 🛠️ Development Guidelines

See `/guidelines/Guidelines.md` for detailed development rules including:
- Component structure standards
- Design system tokens
- Animation best practices
- Code organization
- Accessibility requirements

---

## 📦 shadcn/ui Components Included

**Total: 40+ Components**

- Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar
- Badge, Breadcrumb, Button
- Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, Context Menu
- Dialog, Drawer, Dropdown Menu
- Form
- Hover Card
- Input, Input OTP
- Label
- Menubar
- Navigation Menu
- Pagination, Popover, Progress
- Radio Group, Resizable
- Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch
- Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

All located in `/components/ui/`

---

## 🎯 Routing Structure

```
/                          → HomePage
/preview_page.html         → HomePage
/services                  → AllServices (archive)
/services/digital-marketing-seo → Service detail
/services/web-ecommerce-solutions → Service detail
/services/business-consulting → Service detail
/services/infrastructure-management → Service detail
/blog                      → AllBlogs (archive with 3D dome)
/blog/digital-transformation-2025 → Blog article
/blog/cloud-migration-guide → Blog article
/blog/ai-practical-applications → Blog article
/blog/cybersecurity-best-practices → Blog article
/blog/data-analytics-roi → Blog article
/blog/remote-work-technology → Blog article
*                          → Fallback to HomePage
```

---

## 🐛 Known Considerations

- **Three.js Singleton**: Multiple instances prevented via `/lib/three.ts`
- **Custom Cursor**: Set globally with `cursor: none !important`
- **Protected Files**: `/components/figma/ImageWithFallback.tsx` (do not modify)
- **Payment Integration**: Currently navigates to contact form (see Payment Integration section)

---

## 📄 License

This project is proprietary software for Baramij Consultancy.

---

## 👥 Credits

**Components from ReactBits**:
- TextPressureEffect
- GridDistortion  
- CurvedLoop
- CardNav

**UI Library**: shadcn/ui  
**Icons**: Lucide React  
**Fonts**: Google Fonts (Poppins)

---

## 📧 Support

For questions or support, please contact the development team or refer to the Guidelines.md file.

---

**Last Updated**: October 10, 2025  
**Version**: 1.0.0  
**Framework**: React 18 + TypeScript + Tailwind v4
