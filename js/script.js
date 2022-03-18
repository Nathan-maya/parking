import initCarrossel from "./modules/carrossel.js";
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
  if (event.type ==='touchstart') event.preventDefault();
  const nav = document.querySelector('.nav-menu');
  nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

initCarrossel();
