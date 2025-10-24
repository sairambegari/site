import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Main cursor with snappy movement
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Trailing cursor with slower, smoother movement
  const trailSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const trailXSpring = useSpring(cursorX, trailSpringConfig);
  const trailYSpring = useSpring(cursorY, trailSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";
      
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer glow trail - slowest */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.8 : isClicking ? 0.8 : 1.2,
            opacity: isHovering ? 0.15 : 0.08,
          }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3b82f6]"
          style={{
            transform: "translate(-50%, -50%)",
            filter: "blur(12px)",
          }}
        />
      </motion.div>

      {/* Middle trail circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : isClicking ? 0.7 : 1,
            opacity: isHovering ? 0.3 : 0.2,
          }}
          transition={{ duration: 0.25 }}
          className="w-8 h-8 rounded-full border-2 border-[#2563EB]"
          style={{
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
          }}
        />
      </motion.div>

      {/* Main cursor arrow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.85 : 1,
            rotate: isHovering ? -5 : 0,
          }}
          transition={{ 
            duration: 0.15,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="relative"
          style={{
            transform: "translate(-2px, -2px)",
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))",
          }}
        >
          {/* Enhanced Arrow Cursor */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer glow */}
            <path
              d="M5 3L5 17L9 13L12 19L14 18L11 12L17 12L5 3Z"
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeOpacity="0.3"
              filter="blur(2px)"
            />
            
            {/* Shadow/Border */}
            <path
              d="M5.5 3.5L5.5 17.5L9.5 13.5L12.5 19.5L14.5 18.5L11.5 12.5L17.5 12.5L5.5 3.5Z"
              fill="#000000"
              fillOpacity="0.25"
              transform="translate(0.8, 0.8)"
            />
            
            {/* Main Arrow with gradient effect */}
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f0f4ff" />
              </linearGradient>
            </defs>
            
            <path
              d="M5 3L5 17L9 13L12 19L14 18L11 12L17 12L5 3Z"
              fill="url(#arrowGradient)"
              stroke="#1E3A8A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            
            {/* Colored tip accent with animation */}
            <motion.path
              animate={{
                opacity: isHovering ? 1 : 0.85,
              }}
              d="M5 3L5 11L9.5 6.5L5 3Z"
              fill="#2563EB"
            />
            
            {/* Inner highlight */}
            <path
              d="M6 4.5L6 9L8 7L6 4.5Z"
              fill="#ffffff"
              fillOpacity="0.5"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
