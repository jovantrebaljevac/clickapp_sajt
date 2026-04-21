'use client';

import { useState } from 'react';
import Link from 'next/link';
import Particles from '../components/Particles';

const projects = [
  {
    num: '01',
    name: 'Agencija Putić',
    desc: 'Profesionalni sajt za agenciju osiguranja — sve vrste osiguranja na jednom mestu, pregledan dizajn i jednostavan kontakt.',
    tags: ['Web dizajn', 'Osiguranje'],
    href: 'https://agencijaputic.rs',
    category: 'web',
  },
  {
    num: '02',
    name: 'StudioFlow',
    desc: 'Softver za frizerske salone, berbernice, spa centre i noktarnice — zakazivanje, klijenti i finansije na jednom mestu.',
    tags: ['Web app', 'SaaS', 'Beauty'],
    href: 'https://studioflow.rs',
    category: 'web',
  },
  {
    num: '03',
    name: 'Midnight Pour',
    desc: 'Luksuzni brending sajt za irski viski — tamna atmosfera, premium dizajn i priča koja poziva na opuštanje.',
    tags: ['Web dizajn', 'Brending', 'Lifestyle'],
    href: 'https://midnight-pour.vercel.app',
    category: 'web',
  },
  {
    num: '04',
    name: 'Apex Inžinjering',
    desc: 'Korporativni sajt za građevinsku kompaniju — prezentacija projekata, usluga i tima u modernom i profesionalnom dizajnu.',
    tags: ['Web dizajn', 'Građevina', 'Korporativni'],
    href: 'https://apex-inzinjering.vercel.app',
    category: 'web',
  },
];

type Filter = 'sve' | 'web' | 'app' | 'social';

export default function RadoviPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('sve');
  const [popup, setPopup] = useState<{ url: string; x: number; y: number } | null>(null);

  const filtered = projects.filter(p => activeFilter === 'sve' || p.category === activeFilter);

  function handleMouseEnter(e: React.MouseEvent, url: string) {
    setPopup({ url, x: e.clientX, y: e.clientY });
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!popup) return;
    const pw = 360, ph = 230, margin = 20;
    let x = e.clientX + margin;
    let y = e.clientY - ph / 2;
    if (x + pw > window.innerWidth - margin) x = e.clientX - pw - margin;
    if (y < margin) y = margin;
    if (y + ph > window.innerHeight - margin) y = window.innerHeight - ph - margin;
    setPopup(p => p ? { ...p, x, y } : null);
  }

  function handleMouseLeave() {
    setPopup(null);
  }

  return (
    <>
      <Particles />

      <nav id="nav">
        <Link href="/" className="logo">Click<span>APP</span></Link>
        <ul className="nav-links">
          <li><a href="/#usluge">Usluge</a></li>
          <li><Link href="/radovi" style={{ color: '#fff' }}>Radovi</Link></li>
          <li><a href="/#o-nama">O nama</a></li>
          <li><a href="/#kontakt">Kontakt</a></li>
        </ul>
        <a href="/#kontakt" className="nav-cta">Kontaktiraj nas</a>
      </nav>

      <div className="porto-hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="porto-hero-top">
          <div>
            <div className="section-label" style={{ marginBottom: '1.2rem' }}>Portfolio</div>
            <h1>Naši<br /><span>radovi</span></h1>
          </div>
          <div className="porto-hero-right">
            <p>Projekti koje smo realizovali — web sajtovi, aplikacije i vođenje društvenih mreža.</p>
            <div className="filters">
              {(['sve', 'web', 'app', 'social'] as Filter[]).map(f => (
                <button
                  key={f}
                  className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="projects" onMouseMove={handleMouseMove}>
        {filtered.map((p, i) => (
          <a
            key={p.href}
            className="project-row"
            data-category={p.category}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="proj-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="proj-main">
              <span
                className="proj-name"
                onMouseEnter={e => handleMouseEnter(e, p.href)}
                onMouseLeave={handleMouseLeave}
              >
                {p.name}
              </span>
              <span className="proj-desc">{p.desc}</span>
            </div>
            <div className="proj-tags">
              {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
            </div>
            <span className="proj-arrow">↗</span>
          </a>
        ))}
      </div>

      {popup && (
        <div
          className="preview-popup visible"
          style={{ left: popup.x, top: popup.y }}
        >
          <div className="preview-topbar">
            <div className="preview-dots">
              <span className="preview-dot r" />
              <span className="preview-dot y" />
              <span className="preview-dot g" />
            </div>
            <div className="preview-url">{popup.url.replace('https://', '')}</div>
          </div>
          <div className="preview-frame-wrap">
            <iframe src={popup.url} title="Preview" />
          </div>
        </div>
      )}

      <footer>
        <div className="footer-inner">
          <div className="logo">Click<span>APP</span></div>
          <p>Gradimo digitalne svetove koji impresioniraju.</p>
          <p className="copy">&copy; 2026 ClickAPP. Sva prava zadržana.</p>
        </div>
      </footer>
    </>
  );
}
