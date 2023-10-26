//teil1
const changeColor = () => {
  const color = document.body.querySelector("#color").value;
  console.log(color);
  const vorText = "url(";
  const nachText = ")";
  if (color.includes("http")) {
    const manipuliert = vorText + color + nachText;
    console.log(manipuliert);
    document.body.style.background = manipuliert;
    document.body.style.backgroundSize = "cover";
  } else {
    document.body.style.background = color;
  }
  document.body.style.background = color;
  document.querySelector("#color").value = "";
};
//teil 2
let homeDisplay = 0;
document.querySelector("#homeDisplay").textContent = homeDisplay;
let awayDisplay = 0;
document.querySelector("#awayDisplay").textContent = awayDisplay;
const home = (score) => {
  homeDisplay += score;
  document.querySelector("#homeDisplay").textContent = homeDisplay;
  if (homeDisplay >= 10 && homeDisplay < 20) {
    document.querySelector("#homeDisplay").style.color = "red";
  } else if (homeDisplay >= 20 && homeDisplay < 30) {
    document.querySelector("#homeDisplay").style.color = "blue";
  } else if (homeDisplay >= 30) {
    document.querySelector("#homeDisplay").style.color = "gold";
  }
};
const away = (score) => {
  awayDisplay += score;
  document.querySelector("#awayDisplay").textContent = awayDisplay;
  if (awayDisplay >= 10 && awayDisplay < 20) {
    document.querySelector("#awayDisplay").style.color = "red";
  } else if (awayDisplay >= 20 && awayDisplay < 30) {
    document.querySelector("#awayDisplay").style.color = "blue";
  } else if (awayDisplay >= 30) {
    document.querySelector("#awayDisplay").style.color = "gold";
  }
};
const reset = () => {
  homeDisplay = 0;
  document.querySelector("#homeDisplay").textContent = homeDisplay;
  document.querySelector("#homeDisplay").style.color = "inherit";
  awayDisplay = 0;
  document.querySelector("#awayDisplay").textContent = awayDisplay;
  document.querySelector("#awayDisplay").style.color = "inherit";
};
const teamNamen = () => {
  const home = window.prompt("Gib einen Namen für das Home Team ein!");
  const away = window.prompt("Gib einen Namen für das Away Team ein!");
  document.querySelector("#homeName").textContent = home;
  document.querySelector("#awayName").textContent = away;
};
//teil3
let nOne = Math.floor(Math.random() * 10000) + 1;
document.querySelector("#nOne").textContent = nOne;
let nTwo = Math.floor(Math.random() * 10000) + 1;
document.querySelector("#nTwo").textContent = nTwo;

const neu = () => {
  nOne = Math.floor(Math.random() * 10000) + 1;
  document.querySelector("#nOne").textContent = nOne;
  nTwo = Math.floor(Math.random() * 10000) + 1;
  document.querySelector("#nTwo").textContent = nTwo;
  document.querySelector("#statement").textContent = "";
  document.querySelector("#ergebnis").value = "";
};
const check = () => {
  const ergebnis = document.querySelector("#ergebnis").value;
  if (nOne + nTwo == ergebnis) {
    document.querySelector("#statement").textContent = "Schlaubi Schlumpf";
    document.querySelector("#statement").style.color = "green";
  } else if (nOne + nTwo !== ergebnis) {
    document.querySelector("#statement").textContent =
      "Hascht du überhaupt gelernt?!?!";
    document.querySelector("#statement").style.color = "red";
    document.querySelector("#statement").style.fontWeight = "700";
  }
};
