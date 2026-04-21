import Nav from './components/Nav';
import Particles from './components/Particles';
import LaptopAnimation from './components/LaptopAnimation';
import ScrollAnimations from './components/ScrollAnimations';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <>
      <Particles />
      <Nav />
      <ScrollAnimations />
      <LaptopAnimation />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-left">
          <div className="badge">
            <span className="badge-dot" />
            Dostupni za nove projekte
          </div>
          <h1>Gradimo <span className="gradient-text">digitalne</span><br />svetove koji<br /><span className="gradient-text">impresioniraju</span></h1>
          <p>Web sajtovi, aplikacije i društvene mreže — sve što vašem biznisu treba da dominira online prostoru.</p>
          <div className="hero-btns">
            <a href="#kontakt" className="btn btn-primary">Počnimo odmah &rarr;</a>
            <a href="#usluge" className="btn btn-ghost">Naše usluge</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div><span className="stat-num" data-target="50">0</span><span className="stat-plus">+</span></div>
              <p>Projekata</p>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div><span className="stat-num" data-target="30">0</span><span className="stat-plus">+</span></div>
              <p>Klijenata</p>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <div><span className="stat-num" data-target="5">0</span><span className="stat-plus">+</span></div>
              <p>Godina iskustva</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="laptop-wrap">
            <div className="laptop">
              <div className="laptop-lid">
                <div className="screen-bezel">
                  <div className="screen-inner">
                    <div className="screen-topbar">
                      <div className="traffic-lights">
                        <span className="tl red" />
                        <span className="tl yellow" />
                        <span className="tl green" />
                      </div>
                      <div className="file-tab">clickapp.js</div>
                    </div>
                    <div className="code-editor">
                      <div className="line-nums" id="lineNums" />
                      <div className="code-content" id="codeContent" />
                    </div>
                  </div>
                </div>
                <div className="screen-notch" />
              </div>
              <div className="laptop-hinge-area" />
              <div className="laptop-body">
                <div className="keyboard">
                  <div className="key-row r1">
                    <span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k wide3"/>
                  </div>
                  <div className="key-row r2">
                    <span className="k wide2"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k wide2"/>
                  </div>
                  <div className="key-row r3">
                    <span className="k wide25"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k wide25"/>
                  </div>
                  <div className="key-row r4">
                    <span className="k wide3"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k wide3"/>
                  </div>
                  <div className="key-row r5">
                    <span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k space"/><span className="k sm"/><span className="k sm"/><span className="k sm"/><span className="k sm"/>
                  </div>
                </div>
                <div className="trackpad" />
              </div>
            </div>
            <div className="laptop-reflection" />
          </div>
        </div>
      </section>

      {/* USLUGE */}
      <section id="usluge" className="usluge">
        <div className="section-label">Šta radimo</div>
        <h2>Usluge koje <span className="gradient-text">transformišu</span> biznise</h2>
        <p className="section-sub">Kompletna digitalna rešenja za moderne kompanije</p>
        <div className="cards">
          <div className="card" data-aos="">
            <div className="card-glow" />
            <div className="card-icon">🌐</div>
            <h3>Web sajtovi</h3>
            <p>Moderni, brzi i responzivni sajtovi koji konvertuju posetioce u klijente.</p>
            <ul className="features">
              <li>Responzivan dizajn</li>
              <li>SEO optimizacija</li>
              <li>Maksimalne performanse</li>
            </ul>
          </div>
          <div className="card featured" data-aos="">
            <div className="card-glow" />
            <div className="card-badge">Najpopularnije</div>
            <div className="card-icon">📱</div>
            <h3>Aplikacije</h3>
            <p>iOS i Android aplikacije koje korisnici vole. Od ideje do App Store-a.</p>
            <ul className="features">
              <li>iOS &amp; Android</li>
              <li>Intuitivan UX/UI</li>
              <li>Skalabilna arhitektura</li>
            </ul>
          </div>
          <div className="card" data-aos="">
            <div className="card-glow" />
            <div className="card-icon">📣</div>
            <h3>Društvene mreže</h3>
            <p>Strategija i vođenje profila koji grade zajednicu i povećavaju prodaju.</p>
            <ul className="features">
              <li>Content strategija</li>
              <li>Dizajn objava</li>
              <li>Analitika &amp; izveštaji</li>
            </ul>
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <section id="o-nama" className="o-nama">
        <div className="o-nama-inner">
          <div className="o-nama-text" data-aos="">
            <div className="section-label light">Ko smo mi</div>
            <h2>Tim koji vaš <span className="gradient-text">viziju</span><br />pretvara u realnost</h2>
            <p>ClickAPP je digitalna agencija koja veruje da svaka kompanija zaslužuje vrhunsko digitalno prisustvo. Naš tim stručnjaka radi svaki projekat kao da je sopstveni biznis.</p>
            <p>Od prvog razgovora do finalnog lansiranja — tu smo u svakom koraku vašeg digitalnog puta.</p>
            <a href="#kontakt" className="btn btn-primary">Radimo zajedno &rarr;</a>
          </div>
          <div className="o-nama-grid" data-aos="">
            <div className="mini-card">
              <div className="mini-icon">🚀</div>
              <strong>Brza isporuka</strong>
              <p>Projekti na vreme, uvek</p>
            </div>
            <div className="mini-card">
              <div className="mini-icon">💡</div>
              <strong>Kreativna rešenja</strong>
              <p>Svaki projekat je unikatan</p>
            </div>
            <div className="mini-card">
              <div className="mini-icon">🛡️</div>
              <strong>Pouzdana podrška</strong>
              <p>Tu smo i nakon lansiranja</p>
            </div>
            <div className="mini-card">
              <div className="mini-icon">📊</div>
              <strong>Merljivi rezultati</strong>
              <p>Fokusirani na vaš rast</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="kontakt">
        <div className="kontakt-inner">
          <div className="kontakt-info" data-aos="">
            <div className="section-label">Kontakt</div>
            <h2>Hajde da <span className="gradient-text">razgovaramo</span></h2>
            <p>Imate ideju? Mi imamo tim koji će je realizovati. Pišite nam i dobijte besplatnu konsultaciju.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="ci-icon">📧</span>
                <span>click.app001@gmail.com</span>
              </div>
            </div>
            <div className="k-decoration">
              <div className="k-dot" /><div className="k-dot" /><div className="k-dot" />
            </div>
          </div>
          <div data-aos="">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
