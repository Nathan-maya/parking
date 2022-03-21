export default function btnMobile() {
  const btnMobile = document.getElementById("btn-mobile");
  const corporativo = document.querySelector(".corporativo");

  function toggleMenu(event) {
    const nav = document.querySelector(".nav-menu");

    if (event.type === "touchstart") event.preventDefault();
    nav.classList.toggle("ativo");
    corporativo.classList.toggle("ativo-hamburguer");
  }
  function visibleCorporativo() {
    corporativo.classList.toggle("visible");
  }
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  setInterval(() => {
    if (window.innerWidth <= 600) {
      corporativo.classList.remove("ativo");
      corporativo.children[0].addEventListener("click", visibleCorporativo);
    }
  }, 1000);
}
