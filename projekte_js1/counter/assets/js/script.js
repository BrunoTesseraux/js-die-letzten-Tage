console.log("hallo");
let counter = 0;

document.querySelector("#output").textContent = counter;

function plusOne() {
  counter++;
  document.querySelector("#output").textContent = counter;
}
function plusTen() {
  counter += 10;
  document.querySelector("#output").textContent = counter;
}
function plusHun() {
  counter += 100;
  document.querySelector("#output").textContent = counter;
}
function reset() {
  counter = 0;
  document.querySelector("#output").textContent = counter;
}
function minusOne() {
  counter--;
  document.querySelector("#output").textContent = counter;
}
function minusTen() {
  counter -= 10;
  document.querySelector("#output").textContent = counter;
}
function minusHun() {
  counter -= 100;
  document.querySelector("#output").textContent = counter;
}
function timesTwo() {
  counter *= 2;
  document.querySelector("#output").textContent = counter;
}
