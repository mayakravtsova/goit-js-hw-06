const widget = document.querySelector('.widget');
const backgrColor = widget.querySelector('.color');
const btn = widget.querySelector('.change-color');
btn.addEventListener('click', onChangeBackgr);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBackgr(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  backgrColor.textContent = randomColor;
};