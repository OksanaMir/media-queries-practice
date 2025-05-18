// script.js – jednoduchá interaktivita
const images = document.querySelectorAll('.gallery img');
const heroImg = document.querySelector('.hero img');

images.forEach(img => {
  img.addEventListener('click', () => {
    alert(`Kliknul jsi na: ${img.alt}`);
    // Změna hlavního obrázku po zavření alertu
    heroImg.src = img.src;
    heroImg.alt = img.alt;
  });
});
