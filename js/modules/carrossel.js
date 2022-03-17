export default function carrossel() {
  let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll('.container-slider img'),
    radio = document.querySelectorAll('.container-radio input'),
    maxImage = images.length,
    maxRadio = radio.length;

    const timer = setInterval(() => {
      nextImage()
    },time);

    console.log(radio)
  function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    radio[currentImageIndex].removeAttribute('checked')
    
    currentImageIndex++
    if (currentImageIndex >= maxImage){
      currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
    radio[currentImageIndex].setAttribute('checked','checked')
  }

  function radioChecked(){
    radio[currentImageIndex].removeAttribute('checked')
    radio.forEach((item , index) => {
      images[index].classList.remove("selected");
      if (radio[index].checked) {
        images[index].classList.add("selected");
      }
    })
  }

  for (let i = 0; i < maxRadio; i++){
    radio[i].addEventListener("click",radioChecked)
  }
  window.addEventListener("load",start)
}
