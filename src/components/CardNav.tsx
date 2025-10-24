import { motion } from "motion/react";
import { useState } from "react";

interface NavItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface CardNavProps {
  items: NavItem[];
}

export function CardNav({ items }: CardNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="relative block group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative h-full w-full p-6 bg-card border border-border rounded-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{
                opacity: hoveredIndex === idx ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={false}
              animate={{
                boxShadow:
                  hoveredIndex === idx
                    ? "0 0 20px rgba(30, 58, 138, 0.3)"
                    : "0 0 0px rgba(30, 58, 138, 0)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="mb-4 text-primary"
                animate={{
                  scale: hoveredIndex === idx ? 1.1 : 1,
                  rotate: hoveredIndex === idx ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-[18px] font-[600] text-foreground mb-2 transition-colors group-hover:text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-primary text-[14px] font-[500]"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: hoveredIndex === idx ? 5 : 0,
                  opacity: hoveredIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span>Explore</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredIndex === idx ? 1 : 0,
                opacity: hoveredIndex === idx ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </a>
      ))}
    </div>
  );
}
