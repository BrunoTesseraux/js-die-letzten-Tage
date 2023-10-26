function übertrag() {
  const number = document.body.querySelector("#number").value;
  const name = document.body.querySelector("#name").value;
  const date = document.body.querySelector("#date").value;
  document.body.querySelector("#numberOutput").textContent = number;
  document.body.querySelector("#nameOutput").textContent = name;
  document.body.querySelector("#dateOutput").textContent = date;
}
