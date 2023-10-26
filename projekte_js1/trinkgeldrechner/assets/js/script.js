function calculate() {
  const preis = parseFloat(document.body.querySelector("#betrag").value);
  const mitesser = parseInt(document.body.querySelector("#mitesser").value);
  const prozent = parseFloat(document.body.querySelector("#prozent").value);
  var trinkgeld = preis * prozent;
  var gesamtPreis = preis + trinkgeld;
  var proPerson = gesamtPreis / mitesser;
  document.body.querySelector("#trinkgeld").textContent = trinkgeld.toFixed(2);
  document.body.querySelector("#gesamtPreis").textContent =
    gesamtPreis.toFixed(2);
  document.body.querySelector("#proPerson").textContent = proPerson.toFixed(2);
}
