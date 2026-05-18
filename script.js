/* ===================================
   LOADER
=================================== */

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.classList.add('hide');
  }, 2200);

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

/* =========================
   HEADER BACKGROUND CHANGE
========================= */

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(2,8,23,0.96)';
    header.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
  } else {
    header.style.background = 'rgba(2,8,23,0.75)';
    header.style.borderBottom = '1px solid transparent';
  }
});

/* ===================================
   HEADER SCROLL EFFECT
=================================== */

header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    header.style.background = 'rgba(2,8,23,0.96)';
    header.style.backdropFilter = 'blur(16px)';
  } else {
    header.style.background = 'rgba(2,8,23,0.75)';
  }

});

/* =========================
   MOUSE GLOW EFFECT
========================= */

document.querySelectorAll('.project-card').forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(24,242,194,0.12),
        rgba(255,255,255,0.03)
      )
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = 'rgba(255,255,255,0.03)';
  });

});

/* ===================================
   CUSTOM CURSOR
=================================== */

const cursorDot =
  document.querySelector('.cursor-dot');

const cursorOutline =
  document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({

    left: `${posX}px`,
    top: `${posY}px`

  }, {
    duration: 300,
    fill: 'forwards'
  });

});

/* ===================================
   3D CARD EFFECT
=================================== */

const cards = document.querySelectorAll(
  '.project-card, .service-card, .feature-card, .info-box'
);

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});