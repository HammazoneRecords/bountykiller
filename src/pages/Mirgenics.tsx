import { motion } from 'motion/react';

const RELEASES = [
  { title: 'Anytime', feat: 'Bounty Killer', year: '2024', type: 'SINGLE' },
  { title: 'Copper Shot', feat: 'Bounty Killer', year: '2023', type: 'SINGLE' },
  { title: 'Next Millennium', feat: 'Bounty Killer', year: '2022', type: 'ALBUM' },
  { title: 'Down In The Ghetto', feat: 'Bounty Killer', year: '2020', type: 'SINGLE' },
];

export default function Mirgenics() {
  return (
    <section className="relative h-screen flex items-center pt-14">
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Music · Label</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: '#D8D0C1' }}>MUSIC</h2>
          <p className="font-body text-sm mt-1 mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>Bounty Killer&rsquo;s independent label and creative command centre</p>
          <div className="h-px w-12" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Releases */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <p className="font-body font-bold text-[10px] tracking-widest uppercase mb-4" style={{ color: 'rgba(216,208,193,0.35)' }}>Select Discography</p>
            <div className="space-y-0">
              {RELEASES.map((r, i) => (
                <div key={i} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid rgba(216,208,193,0.07)' }}>
                  <span className="font-body text-[9px] tracking-widest shrink-0" style={{ color: 'rgba(216,208,193,0.3)' }}>{r.year}</span>
                  <span className="font-body font-bold text-[9px] tracking-widest px-2 py-0.5 shrink-0"
                    style={{ border: '1px solid rgba(107,26,26,0.5)', color: 'rgba(200,100,100,0.7)', background: 'rgba(107,26,26,0.1)' }}>
                    {r.type}
                  </span>
                  <span className="font-body font-bold text-sm" style={{ color: '#D8D0C1' }}>{r.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stream links */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col justify-center gap-4">
            <p className="font-body font-bold text-[10px] tracking-widest uppercase mb-2" style={{ color: 'rgba(216,208,193,0.35)' }}>Stream The Catalog</p>
            {[
              { name: 'Spotify', href: 'https://open.spotify.com/artist/7bBiNqwbpPBqmnnYM7nMOB' },
              { name: 'Apple Music', href: 'https://music.apple.com/us/artist/bounty-killer/217892' },
              { name: 'YouTube Music', href: 'https://www.youtube.com/@BountyKillerVEVO' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-display text-sm tracking-[0.2em] px-6 py-3 transition-all duration-200 hover:brightness-110 text-center"
                style={{ background: 'rgba(42,52,57,0.7)', border: '1px solid rgba(216,208,193,0.15)', color: '#D8D0C1' }}>
                {s.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
