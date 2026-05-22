import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function AnimatedText({
  text,
  className = ""
}: {
  text: string;
  className?: string;
}) {
  const element = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={element} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
            <motion.span 
              style={{ opacity }} 
              className="absolute left-0 top-0"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
