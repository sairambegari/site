import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import CurvedLoop from "./CurvedLoop";

// ============================================
// PAYMENT INTEGRATION GUIDE
// ============================================
// To integrate a payment system (Stripe, PayPal, etc.):
// 1. Install payment provider SDK: npm install @stripe/stripe-js
// 2. Add payment handler function to handleChoosePlan()
// 3. Pass plan details (name, price, features) to checkout
// 4. Redirect to payment gateway or open payment modal
// 5. Handle success/failure callbacks
// 6. Store subscription data in your backend/database
// ============================================

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      priceId: "price_basic_monthly", // Stripe Price ID or similar
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Monthly strategy consultation",
        "Basic IT infrastructure review",
        "Email support",
        "Quarterly reports",
        "1 project per month",
      ],
      recommended: false,
    },
    {
      name: "Standard",
      price: "$2,499",
      priceId: "price_standard_monthly", // Stripe Price ID or similar
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Bi-weekly strategy consultations",
        "Comprehensive IT assessment",
        "Priority support (24/7)",
        "Monthly detailed reports",
        "3 projects per month",
        "Cloud migration assistance",
        "Security audits",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "$4,999",
      priceId: "price_premium_monthly", // Stripe Price ID or similar
      period: "/month",
      description: "For enterprise-level solutions",
      features: [
        "Unlimited consultations",
        "Full IT transformation services",
        "Dedicated account manager",
        "Real-time analytics dashboard",
        "Unlimited projects",
        "Complete cloud solutions",
        "Advanced cybersecurity",
        "Custom integrations",
      ],
      recommended: false,
    },
  ];

  // ============================================
  // PAYMENT HANDLER FUNCTION
  // ============================================
  // This function will be called when user clicks "Choose Plan"
  // Replace the scrollToContact logic with actual payment processing
  const handleChoosePlan = (plan: typeof plans[0]) => {
    // ========== EXAMPLE STRIPE INTEGRATION ==========
    // import { loadStripe } from '@stripe/stripe-js';
    // const stripe = await loadStripe('your_publishable_key');
    // 
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     priceId: plan.priceId,
    //     planName: plan.name,
    //     amount: plan.price
    //   })
    // });
    // 
    // const session = await response.json();
    // await stripe.redirectToCheckout({ sessionId: session.id });
    // ================================================

    // ========== EXAMPLE PAYPAL INTEGRATION ==========
    // import { PayPalButtons } from "@paypal/react-paypal-js";
    // Use PayPal's createOrder and onApprove callbacks
    // ================================================

    // ========== TEMPORARY: Scroll to contact form ==========
    // Remove this and replace with actual payment logic
    console.log("Selected plan:", plan);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // ========================================================
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-[16px] font-[600] mb-8 uppercase tracking-wide">
            Pricing Plans
          </h2>
          
          {/* Curved Loop Effect */}
          <div className="mb-8">
            <CurvedLoop 
              marqueeText="Choose Your Perfect Plan ✦"
              speed={2}
              curveAmount={300}
              direction="left"
              interactive={true}
            />
          </div>
          
          <p className="text-muted-foreground text-[18px] max-w-2xl mx-auto leading-relaxed">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </motion.div>

        {/* Pricing Cards - All Same Height */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 flex flex-col h-full
                ${plan.recommended
                  ? "border-primary md:scale-105"
                  : "border-border hover:border-primary/50"
                }
                hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-card hover:to-primary/5
              `}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-[12px] font-[600] uppercase tracking-wide shadow-lg">
                    Recommended
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h4 className="text-[24px] font-[700] text-foreground mb-2">
                  {plan.name}
                </h4>
                <p className="text-muted-foreground text-[14px] mb-4 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-[48px] font-[700] text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-[16px] ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List - Fixed minimum height for consistency */}
              <ul className="space-y-4 mb-8 flex-grow min-h-[320px]">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Always at bottom */}
              <div className="mt-auto">
                <Button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full py-6 rounded-lg transition-all duration-300 hover:scale-105 ${
                    plan.recommended
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
                      : "bg-secondary hover:bg-primary text-secondary-foreground hover:text-white"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-[14px]">
            All plans include a 30-day money-back guarantee. Custom enterprise solutions available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
