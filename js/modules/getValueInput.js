export default function getValueInput() {
  let form = document.querySelector("form");
  form.addEventListener("submit",function(evento){
    evento.preventDefault();
    for( let i = 0; i < this.elements.length; i++){
      let item = this.elements[i];
      if (item.type !== "submit"){
        if(item.value == ""){
          item.classList.add("error");
        } else{
          console.log(item.value)
        }
      }
    }
  });
}
