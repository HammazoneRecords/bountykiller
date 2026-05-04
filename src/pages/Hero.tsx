import { motion } from 'motion/react';
import type { Page } from '../App';

const SMOKE_PUFFS = [
  { left: '5%',  delay: 0,   dur: 9,  drift: '-20px', size: 160 },
  { left: '18%', delay: 2.5, dur: 11, drift: '35px',  size: 200 },
  { left: '32%', delay: 1,   dur: 10, drift: '-40px', size: 180 },
  { left: '47%', delay: 3.5, dur: 12, drift: '25px',  size: 220 },
  { left: '62%', delay: 0.8, dur: 9,  drift: '-30px', size: 170 },
  { left: '76%', delay: 2,   dur: 11, drift: '45px',  size: 190 },
  { left: '90%', delay: 1.5, dur: 10, drift: '-15px', size: 160 },
];

function SmokeEffect() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none z-20 overflow-hidden">
      {SMOKE_PUFFS.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: -20,
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,195,210,0.45) 0%, rgba(150,170,190,0.2) 40%, transparent 70%)',
          filter: 'blur(28px)',
          animation: `smoke-rise ${p.dur}s ${p.delay}s infinite ease-out`,
          '--drift': p.drift,
        } as React.CSSProperties} />
      ))}
    </div>
  );
}

interface Props { setPage: (p: Page) => void; }

function WarlordBadge() {
  return (
    <svg width="72" height="72" viewBox="0 0 68 68" className="shrink-0">
      <circle cx="34" cy="34" r="32" fill="rgba(20,28,8,0.85)" stroke="rgba(216,208,193,0.5)" strokeWidth="1.5" />
      <circle cx="34" cy="34" r="26" fill="none" stroke="rgba(216,208,193,0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
      {[0,72,144,216,288].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const x1 = 34 + 20 * Math.cos(rad);
        const y1 = 34 + 20 * Math.sin(rad);
        return <line key={i} x1="34" y1="34" x2={x1} y2={y1} stroke="rgba(216,208,193,0.4)" strokeWidth="0.8" />;
      })}
      <circle cx="34" cy="34" r="12" fill="rgba(30,40,12,0.9)" stroke="rgba(216,208,193,0.6)" strokeWidth="1" />
      <text x="34" y="31" textAnchor="middle" fontFamily="Anton, Impact, sans-serif" fontSize="5.5" fill="#D8D0C1" letterSpacing="0.08em">THE</text>
      <text x="34" y="38.5" textAnchor="middle" fontFamily="Anton, Impact, sans-serif" fontSize="6.5" fill="#D8D0C1" letterSpacing="0.05em">WARLORD</text>
    </svg>
  );
}

export default function Hero({ setPage }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-14 overflow-hidden">

      {/* Hero photo — object-contain to show full image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bk-hero.png"
          alt="Bounty Killer"
          className="w-full h-full object-contain object-top"
          style={{ filter: 'saturate(0.9) brightness(0.95)', transform: 'scale(0.92)', transformOrigin: 'top center' }}
        />
        {/* Bottom-heavy dark fade so text reads over image */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,14,7,0.97) 0%, rgba(12,14,7,0.65) 35%, rgba(12,14,7,0.1) 70%, transparent 100%)' }} />
        {/* Blue atmospheric tint */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 25%, rgba(15,45,90,0.35) 0%, transparent 60%)' }} />
      </div>

      {/* Smoke machine effect */}
      <SmokeEffect />

      {/* Content — centered */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-body font-bold text-[11px] tracking-[0.5em] mb-5 uppercase"
          style={{ color: 'rgba(216,208,193,0.55)' }}
        >
          &#9632; The General&rsquo;s Command
        </motion.p>

        {/* Name — BOUNTY mirrored (YTNUOB) + KILLER normal → B and K meet at center, badge overlays the junction */}
        <div className="mb-2">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex items-center justify-center gap-0"
          >
            {/* BOUNTY mirrored — B lands on the right edge */}
            <h1
              className="font-metal leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 8.5rem)',
                color: '#D8D0C1',
                letterSpacing: '0.02em',
                transform: 'scaleX(-1)',
                display: 'inline-block',
              }}
            >
              BOUNTY
            </h1>
            {/* Zero-width anchor exactly at the B·K boundary — badge positions relative to this */}
            <div style={{ position: 'relative', width: 0, height: 0, overflow: 'visible', flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, opacity: 0.5 }}>
                <WarlordBadge />
              </div>
            </div>
            {/* KILLER normal — K lands on the left edge, adjacent to B */}
            <h1
              className="font-metal leading-none"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 8.5rem)',
                color: '#D8D0C1',
                letterSpacing: '0.02em',
                display: 'inline-block',
              }}
            >
              KILLER
            </h1>
          </motion.div>
        </div>

        {/* Subtitle — THE GODFATHER only */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-body font-bold text-sm md:text-xl tracking-[0.3em] uppercase mb-10"
          style={{ color: 'rgba(216,208,193,0.6)' }}
        >
          The Godfather
        </motion.p>

        {/* CTAs — centered, LISTEN NOW prominent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="https://www.youtube.com/@BountyKillerVEVO"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-base md:text-lg tracking-[0.25em] px-14 py-4 transition-all duration-200 hover:brightness-110"
            style={{ background: '#6B1A1A', color: '#D8D0C1', border: '1px solid rgba(139,26,26,0.8)' }}
          >
            LISTEN NOW
          </a>
          <button
            onClick={() => setPage('about')}
            className="font-body font-bold text-[11px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-200 hover:brightness-125"
            style={{
              background: 'rgba(20,40,12,0.7)',
              border: '1px solid rgba(63,175,63,0.5)',
              color: '#3FAF3F',
              boxShadow: '0 0 10px rgba(63,175,63,0.15), inset 0 0 10px rgba(63,175,63,0.05)',
            }}
          >
            <span className="mr-2 text-[8px] opacity-60">&#9632;&#9632;</span>
            Story of the Warlord
            <span className="ml-2 text-[8px] opacity-60">&#9632;&#9632;</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
