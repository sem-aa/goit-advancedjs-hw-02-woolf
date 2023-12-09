const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', changeColorBody);
stopBtn.addEventListener('click', stopChangeColor);

stopBtn.disabled = true;

let intervalId = null;

function changeColorBody() {
  intervalId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function stopChangeColor() {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
