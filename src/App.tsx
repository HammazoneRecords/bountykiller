import { useState } from 'react';
import { Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import News from './pages/News';
import Sybkpics from './pages/Sybkpics';
import Mirgenics from './pages/Mirgenics';
import Contact from './pages/Contact';

export type Page = 'home' | 'about' | 'news' | 'sybkpics' | 'mirgenics' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="relative min-h-screen bg-olive-dark overflow-hidden">

      {/* Global blurred hero background — always present */}
      <div className="fixed inset-0 z-0">
        <img
          src="/bk-hero.png"
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ filter: 'blur(18px) saturate(0.7) brightness(0.35)', transform: 'scale(1.08)' }}
        />
        {/* Olive tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(20,28,8,0.55)' }} />
        {/* Blue smoke — top right corner */}
        <div className="absolute -top-20 right-0 w-2/3 h-3/4 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(30,60,100,0.35) 0%, transparent 65%)' }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      <Header page={page} setPage={setPage} />

      <main className="relative z-10">
        {page === 'home'     && <Hero setPage={setPage} />}
        {page === 'about'    && <About />}
        {page === 'news'     && <News />}
        {page === 'sybkpics' && <Sybkpics />}
        {page === 'mirgenics' && <Mirgenics />}
        {page === 'contact'  && <Contact />}
      </main>

      {/* Disclaimer banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-center gap-2"
        style={{ background: 'rgba(245,158,11,0.08)', borderTop: '1px solid rgba(245,158,11,0.2)' }}>
        <Info size={13} style={{ color: 'rgba(251,191,36,0.85)', flexShrink: 0 }} />
        <p className="font-body text-[10px] uppercase tracking-widest text-center" style={{ color: 'rgba(251,191,36,0.65)' }}>
          Working draft — buyer assumes responsibility for clearing image &amp; likeness rights with Bounty Killer. This site is available for{' '}
          <a href="https://mindwaveja.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} className="hover:opacity-100 transition-opacity">purchase</a>.
        </p>
      </div>
    </div>
  );
}
