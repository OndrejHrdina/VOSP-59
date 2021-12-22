const images = document.querySelectorAll(".grid .img");
const goalImage = document.querySelector(".sidePanel .img")
const startButton = document.querySelector(".startRound");
const countdown = document.querySelector(".countdown");
let goalIndex = 0;
let overallCount = 0;
const overallCounter = document.querySelector(".overallCounter");
let correctCount = 0;
const correctCounter = document.querySelector(".correctCounter");
let incorrectCount = 0;
const incorrectCounter = document.querySelector(".incorrectCounter");
const background = document.querySelector("body");
let revealedImages = [];
let revealedImageIndex = 0;

generateGrid();

function startRound () {
  startButton.disabled = true;
  countdown.textContent = 16-correctCount/2;
  images.forEach(image => {
    image.classList.remove("blackedOut");
  });
  goalImage.style.backgroundImage = 'none';
  generateGoal();
  let timeLeft = 15-correctCount/2;
  let timer = setInterval( () =>{
    if(timeLeft <= 0){
      clearInterval(timer);
      blackOut();
    }
    countdown.textContent = timeLeft;
    timeLeft--;
  },100);
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
    updateCounter(2,0);
    revealedImages[revealedImageIndex] = goalIndex;
    revealedImageIndex ++;
    this.classList.add("revealed");
    this.classList.remove("blackedOut");
    background.classList.add("green");
    setTimeout(()=>background.classList.remove("green"),500);
  }
  else {
    updateCounter(0,1);
    background.classList.add("red");
    setTimeout(()=>background.classList.remove("red"),500)
  };
  images.forEach(image => {
    image.removeEventListener("click", check);
  })
}

function updateCounter(a,b){
  correctCount += a;
  correctCounter.textContent = correctCount;
  incorrectCount += b;
  incorrectCounter.textContent = incorrectCount;
  overallCount = correctCount - incorrectCount;
  if (overallCount < 0) overallCount = 0;
  overallCounter.textContent = overallCount;
  if(overallCount >= 10){
    alert("Vida, nakonec jste to zvládla.")
    location.replace('6.html');
  }
}

function generateGrid () {
  let indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  images.forEach(image => {
    let index = Math.floor(Math.random()*indexes.length);
    image.style.backgroundImage = `url(images/${indexes[index]}.jpg)`;
    indexes.splice(index,1);
    image.classList.remove("blackedOut");
  });
}

function generateGoal () {
  goalIndex = Math.floor(Math.random()*16);
  if (revealedImages.includes(goalIndex)){
    generateGoal();
  }
}