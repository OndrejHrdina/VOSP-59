const OKButton = document.querySelector(".OKButton");
const textBox = document.querySelector(".textBox");

OKButton.addEventListener("click",()=>{
  if(/Ú/igu.test(textBox.value)) {
    alert("No vidíte, jak to jde, když se chce.");
    location.replace('nedivejte.html');
  }
  else{
    alert("Já mělo za to, že máte být schopná...");
    location.replace('index.html');
  }
});