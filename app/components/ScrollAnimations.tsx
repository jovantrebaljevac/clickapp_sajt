'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('aos-visible'); });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-aos], .card').forEach(el => observer.observe(el));

    function animateCounter(el: Element) {
      const target = parseInt((el as HTMLElement).dataset.target || '0');
      const duration = 1800;
      const start = performance.now();
      function step(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      }
      requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-num').forEach(animateCounter);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) counterObserver.observe(heroStats);

    return () => { observer.disconnect(); counterObserver.disconnect(); };
  }, []);

  return null;
}
