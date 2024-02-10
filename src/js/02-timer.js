import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// ###############################################################
// Variable Declarations and Assignments
// ###############################################################
const startButton = document.querySelector('[data-start]');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');
let timerID = 0;
let targetDate = 0;

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('Selected: ', selectedDates[0]);
    validateSelectedDate(selectedDates[0]);
  },
};

flatpickr(`input#datetime-picker`, options);

//
//
// ###############################################################
// Functions
// ###############################################################
function validateSelectedDate(dateSelected) {
  const currDateTime = new Date();
  console.log('Now is: ', currDateTime);

  if (dateSelected > currDateTime) {
    Notiflix.Notify.success(`Date selected is valid.`);
    startButton.disabled = false;
    targetDate = dateSelected;
    if (timerID === 0) {
      startButton.addEventListener('click', startCountdown);
    }
  } else {
    // window.alert(`Please choose a date or time in the future.`);
    startButton.removeEventListener('click', startCountdown);
    startButton.disabled = true;
    Notiflix.Notify.failure(`Please choose a date or time in the future.`);
  }
}

function startCountdown() {
  refreshCountdown();

  timerID = setInterval(() => {
    refreshCountdown();
  }, 1000);

  startButton.removeEventListener('click', startCountdown);
  startButton.disabled = true;
}

function refreshCountdown() {
  const currDateTime = new Date();
  const timeDifference = targetDate - currDateTime;

  if (timeDifference <= 1000) {
    clearInterval(timerID);
    timerID = 0;
    console.log(`Countdown Finished!`);
  }

  addLeadingZero(Object.values(convertMs(timeDifference)));
}

function addLeadingZero(value) {
  let toDisplay = value;

  for (let i = 0; i < value.length; i++) {
    if (i === 0 && value[i] > 99) {
      toDisplay[i] = value[i].toString().padStart(3, '0');
    }

    toDisplay[i] = value[i].toString().padStart(2, '0');
  }

  [
    daysLeft.innerHTML,
    hoursLeft.innerHTML,
    minutesLeft.innerHTML,
    secondsLeft.innerHTML,
  ] = toDisplay;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
//
//
// ###############################################################
// Initialization
// ###############################################################
