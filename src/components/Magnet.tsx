import React, { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = Math.abs(clientX - centerX);
    const distanceY = Math.abs(clientY - centerY);

    if (distanceX < (width / 2 + padding) && distanceY < (height / 2 + padding)) {
      setIsActive(true);
      x.set((clientX - centerX) / strength);
      y.set((clientY - centerY) / strength);
    } else {
      setIsActive(false);
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        willChange: 'transform',
        transition: isActive ? activeTransition : inactiveTransition
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
