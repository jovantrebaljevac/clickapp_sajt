'use client';

import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xeepkeny';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Ime i prezime</label>
          <input type="text" name="from_name" placeholder="Vaše ime" required />
        </div>
        <div className="form-group">
          <label>Email adresa</label>
          <input type="email" name="from_email" placeholder="vas@email.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>Usluga koja vas zanima</label>
        <select name="service">
          <option value="">Izaberite uslugu...</option>
          <option value="Web sajt">Web sajt</option>
          <option value="Mobilna aplikacija">Mobilna aplikacija</option>
          <option value="Društvene mreže">Društvene mreže</option>
          <option value="Komplet paket">Komplet paket</option>
        </select>
      </div>
      <div className="form-group">
        <label>Vaša poruka</label>
        <textarea name="message" rows={5} placeholder="Opišite vaš projekat, ideju ili pitanje..." required />
      </div>
      <button type="submit" className="btn btn-primary btn-full" disabled={status === 'loading'}>
        {status === 'loading' ? '⏳ Slanje...' : 'Pošalji poruku'}
      </button>
      {status === 'success' && <div className="form-success">✅ Poruka uspešno poslata! Javljamo se uskoro.</div>}
      {status === 'error' && <div className="form-error">❌ Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.</div>}
    </form>
  );
}
