/* ============================================================
   YARA KENUPP - PORTFOLIO
   script.js
   ============================================================ */


// ============================================================
// 1. NAVBAR - scroll e menu mobile
// ============================================================

const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Adiciona classe "scrolled" ao rolar a página
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveLink();
}, { passive: true });

// Toggle do menu mobile
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);

  // Animação do hamburguer
  const spans = navToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Fecha o menu ao clicar em qualquer link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');

    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});


// ============================================================
// 2. LINK ATIVO no menu conforme a seção visível
// ============================================================

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Executa uma vez no carregamento
updateActiveLink();


// ============================================================
// 3. FADE-IN com Intersection Observer
// ============================================================

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Delay escalonado para elementos irmãos
    const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in'));
    const idx      = siblings.indexOf(entry.target);

    setTimeout(() => {
      entry.target.classList.add('visible');
    }, idx * 90);

    fadeObserver.unobserve(entry.target);
  });
}, {
  threshold:  0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});


// ============================================================
// 4. PARTÍCULAS FLUTUANTES no hero
// ============================================================

(function initParticles() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.45;
  `;
  heroBg.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Cria as partículas
  const COUNT = 50;
  const TEAL  = '#5de6d5';
  const LILAC = '#b8a4f8';

  const particles = Array.from({ length: COUNT }, () => ({
    x:     Math.random() * window.innerWidth,
    y:     Math.random() * window.innerHeight,
    vx:    (Math.random() - 0.5) * 0.25,
    vy:    (Math.random() - 0.5) * 0.25,
    r:     Math.random() * 1.4 + 0.4,
    color: Math.random() > 0.5 ? TEAL : LILAC,
    alpha: Math.random() * 0.45 + 0.08
  }));

  // Loop de animação
  function animate() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Rebate nas bordas
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
})();


// ============================================================
// 5. SCROLL SUAVE para links internos (fallback para
//    navegadores sem suporte nativo a scroll-behavior)
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const offset = navbar.offsetHeight + 16;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// ============================================================
// 6. HIGHLIGHT do ano no rodapé (garante ano atual)
// ============================================================

(function updateYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer p').forEach(el => {
    el.innerHTML = el.innerHTML.replace(/\d{4}/, year);
  });
})();
