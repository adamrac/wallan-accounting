import { motion, useReducedMotion } from 'framer-motion';

type Tone = 'light' | 'amber' | 'purple';

interface Props {
  tone?: Tone;
  /** 'full' covers the area; 'soft' is a lighter sprinkle for content sections. */
  density?: 'full' | 'soft';
}

const palette: Record<Tone, { line: string; fill: string; star: string }> = {
  light: { line: 'rgba(255,255,255,0.5)', fill: 'rgba(255,255,255,0.14)', star: 'rgba(255,255,255,0.6)' },
  amber: { line: 'rgba(245,166,35,0.55)', fill: 'rgba(245,166,35,0.2)', star: 'rgba(245,166,35,0.7)' },
  purple: { line: 'rgba(133,89,173,0.28)', fill: 'rgba(133,89,173,0.12)', star: 'rgba(133,89,173,0.4)' },
};

type Shape = {
  type: 'ring' | 'dot' | 'plus' | 'star';
  size: number;
  top: string;
  left: string;
  d: number;
};

const fullShapes: Shape[] = [
  { type: 'ring', size: 72, top: '12%', left: '6%', d: 9 },
  { type: 'dot', size: 14, top: '70%', left: '12%', d: 6 },
  { type: 'ring', size: 40, top: '78%', left: '90%', d: 7 },
  { type: 'dot', size: 10, top: '24%', left: '92%', d: 8 },
  { type: 'plus', size: 22, top: '40%', left: '50%', d: 10 },
  { type: 'star', size: 20, top: '18%', left: '78%', d: 5 },
  { type: 'star', size: 14, top: '60%', left: '40%', d: 6.5 },
  { type: 'dot', size: 8, top: '38%', left: '22%', d: 7.5 },
];

const softShapes: Shape[] = [
  { type: 'ring', size: 54, top: '14%', left: '4%', d: 9 },
  { type: 'star', size: 18, top: '72%', left: '94%', d: 5.5 },
  { type: 'plus', size: 18, top: '26%', left: '95%', d: 10 },
  { type: 'dot', size: 10, top: '82%', left: '8%', d: 7 },
];

/**
 * Floating decorative rings/dots/sparkles that sit inside a position:relative
 * parent. Purely decorative — non-interactive and reduced-motion aware.
 */
export default function DecoShapes({ tone = 'light', density = 'full' }: Props) {
  const reduce = useReducedMotion();
  const { line, fill, star } = palette[tone];
  const shapes = density === 'soft' ? softShapes : fullShapes;

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: s.top, left: s.left, width: s.size, height: s.size }}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -16, 0],
                  rotate: s.type === 'plus' || s.type === 'star' ? [0, 90, 0] : 0,
                  ...(s.type === 'star' ? { scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] } : {}),
                }
          }
          transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          {s.type === 'ring' && (
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: `2px solid ${line}` }} />
          )}
          {s.type === 'dot' && (
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: line }} />
          )}
          {s.type === 'plus' && (
            <svg viewBox="0 0 24 24" width={s.size} height={s.size} fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
          {s.type === 'star' && (
            <svg viewBox="0 0 24 24" width={s.size} height={s.size} fill={star}>
              <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
