import { useEffect, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  sequential?: boolean;
}

export function DecryptedText({
  text,
  className = "",
  speed = 50,
  sequential = false,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  useEffect(() => {
    if (!isDecrypting) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            if (sequential) {
              // Sequential reveal
              if (index < iteration) {
                return text[index];
              }
            } else {
              // Random reveal based on iteration
              if (iteration > index) {
                return text[index];
              }
            }

            // Random character while not revealed
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsDecrypting(false);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, sequential, isDecrypting]);

  const handleMouseEnter = () => {
    setIsDecrypting(true);
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: "default" }}
    >
      {displayText || text}
    </span>
  );
}
