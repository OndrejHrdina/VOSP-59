const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");
const failCounterBox = document.querySelector(".failCounter");
let failCounter = 0;

OKButton.addEventListener("click",()=>{
  if(textBox.value == 192 && failCounter == 0) {
    alert("Skvělé!");
    location.replace('8.html');
  }
  else if(textBox.value == 192) {
    alert("Pár chyb, ale zvládla jste to.");
    location.replace('8.html');
  }
  else{
    failCounter++;
    failCounterBox.textContent = "Počet chyb: " + failCounter;
  }
  if(failCounter >= 3){
    alert("A to jsem Vám už fandil.")
    location.replace('5.html');
  }
  textBox.value = "";
});