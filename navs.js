const navbar = document.querySelector('.mini-borda-1');

// Adiciona um ouvinte de evento para o scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 190) { // Exibe a barra após rolar 100px
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});


const form = document.getElementById('formulario');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  successMessage.style.display = 'block';

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 4000);

  form.reset();
});