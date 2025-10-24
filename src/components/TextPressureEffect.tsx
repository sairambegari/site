import { useRef, useState } from "react";
import { motion } from "motion/react";

interface TextPressureEffectProps {
  text: string;
  className?: string;
}

export function TextPressureEffect({ text, className = "" }: TextPressureEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const letters = text.split("");

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
      style={{ cursor: "default" }}
    >
      {letters.map((letter, index) => {
        const letterRef = useRef<HTMLSpanElement>(null);
        
        // Calculate distance from mouse to each letter
        const getLetterPosition = () => {
          if (!containerRef.current || !letterRef.current) return { x: 0, y: 0 };
          
          const containerRect = containerRef.current.getBoundingClientRect();
          const letterRect = letterRef.current.getBoundingClientRect();
          
          const letterCenterX = letterRect.left - containerRect.left + letterRect.width / 2;
          const letterCenterY = letterRect.top - containerRect.top + letterRect.height / 2;
          
          const distanceX = mousePosition.x - letterCenterX;
          const distanceY = mousePosition.y - letterCenterY;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          // Maximum influence radius
          const maxDistance = 100;
          
          if (distance > maxDistance || mousePosition.x === 0) {
            return { scale: 1, x: 0, y: 0 };
          }
          
          // Calculate pressure effect - letters get "squeezed" when close to mouse
          const influence = 1 - distance / maxDistance;
          const pushStrength = influence * 15; // How far letters move away
          const scaleAmount = 1 - influence * 0.3; // How much letters shrink (squeeze effect)
          
          const angle = Math.atan2(distanceY, distanceX);
          const pushX = -Math.cos(angle) * pushStrength;
          const pushY = -Math.sin(angle) * pushStrength;
          
          return {
            scale: scaleAmount,
            x: pushX,
            y: pushY,
          };
        };

        const position = getLetterPosition();

        return (
          <motion.span
            key={index}
            ref={letterRef as any}
            animate={{
              scale: position.scale,
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{
              display: "inline-block",
              whiteSpace: letter === " " ? "pre" : "normal",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </div>
  );
}
