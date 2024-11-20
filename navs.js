const navbar = document.querySelector('.mini-borda-1');

// Adiciona um ouvinte de evento para o scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 190) { // Exibe a barra após rolar 100px
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});