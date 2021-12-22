const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");
const failCounterBox = document.querySelector(".failCounter");
let failCounter = 0;

OKButton.addEventListener("click",()=>{
  if(textBox.value == 8918) {
    alert("Vypadá to, že počítat umíte.");
    location.replace('5.html');
  }
  else{
    failCounter++;
    failCounterBox.textContent = "Počet chyb: " + failCounter;
  }
  if(failCounter >= 2){
    alert("Předpokládalo jsem, že někdo jako Vy bude umět počítat. Asi opravdu nikdo není perfektní.")
    location.replace('index.html');
  }
});