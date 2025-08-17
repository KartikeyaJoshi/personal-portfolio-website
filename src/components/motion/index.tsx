'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MotionDivProps {
  children: React.ReactNode;
  variant: 'hero' | 'skills' | 'experience' | 'projects' | 'achievements' | 'contact';
}

export function MotionDiv({ children, variant }: MotionDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hero: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    skills: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' } },
    },
    experience: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    projects: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    achievements: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    },
    contact: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
