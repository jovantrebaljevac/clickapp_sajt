'use client';

import { useEffect } from 'react';

const codeLines = [
  { html: '<span class="kw">import</span> <span class="obj">ClickApp</span> <span class="kw">from</span> <span class="str">"./agency"</span>' },
  { html: '' },
  { html: '<span class="kw">const</span> <span class="obj">project</span> <span class="op">=</span> {' },
  { html: '  client<span class="op">:</span> <span class="str">"YourBusiness"</span><span class="op">,</span>' },
  { html: '  type<span class="op">:</span> <span class="str">"web-app"</span><span class="op">,</span>' },
  { html: '  design<span class="op">:</span> <span class="str">"premium"</span><span class="op">,</span>' },
  { html: '  status<span class="op">:</span> <span class="str">"building 🚀"</span>' },
  { html: '}' },
  { html: '' },
  { html: '<span class="kw">async function</span> <span class="fn">launch</span><span class="op">(</span>project<span class="op">) {</span>' },
  { html: '  <span class="kw">const</span> design <span class="op">=</span> <span class="kw">await</span> <span class="fn">create</span><span class="op">()</span>' },
  { html: '  <span class="kw">const</span> code <span class="op">=</span> <span class="kw">await</span> <span class="fn">develop</span><span class="op">()</span>' },
  { html: '  <span class="kw">return</span> <span class="fn">deploy</span><span class="op">(</span>design, code<span class="op">)</span>' },
  { html: '}' },
  { html: '' },
  { html: '<span class="cm">// 🎉 Result: SUCCESS</span>' },
  { html: '<span class="fn">launch</span><span class="op">(</span>project<span class="op">)</span>' },
];

function getPlainText(html: string) {
  if (typeof document === 'undefined') return html;
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || '';
}

export default function LaptopAnimation() {
  useEffect(() => {
    const codeContent = document.getElementById('codeContent')!;
    const lineNums = document.getElementById('lineNums')!;
    if (!codeContent || !lineNums) return;

    let lineIndex = 0, charIndex = 0, currentLineNum = 1;
    let currentLineEl: HTMLElement | null = null;
    let timer: ReturnType<typeof setTimeout>;

    function typeNextChar() {
      if (lineIndex >= codeLines.length) {
        timer = setTimeout(restartAnimation, 2800);
        return;
      }
      const line = codeLines[lineIndex];
      const plain = getPlainText(line.html);

      if (charIndex === 0) {
        currentLineEl = document.createElement('div');
        currentLineEl.className = 'code-line';
        codeContent.appendChild(currentLineEl);
        const numEl = document.createElement('div');
        numEl.textContent = String(currentLineNum++);
        lineNums.appendChild(numEl);
      }

      if (line.html === '') {
        lineIndex++; charIndex = 0;
        timer = setTimeout(typeNextChar, 60);
        return;
      }

      charIndex++;
      let rendered = '', charCount = 0, inTag = false, tagBuffer = '';
      for (let i = 0; i < line.html.length; i++) {
        const ch = line.html[i];
        if (ch === '<') { inTag = true; tagBuffer = '<'; continue; }
        if (inTag) {
          tagBuffer += ch;
          if (ch === '>') { inTag = false; rendered += tagBuffer; tagBuffer = ''; }
          continue;
        }
        if (charCount < charIndex) { rendered += ch; charCount++; } else break;
      }

      currentLineEl!.innerHTML = rendered + (charIndex < plain.length ? '<span class="cursor"></span>' : '');

      if (charIndex >= plain.length) {
        currentLineEl!.innerHTML = line.html;
        lineIndex++; charIndex = 0;
        timer = setTimeout(typeNextChar, 120);
      } else {
        const delay = plain[charIndex - 1] === ' ' ? 30 : Math.random() * 40 + 25;
        timer = setTimeout(typeNextChar, delay);
      }

      codeContent.scrollTop = codeContent.scrollHeight;
      lineNums.scrollTop = lineNums.scrollHeight;
    }

    function restartAnimation() {
      codeContent.innerHTML = '';
      lineNums.innerHTML = '';
      lineIndex = 0; charIndex = 0; currentLineNum = 1;
      typeNextChar();
    }

    timer = setTimeout(typeNextChar, 800);

    // Parallax
    const laptopWrap = document.querySelector('.laptop-wrap') as HTMLElement | null;
    function onMouseMove(e: MouseEvent) {
      if (!laptopWrap) return;
      const rect = laptopWrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      laptopWrap.style.transform = `perspective(1200px) rotateY(${-12 + dx * 8}deg) rotateX(${4 - dy * 4}deg)`;
    }
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}
