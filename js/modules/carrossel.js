export default function carrossel() {
  let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".container-slider img"),
    radio = document.querySelectorAll(".container-label input"),
    maxImage = images.length;

  function start(event) {
    setInterval(() => {
      nextImage(event);
    }, time);
  }
  function verificarClick() {
    setInterval(() => {
      radio.forEach((item, index) => {
        if (radio[index].checked) {
          images[currentImageIndex].classList.remove("selected");
          radio[currentImageIndex].checked = false;

          
          images[index].classList.add("selected");
          radio[index].checked = true;
          console.log("radio checked");
        }
      });
    }, 1000);
  }

  function nextImage(event) {
    images.forEach((item,index) => {
      images[index].classList.remove("selected");
    })
    
    radio[currentImageIndex].checked = false;

    radio.forEach((item, index) => {
      if (radio[index].checked) {
        currentImageIndex = index;
      }
    });

    currentImageIndex++;
    if (currentImageIndex >= maxImage) {
      currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("selected");
    radio[currentImageIndex].checked = true;
  }

  window.addEventListener("load", start);
  window.addEventListener("load", verificarClick);
}
