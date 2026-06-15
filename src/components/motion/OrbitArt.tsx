import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated "hub" illustration: a central trust badge with finance chips
 * slowly orbiting around it, plus a soft pulsing halo. Decorative only.
 */
export default function OrbitArt() {
  const reduce = useReducedMotion();

  const chips = [
    { label: 'Xero', angle: -90, color: '#13b5ea' },
    { label: 'MYOB', angle: -18, color: '#6d3f9c' },
    { label: 'BAS', angle: 54, color: '#f5a623' },
    { label: 'Tax', angle: 126, color: '#2e7d4f' },
    { label: 'GST', angle: 198, color: '#e8538a' },
  ];
  const radius = 120;

  return (
    <div
      aria-hidden="true"
      style={{ position: 'relative', width: '100%', maxWidth: 320, aspectRatio: '1 / 1', margin: '0 auto' }}
    >
      {/* Pulsing halo */}
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: '14%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 40%, rgba(133,89,173,0.30), rgba(133,89,173,0) 70%)',
        }}
      />

      {/* Dashed orbit ring */}
      <motion.div
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: '8%',
          borderRadius: '50%',
          border: '2px dashed rgba(133,89,173,0.35)',
        }}
      />

      {/* Rotating layer holding the chips (counter-rotates each chip to stay upright) */}
      <motion.div
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {chips.map((chip) => {
          const rad = (chip.angle * Math.PI) / 180;
          const x = 50 + (radius / 320) * 100 * Math.cos(rad);
          const y = 50 + (radius / 320) * 100 * Math.sin(rad);
          return (
            <motion.div
              key={chip.label}
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              transformTemplate={(t) => `translate(-50%, -50%) rotate(${t.rotate ?? '0deg'})`}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                background: '#fff',
                color: chip.color,
                fontWeight: 800,
                fontSize: 13,
                padding: '7px 13px',
                borderRadius: 999,
                boxShadow: '0 10px 24px rgba(40,20,70,0.16)',
                whiteSpace: 'nowrap',
              }}
            >
              {chip.label}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Central trust badge (solid by default so it never depends on JS) */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '42%',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          background: 'linear-gradient(140deg,#6d3f9c,#3a1f59)',
          display: 'grid',
          placeItems: 'center',
          color: '#fff',
          boxShadow: '0 22px 50px rgba(58,31,89,0.45)',
        }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ textAlign: 'center', lineHeight: 1.1 }}
        >
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#ffd778" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4v6c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4, letterSpacing: 0.3 }}>Local &amp; trusted</div>
        </motion.div>
      </div>
    </div>
  );
}
