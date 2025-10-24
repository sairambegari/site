# General Guidelines

* Build a **modern, responsive React website** for a **Consultancy brand named “Baramij.”**
* Use **Flexbox and CSS Grid** for layout — **no absolute positioning** unless required for design precision.
* Prioritize **clean, reusable components** — each major section (Navbar, Hero, About, Services, Contact) should be its own component file.
* Ensure the **design is consistent**, scalable, and visually balanced across desktop, tablet, and mobile.
* Follow **semantic HTML** and **accessibility best practices**.
* Use **smooth scroll** for navigation and **hover/transition effects** for interactivity.
* Maintain **lightweight performance** — optimized images, minimal inline styles, and short animations.

---

# Design System Guidelines

* Font family: `"Inter", sans-serif`
* Primary color: `#1E3A8A` (deep blue)
* Accent color: `#2563EB` (vibrant blue)
* Background color: `#F9FAFB` (light gray-white)
* Text color: `#111827` (dark gray)
* Use **Tailwind CSS** utility classes for consistent styling.

---

## Components

### Navbar

* Fixed at the top with transparent background that becomes solid on scroll.
* Contains logo on the left and navigation links (Home, About, Services, Team, Contact) on the right.
* On mobile, collapses into a hamburger menu with a slide-down effect.

### Hero Section

* Full-screen header with background image or gradient.
* Contains a headline, short description, and CTA button (“Get Consultation”).
* Use subtle animation on text (fade-in, slide-up).

### About Section

* Two-column layout: image on one side, text on the other.
* Use grid/flex for alignment and responsive stacking on smaller screens.
* Include “Our Mission” and “Why Choose Us” short cards.

### Services Section

* Display consultancy services in **cards** (grid layout).
* Each card: icon or illustration, title, short description, hover effect.
* Use consistent spacing and shadows for visual hierarchy.

### Team Section

* Cards with circular profile photos, names, roles, and optional social icons.
* 3–4 columns on desktop, 1–2 on mobile.

### Contact Section

* Clean form (Name, Email, Message) with a “Send Message” button.
* Include a Google Map embed or address info beside the form.
* Validate inputs and show simple success feedback.

---

# Interaction and Behavior

* All buttons and cards should have hover scale and shadow transitions.
* Use `Framer Motion` for section fade-ins and subtle scroll animations.
* Include smooth page transitions using React Router if multiple pages are present.
* Ensure sections have clear spacing and visual breathing room (padding/margin balance).

---

# Technical Rules

* Structure the React app with:

  * `components/` — reusable UI elements
  * `pages/` — page-level structures
  * `assets/` — images and icons
  * `App.jsx` — global layout wrapper

* Use **React functional components** and **React Hooks (useState, useEffect)** where needed.

* Keep the code **modular, clean, and commented** for readability.

---