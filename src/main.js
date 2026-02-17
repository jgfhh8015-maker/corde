import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="grain-overlay"></div>
  
  <div class="mobile-menu" id="mobileMenu">
    <button id="closeMenu" class="close-menu">
      <span class="material-symbols-outlined" style="font-size: 2.5rem;">close</span>
    </button>
    <a href="#vision" class="mobile-link">Approche</a>
    <a href="#portfolio" class="mobile-link">Portfolio</a>
    <a href="#videos" class="mobile-link">Vidéos</a>
    <a href="#contact" class="mobile-link">Contact</a>
    <div style="margin-top: 4rem; display: flex; gap: 2rem;">
       <a href="#" style="font-size: 0.7rem; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.1rem;">Instagram</a>
       <a href="#" style="font-size: 0.7rem; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.1rem;">TikTok</a>
    </div>
  </div>

  <header class="nav">
    <a href="#" class="brand">
      <span class="brand-main">ACORDE</span>
      <span class="brand-sub">PARIS</span>
    </a>
    <nav class="nav-links">
      <a href="#vision">Approche</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#videos">Vidéos</a>
      <a href="#contact">Contact</a>
    </nav>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <a href="#contact" class="nav-cta">Prendre Contact</a>
      <button id="openMenu" class="menu-toggle">
        <span class="material-symbols-outlined" style="font-size: 1.8rem;">menu</span>
      </button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-bg">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAww-r6vesOP6b4s-s4S4wRl3O1E4g79uCAx51G8f-Yk1EDXZhvAOX1DP1fw-y7MqSqyK06UucIzzEE8dQ7LtKzYp6-scuOAWD3v6gXyHsYvR6z1ieX4NIqrrYYHBU3UYZ5TaLcnb65G1PsfLEaAVPWcRnmm3vl099wYuUj4y_-v5kBKCoyx5yHCbouX7HLnTbKRkdwKOT-e4Ogs7IcaAyqLoVJIrIXnPTPO84vH_sqVeKowekeeJZRTcH6clUeCxgkwZpfgd0mTho" alt="Cordiste">
        <div class="hero-gradient-t"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-tag">
          <span></span>
          Paris — Annecy — National
        </div>
        <h1 class="hero-title">
          DOMPTER LE VIDE, <br/>
          <span class="italic">CAPTURER</span> L'INSTANT
        </h1>
        <div class="hero-footer">
          <p class="hero-desc">
            Production audiovisuelle, drone FPV et expertise cordiste. Un regard unique né de l'expérience de la hauteur pour des projets hors normes.
          </p>
          <div class="hero-btns">
            <a href="#portfolio" class="btn-primary">Portfolio</a>
            <a href="#contact" class="btn-outline">Devis</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Approche -->
    <section id="vision" style="background: var(--background-dark);">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
          <div class="vision-text">
            <p class="uppercase" style="color: var(--primary); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 2.5rem;">L'Art et la Manière</p>
            <h2 style="font-family: var(--font-serif); font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 3rem; letter-spacing: -0.01em;">L'Équilibre entre <br/><span class="italic" style="color: var(--text-gray); font-weight: 300;">Technique et Image</span></h2>
            <div style="color: var(--text-gray); font-weight: 300; line-height: 1.8; display: flex; flex-direction: column; gap: 2rem; font-size: 1.1rem;">
              <p>Mon parcours de cordiste et de parapentiste m'a appris à naviguer dans les environnements les plus complexes. C'est cette aisance verticale que je mets au service de la création visuelle.</p>
              <p>Du drone FPV lancé à pleine vitesse au tournage en paroi, je capture des angles inaccessibles. Photographie, vidéo, ou expertise technique : chaque mission est abordée avec la précision d'un artisan.</p>
            </div>
          </div>
          <div class="vision-image">
            <div style="position: relative; overflow: hidden; border-radius: 2px;">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9rEW9gTvNTVHO8_w4rfnkz1LKPOCG2MIV3fK7Y6ufqotFtzXq8cxafAh8z7EmMmloavdsephYz738_mLvre9d0fWxd4BcajLYwyGV8UR6wVmvRoWiT6TLCDCS92Vh3YG8rV_t-7A3UXFGYJVuth4ivpBDPJJglQDYZyKe0X0wFx7T88G1bWirDQhBnKHtJKcIV2UlCP7RujtdPquojY77ABOTwgYu_H2ZVp6wPDAhOpDptcY8XKhXsTLTRBRTOiV4K7B5QTHoPSw" alt="Détail technique" style="width: 100%; filter: grayscale(1); transition: transform 0.8s ease;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Cards Re-styled -->
    <section id="services" class="container" style="padding-top: 0;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <div style="padding: 4rem 3rem; background: var(--noir-black); border: 1px solid var(--border-white); border-radius: 2px; transition: var(--transition);">
          <h3 style="font-family: var(--font-cinzel); font-size: 1rem; letter-spacing: 0.2rem; margin-bottom: 2rem; color: var(--primary);">01. IMAGE & CINÉMA</h3>
          <p style="color: var(--text-gray); font-weight: 300; line-height: 1.7;">Production vidéo complète et photographie professionnelle. Publicité, immobilier de prestige et storytelling visuel.</p>
        </div>
        <div style="padding: 4rem 3rem; background: var(--noir-black); border: 1px solid var(--border-white); border-radius: 2px; transition: var(--transition);">
          <h3 style="font-family: var(--font-cinzel); font-size: 1rem; letter-spacing: 0.2rem; margin-bottom: 2rem; color: var(--primary);">02. VOL & DRONE</h3>
          <p style="color: var(--text-gray); font-weight: 300; line-height: 1.7;">Pilote certifié Drone FPV et parapente. Prises de vues aériennes cinématiques dans des configurations extrêmes.</p>
        </div>
        <div style="padding: 4rem 3rem; background: var(--noir-black); border: 1px solid var(--border-white); border-radius: 2px; transition: var(--transition);">
          <h3 style="font-family: var(--font-cinzel); font-size: 1rem; letter-spacing: 0.2rem; margin-bottom: 2rem; color: var(--primary);">03. EXPERTISE VERTICALE</h3>
          <p style="color: var(--text-gray); font-weight: 300; line-height: 1.7;">Interventions sur cordes, inspections industrielles et installations complexes. Sécurité absolue et rigueur technique.</p>
        </div>
      </div>
    </section>

    <!-- Portfolio Photos -->
    <section id="portfolio" class="portfolio" style="background: var(--noir-black);">
      <div class="container">
        <div class="portfolio-header" style="text-align: center; margin-bottom: 6rem;">
          <p class="uppercase" style="color: var(--primary); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.4rem; margin-bottom: 1.5rem;">Réalisations</p>
          <h2 style="font-family: var(--font-serif); font-size: clamp(3rem, 6vw, 5rem); letter-spacing: -0.02em;">Angles de Vue</h2>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item large">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1qO9qZqQYmik1UZYIDFFPjcCVVGJm0ttpDViW8uO6L9d9txdtzM8Sxi8XBrPO_Kr0NQOha-VMtvq-TUY9rAyYh-ngUkfQsv21E3Ktd1RALqNpKVLXGjymgdGijvsqIGB4j9iuALHPgG9foe0qA2aeOyKUlviy9ZudHlT_WQ8Kk43HpL_aDTv9yflsQ1BIfsZjoEpEwgbqsyBbxzyienZ1a8vvs98HvMqeotqD_5qtUwy7rRgjBgNHYCa_FRMBQXhX9G-XzijETA" alt="Expertise">
            <div class="portfolio-overlay">
              <span style="color: var(--primary); font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2rem; margin-bottom: 0.8rem;">Production & Expertise</span>
              <h3 style="font-family: var(--font-serif); font-size: 2.2rem; line-height: 1.1;">Sommets Iconiques</h3>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3VNrLBChCIu8ZjjriYkAafROxS22IGTONQTP54EobyRU7DViyN-Yrs18vlVlTWBHcq3HyFnQkktt3LF_fPXSm_d2EyR7lQDAL0qNlQdMSMhdkAcAneSOR7Vn_IRV278-dnKemOXFXuBMNe-uZIz_onibXeZa4Y3w5B9TtgxkvWjLVRIJszSiTIjRuUY6yYWlF5b39RynYRt14zyLiMDl6CwF-dJ1fzuouVtgXuZWC_0Q6CdIkHOlTOI5I6FjPlZHI7KU0CMBCZYE" alt="Toits">
            <div class="portfolio-overlay">
              <h3 style="font-family: var(--font-serif); font-size: 1.3rem;">Les Toits de Paris</h3>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13xeFMfUUCo4uIUnEgNBdyQl-f0TtV90fSHXAyi-uLXDy1UASSK1x_X2ukfDS-6scP7FGoGHb8XmZFzD5-ohsP3J8OYUbLNXMnCGGLj6ciokk7z6AUux-n8J05QV9wVpG_EJ7Gm-QVaT4kOQYZx9m96PkRcY9iFjT0QSj4x2VvDfTPrSB7y9q8MsjF7FwUwcea2b1KAOJ0g3AYqZf67lfiCK-K2EEgREl0V9Tb1VMxVo-F9_bMSLq_DaWbipfJT2V7RvidP5GFJM" alt="Moderne">
            <div class="portfolio-overlay">
              <h3 style="font-family: var(--font-serif); font-size: 1.3rem;">Architecture Verre</h3>
            </div>
          </div>
          <div class="portfolio-item wide">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsi2vxFSEi9gSrq7a8h14fvulii678ku23N7m5HzfIilMYjWvJziX3qEjzBO4t9ioHdafAi5ofrP6hhcTemcHOkUmTMTcqGniYiscHzEmU6MLqe75LiN8FZtyATMCpGTT3Lqf4aWkmnT3JkghuA4St1l6RVJxEiE8VcZvKwzGVZ9bsfJWqgpGFG5hAqBKVs0RZmmHAYmpGuvxdZfgL63Ao4uIeQEegyA__AGgVbxfkMBsOg6ei3wo5U3eu_kfM9aJj6MxSUamtIDQ" alt="Historique">
            <div class="portfolio-overlay">
              <h3 style="font-family: var(--font-serif); font-size: 1.3rem;">Héritage Vertical</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vidéos -->
    <section id="videos" class="container">
      <div class="portfolio-header" style="text-align: left; margin-bottom: 5rem;">
        <p class="uppercase" style="color: var(--primary); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 1.5rem;">Cinématographie</p>
        <h2 style="font-family: var(--font-serif); font-size: clamp(2.5rem, 5vw, 4.5rem); letter-spacing: -0.01em;">Mouvement & Immersion</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div class="video-card">
          <div class="video-thumb" style="background-image: url('https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=2070&auto=format&fit=crop');"></div>
          <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; background: rgba(0,0,0,0.4);">
            <span class="material-symbols-outlined" style="font-size: 3.5rem; color: var(--primary); opacity: 0.9;">play_circle</span>
            <p class="uppercase" style="margin-top: 1.2rem; font-size: 0.65rem; letter-spacing: 0.3rem; font-weight: 700;">Showreel FPV</p>
          </div>
        </div>
        <div class="video-card">
           <div class="video-thumb" style="background-image: url('https://images.unsplash.com/photo-1579848033668-cbffd05cf001?q=80&w=2070&auto=format&fit=crop');"></div>
           <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; background: rgba(0,0,0,0.4);">
            <span class="material-symbols-outlined" style="font-size: 3.5rem; color: white; opacity: 0.8;">play_circle</span>
            <p class="uppercase" style="margin-top: 1.2rem; font-size: 0.65rem; letter-spacing: 0.3rem; font-weight: 700;">Brand Identity</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Premium -->
    <footer id="contact" class="container" style="padding: 10rem 0 5rem; border-top: 1px solid var(--border-white);">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="brand" style="margin-bottom: 2.5rem;">
             <span class="brand-main">ACORDE</span>
             <span class="brand-sub">PARIS</span>
          </a>
          <p style="color: var(--text-gray); font-size: 0.9rem; max-width: 320px; line-height: 1.8; font-weight: 300;">
            Une filiale de STUDIORIAD. Expertise, art et précision à chaque altitude. L'excellence au bout de la corde.
          </p>
        </div>
        <div class="footer-group">
           <p class="uppercase" style="font-size: 0.6rem; color: var(--primary); font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 2rem;">Contact</p>
           <a href="mailto:contact@studioriad.com" class="footer-link-big">contact@studioriad.com</a>
           <p style="font-size: 1.1rem; font-weight: 300;">06 15 69 28 39</p>
        </div>
        <div class="footer-group">
           <p class="uppercase" style="font-size: 0.6rem; color: var(--primary); font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 2rem;">Studio</p>
           <p style="font-size: 1.1rem; font-weight: 300; line-height: 1.6;">23 Avenue Gambetta<br>94400 Vitry-Sur-Seine</p>
           <p style="font-size: 0.7rem; color: var(--text-gray); margin-top: 1.5rem; font-style: italic;">(Visite sur rendez-vous)</p>
        </div>
        <div class="footer-group">
           <p class="uppercase" style="font-size: 0.6rem; color: var(--primary); font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 2rem;">Légal</p>
           <p style="font-size: 0.9rem; margin-bottom: 1.2rem; font-weight: 300;">SIREN : 512 947 102</p>
           <a href="#" style="color: white; text-decoration: none; font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 2px;">CGV / Mentions Légales</a>
        </div>
      </div>
      <div style="margin-top: 8rem; padding-top: 3rem; border-top: 1px solid var(--border-white); display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-gray); flex-wrap: wrap; gap: 3rem;">
        <p>&copy; 2026 Studioriad.com Tous droits réservés.</p>
        <div style="display: flex; gap: 3rem;">
          <a href="#" style="color: inherit; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1rem;">Instagram</a>
          <a href="#" style="color: inherit; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1rem;">TikTok</a>
          <a href="#" style="color: inherit; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1rem;">YouTube</a>
        </div>
      </div>
    </footer>
  </main>
`

// Better Menu Logic
const mobileMenu = document.getElementById('mobileMenu')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileLinks = document.querySelectorAll('.mobile-link')

openMenu.onclick = () => mobileMenu.classList.add('active')
closeMenu.onclick = () => mobileMenu.classList.remove('active')
mobileLinks.forEach(link => link.onclick = () => mobileMenu.classList.remove('active'))
