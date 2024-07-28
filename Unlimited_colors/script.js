//Generating random colors
function randomColors() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let timer;
document.querySelector("#start").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      document.body.style.backgroundColor = randomColors();
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});
