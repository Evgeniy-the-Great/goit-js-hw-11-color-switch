const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let id;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomNum() {
  const random = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[random];
}

function onStartBtnClick() {
  id = setInterval(randomNum, 1000);
  refs.startBtn.disabled = true;
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(id);
}
