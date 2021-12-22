const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");
const failCounterBox = document.querySelector(".failCounter");
let failCounter = 0;

OKButton.addEventListener("click",()=>{
  if(textBox.value == 1 && failCounter == 0) {
    alert("Bravo, na první pokus!");
    location.replace('se.html');
  }
  else if(textBox.value == 1) {
    alert("Bravo!");
    location.replace('se.html');
  }
  else{
    failCounter++;
    failCounterBox.textContent = "Počet chyb: " + failCounter;
  }
  if(failCounter >= 3){
    alert("Jaká to škoda. Na shledanou.")
    location.replace('index.html');
  }
  textBox.value = "";
});