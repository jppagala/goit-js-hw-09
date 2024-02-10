// ###############################################################
// Variable Declarations and Assignments
// ###############################################################
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const htmlBody = document.querySelector('body');
let timerID = 0;

startButton.addEventListener('click', startSwitching);
stopButton.addEventListener('click', stopSwitching);
//
//
// ###############################################################
// Functions
// ###############################################################
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBGColor() {
  let randomColor = getRandomHexColor();
  htmlBody.style.backgroundColor = randomColor;
}

function startSwitching() {
  startButton.removeEventListener('click', startSwitching);
  changeBGColor();
  timerID = setInterval(() => {
    changeBGColor();
  }, 1000);
}

function stopSwitching() {
  startButton.addEventListener('click', startSwitching);
  clearInterval(timerID);
}

//
//
// ###############################################################
// Initialization
// ###############################################################
