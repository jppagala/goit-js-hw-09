import NotiFlix from 'notiflix';

// ###############################################################
// Variable Declarations and Assignments
// ###############################################################
const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', handleSubmit);

//
//
// ###############################################################
// Functions
// ###############################################################

function handleSubmit(event) {
  event.preventDefault();
  // console.log(`submitted`);

  const firstDelay = event.target.elements.delay.value;
  const nextPromise = event.target.elements.step.value;
  const promiseAmount = event.target.elements.amount.value;

  for (let i = 1; i <= promiseAmount; i++) {
    createPromise(i, Number(firstDelay) + Number(nextPromise * (i - 1))).then(
      ({ position, delay }) => {
        NotiFlix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay} ms`
        );
      },
      ({ position, delay }) => {
        NotiFlix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay} ms`
        );
      }
    );
    console.log(
      `created promise ${i} with delay ${
        Number(firstDelay) + Number(nextPromise * (i - 1))
      }`
    );
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // console.log(`${position} resolved`);
        resolve({ position: position, delay: delay });
      } else {
        // console.log(`${position} rejected`);
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

//
//
// ###############################################################
// Initialization
// ###############################################################
