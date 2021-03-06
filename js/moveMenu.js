const primeiroMenu = document.getElementById('primeiroMenu');
const corporativo = document.querySelector('.corporativo');
const itemMenu = document.querySelector('.item-menu');
const nav = document.querySelector('.nav-menu');


function moverElemento(event){
  const positionPrimeiroMenuX = primeiroMenu.offsetLeft;
  const positionCorporativoX = corporativo.offsetLeft;

  const positionX = (positionPrimeiroMenuX - positionCorporativoX)

  corporativo.style.transform = `translate3d(${positionX}px, 0px, 0px) `;
  corporativo.style.transition = 'transform .6s';
  addClass(event)
}

function addClass(event){
  if (event.type === 'touchstart') event.preventDefault();
  if( window.innerWidth > 720){
    setTimeout(()=> {
      itemMenu.classList.toggle('mover');
    },250)
    setTimeout(()=> {
      corporativo.classList.toggle('ativo')
    },100)
  }

  

}

function verificarClick(event){
  event.preventDefault();
  if(corporativo.hasAttribute('style')){
    corporativo.style.removeProperty('transform');
    corporativo.style.transition = 'transform .6s';
    setTimeout(()=> {
      corporativo.removeAttribute('style')
    },500)
    addClass(event)
  } else {
    moverElemento(event);
  }
}

setInterval(() => {
  if( window.innerWidth > 720){
    nav.classList.remove('ativo')
    corporativo.classList.remove('visible')
    corporativo.classList.remove('ativo-hamburguer')
    corporativo.children[0].addEventListener('click', verificarClick)
  }
  else{
    itemMenu.classList.remove('mover');
    corporativo.style.removeProperty('transform');
  }
},100)


