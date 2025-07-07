// --- Carrossel de imagens ---
const images = [
  { src: "images/corrente a.s.jpg", alt: "Corrente A.S" },
  { src: "images/corrente corinthias.jpg", alt: "Corrente Corinthians" },
  { src: "images/corrente sendo pesada.jpg", alt: "Corrente sendo pesada" },
  { src: "images/corrente.jpg", alt: "Corrente" },
  { src: "images/corrente1.jpg", alt: "Corrente 1" },
  { src: "images/corrente2.jpg", alt: "Corrente 2" },
  { src: "images/correntes modelo.jpg", alt: "Correntes Modelo" },
  { src: "images/correntes modelo2.jpg", alt: "Correntes Modelo 2" },
  { src: "images/correntes modelo3.jpg", alt: "Correntes Modelo 3" },
  { src: "images/correntes modelo4.jpg", alt: "Correntes Modelo 4" },
  { src: "images/foto corrente1.jpg", alt: "Foto Corrente 1" },
  { src: "images/lelekmodelo.jpg", alt: "Lelek Modelo" },
  { src: "images/prata e correntes2.jpg", alt: "Prata e Correntes 2" },
  { src: "images/pratas1.jpg", alt: "Pratas 1" },
  { src: "images/pratas2.jpg", alt: "Pratas 2" }
];

let currentIdx = 0;
const carouselImg = document.querySelector('.carousel-img');
const arrowLeft = document.querySelector('.arrow-btn.left');
const arrowRight = document.querySelector('.arrow-btn.right');

function updateCarousel(idx) {
  carouselImg.src = images[idx].src;
  carouselImg.alt = images[idx].alt;
}

function showPrev() {
  currentIdx = (currentIdx === 0) ? images.length - 1 : currentIdx - 1;
  updateCarousel(currentIdx);
  resetInterval();
}

function showNext() {
  currentIdx = (currentIdx === images.length - 1) ? 0 : currentIdx + 1;
  updateCarousel(currentIdx);
  resetInterval();
}

arrowLeft.addEventListener('click', showPrev);
arrowRight.addEventListener('click', showNext);

let interval = setInterval(showNext, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNext, 5000);
}

// Inicia o carrossel na primeira imagem
updateCarousel(currentIdx);

// --- Brilhos animados tipo estrela ---
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('.starshine');
  var template = document.querySelector('.template.shine');
  var stars = 20; // Quantidade de brilhos
  var sparkle = 12;

  function createStar(size) {
    var el = template.cloneNode(true);
    el.style.display = 'block';
    el.style.top = (Math.random() * 100) + '%';
    el.style.left = (Math.random() * 100) + '%';
    el.style.animationDelay = (Math.random() * sparkle) + 's';
    el.classList.add(size);
    body.appendChild(el);
  }

  for (var i = 0; i < stars; i++) {
    var size;
    if (i % 2 === 0) {
      size = 'small';
    } else if (i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    createStar(size);
  }
});

// --------------- BLOQUEIO DE DOUBLE-CLICK E DOUBLE-TAP GLOBAL (ANTI ZOOM) ---------------

// Bloqueia double-click em qualquer lugar
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
  return false;
}, { passive: false });

// Bloqueia zoom de duplo-toque (double-tap) mobile
let lastTouch = 0;
document.addEventListener('touchend', function(e) {
  const now = Date.now();
  if (now - lastTouch <= 350) {
    e.preventDefault();
    return false;
  }
  lastTouch = now;
}, { passive: false });

// Impede gestos de pinça (zoom) mobile
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
}, { passive: false });

// --------------- PRATA 925 ANIMAÇÃO E TRANSIÇÃO ---------------

const prataBtn = document.getElementById('prata-btn');
const mainActions = document.getElementById('main-actions');
const prataInfoSection = document.getElementById('prata-info-section');
const prataBackBtn = document.getElementById('prata-back-btn');

// Ao clicar no botão PRATA 925: fade out botões, fade in texto explicativo
prataBtn.addEventListener('click', function() {
  mainActions.classList.add('fade-out-left');
  setTimeout(() => {
    mainActions.classList.add('hide');
    prataInfoSection.style.display = 'flex';
    prataInfoSection.classList.remove('fade-out-right-blur');
    prataInfoSection.classList.add('fade-in-right-blur');
  }, 600);
});

// Ao clicar no botão Voltar: fade out texto explicativo, fade in botões com efeito
prataBackBtn.addEventListener('click', function() {
  prataInfoSection.classList.remove('fade-in-right-blur');
  prataInfoSection.classList.add('fade-out-right-blur');
  setTimeout(() => {
    prataInfoSection.style.display = 'none';
    prataInfoSection.classList.remove('fade-out-right-blur');

    // Mostra os botões com fade-in da esquerda
    mainActions.classList.remove('hide', 'fade-out-left', 'fade-in-left');
    mainActions.style.opacity = '0'; // começa invisível
    mainActions.classList.add('fade-in-left');
    setTimeout(() => {
      mainActions.style.opacity = '';
      mainActions.classList.remove('fade-in-left');
    }, 700); // tempo da animação
  }, 700);
});
