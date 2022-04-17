// const noteE = document.getElementById("text").value;
const noteE = document.getElementById("text");
const btnE = document.querySelector("#btn");
const olToDoListE = document.getElementById("list");

btnE.addEventListener("click", onClick);

function onClick() {
  const liE = document.createElement("li");
  liE.textContent = noteE.innerHTML = noteE.value;
  noteE.value = "";
  olToDoListE.append(liE);
}
