import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../App';

interface Props {
  page: Page;
  setPage: (p: Page) => void;
}

const NAV: { label: string; id: Page }[] = [
  { label: 'HOME',     id: 'home' },
  { label: 'ABOUT',    id: 'about' },
  { label: 'NEWS',     id: 'news' },
  { label: 'SYBKPICS', id: 'sybkpics' },
  { label: 'MIRGENICS', id: 'mirgenics' },
  { label: 'CONTACT',  id: 'contact' },
];

export default function Header({ page, setPage }: Props) {
  const [open, setOpen] = useState(false);

  const go = (p: Page) => { setPage(p); setOpen(false); };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-14"
        style={{ background: 'rgba(12,14,7,0.75)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(216,208,193,0.08)' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex items-center justify-between">

          {/* Wordmark */}
          <button onClick={() => go('home')} className="font-display text-sm tracking-[0.25em]" style={{ color: '#D8D0C1' }}>
            BOUNTY KILLER
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="font-body font-bold text-[11px] tracking-[0.2em] transition-colors duration-200"
                style={{ color: page === n.id ? '#D8D0C1' : 'rgba(216,208,193,0.45)' }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden" style={{ color: '#D8D0C1' }}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile slide menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col p-8"
          style={{ background: 'rgba(12,14,7,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="flex justify-between items-center mb-16">
            <span className="font-display text-sm tracking-[0.25em]" style={{ color: '#D8D0C1' }}>BOUNTY KILLER</span>
            <button onClick={() => setOpen(false)} style={{ color: '#D8D0C1' }}><X size={22} /></button>
          </div>
          <nav className="flex flex-col gap-8">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)}
                className="font-display text-4xl text-left tracking-widest transition-colors"
                style={{ color: page === n.id ? '#D8D0C1' : 'rgba(216,208,193,0.35)' }}>
                {n.label}
              </button>
            ))}
          </nav>
          <p className="mt-auto font-body text-[10px] tracking-[0.3em]" style={{ color: 'rgba(216,208,193,0.3)' }}>
            /// THE NEXT MILLENNIUM / THE WARLORD ///
          </p>
        </div>
      )}
    </>
  );
}
