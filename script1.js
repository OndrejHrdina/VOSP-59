const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");

OKButton.addEventListener("click",()=>{
  if(/kočka/igu.test(textBox.value)) {
    alert("Správně! Tematické, že?");
    location.replace('vzkazuje.html');
  }
  else{
    alert("Opravdu tohle nezvládnete? Zkuste to znova.");
  }
});