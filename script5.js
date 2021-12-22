const images = document.querySelectorAll(".grid .img");
const goalImage = document.querySelector(".sidePanel .img")
const startButton = document.querySelector(".startRound");
const countdown = document.querySelector(".countdown");
let goalIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
const incorrectCounter = document.querySelector(".incorrectCounter");
const background = document.querySelector("body");
let revealedImages = [];
let imagesRevealed = [];
let revealedImageIndex = 0;

generateGrid();

function startRound () {
  startButton.disabled = true;
  countdown.textContent = 16-correctCount;
  images.forEach(image => {
    image.classList.remove("blackedOut");
  });
  goalImage.style.backgroundImage = 'none';
  generateGoal();
  let timeLeft = 15-correctCount;
  let timer = setInterval( () =>{
    if(timeLeft <= 0){
      clearInterval(timer);
      blackOut();
    }
    countdown.textContent = timeLeft;
    timeLeft--;
  },1000);
}

startButton.addEventListener("click", startRound);

function blackOut () {
  images.forEach(image => {
    if(!image.classList.contains("revealed")){
      image.classList.add("blackedOut");
      image.addEventListener("click", check);
    }
  })
  goalImage.style.backgroundImage = `url(images/${goalIndex}.jpg)`;
}

function check () {
  startButton.disabled = false;
  if(this.style.backgroundImage == `url("images/${goalIndex}.jpg")`){
    correctCount ++
    revealedImages[revealedImageIndex] = goalIndex;
    imagesRevealed[revealedImageIndex] = this;
    revealedImageIndex ++;
    this.classList.add("revealed");
    this.classList.remove("blackedOut");
    background.classList.add("green");
    setTimeout(()=>background.classList.remove("green"),500);
    checkWinCondition();
  }
  else {
    incorrectCount ++;
    background.classList.add("red");
    setTimeout(()=>background.classList.remove("red"),500)
    checkIncorrect();
  };
  images.forEach(image => {
    image.removeEventListener("click", check);
  })
  console.log(revealedImages);
}

function checkIncorrect () {
  if (incorrectCount >= 3){
    if (revealedImages.length >0) {
      let index = Math.floor(Math.random()*revealedImages.length);
      revealedImages.splice(index,1);
      imagesRevealed[index].classList.remove("revealed");
      imagesRevealed[index].classList.add("blackedOut");
      imagesRevealed.splice(index,1);
      revealedImageIndex--;
      correctCount--;
      incorrectCount = 0;
    }
    else incorrectCount = 2;
  }
  incorrectCounter.textContent = incorrectCount;
}

function checkWinCondition(){
  if(correctCount >= 16){
    alert("Vida, nakonec jste to zvládla.")
    location.replace('html.html');
  }
}

function generateGrid () {
  let indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  images.forEach(image => {
    let index = Math.floor(Math.random()*indexes.length);
    image.style.backgroundImage = `url(images/${indexes[index]}.jpg)`;
    indexes.splice(index,1);
    image.classList.add("blackedOut");
  });
}

function generateGoal () {
  goalIndex = Math.floor(Math.random()*16);
  if (revealedImages.includes(goalIndex)){
    generateGoal();
  }
}