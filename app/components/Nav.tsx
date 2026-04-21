'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav')!;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav">
      <Link href="/" className="logo">Click<span>APP</span></Link>
      <ul className="nav-links">
        <li><a href="/#usluge">Usluge</a></li>
        <li><Link href="/radovi">Radovi</Link></li>
        <li><a href="/#o-nama">O nama</a></li>
        <li><a href="/#kontakt">Kontakt</a></li>
      </ul>
      <a href="/#kontakt" className="nav-cta">Kontaktiraj nas</a>
    </nav>
  );
}
