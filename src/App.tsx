import { useState } from 'react';
import Preload from './components/Preload';
import Header from './components/Header';
import WorkingDraftBanner from './components/WorkingDraftBanner';
import Hero from './pages/Hero';
import About from './pages/About';
import Merch from './pages/Merch';
import Gallery from './pages/Gallery';
import Mirgenics from './pages/Mirgenics';
import Contact from './pages/Contact';

export type Page = 'home' | 'about' | 'merch' | 'gallery' | 'mirgenics' | 'contact';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [preloadDone, setPreloadDone] = useState(false);
  const navigate = (p: Page) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <div className="relative min-h-screen bg-olive-dark">
      {!preloadDone && <Preload onComplete={() => setPreloadDone(true)} />}

      {/* Global blurred hero background — always present */}
      <div className="fixed inset-0 z-0">
        <img
          src="/bk-hero.webp"
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ filter: 'blur(18px) saturate(0.7) brightness(0.35)', transform: 'scale(1.0)' }}
        />
        {/* Olive tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(20,28,8,0.55)' }} />
        {/* Blue smoke — top right corner */}
        <div className="absolute -top-20 right-0 w-2/3 h-3/4 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(30,60,100,0.35) 0%, transparent 65%)' }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
      </div>

      <Header page={page} setPage={navigate} />

      <main className="relative z-10">
        {page === 'home'     && <Hero setPage={navigate} />}
        {page === 'about'    && <About />}
        {page === 'merch'    && <Merch />}
        {page === 'gallery'  && <Gallery />}
        {page === 'mirgenics' && <Mirgenics />}
        {page === 'contact'  && <Contact />}
      </main>

      <WorkingDraftBanner artist="Bounty Killer" />
    </div>
  );
}
