const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");
const contentDiv = document.querySelector(".content")

OKButton.addEventListener("click",()=>{
  if(textBox.value == "331656235273952") {
    alert("Správně!");
    location.replace('mlok.html');
  }
  else
  {
    alert("Zatím moc důvěry nevzbuzujete.");
  }
});