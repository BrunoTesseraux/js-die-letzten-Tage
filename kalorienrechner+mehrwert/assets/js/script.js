const männlich = document.querySelector("#männlich");
const weiblich = document.querySelector("#weiblich");
let geschlecht = 0;

männlich.addEventListener("click", () => {
  geschlecht = 0;
});
weiblich.addEventListener("click", () => {
  geschlecht = 1;
});

const leggo = document.querySelector("#nährwerte");

leggo.addEventListener("click", () => {
  const größe = document.querySelector("#größe").value;
  const alter = document.querySelector("#alter").value;
  const gewicht = document.querySelector("#gewicht").value;
  const tätigkeit = document.querySelector("#tätigkeit").value;
  if (geschlecht === 0) {
    const grundumsatzKcal =
      66.47 + 13.7 * Number(gewicht) + 5 * Number(größe) - 6.8 * Number(alter);
    const gesamtumsatzKcal = grundumsatzKcal * Number(tätigkeit);
    const grundumsatzKj = grundumsatzKcal * 4.184;
    const gesamtumsatzKj = grundumsatzKj * Number(tätigkeit);
    document.querySelector("#kcalGrund").textContent = grundumsatzKcal;
    document.querySelector("#kjGrund").textContent = grundumsatzKj;
    document.querySelector("#kcalGes").textContent = gesamtumsatzKcal;
    document.querySelector("#kjGes").textContent = gesamtumsatzKj;
    console.log(größe);
    console.log(alter);
    console.log(gewicht);
    console.log(tätigkeit);
  } else if (geschlecht === 1) {
    const grundumsatzKcal =
      655.1 + 9.6 * Number(gewicht) + 1.8 * Number(größe) - 4.7 * Number(alter);
    const gesamtumsatzKcal = grundumsatzKcal * Number(tätigkeit);
    const grundumsatzKj = grundumsatzKcal * 4.184;
    const gesamtumsatzKj = grundumsatzKj * Number(tätigkeit);
    document.querySelector("#kcalGrund").textContent = grundumsatzKcal;
    document.querySelector("#kjGrund").textContent = grundumsatzKj;
    document.querySelector("#kcalGes").textContent = gesamtumsatzKcal;
    document.querySelector("#kjGes").textContent = gesamtumsatzKj;
    console.log(größe);
    console.log(alter);
    console.log(gewicht);
    console.log(tätigkeit);
  }
});

/// nächster part

const nzb = document.querySelector("#nzb");
const bzn = document.querySelector("#bzn");
const neunzehn = document.querySelector("#neunzehn");
const sieben = document.querySelector("#sieben");
let steuer = 0;
let weg = 0;
nzb.addEventListener("click", () => {
  document.querySelector("#betragDisplay").textContent = "Nettobetrag";
  document.querySelector("#anzeige").textContent = "Bruttobetrag";
  weg = 0;
});

bzn.addEventListener("click", () => {
  document.querySelector("#betragDisplay").textContent = "Bruttobetrag";
  document.querySelector("#anzeige").textContent = "Nettobetrag";
  weg = 1;
});

neunzehn.addEventListener("click", () => {
  steuer = 0.19;
});

sieben.addEventListener("click", () => {
  steuer = 0.07;
});

const button = document.querySelector("#rechnen");
button.addEventListener("click", () => {
  const betrag = document.querySelector("#betrag").value;
  if (weg === 0) {
    const steuerBetrag = betrag * steuer;
    const ergebnis = Number(betrag) + Number(steuerBetrag);
    document.querySelector("#steuerBetrag").textContent = steuerBetrag;
    document.querySelector("#gesamtBetrag").textContent = ergebnis;
  } else if (weg === 1 && steuer === 0.07) {
    const steuerBetrag = (betrag / 107) * 7;
    const ergebnis = Number(betrag) - Number(steuerBetrag);
    document.querySelector("#steuerBetrag").textContent = steuerBetrag;
    document.querySelector("#gesamtBetrag").textContent = ergebnis;
  } else if (weg === 1 && steuer === 0.19) {
    const steuerBetrag = (betrag / 119) * 19;
    const ergebnis = Number(betrag) - Number(steuerBetrag);
    document.querySelector("#steuerBetrag").textContent = steuerBetrag;
    document.querySelector("#gesamtBetrag").textContent = ergebnis;
  }
});
