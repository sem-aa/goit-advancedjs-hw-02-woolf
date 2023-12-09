import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);
  const amount = parseInt(inputAmount.value);

  for (let i = 0; i <= amount; i += 1) {
    console.log(i, delay + i * step);
    createPromise(i, delay + i * step)
      .then(data => {
        console.log(data);
        iziToast.show({
          title: `position ${data.position}`,
          message: `delay ${data.delay}`,
          color: 'green',
          position: 'topLeft',
        });
      })
      .catch(data =>
        iziToast.show({
          title: `position ${data.position}`,
          message: `delay ${data.delay}`,
          color: 'red',
          position: 'topLeft',
        })
      );
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
