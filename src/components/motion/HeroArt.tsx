import { motion, useReducedMotion } from 'framer-motion';

const float = (d: number, delay = 0) => ({
  animate: { y: [0, -14, 0] },
  transition: { duration: d, delay, repeat: Infinity, ease: 'easeInOut' as const },
});

/**
 * Animated, finance-themed hero illustration: a stat card, an animated bar
 * chart, a growth line and floating "coins". Decorative only.
 */
export default function HeroArt() {
  const reduce = useReducedMotion();
  const bars = [38, 56, 44, 72, 60, 88];

  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', width: '100%', minHeight: 340, color: '#3a1f59' }}
    >
      {/* Main chart card */}
      <motion.div
        {...(reduce ? {} : float(6))}
        style={{
          position: 'absolute',
          right: '4%',
          top: 20,
          width: 280,
          background: '#fff',
          borderRadius: 18,
          padding: 22,
          boxShadow: '0 24px 60px rgba(40,20,70,0.30)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <strong style={{ fontSize: 14, color: '#221a2e' }}>Business growth</strong>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#2e7d4f' }}>▲ 24%</span>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: 10, height: 110 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1,
                borderRadius: 6,
                background: i === bars.length - 1
                  ? 'linear-gradient(180deg,#f5a623,#e8920a)'
                  : 'linear-gradient(180deg,#8559ad,#6d3f9c)',
              }}
            />
          ))}
          {/* Animated trend line drawn across the bars */}
          <svg
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
          >
            <motion.polyline
              points="6,44 23,30 40,36 57,16 74,24 91,4"
              fill="none"
              stroke="#2e7d4f"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.1, ease: 'easeInOut' }}
            />
            <motion.circle
              cx={91}
              cy={4}
              r={3.5}
              fill="#2e7d4f"
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2.1 }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Refund card */}
      <motion.div
        {...(reduce ? {} : float(5, 0.6))}
        style={{
          position: 'absolute',
          left: '2%',
          top: 140,
          width: 230,
          background: '#fff',
          borderRadius: 16,
          padding: 18,
          boxShadow: '0 20px 50px rgba(40,20,70,0.28)',
        }}
      >
        <div style={{ fontSize: 12, color: '#6f6678', fontWeight: 600 }}>Estimated tax refund</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: '#6d3f9c', lineHeight: 1.2 }}>$3,480</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{
            width: 22, height: 22, borderRadius: '50%', background: '#e7f5ec',
            display: 'grid', placeItems: 'center', color: '#2e7d4f', fontWeight: 800, fontSize: 13,
          }}>✓</span>
          <span style={{ fontSize: 12, color: '#463c52' }}>Lodged with the ATO</span>
        </div>
      </motion.div>

      {/* Floating coin */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          right: '8%',
          top: 200,
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#ffce5c,#f5a623)',
          display: 'grid',
          placeItems: 'center',
          fontSize: 30,
          fontWeight: 800,
          color: '#7a4f00',
          boxShadow: '0 14px 30px rgba(245,166,35,0.45)',
        }}
      >
        $
      </motion.div>

      {/* Service badge — solid pill so it stays readable over any background */}
      <motion.div
        animate={reduce ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 6, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '4%',
          top: 30,
          background: 'linear-gradient(135deg,#5a3691,#3a1f59)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: '#fff',
          borderRadius: 999,
          padding: '9px 16px',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 0.3,
          boxShadow: '0 12px 30px rgba(30,15,55,0.45)',
        }}
      >
        BAS · GST · Payroll
      </motion.div>

      {/* On-time lodgement pill */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 5.5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '8%',
          top: 290,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#fff',
          borderRadius: 999,
          padding: '8px 14px',
          fontSize: 12.5,
          fontWeight: 700,
          color: '#221a2e',
          boxShadow: '0 14px 30px rgba(40,20,70,0.22)',
        }}
      >
        <span style={{
          width: 18, height: 18, borderRadius: '50%', background: '#e7f5ec',
          display: 'grid', placeItems: 'center', color: '#2e7d4f', fontSize: 11, fontWeight: 800,
        }}>✓</span>
        On-time, every time
      </motion.div>

      {/* Decorative sparkles */}
      {[
        { top: 6, left: '42%', s: 16, d: 3.6, delay: 0 },
        { top: 250, left: '60%', s: 12, d: 4.2, delay: 0.8 },
        { top: 120, left: '94%', s: 10, d: 3.2, delay: 1.4 },
      ].map((sp, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          width={sp.s}
          height={sp.s}
          style={{ position: 'absolute', top: sp.top, left: sp.left, color: '#ffd778' }}
          animate={reduce ? undefined : { scale: [0.7, 1, 0.7], opacity: [0.4, 1, 0.4], rotate: [0, 90, 0] }}
          transition={{ duration: sp.d, delay: sp.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8z"
            fill="currentColor"
          />
        </motion.svg>
      ))}
    </motion.div>
  );
}
