const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action=start]'),
  stopBtn: document.querySelector('[data-action=stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onRandomColorStart);
refs.stopBtn.addEventListener('click', onRandomColorStop);

const min = 0;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onRandomColorStop() {
  if (!refs.startBtn.disabled === false) {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
  }
}

function onRandomColorStart() {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    randomIntegerFromInterval(min, max);

    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(min, max)];
  }, 1000);
}
