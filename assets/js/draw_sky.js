export default function sky() {
  let c = document.getElementById("sky");
  c.style.position = "absolute";
  c.style.zIndex = "-5";

  let ctx = c.getContext("2d");
  console.log("c.width prima:", c.width);
  console.log("screen aviable prima :", window.screen.availWidth);
  let xMax = (c.width = window.screen.availWidth);
  let yMax = (c.height = window.screen.availHeight);
  console.log("c.width dopo :", c.width);
  console.log("screen aviable prima :", window.screen.availWidth);
  let hmTimes = Math.round(xMax + yMax) / 3; // quantita' stelle rispetto ai lati di base Math.round(xMax + yMax)
  let yMaxCapped = (yMax / 3) * 1.8; // aggiunta da me per limitare il cielo ad un altezza minima cappata sull orizzonte
  for (var i = 0; i <= hmTimes; i++) {
    let randomX = Math.floor(Math.random() * xMax + 1); //calcolo x random xMax original
    let randomY = Math.floor(Math.random() * yMaxCapped + 1); //calcolo y random xMax original
    let randomSize = Math.floor(Math.random() * 2 + 1);
    let randomOpacityOne = Math.floor(Math.random() * 9 + 1);
    let randomOpacityTwo = Math.floor(Math.random() * 9 + 1);
    let randomHue = Math.floor(Math.random() * 360 + 1);
    if (randomSize > 1) {
      ctx.shadowBlur = Math.floor(Math.random() * 10 + 5);
      ctx.shadowColor = "white";
    }
    ctx.fillStyle =
      "hsla(" +
      randomHue +
      ", 30%, 80%, ." +
      randomOpacityOne +
      randomOpacityTwo +
      ")";
    ctx.fillRect(randomX, randomY, randomSize, randomSize);
  }
}
