import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const date = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
startBtn.addEventListener('click', startTime);
startBtn.disabled = true;

let selectedDatesValue = '';

flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0]);
    selectedDatesValue = selectedDates[0];
  },
});

function startTime() {
  startBtn.disabled = true;
  dateInput.disabled = true;
  const endTime = selectedDatesValue.getTime();
  const currentTime = new Date().getTime();
  let remainingTime = endTime - currentTime;
  let intervalId = null;

  function updateTimer() {
    if (remainingTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);

      date.days.textContent = days <= 9 ? '0' + days : days;
      date.hours.textContent = hours <= 9 ? '0' + hours : hours;
      date.minutes.textContent = minutes <= 9 ? '0' + minutes : minutes;
      date.seconds.textContent = seconds <= 9 ? '0' + seconds : seconds;

      remainingTime -= 1000;
      intervalId = setTimeout(updateTimer, 1000);
    } else {
      date.days.textContent = '00';
      date.hours.textContent = '00';
      date.minutes.textContent = '00';
      date.seconds.textContent = '00';
      startBtn.disabled = true;
      dateInput.disabled = false;
      clearInterval(intervalId);
      iziToast.show({
        title: 'Time is up!',
        color: 'green',
        position: 'topLeft',
      });
    }
  }

  if (!selectedDatesValue) {
    iziToast.show({ message: 'Please choose a date first.' });
    return;
  }

  updateTimer();
}

function checkDate(date) {
  if (date.getTime() < new Date().getTime()) {
    startBtn.disabled = true;
    iziToast.show({
      title: 'Error',
      message: 'Please choose a date in the future',
      color: 'red',
      position: 'topLeft',
    });
  } else startBtn.disabled = false;
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
