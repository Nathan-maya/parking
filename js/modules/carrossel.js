export default function carrossel() {
  let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll('.container-slider img'),
    radio = document.querySelectorAll('.container-label input'),
    maxImage = images.length;

  console.log(radio)
  function start(){ 
    setInterval(() => {
      nextImage()
      },time);
    }

  function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    radio[currentImageIndex].checked = false;
    
    currentImageIndex++
    if (currentImageIndex >= maxImage){
      currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
    radio[currentImageIndex].checked = true;
  }

  window.addEventListener("load",start)
}
