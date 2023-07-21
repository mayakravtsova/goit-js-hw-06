const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${input.value}px`;

input.addEventListener("input", onChangeFontSizeScroll);

function onChangeFontSizeScroll(e) {
    text.style.fontSize = `${e.target.value}px`;
};