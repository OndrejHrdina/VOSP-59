const inputButtons = document.querySelectorAll(".input button");
const sequenceBox = document.querySelector(".sequenceBox");
const sequenceLabel1 = document.querySelector(".sequenceLabel.left");
const sequenceLabel2 = document.querySelector(".sequenceLabel.right");
const textBox1 = document.querySelector(".textBox.left");
const textBox2 = document.querySelector(".textBox.right");
const OKButton = document.createElement("button");
OKButton.classList.add("OKButton");
OKButton.classList.add("six");
OKButton.classList.add("green");
OKButton.textContent = "OK";
const sequence = [6,1,23,7,5,2,9,4];
let index = 0;


textBox1.disabled = true;
textBox2.disabled = true;

inputButtons.forEach(button => {
  button.addEventListener("click", evaluateClick);
});

textBox1.addEventListener("input", checkAnswer);
textBox2.addEventListener("input", checkAnswer);

function evaluateClick () {
  if(this.textContent == sequence[index]){
    if(index <= 3){
      sequenceLabel1.textContent += sequence[index] + "\n";
      if(index == 3){
        textBox1.disabled = false;
        textBox1.classList.remove("red");
        textBox1.classList.add("green");
      }
    }
    else{
      sequenceLabel2.textContent += sequence[index] + "\n";
      if(index == 7){
        textBox2.disabled = false;
        textBox2.classList.remove("red");
        textBox2.classList.add("green");
      }
    }
    index ++;
    this.disabled = true;
  }
  else{
    inputButtons.forEach(button => button.disabled = false);
    textBox1.value = '';
    textBox2.value = '';
    textBox1.disabled = true;
    textBox2.disabled = true;
    textBox2.classList.remove("green");
    textBox2.classList.add("red");
    textBox1.classList.remove("green");
    textBox1.classList.add("red");
    sequenceLabel1.textContent = '';
    sequenceLabel2.textContent = '';
    index = 0;  
  }
}

function checkAnswer () {
  if (/M/i.test(textBox1.value) && /L/i.test(textBox2.value)) {
    sequenceBox.appendChild(OKButton);
    textBox1.disabled = true;
    textBox2.disabled = true;
  }
}

OKButton.addEventListener("click",()=>{
    alert("Hm. Pěkné.");
    location.replace('nasiagenti.html');
});