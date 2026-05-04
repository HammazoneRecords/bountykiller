import { motion } from 'motion/react';
import type { Page } from '../App';

interface Props { setPage: (p: Page) => void; }

function WarlordBadge() {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" className="shrink-0 mx-2 md:mx-4 relative top-1">
      <circle cx="34" cy="34" r="32" fill="rgba(20,28,8,0.85)" stroke="rgba(216,208,193,0.5)" strokeWidth="1.5" />
      <circle cx="34" cy="34" r="26" fill="none" stroke="rgba(216,208,193,0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Star points */}
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
    <section className="relative min-h-screen flex flex-col justify-center pt-14 pb-12 overflow-hidden">

      {/* Hero photo — sharp, on top of global blurred bg */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bk-hero.png"
          alt="Bounty Killer"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'saturate(0.65) brightness(0.6)' }}
        />
        {/* Left text area gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(12,14,7,0.92) 0%, rgba(12,14,7,0.65) 50%, rgba(12,14,7,0.2) 100%)' }} />
        {/* Bottom gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,14,7,0.95) 0%, transparent 50%)' }} />
        {/* Blue smoke top-right */}
        <div className="absolute top-0 right-0 w-3/5 h-2/3 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 90% 10%, rgba(20,55,100,0.45) 0%, transparent 60%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

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

        {/* Name — BOUNTY [badge] KILLER */}
        <div className="overflow-hidden mb-1">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center flex-wrap gap-0"
          >
            <h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', color: '#D8D0C1', letterSpacing: '-0.01em' }}>
              BOUNTY
            </h1>
            <WarlordBadge />
            <h1 className="font-display leading-none" style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', color: '#D8D0C1', letterSpacing: '-0.01em' }}>
              KILLER
            </h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-body font-bold text-sm md:text-xl tracking-[0.2em] uppercase mb-10"
          style={{ color: 'rgba(216,208,193,0.6)' }}
        >
          The Next Millennium: The Godfather&rsquo;s Era
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="h-px origin-left mb-10"
          style={{ background: 'linear-gradient(to right, rgba(216,208,193,0.5), transparent)', width: '55%' }}
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://music.apple.com/us/artist/bounty-killer/217892"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm tracking-[0.2em] px-8 py-3 transition-all duration-200 hover:brightness-110"
            style={{ background: '#6B1A1A', color: '#D8D0C1', border: '1px solid rgba(139,26,26,0.8)' }}
          >
            LISTEN NOW
          </a>
          <button
            onClick={() => setPage('about')}
            className="font-body font-bold text-[11px] tracking-[0.25em] uppercase px-8 py-3 transition-all duration-200 hover:brightness-125 relative"
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

      {/* Footer strip */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center z-10">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase" style={{ color: 'rgba(216,208,193,0.25)' }}>
          /// The Next Millennium / The Warlord ///
        </p>
      </div>
    </section>
  );
}
