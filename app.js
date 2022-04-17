// const noteE = document.getElementById("text").value;
const noteE = document.getElementById("text");
const btnE = document.querySelector("#btn");
const olToDoListE = document.getElementById("list");

btnE.addEventListener("click", onClick);

function onClick() {
  const note = noteE.value;
  if (note.length > 0) {
    const liE = document.createElement("li");
    liE.textContent = note;
    noteE.value = "";
    olToDoListE.append(liE);
  }
}
