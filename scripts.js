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

// Garante que o carrossel começa na primeira imagem correta
updateCarousel(currentIdx);

// --- Brilhos animados tipo estrela ---
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('.starshine');
  var template = document.querySelector('.template.shine');
  var stars = 20; // Ajuste a quantidade aqui (pode ser 18, 24, 30, 40 etc)
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

