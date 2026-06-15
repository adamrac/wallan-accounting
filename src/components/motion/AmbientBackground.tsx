import { motion, useReducedMotion } from 'framer-motion';

interface Blob {
  size: number;
  top: string;
  left: string;
  color: string;
  delay: number;
  duration: number;
}

const blobs: Blob[] = [
  { size: 380, top: '-8%', left: '-10%', color: 'rgba(133,89,173,0.10)', delay: 0, duration: 18 },
  { size: 320, top: '38%', left: '82%', color: 'rgba(245,166,35,0.07)', delay: 2, duration: 22 },
  { size: 280, top: '72%', left: '4%', color: 'rgba(109,63,156,0.08)', delay: 1, duration: 20 },
];

/**
 * Subtle animated, blurred colour blobs sitting behind all page content.
 * Purely decorative — fixed, non-interactive, and respects reduced-motion.
 */
export default function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            background: b.color,
            filter: 'blur(70px)',
          }}
          animate={
            reduce
              ? undefined
              : { y: [0, -36, 0], x: [0, 22, 0], scale: [1, 1.12, 1] }
          }
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
